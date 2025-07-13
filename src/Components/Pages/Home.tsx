import Hero from "../Sections/Hero";
import Services from "../Sections/Services";
import About from "../Sections/About";
import OurTeam from "../Sections/OurTeam";
import WorkingProcess from "../Sections/OurWork";
import WorkFor from "../Sections/WorkFor";
import Testimonies from "../Sections/Testimonies";
import FAQs from "../Sections/FAQs";
import GetInTouch from "../Sections/GenInTouch";
import NavHeader from "../Sections/NavHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Resuable/Loading";
import VideoPreview from "../Sections/Media";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Clear scrollTo state from history on page refresh
    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (navEntry?.type === "reload") {
      if (location.state?.scrollTo) {
        // Remove scrollTo from history state
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location, navigate]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setLoading(true);
      const scrollToElement = () => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setLoading(false);
          // Clear scrollTo from history state after using it
          navigate(location.pathname, { replace: true, state: {} });
        } else {
          // Try again on the next animation frame
          requestAnimationFrame(scrollToElement);
        }
      };
      scrollToElement();
    }
  }, [location, navigate]);
  return (
    <>
      {loading && <Loader />}
      <NavHeader />
      <Hero />
      <Services />
      <About />
      <OurTeam />
      <WorkingProcess />
      <WorkFor />
      <Testimonies />
      <FAQs />
      <VideoPreview />
      <GetInTouch />
    </>
  );
};

export default Home;