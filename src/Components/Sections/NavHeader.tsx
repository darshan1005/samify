import { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery,
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
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/samify-nobg.png';

const navItems = [
  { label: 'Home', target: '/' },
  { label: 'About', target: 'about-section' },
  { label: 'Services', target: 'services-section' },
  { label: 'Portfolio', target: 'ourteam-section' },
  { label: 'Testimonials', target: 'testimonial-section' },
  { label: 'Q&A', target: 'faq-section' },
  { label: 'Contact', target: 'getintouch-section' },
];

const NavHeader = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
      if (id === '/') {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box component={'img'} src={Logo} alt="Company Logo" sx={{ px: 2,pt: 1, width: 140, display: 'flex', alignItems: 'center', justifyContent: 'start' }} />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} onClick={() => scrollToSection(item.target)}>
                        <ListItemText primary={item.label} sx={{ textAlign: 'left' }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box id='header'>
            {/* Header Contact & Social */}
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
                                    key={item.label}
                                    onClick={() => scrollToSection(item.target)}
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
                                    {item.label}
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
        </Box>
    );
};

export default NavHeader;
