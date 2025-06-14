import React, { useState, useEffect } from "react";
import z from "./Buttons2.module.css";
import { Link } from "react-router-dom";

const Buttons2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Обработчик скролла (только для десктопа)
  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]); // Добавили зависимость от isMobile

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Закрытие меню
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`${z.svo} ${!isMobile && isScrolled ? z.scrolled : ""}`}>
      <div className={z.containerButtons}>
        <div className={z.backgroundBlur}></div>
        
        <div className={z.headerButtons}>
          {isMobile && (
            <div 
              className={`${z.hamburger} ${isMenuOpen ? z.active : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {!isMobile && (
            <>
              <Link to="/" className={z.mainButton}>
                Главная
              </Link>
              <Link to="/we" className={z.aboutusButton}>
                О нас
              </Link>
              <Link to="/contacts" className={z.contactsButton}>
                Контакты
              </Link>
              <Link to="/catalog" className={z.catalogButton}>
                Каталог
              </Link>
              <Link to="/cabinet" className={z.callbackButton}>
                Галерея
              </Link>
              <Link to="/signup" className={z.signUpButton}>
                Личный кабинет
              </Link>
            </>
          )}

          <div className={z.rightContainer}>
            <Link 
              to="/favourites" 
              className={`${z.favButton} ${isFavorite ? z.active : ''}`}
              onClick={() => {
                setIsFavorite(!isFavorite);
                if (isMobile) closeMenu();
              }}
            >
              <svg 
                width="30" 
                height="30" 
                viewBox="0 0 24 24" 
                fill={isFavorite ? "#ff0000" : "none"} 
                xmlns="http://www.w3.org/2000/svg"
                className={z.heartIcon}
              >
                <path
                  d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
            <Link 
              to="/profile" 
              className={`${z.profileButton} ${isProfileActive ? z.active : ''}`}
              onClick={() => {
                setIsProfileActive(!isProfileActive);
                if (isMobile) closeMenu();
              }}
            >
              <svg 
                width="30" 
                height="30" 
                viewBox="0 0 24 24" 
                fill={isProfileActive ? "#4285F4" : "none"} 
                xmlns="http://www.w3.org/2000/svg"
                className={z.profileIcon}
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12ZM12 14C7.58172 14 4 15.7909 4 18V20H20V18C20 15.7909 16.4183 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {isMobile && (
        <>
          <div 
            className={`${z.overlay} ${isMenuOpen ? z.active : ""}`} 
            onClick={closeMenu}
          />
          
          <div className={`${z.mobileMenu} ${isMenuOpen ? z.active : ""}`}>
            <div className={z.mobileMenuContent}>
              <Link to="/" className={z.mobileMenuButton} onClick={closeMenu}>
                Главная
              </Link>
              <Link to="/we" className={z.mobileMenuButton} onClick={closeMenu}>
                О нас
              </Link>
              <Link to="/contacts" className={z.mobileMenuButton} onClick={closeMenu}>
                Контакты
              </Link>
              <Link to="/catalog" className={z.mobileMenuButton} onClick={closeMenu}>
                Каталог
              </Link>
              <Link to="/cabinet" className={z.mobileMenuButton} onClick={closeMenu}>
                Галерея
              </Link>
              <Link to="/signup" className={z.mobileMenuButton} onClick={closeMenu}>
                Личный кабинет
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Buttons2;