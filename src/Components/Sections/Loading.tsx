import React from 'react';
import { Box, Typography } from '@mui/material';
import { Spiral } from 'ldrs/react'
import 'ldrs/react/Spiral.css'

// Define a keyframe animation for bouncing effect

const Loading: React.FC = () => {

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
                Casting imagination into reality...
            </Typography>
        </Box>
    );
};

export default Loading;