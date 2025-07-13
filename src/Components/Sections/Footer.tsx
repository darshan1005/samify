import { Box, Container, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import services from '../../Content/services.json'
import XIcon from '@mui/icons-material/X'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const quickNavs = [
    { label: 'Home', target: '/' },
    { label: 'About', target: 'about-section' },
    { label: 'Services', target: 'services-section' },
    { label: 'Portfolio', target: 'ourteam-section' },
    { label: 'Testimonials', target: 'testimonial-section' },
    { label: 'Q&A', target: 'faq-section' },
    { label: 'Contact', target: 'getintouch-section' },
    { label: 'Privacy Policy', target: '/privacypolicy' },
    { label: 'Request a Quote', target: '/request' },
]

const contactInfo = [
    { label: 'Email', value: 'info@samify.com' },
    { label: 'Phone', value: '+91 XXX XXX XXX' },
    { label: 'Address', value: '123 Main St, City, Country' },
]

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const scrollToSectionOrNavigate = (target: string) => {
        if (target.startsWith('/')) {
            // Route navigation (works everywhere)
            navigate(target);
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        } else {
            // Section navigation
            if (location.pathname !== '/') {
                // Go to home, then scroll after navigation
                navigate('/', { state: { scrollTo: target } });
            } else {
                // Already on home, just scroll
                const el = document.getElementById(target);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    };

    return (
        <Box
            id="footer"
            sx={{
                position: 'relative',
                bgcolor: '#102036',
                color: 'white',
                py: 6
            }}>
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
                    top: 250,
                    right: '50%',
                    width: 200,
                    height: 200,
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
            <Container maxWidth="lg">
                {/* Main Footer Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)',
                        },
                        gridTemplateAreas: {
                            xs: `
                                "brand"
                                "nav"
                                "services"
                                "contact"
                            `,
                            sm: `
                                "brand brand"
                                "nav services"
                                "contact contact"
                            `,
                            md: `"brand nav services contact"`,
                        },
                        gap: { xs: 3, sm: 4, md: 5 },
                        alignItems: 'start',
                    }}
                >
                    {/* Logo & Brand Section */}
                    <Box
                        sx={{
                            gridArea: 'brand',
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        <Box sx={{display:'flex', alignItems: 'baseline', gap:2}}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    color: 'white',
                                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                                }}
                            >
                                Samify
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <IconButton size="small" sx={{ color: "#fff6", '&:hover': { color: 'primary.light' } }}>
                                    <FacebookIcon fontSize="medium" />
                                </IconButton>
                                <IconButton size="small" sx={{ color: "#fff6", '&:hover': { color: 'primary.light' } }}>
                                    <XIcon fontSize="medium" />
                                </IconButton>
                                <IconButton size="small" sx={{ color: "#fff6", '&:hover': { color: 'primary.light' } }}>
                                    <LinkedInIcon fontSize="medium" />
                                </IconButton>
                            </Box>
                        </Box>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'grey.300',
                                lineHeight: 1.6,
                                mb: 2,
                            }}
                        >
                            We help businesses grow with innovative web solutions, mobile apps, and digital
                            marketing services. Your success is our mission.
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'grey.400',
                                fontSize: '0.9rem',
                            }}
                        >
                            Transforming ideas into digital reality since 2025.
                        </Typography>
                    </Box>

                    {/* Quick Nav */}
                    <Box
                        sx={{
                            gridArea: 'nav',
                            textAlign: { xs: 'center', sm: 'left' },
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                            }}
                        >
                            Quick Nav
                        </Typography>
                        <List sx={{ p: 0 }}>
                            {quickNavs.map(nav => (
                                <ListItem
                                    key={nav.label}
                                    disableGutters
                                    sx={{ py: 0.5 }}
                                >
                                    <ListItemText
                                        onClick={() => scrollToSectionOrNavigate(nav.target)}
                                        primary={nav.label}
                                        sx={{
                                            fontSize: '0.95rem',
                                            cursor: 'pointer',
                                            transition: 'color 0.2s ease',
                                            '&:hover': {
                                                color: 'primary.light',
                                                textDecoration: 'underline',
                                            },
                                            '& .MuiListItemText-primary': {
                                                fontSize: '0.95rem',
                                                color: 'grey.300',
                                            }
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Services */}
                    <Box
                        sx={{
                            gridArea: 'services',
                            textAlign: { xs: 'center', sm: 'left', md: 'left' },
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                            }}
                        >
                            Services
                        </Typography>
                        <List dense sx={{ p: 0 }}>
                            {services.Services.map(service => (
                                <ListItem key={service.id} disableGutters sx={{ py: 0.5 }}>
                                    <ListItemText
                                        primary={service.title}
                                        sx={{
                                            '& .MuiListItemText-primary': {
                                                fontSize: '0.95rem',
                                                color: 'grey.300',
                                            }
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Contact Info */}
                    <Box
                        sx={{
                            gridArea: 'contact',
                            textAlign: { xs: 'center', sm: 'left', md: 'left' },
                        }}
                    >
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                            }}
                        >
                            Contact
                        </Typography>
                        <List dense sx={{ p: 0 }}>
                            {contactInfo.map(info => (
                                <ListItem key={info.label} disableGutters sx={{ py: 1 }}>
                                    <ListItemText
                                        primary={info.label}
                                        secondary={info.value}
                                        sx={{
                                            '& .MuiListItemText-primary': {
                                                color: 'white',
                                                fontWeight: 500,
                                                fontSize: '0.9rem',
                                                mb: 0.5,
                                            }
                                        }}
                                        secondaryTypographyProps={{
                                            color: 'grey.300',
                                            fontSize: '0.95rem',
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer