import React, { useState, useEffect } from 'react'
import z from './Buttons.module.css'
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
                 <button
                className={`${z.mainButton} ${isTransparent ? z.transparentButton : ''}`}
              >
                Главная
              </button>
              <button
                className={`${z.aboutusButton} ${isTransparent ? z.transparentButton : ''}`}
              >
                О нас
              </button>
              <button
                className={`${z.contactsButton} ${isTransparent ? z.transparentButton : ''}`}
              >
                Контакты
              </button>
              <button
                className={`${z.catalogButton} ${isTransparent ? z.transparentButton : ''}`}
              >
                Каталог
              </button>
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
