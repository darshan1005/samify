import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import AboutImage from '../../assets/About.webp';
import FlippingText from '../Animations/FlippingText';
import aboutDataJson from '../../Content/About.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {

  const [aboutData, setAboutData] = useState({
    mainTitle: '',
    mainDescription: '',
    mission: { title: '', description: '' },
    vision: { title: '', description: '' },
    slogan: { title: '', description: '' }
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
    if (aboutDataJson && aboutDataJson.About) {
      setAboutData({
        mainTitle: aboutDataJson.About.mainTitle,
        mainDescription: aboutDataJson.About.mainDescription,
        mission: aboutDataJson.About.mission,
        vision: aboutDataJson.About.vision,
        slogan: aboutDataJson.About.slogan
      });
    }
  }, []);

  return (
    <Box id="about-section" sx={{ bgcolor: 'background.default', py: { xs: 0, md: 5 }, scrollMarginTop: { xs: '56px', md: '64px' } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, md: 8 },
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
            text={aboutData.mainTitle}
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
            {aboutData.mainDescription}
          </Typography>

          {/* Mission and Vision */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              width: '100%',
              gap: { xs: 0, md: 4 }
            }}
          >

            <Box sx={{ mb: 2, flex: 1 }} data-aos="fade-up" data-aos-delay="400">
              <FlippingText
                text={aboutData.mission.title}
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
                {aboutData.mission.description}
              </Typography>
            </Box>


            <Box sx={{ mb: 2, flex: 1 }} data-aos="fade-up" data-aos-delay="500">
              <FlippingText
                text={aboutData.vision.title}
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
                {aboutData.vision.description}
              </Typography>
            </Box>
          </Box>

          {/* Slogan */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <Box sx={{ mb: 3 }} data-aos="fade-up" data-aos-delay="600">
              <FlippingText
                text={aboutData.slogan.title}
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
                {aboutData.slogan.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;