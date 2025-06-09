import React, { useEffect, useState } from 'react';
import Loading from './Components/Sections/Loading';
import Cursor from './Components/Animations/Cursor';
import { useMediaQuery, useTheme } from '@mui/material';
import Footer from './Components/Sections/Footer';
import NavHeader from './Components/Sections/NavHeader';
import PrivacyPolicy from './Components/Pages/Privacypolicy';
import Request from './Components/Pages/Request';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/Animations/ScrollTop';

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
    <Router>
      <NavHeader />
      {!isMobile && <Cursor />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/request" element={<Request />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  )
}

export default App
