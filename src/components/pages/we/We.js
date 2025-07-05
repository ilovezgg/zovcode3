import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../home/footer/Footer'
import Buttons2 from '../home/header/Buttons2'
import Cards  from './cards/Cards'
import Textwe from './textWe/Textwe'
const We = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);
  return (
    <div>
       <Buttons2 />
       <Textwe /> 
       <Cards />
      <Footer />
    </div>
  )
}

export default We;