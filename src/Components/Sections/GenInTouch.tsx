import { Box, Button, Typography } from "@mui/material";
import TechBg2 from '../../assets/tech-bg.webp'
import { Link } from "react-router-dom";

const GetInTouch = () => {
    return (
        <Box
            id="getintouch-section"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                py: { xs: 6, md: 5 },
                backgroundImage: `url(${TechBg2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                mt: 4,
                minHeight: { xs: 180, sm: 220, md: 140 },
                scrollMarginTop: { xs: '56px', md: '64px' }
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(46, 64, 145, 0.81)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 3, sm: 4 },
                    textAlign: { xs: 'center', sm: 'left' }
                }}>
                    <Typography
                        sx={{
                            color: 'white',
                            fontWeight: 600,
                            fontSize: { xs: '2rem', sm: '2.5rem' },
                            mb: 0,
                            textAlign: { xs: 'center', sm: 'left' },
                            lineHeight: 1.2
                        }}
                    >
                        Grow Your Business and Build Your Website or Software With us.
                    </Typography>
                    <Link to={'/request'}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: '#102036',
                                color: 'white',
                                borderRadius: 2,
                                boxShadow: 2,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Get in touch
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default GetInTouch;