import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Spiral } from 'ldrs/react'
import 'ldrs/react/Spiral.css'
import Logo from '../../assets/samify-nobg.webp';

interface LoadingProps {
  content?: string[] | [] | string;
};

const Loading: React.FC<LoadingProps> = ({ content }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const loadingMessages = Array.isArray(content) ? content : [content];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: '100dvh',
        width: '100dvw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        bgcolor: 'background.default',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Spiral
        size="60"
        speed="0.9"
        color="hsl(215,54%,14%)"
      />
      <Box component={'img'} src={Logo} sx={{ width: 160 }} />
      <Typography variant="h6" color="text.secondary">
        {loadingMessages[messageIndex]}
      </Typography>
    </Box>
  );
};

export default Loading;