import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ServiceCard from '../Resuable/cards/services';
import services from '../../Content/services.json';

// Responsive container for cards
const ServicesGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        gap: theme.spacing(4),
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
}));

// Hero section styling
const HeroSection = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(8),
    },
}));

const Services: React.FC = () => {
    // Filter active services and sort by priority
    const activeServices = services.Services
        .filter(service => service.isActive)
        .sort((a, b) => (a.priority || 0) - (b.priority || 0));

    return (
        <Box
            id="services-section"
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                bgcolor: 'background.default',
                position: 'relative',
                overflow: 'hidden',
                scrollMarginTop: { xs: '56px', md: '64px' }
            }}
        >
            <Container maxWidth="lg">
                <HeroSection>
                    <Typography
                        variant="h3"
                        component="h2"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            background: 'linear-gradient(45deg, #667eea, #764ba2)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Our Services
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '1rem', md: '1.25rem' }
                        }}
                    >
                        Discover our comprehensive range of digital solutions designed to help
                        your business grow, innovate, and succeed.
                    </Typography>
                </HeroSection>

                <ServicesGrid>
                    {activeServices.map((service) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                        />
                    ))}
                </ServicesGrid>

                {activeServices.length === 0 && (
                    <Box textAlign="center" py={4}>
                        <Typography variant="h6" color="text.secondary">
                            No services available at the moment.
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default Services;