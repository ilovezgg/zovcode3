import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../home/footer/Footer'
import Buttons from '../home/header/Buttons'
import Cards  from './cards/Cards'
import Textwe from './textWe/Textwe'
const We = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка в начало страницы при изменении маршрута
  }, [location.pathname]);
  return (
    <div>
       <Buttons />
       <Textwe /> 
       <Cards />
      <Footer />
    </div>
  )
}

export default We;