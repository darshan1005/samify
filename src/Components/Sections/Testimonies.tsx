import React from 'react';
import { Box, Typography } from '@mui/material';
import testimoniesData from '../../Content/Testimonies.json';
import TestimonialCard from '../Resuable/cards/testimonials';

const Testimonies: React.FC = () => {
  const testimonies = testimoniesData.Testimonies;

  return (
    <Box id="testimonies" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        What Our Clients Say
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Real feedback from real people who trust SAMify.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 2, sm: 3, md: 4 },
          width: '100%',
          mx: 'auto',
        }}
      >
        {testimonies.map((testimony) => (
          <Box key={testimony.id} sx={{ width: { xs: '100%', sm: '48%', md: '30%' }, minWidth: 260, maxWidth: 370 }}>
            <TestimonialCard testimony={testimony} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonies;
