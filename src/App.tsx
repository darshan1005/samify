import React, { useEffect, useState } from 'react';
import Loading from './Components/Resuable/Loading';
import Cursor from './Components/Animations/Cursor';
import { useMediaQuery, useTheme } from '@mui/material';
import Footer from './Components/Sections/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTopButton from './Components/Animations/ScrollTop';

const Home = React.lazy(() => import("./Components/Pages/Home"));
const PrivacyPolicy = React.lazy(() => import("./Components/Pages/Privacypolicy"));
const Request = React.lazy(() => import("./Components/Pages/Request"));

const loadingMessages = [
  'Casting imagination into reality...',
  'Almost done, preparing your experience...',
  'Just a moment, we are getting things ready...',
  'Loading the magic, please be patient...',
  'Final touches, hang tight!'
];

// ScrollToTopOnRouteChange: scrolls to top on every route change (SPA best practice)
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

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
    return <Loading content={loadingMessages} />;
  }
  return (
    <Router>
      {!isMobile && <Cursor />}
      <ScrollToTopOnRouteChange />
      <React.Suspense fallback={<Loading content={loadingMessages} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/request" element={<Request />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </React.Suspense>
    </Router>
  );
}

export default App
