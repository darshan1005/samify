import { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    Grid,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery,
    Fade,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Email,
    Phone,
    LocationOn,
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    ChevronLeft,
    ChevronRight,
    ContactPhone,
} from '@mui/icons-material';
import SlidingTextReveal from '../Animations/SlideInText';
import Logo from '../../assets/samify-nobg.png'
// Add AOS import
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHeroInView, setIsHeroInView] = useState(true);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

    const navItems = ['Home', 'About', 'Services', 'We Work', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 50);

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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box component={'img'} src={Logo} alt="Company Logo" sx={{ width: 160, display: 'flex', alignItems: 'center', justifyContent: 'start' }} />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item}>
                        <ListItemText primary={item} sx={{ textAlign: 'left' }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box>
            <Box
                sx={{
                    py: 2,
                    display: { xs: 'none', md: 'block' }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 6,
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Email fontSize="small" color="primary" />
                            <Typography variant="body2">info@samify.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Phone fontSize="small" color="primary" />
                            <Typography variant="body2">+91 000 000 0000</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOn fontSize="small" color="primary" />
                            <Typography variant="body2">Hyderbad, 510001</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton size="small" color="primary">
                            <Facebook fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="primary">
                            <Twitter fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="primary">
                            <Instagram fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="primary">
                            <LinkedIn fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            {/* </Box> */}

            {/* Navigation Bar */}
            <AppBar
                position="fixed"
                sx={{
                    width: isMobile ? 'auto' : isScrolled ? '100%' : '95%',
                    display: 'flex',
                    margin: '0 auto',
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    top: isMobile ? 0 : isScrolled ? 0 : 75,
                    bgcolor: 'rgba(255, 255, 255, 1)',
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                    boxShadow: isScrolled ? 3 : 1,
                    transition: 'all 0.3s ease',
                    color: 'text.primary',
                    borderRadius: { xs: 0, md: isScrolled ? 0 : 2 },
                    zIndex: 1201
                }}
            >
                <Toolbar
                    sx={{
                        width: '100%',
                        px: { xs: 1, md: 4 },
                        mx: 0,
                        minHeight: { xs: 56, md: 64 },
                        justifyContent: 'space-between'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Box component={'img'} src={Logo} alt="Company Logo" sx={{ width: 110 }} />
                    </Box>
                    {!isMobile ? (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item}
                                    sx={{
                                        color: 'text.primary',
                                        position: 'relative',
                                        background: 'none',
                                        boxShadow: 'none',
                                        '&::before, &::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            height: '3px',
                                            width: '0%',
                                            bottom: 0,
                                            borderRadius: 2,
                                            transition: 'width 0.4s cubic-bezier(.4,0,.2,1)',
                                        },
                                        '&::before': {
                                            bgcolor: 'primary.main',
                                            zIndex: 1,
                                        },
                                        '&::after': {
                                            bgcolor: 'primary.light',
                                            zIndex: 2,
                                        },
                                        '&:hover': {
                                            color: 'primary.main',
                                            background: 'none',
                                        },
                                        '&:hover::before': {
                                            width: '100%',
                                        },
                                        '&:hover::after': {
                                            width: '100%',
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    ) : (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    zIndex: 1300
                }}
            >
                {drawer}
            </Drawer>

            {/* Hero Section */}
            <Box
                id="hero-section"
                sx={{
                    minHeight: {xs:'590px', md:'100vh'},
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
                                bottom: isMobile ? 55 : 110,
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