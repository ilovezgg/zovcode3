import React, { useState, useEffect } from "react";
import z from "./Buttons.module.css";
import { Link } from "react-router-dom";

const Buttons = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 290) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
      setIsScrolled(window.scrollY > 0);
    };

    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkMobileView();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={z.mainHeader}>
      <div className={z.containerButtons}>
        <div className={`${z.backgroundBlur} ${isScrolled ? z.scrollyButton : ""}`}></div>
        
        {isMobileView ? (
          <>
            <button className={z.mobileMenuButton} onClick={toggleMobileMenu}>
              ☰
            </button>
            
            <Link to="/favourites" className={z.FavButton}>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={z.heartIcon}
              >
                <path
                  d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill={isTransparent ? 'none' : 'currentColor'}
                />
              </svg>
            </Link>
            
            <Link to="/profile" className={z.profileButton}>
              <div className={z.defPic}></div>
            </Link>

            <div className={`${z.mobileMenu} ${isMobileMenuOpen ? z.mobileMenuOpen : ""}`}>
              <Link to="/" className={z.mobileMenuItem} onClick={closeMobileMenu}>
                Главная
              </Link>
              <Link to="/we" className={z.mobileMenuItem} onClick={closeMobileMenu}>
                О нас
              </Link>
              <Link to="/contacts" className={z.mobileMenuItem} onClick={closeMobileMenu}>
                Контакты
              </Link>
              <Link to="/catalog" className={z.mobileMenuItem} onClick={closeMobileMenu}>
                Каталог
              </Link>
              <Link to="/cabinet" className={z.mobileMenuItem} onClick={closeMobileMenu}>
                Галерея
              </Link>
              <Link to="/signup" className={z.mobileMenuItem} onClick={closeMobileMenu}>
                Личный кабинет
              </Link>
            </div>
          </>
        ) : (
          <div className={z.headerButtons}>
            <Link
              to="/"
              className={`${z.mainButton} ${isTransparent ? z.transparentButton : ""}`}
            >
              Главная
            </Link>
            <Link
              to="/we"
              className={`${z.aboutusButton} ${isTransparent ? z.transparentButton : ""}`}
            >
              О нас
            </Link>
            <Link
              to="/contacts"
              className={`${z.contactsButton} ${isTransparent ? z.transparentButton : ""}`}
            >
              Контакты
            </Link>
            <Link
              to="/catalog"
              className={`${z.catalogButton} ${isTransparent ? z.transparentButton : ""}`}
            >
              Каталог
            </Link>
            <Link
              to="/cabinet"
              className={`${z.callbackButton} ${isTransparent ? z.transparentButton : ""}`}
            >
              Галерея
            </Link>
            <Link
              to="/signup"
              className={`${z.signUpButton} ${isTransparent ? z.transparentButton : ""}`}
            >
              Личный кабинет
            </Link>
            <Link to="/favourites" className={`${z.FavButton} ${isTransparent ? z.transparentButton : ""}`}>
              <svg 
                width="30" 
                height="30" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={z.heartIcon}
              >
                <path
                  d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill={isTransparent ? 'none' : 'currentColor'}
                />
              </svg>
            </Link>
            <Link to="/profile" className={z.profileButton}>
              <div className={z.defPic}></div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buttons;