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

const Home = () => {
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
      <GetInTouch />
    </>
  );
};

export default Home;