import React, { useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamData = [
  {
    icon: <CodeIcon color="primary" sx={{ fontSize: 32 }} />,
    title: 'Developers',
    description: 'Full Stack, Flutter, Node.js, PHP',
  },
  {
    icon: <DesignServicesIcon color="secondary" sx={{ fontSize: 32 }} />,
    title: 'Designers',
    description: 'UI/UX professionals using Figma, XD',
  },
  {
    icon: <TrendingUpIcon color="success" sx={{ fontSize: 32 }} />,
    title: 'Marketers',
    description: 'SEO, Social, Paid Ads, Analytics',
  },
  {
    icon: <SupportAgentIcon color="info" sx={{ fontSize: 32 }} />,
    title: 'BPO Specialists',
    description: 'Trained in accuracy, CRM & client handling',
  },
  {
    icon: <EmojiObjectsIcon color="warning" sx={{ fontSize: 32 }} />,
    title: 'Leadership',
    description: 'Strategic minds with years of industry experience',
  },
];

const OurTeam: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Box
      id="ourteam-section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: 'background.default',
        scrollMarginTop: { xs: '56px', md: '64px' },
        px: 2,
      }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          background: 'linear-gradient(45deg, #667eea, #102036)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Our Team
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Our team is made up of domain experts, creative thinkers, and seasoned professionals.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {teamData.map((member, idx) => (
          <Grid item xs={12} sm={6} md={2} key={member.title}>
            <Card
              elevation={3}
              sx={{
                textAlign: 'center',
                width: { xs: '160px', sm: '180px', md: '200px' },
                height: { xs: '180px', sm: '200px', md: '220px' },
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 },
                mx: 'auto',
              }}
              data-aos="zoom-in"
              data-aos-delay={300 + idx * 100}
            >
              <Box sx={{ pt: 2, pb: 1 }}>
                <Avatar
                  sx={{
                    bgcolor: 'background.paper',
                    width: { xs: 48, sm: 56, md: 60 },
                    height: { xs: 48, sm: 56, md: 60 },
                    mx: 'auto',
                    boxShadow: 2,
                  }}
                >
                  {member.icon}
                </Avatar>
              </Box>
              <CardContent sx={{ flex: 1, pt: 1, pb: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' } }}
                >
                  {member.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.875rem' },
                    lineHeight: 1.3,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurTeam;