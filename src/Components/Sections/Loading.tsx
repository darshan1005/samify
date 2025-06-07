import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Spiral } from 'ldrs/react'
import 'ldrs/react/Spiral.css'

const loadingMessages = [
  'Casting imagination into reality...',
  'Almost done, preparing your experience...',
  'Just a moment, we are getting things ready...',
  'Loading the magic, please be patient...',
  'Final touches, hang tight!'
];

const Loading: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
      <Typography variant="h6" color="text.secondary">
        {loadingMessages[messageIndex]}
      </Typography>
    </Box>
  );
};

export default Loading;