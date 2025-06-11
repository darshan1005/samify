import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

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

const services = [
    'Web Design & Development',
    'Mobile App Development',
    'UI/UX Design',
    'SEO & Digital Marketing',
    'BPO & ITES',
    'Data Entry',
]

const contactInfo = [
    { label: 'Email', value: 'info@samify.com' },
    { label: 'Phone', value: '+1 234 567 890' },
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
        <Box id="footer" sx={{ bgcolor: '#102036', color: 'white', py: 6 }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 4, md: 6 },
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    {/* Logo & Brand Section */}
                    <Box
                        sx={{
                            flex: { xs: 'none', md: 1 },
                            maxWidth: { xs: '100%', md: 300 },
                            mb: { xs: 2, md: 0 },
                        }}
                    >
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
                            flex: { xs: 'none', md: 0.8 },
                            minWidth: { xs: '100%', sm: 'auto' },
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
                        <List>
                            {quickNavs.map(nav => (
                                <ListItem key={nav.label} disableGutters sx={{ py: 0.5 }}>
                                    <ListItemText
                                        onClick={() => scrollToSectionOrNavigate(nav.target)}
                                        primary={nav.label}
                                        sx={{
                                            fontSize: '0.95rem',
                                            '&:hover': {
                                                cursor: 'pointer',
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Services */}
                    <Box
                        sx={{
                            flex: { xs: 'none', md: 1.2 },
                            minWidth: { xs: '100%', sm: 'auto' },
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
                            {services.map(service => (
                                <ListItem key={service} disableGutters sx={{ py: 0.5 }}>
                                    <ListItemText
                                        primary={service}
                                        sx={{
                                            fontSize: '0.95rem',
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Contact Info */}
                    <Box
                        sx={{
                            flex: { xs: 'none', md: 1 },
                            minWidth: { xs: '100%', sm: 'auto' },
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
                                            color: 'white',
                                            fontWeight: 500,
                                            fontSize: '0.9rem',
                                            mb: 0.5,
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