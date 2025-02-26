import React, { useState, useEffect } from 'react'
import z from './Buttons.module.css'
import { Link } from 'react-router-dom';
const Buttons = () => {
    const [isTransparent, setIsTransparent] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 290) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div>
       <div className={z.headerButtons}>
       <Link
  to="/" 
  className={`${z.mainButton} ${isTransparent ? z.transparentButton : ''}`} // Динамические классы
>
 Главная
</Link>
              <Link
  to="/we" 
  className={`${z.aboutusButton} ${isTransparent ? z.transparentButton : ''}`} // Динамические классы
>
  О нас
</Link>
<Link
  to="/contacts" 
  className={`${z.contactsButton} ${isTransparent ? z.transparentButton : ''}`} // Динамические классы
>
  Контакты
</Link>
<Link
  to="/catalog" 
  className={`${z.catalogButton} ${isTransparent ? z.transparentButton : ''}`} // Динамические классы
>
  Контакты
</Link>
              <button
                className={`${z.callbackButton} ${isTransparent ? z.transparentButton : ''}`}
              >
                Личный кабинет
              </button>
              </div>
    </div>
  )
}

export default Buttons
