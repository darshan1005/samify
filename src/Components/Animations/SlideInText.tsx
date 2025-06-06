import { Box, Typography, type SxProps, type Theme } from '@mui/material';
import {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useInView } from 'react-intersection-observer';

interface SlidingTextRevealProps {
  text: string;
  delay?: number;
  sx?: SxProps<Theme>;
  wordSx?: SxProps<Theme>;
  autoStart?: boolean;
  onComplete?: () => void;
}

export interface SlidingTextRevealHandle {
  start: () => void;
  reset: () => void;
  isAnimating: boolean;
}

const SlidingTextReveal = forwardRef<SlidingTextRevealHandle, SlidingTextRevealProps>(({
  text,
  delay = 200,
  sx = {},
  wordSx = {},
  autoStart = true,
  onComplete,
}, ref) => {
  const [visibleWords, setVisibleWords] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const words = text.split(' ');

  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

  const startAnimation = () => {
    setVisibleWords(0);
    setIsAnimating(true);

    words.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords(index + 1);
        if (index === words.length - 1) {
          setIsAnimating(false);
          if (onComplete) onComplete();
        }
      }, index * delay);
    });
  };

  const reset = () => {
    setVisibleWords(0);
    setIsAnimating(false);
  };

  // Combine forwarded ref with inView ref
  const setRefs = (node: HTMLElement | null) => {
    inViewRef(node);
    // If someone passes in a ref, attach it too
    if (typeof ref === 'function') ref(node as any);
  };

  useEffect(() => {
    if (autoStart && inView) {
      startAnimation();
    }
  }, [text, autoStart, inView]);

  useImperativeHandle(ref, () => ({
    start: startAnimation,
    reset,
    isAnimating,
  }), [isAnimating]);

  const containerStyle: SxProps<Theme> = {
    ...sx,
  };

  return (
    <Box sx={containerStyle} ref={setRefs}>
      {words.map((word, index) => {
        const isVisible = index < visibleWords;
        return (
          <Typography
            component="span"
            sx={{
              whiteSpace: 'nowrap',
              ...wordSx,
              display: 'inline-block',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(32px)',
              transition: 'all 0.5s ease-out',
              transitionDelay: `${index * 50}ms`,
              fontSize: { xs: '2rem', md: '3.5rem' },
            }}
            key={`${word}-${index}`}
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </Typography>
        );
      })}
    </Box>
  );
});

export default SlidingTextReveal;