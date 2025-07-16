import { useState } from "react";
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
import Loader from "../Resuable/Loading";
import VideoPreview from "../Sections/Media";

import { useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleReady = () => setLoading(false);
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      handleReady();
    } else {
      document.addEventListener('DOMContentLoaded', handleReady);
    }
    return () => {
      document.removeEventListener('DOMContentLoaded', handleReady);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
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