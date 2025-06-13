import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Button } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Card flip animation styles
const FlipCard = styled(Box)(() => ({
  perspective: '1000px',
  width: '100%',
  height: '300px',
  cursor: 'pointer',
  '&:hover .flip-inner': {
    transform: 'rotateY(180deg)'
  }
}));

const FlipInner = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
  transformStyle: 'preserve-3d',
});

const FlipSide = styled(Card)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
}));

const FlipFront = styled(FlipSide)({
  zIndex: 2,
});

const FlipBack = styled(FlipSide)({
  transform: 'rotateY(180deg)',
  zIndex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
});

// Service interface matching the JSON structure
interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  features: string[];
  icon?: string;
  priority?: number;
  isActive?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  tags,
  icon,
  features,
  ...rest
}) => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    // Store card details in sessionStorage
    sessionStorage.setItem('selectedService', JSON.stringify({
      title,
      description,
      tags,
      icon,
      features,
      ...rest
    }));
    navigate('/request');
  };

  return (
    <FlipCard>
      <FlipInner className="flip-inner">
        <FlipFront elevation={4}>
          <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
              <Box component={'img'} src={icon} sx={{ width: '3rem', height: '3rem', mixBlendMode: 'multiply' }} alt='card image' />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {title}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, flex: 1, lineHeight: 1.5 }}
            >
              {description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', mt: 'auto' }}>
              <Typography variant="subtitle2" color="text.secondary">We can be</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                {tags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    label={tag}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>
          </CardContent>
        </FlipFront>

        <FlipBack elevation={8}>
          <CardContent sx={{ p: 3, textAlign: 'center', color: 'inherit' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: 'inherit', mb: 2 }}>
              {title}
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ color: 'inherit' }}>
                {features.join(', ')}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowUpward sx={{ transform: 'rotate(45deg)' }} />}
              sx={{
                fontWeight: 'bold',
                px: 3,
                py: 1.5,
                my: 1,
                borderRadius: 2,
                textTransform: 'none',
                backgroundColor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.3)',
                }
              }}
              onClick={handleKnowMore}
            >
              Know More
            </Button>
          </CardContent>
        </FlipBack>
      </FlipInner>
    </FlipCard>
  );
};

export default ServiceCard;