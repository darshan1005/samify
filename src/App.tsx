import React, { Suspense, useEffect, useState } from 'react';
import Loading from './Components/Sections/Loading';
import Cursor from './Components/Animations/Cursor';
import { Box, Container, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
const Home = React.lazy(() => import("./Components/Pages/Home"));

const App = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    const handleReady = () => setIsDomReady(true);
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      handleReady();
    } else {
      document.addEventListener('DOMContentLoaded', handleReady);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleReady);
    }
  }, []);

  if (!isDomReady) {
    return (
      <Loading />
    )
  }
  return (
    <>
      {!isMobile && <Cursor />}
      <Suspense fallback={<Loading />}><Home /></Suspense>

      {/* Demo Content Below Hero */}
      <Box sx={{ height: '200vh', bgcolor: 'grey.50', p: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: 4 }}>
            Scroll to see sticky navigation
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            This content demonstrates how the navigation becomes sticky when scrolling.
            The carousel controls are only visible when the hero section is in view.
          </Typography>
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Features Implemented:
            </Typography>
            <Typography variant="body1" paragraph>
              • Responsive two-section header with contact info and social media icons
            </Typography>
            <Typography variant="body1" paragraph>
              • Floating navigation that becomes sticky on scroll
            </Typography>
            <Typography variant="body1" paragraph>
              • Interactive carousel with left/right controls
            </Typography>
            <Typography variant="body1" paragraph>
              • Carousel controls only visible when hero is in view
            </Typography>
            <Typography variant="body1" paragraph>
              • Fully responsive design using Material-UI
            </Typography>
            <Typography variant="body1">
              • Smooth animations and transitions throughout
            </Typography>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default App
