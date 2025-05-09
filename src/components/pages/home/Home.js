import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header/Header'; 
import Achievments from './achievements/Achievments'; 
import AboutUs from './abousUs/AboutUs'; 
import Projects from './prjects/Projects'; 
import WhyUs from './whyUs/WhyUs'; 
import CallUs from './callUs/CallUs';
import Footer from './footer/Footer'; 
import Buttons2 from './header/Buttons2';
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);
  return (
    <div>
      <Buttons2 />
      <Header />
      <Achievments />
      <AboutUs />
      <Projects />
      <WhyUs />
      <CallUs />
      <Footer />
    </div>
  )
}

export default Home