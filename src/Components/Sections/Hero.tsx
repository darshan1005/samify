import { useState, useEffect } from 'react';
import {
    Typography,
    Button,
    Box,
    Container,
    Grid,
    IconButton,
    Fade,
} from '@mui/material';
import {
    ChevronLeft,
    ChevronRight,
    ContactPhone,
} from '@mui/icons-material';
import SlidingTextReveal from '../Animations/SlideInText';

// Add AOS import
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHeroInView, setIsHeroInView] = useState(true);

    // Carousel data
    const carouselData = [
        {
            shortDesc: "Premium Solutions",
            title: "Transform Your Business Today",
            longDesc: "We provide cutting-edge solutions that drive growth and innovation. Our expert team delivers exceptional results tailored to your unique business needs.",
        },
        {
            shortDesc: "Expertised Services",
            title: "Innovation Meets Excellence",
            longDesc: "Experience the perfect blend of creativity and technology. We help businesses reach new heights with our comprehensive suite of professional services.",
        },
        {
            shortDesc: "Trusted Partners",
            title: "Your Success Is Our Mission",
            longDesc: "Join thousands of satisfied clients who have transformed their businesses with our proven strategies and dedicated support team.",
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Check if hero section is in view
            const heroElement = document.getElementById('hero-section');
            if (heroElement) {
                const rect = heroElement.getBoundingClientRect();
                setIsHeroInView(rect.bottom > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Auto-scroll carousel every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [carouselData.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    return (
        <Box id="hero-section" sx={{ scrollMarginTop: { xs: '56px', md: '64px' } }}>
            {/* Hero Section */}
            <Box
                sx={{
                    minHeight: { xs: '590px', md: '100vh' },
                    bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Animated floating objects */}
                <style>
                    {`
                    @keyframes float1 {
                        0% { transform: translateY(0) scale(1);}
                        50% { transform: translateY(-40px) scale(1.1);}
                        100% { transform: translateY(0) scale(1);}
                    }
                    @keyframes float2 {
                        0% { transform: translateY(0) scale(1);}
                        50% { transform: translateY(30px) scale(0.95);}
                        100% { transform: translateY(0) scale(1);}
                    }
                    @keyframes float3 {
                        0% { transform: translateY(0) scale(1);}
                        50% { transform: translateY(-25px) scale(1.05);}
                        100% { transform: translateY(0) scale(1);}
                    }
                    `}
                </style>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 60,
                        left: 40,
                        width: 70,
                        height: 70,
                        bgcolor: 'rgba(255,255,255,0.13)',
                        borderRadius: '50%',
                        filter: 'blur(1px)',
                        animation: 'float1 6s ease-in-out infinite',
                        zIndex: 0,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 200,
                        right: 80,
                        width: 100,
                        height: 100,
                        bgcolor: 'rgba(255,255,255,0.09)',
                        borderRadius: '50%',
                        filter: 'blur(2px)',
                        animation: 'float2 8s ease-in-out infinite',
                        zIndex: 0,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 80,
                        left: 120,
                        width: 50,
                        height: 50,
                        bgcolor: 'rgba(255,255,255,0.18)',
                        borderRadius: '50%',
                        filter: 'blur(1.5px)',
                        animation: 'float3 7s ease-in-out infinite',
                        zIndex: 0,
                    }}
                />
                <Container maxWidth="lg" sx={{ height: '100%' }}>
                    <Grid container alignItems="center" sx={{ minHeight: 'calc(100vh - 96px)' }}>
                        {/* Left Content */}
                        <Grid xs={12} md={6} sx={{ zIndex: 2 }}>
                            <Fade in={true} timeout={1000}>
                                <Box sx={{ color: 'white' }}>
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            color: 'rgba(255,255,255,0.8)',
                                            fontSize: '1rem',
                                            letterSpacing: 2
                                        }}
                                    >
                                        {carouselData[currentSlide].shortDesc}
                                    </Typography>

                                    {/* Animated title */}
                                    <SlidingTextReveal
                                        text={carouselData[currentSlide].title}
                                        wordSx={{
                                            fontWeight: 'bold',
                                        }}
                                    />

                                    {/* Animated description with AOS */}
                                    <Typography
                                        variant="h6"
                                        data-aos="fade-in"
                                        key={currentSlide}
                                        sx={{
                                            mb: 4,
                                            color: 'rgba(255,255,255,0.9)',
                                            lineHeight: 1.6,
                                            maxWidth: { xs: '100%', md: '70%' },
                                        }}
                                    >
                                        {carouselData[currentSlide].longDesc}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        startIcon={<ContactPhone />}
                                        sx={{
                                            bgcolor: 'white',
                                            color: 'primary.main',
                                            '&:hover': {
                                                transform: 'translateY(-2px)'
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Get In Touch
                                    </Button>
                                </Box>
                            </Fade>
                        </Grid>
                    </Grid>

                    {/* Carousel Controls */}
                    {isHeroInView && (
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: { xs: 55, md: 95 },
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: 2,
                                zIndex: 3
                            }}
                        >
                            <IconButton
                                onClick={prevSlide}
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.3)',
                                        transform: 'scale(1.1)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <ChevronLeft />
                            </IconButton>

                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                {carouselData.map((_, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            bgcolor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.4)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </Box>

                            <IconButton
                                onClick={nextSlide}
                                sx={{
                                    bgcolor: 'rgba(255,255,255,0.2)',
                                    color: 'white',
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.3)',
                                        transform: 'scale(1.1)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <ChevronRight />
                            </IconButton>
                        </Box>
                    )}
                </Container>

                {/* Background Decoration */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -50,
                        right: -50,
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        zIndex: 1
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -100,
                        left: -100,
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.05)',
                        zIndex: 1
                    }}
                />
            </Box>
        </Box>
    );
};

export default Hero;