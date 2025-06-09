import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Agriculture from '../../assets/workfor/Agriculture.png';
import Education from '../../assets/workfor/Education.png';
import Healthcare from '../../assets/workfor/Healthcare.png';
import Manufacturing from '../../assets/workfor/Manufacturing.png';
import RealEstate from '../../assets/workfor/Real Estate.png';
import Legal from '../../assets/workfor/Legal.png';
import Insurance from '../../assets/workfor/Insurance.png';
import Textile from '../../assets/workfor/Textile.png';
import Tourism from '../../assets/workfor/Tourism.png';
import Trade from '../../assets/workfor/Trade.png';
import Technology from '../../assets/workfor/Technology.png';
import Food from '../../assets/workfor/Food Industry.png';
import ECommerce from '../../assets/workfor/E-Commerce.png';
import Government from '../../assets/workfor/Government.png';
import office from '../../assets/office.jpg';
import SMB from '../../assets/workfor/Small-Medium-Business.png'
import Startup from '../../assets/workfor/Start-Up-Business.png'
import Agencies from '../../assets/workfor/Agencies.png'
import Enterprise from '../../assets/workfor/Enterprise.png'

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

    return (
        <Box
            id="work-for"
            sx={{
                position: 'relative',
                py: 6,
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

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: { xs: 2, sm: 3, md: 4 },
                        width: '100%',
                        mb: 6,
                    }}
                >
                    {/* Business Types Tiles */}
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
                    {businessTypes.map((item, idx) => (
                        <Box
                            key={item.title}
                            sx={{
                                flex: { xs: '0 1 48%', sm: '0 1 22%', md: '0 1 20%' },
                                width: { xs: '48%', sm: '22%', md: '20%' },
                                minWidth: 140,
                                maxWidth: 200,
                                bgcolor: 'background.paper',
                                borderRadius: 3,
                                boxShadow: '0 2px 12px 0 rgba(16,32,54,0.07)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 2.5,
                                m: 1,
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
                            onMouseLeave={() => { setHoveredIndex(idx); setFlipDirection('backward'); setTimeout(() => setHoveredIndex(null), 700); }}
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
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: { xs: 2, sm: 3, md: 4 },
                        width: '90%',
                        mx: 'auto',
                    }}
                >
                    {workForObj.map((item) => (
                        <Paper
                            key={item.title}
                            elevation={3}
                            sx={{
                                width: 150,
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

