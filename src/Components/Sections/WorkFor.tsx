import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography, Paper } from '@mui/material';
import Agriculture from '../../assets/workfor/Agriculture.webp';
import Education from '../../assets/workfor/Education.webp';
import Healthcare from '../../assets/workfor/Healthcare.webp';
import Manufacturing from '../../assets/workfor/Manufacturing.webp';
import RealEstate from '../../assets/workfor/Real Estate.webp';
import Legal from '../../assets/workfor/Legal.webp';
import Insurance from '../../assets/workfor/Insurance.webp';
import Textile from '../../assets/workfor/Textile.webp';
import Tourism from '../../assets/workfor/Tourism.webp';
import Trade from '../../assets/workfor/Trade.webp';
import Technology from '../../assets/workfor/Technology.webp';
import Food from '../../assets/workfor/Food Industry.webp';
import ECommerce from '../../assets/workfor/E-Commerce.webp';
import Government from '../../assets/workfor/Government.webp';
import office from '../../assets/office.webp';
import SMB from '../../assets/workfor/Small-Medium-Business.webp'
import Startup from '../../assets/workfor/Start-Up-Business.webp'
import Agencies from '../../assets/workfor/Agencies.webp'
import Enterprise from '../../assets/workfor/Enterprise.webp'

const businessTypes = [
    {
        title: 'Small & Medium Business',
        image: SMB,
    },
    {
        title: 'Start-Up Business',
        image: Startup,
    },
    {
        title: 'Agencies',
        image: Agencies,
    },
    {
        title: 'Enterprise',
        image: Enterprise,
    }
]

const workForObj = [
    {
        title: 'Agriculture',
        image: Agriculture,
    },
    {
        title: 'Education',
        image: Education,
    },
    {
        title: 'Healthcare',
        image: Healthcare,
    },
    {
        title: 'Manufacturing',
        image: Manufacturing,
    },
    {
        title: 'Real Estate',
        image: RealEstate,
    },
    {
        title: 'Legal',
        image: Legal,
    },
    {
        title: 'Insurance',
        image: Insurance,
    },
    {
        title: 'Textile',
        image: Textile,
    },
    {
        title: 'Tourism',
        image: Tourism,
    },
    {
        title: 'Trade',
        image: Trade,
    },
    {
        title: 'Technology',
        image: Technology,
    },
    {
        title: 'Food Industry',
        image: Food,
    },
    {
        title: 'E-Commerce',
        image: ECommerce,
    },
    {
        title: 'Government',
        image: Government,
    }
]

const WorkFor: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');

    useEffect(() => {
        AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });
    }, []);

    return (
        <Box
            id="work-for"
            data-aos="fade-up"
            sx={{
                position: 'relative',
                py: 6,
                px: 1,
                backgroundImage: `url(${office})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
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
                    bgcolor: 'rgba(102, 126, 234, 0.81)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: '#fff' }}>
                        Empowering Industries
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1, color: '#fff' }}>
                        We deliver solutions for a wide range of industries and business domains.
                    </Typography>
                </Box>

                {/* Business Types Grid */}
                <style>{`
                  @keyframes flip360fwd {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(360deg); }
                  }
                  @keyframes flip360bwd {
                    0% { transform: rotateY(360deg); }
                    100% { transform: rotateY(0deg); }
                  }
                `}</style>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
                            sm: 'repeat(4, 1fr)',
                        },
                        gap: { xs: 2, sm: 2.5, md: 3 },
                        maxWidth: '800px',
                        mx: 'auto',
                        mb: 6,
                        justifyItems: 'center',
                        p: 2,
                    }}
                >
                    {businessTypes.map((item, idx) => (
                        <Box
                            key={item.title}
                            data-aos="fade-in"
                            data-aos-delay={100 + idx * 120}
                            sx={{
                                width: '100%',
                                maxWidth: '180px',
                                bgcolor: 'background.paper',
                                borderRadius: 3,
                                boxShadow: '0 2px 12px 0 rgba(16,32,54,0.07)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 2.5,
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.2s',
                                '&:hover': {
                                    boxShadow: 6,
                                },
                            }}
                            onMouseEnter={() => { setHoveredIndex(idx); setFlipDirection('forward'); }}
                            onMouseLeave={() => { setFlipDirection('backward'); setTimeout(() => setHoveredIndex(null), 700); }}
                        >
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    width: 64,
                                    height: 64,
                                    objectFit: 'contain',
                                    mb: 2,
                                    filter: 'drop-shadow(0 2px 8px rgba(54,130,174,0.10))',
                                    transition: 'transform 0.7s cubic-bezier(.4,2,.6,1)',
                                    animation:
                                        hoveredIndex === idx
                                            ? `${flipDirection === 'forward' ? 'flip360fwd' : 'flip360bwd'} 0.7s both`
                                            : 'none',
                                }}
                            />
                            <Typography fontWeight={600} fontSize="1rem" color="#102036">
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Industries Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
                            sm: 'repeat(4, 1fr)',
                            md: 'repeat(5, 1fr)',
                            lg: 'repeat(6, 1fr)',
                            xl: 'repeat(7, 1fr)',
                        },
                        gap: { xs: 1, sm: 1.5, md: 2 },
                        maxWidth: '1200px',
                        mx: 'auto',
                        justifyItems: 'center',
                    }}
                >
                    {workForObj.map((item, idx) => (
                        <Paper
                            key={item.title}
                            data-aos="zoom-in"
                            data-aos-delay={100 + idx * 80}
                            elevation={3}
                            sx={{
                                width: '100%',
                                maxWidth: '150px',
                                minHeight: 170,
                                borderRadius: 3,
                                boxShadow: '0 2px 12px 0 rgba(16,32,54,0.07)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 2.5,
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                cursor: 'pointer',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                bgcolor: 'background.paper',
                                '&:hover': {
                                    transform: 'translateY(-6px) scale(1.04)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    width: 64,
                                    height: 64,
                                    objectFit: 'contain',
                                    mb: 2,
                                    filter: 'drop-shadow(0 2px 8px rgba(54,130,174,0.10))',
                                }}
                            />
                            <Typography fontWeight={600} fontSize="1rem" color="#102036">
                                {item.title}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default WorkFor;