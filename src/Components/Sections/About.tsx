import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import AboutImage from '../../assets/About.png';
import FlippingText from '../Animations/FlippingText';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Box id="about-section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 5 }, scrollMarginTop: { xs: '56px', md: '64px' } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: '100%', md: '65%' },
            maxWidth: 420,
            overflow: 'hidden',
            mx: { xs: 'auto', md: 0 },
          }}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <Box
            component="img"
            src={AboutImage}
            alt="About SAMify"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Content */}
        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Main Title with FlippingText */}
          <FlippingText
            text="About Us"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              background: 'linear-gradient(45deg, #667eea, #102036)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              mb: 2,
            }}
          />

          {/* Main Description */}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.15rem' } }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            SAMify is a dynamic IT and digital solutions provider, delivering smart, scalable, and user-centric services for businesses worldwide. With a team of tech-savvy professionals and a passion for innovation, we help businesses accelerate their digital transformation journey through tailored software, marketing, and support solutions.
          </Typography>

          {/* Mission and Vision */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              width: '100%',
              gap: { xs: 2, md: 4 }
            }}
          >
            <Box sx={{ mb: 2, flex: 1 }} data-aos="fade-up" data-aos-delay="400">
              <FlippingText
                text="Mission"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 'bold',
                  mb: 1,
                }}
              />
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' } }}
              >
                To empower businesses with intelligent technology and exceptional service that drive real, measurable results.
              </Typography>
            </Box>

            <Box sx={{ mb: 2, flex: 1 }} data-aos="fade-up" data-aos-delay="500">
              <FlippingText
                text="Vision"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 'bold',
                  mb: 1,
                }}
              />
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' } }}
              >
                To become a global leader in IT and digital services by continuously innovating and delivering value-driven solutions.
              </Typography>
            </Box>
          </Box>

          {/* Slogan */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems:  'flex-start',
              width: '100%',
              gap: { xs: 0, md: 4 }
            }}
          >
          <Box sx={{ mb: 3 }} data-aos="fade-up" data-aos-delay="600">
            <FlippingText
              text="Slogan"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 'bold',
                mb: 1,
              }}
            />
            <Typography
              variant="body1"
              fontWeight="bold"
              color='#3682ae'
              sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' } }}
            >
              Think Digital. Build Smarter.
            </Typography>
          </Box>

          {/* CTA Button */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mt: 1,
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              borderRadius: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3,
              }
            }}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Get A Free Quote
          </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;