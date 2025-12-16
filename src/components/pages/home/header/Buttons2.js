import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import z from "./Buttons2.module.css";
import logo from "./img/Group 4.png";
import AboutUsDropdown from './aboutUsDropdown/AboutUsDropdown'
const Buttons2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("resize", handleResize);
    if (!isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);


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

  const toggleMobileMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`${z.svo} ${isScrolled ? z.scrolled : ""}`}>
      <div className={z.containerButtons}>
  
        <div className={z.leftSection}>
          <img src={logo} alt="Логотип" className={z.logoImage} />
          <div className={z.hamburger} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      
        <div className={z.headerButtons}>
          <Link to="/" className={z.mainButton} onClick={closeMenu}>
            Главная
          </Link>
          <Link to="/catalog" className={z.catalogButton} onClick={closeMenu}>
            Каталог
          </Link>
           <AboutUsDropdown/>
          <Link to="/contacts" className={z.contactsButton} onClick={closeMenu}>
            Контакты
          </Link>
          <Link to="/signup" className={z.signUpButton} onClick={closeMenu}>
            Регистрация
          </Link>
          <Link to="/callback" className={z.callbackButton} onClick={closeMenu}>
            Обратный звонок
          </Link>
        </div>

       
        <div className={z.rightContainer}>
          <button className={z.favButton}>
            <svg className={z.heartIcon} viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
          <button className={z.profileButton}>
            <svg className={z.profileIcon} viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M20 20h-1a5 5 0 01-5-5v-1H10v1a5 5 0 01-5 5H4a1 1 0 01-1-1v-4a8 8 0 0114 0v4a1 1 0 01-1 1z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <>
          <div className={z.overlay} onClick={toggleMobileMenu}></div>
          <div className={z.mobileMenu}>
            <div className={z.mobileMenuContent}>
              <Link to="/" className={z.mobileMenuButton} onClick={closeMenu}>
                Главная
              </Link>
              <Link to="/catalog" className={z.mobileMenuButton} onClick={closeMenu}>
                Каталог
              </Link>
              <Link to="/about" className={z.mobileMenuButton} onClick={closeMenu}>
                О нас
              </Link>
              <Link to="/contacts" className={z.mobileMenuButton} onClick={closeMenu}>
                Контакты
              </Link>
              <Link to="/signup" className={z.mobileMenuButton} onClick={closeMenu}>
                Регистрация
              </Link>
              <Link to="/callback" className={z.mobileMenuButton} onClick={closeMenu}>
                Обратный звонок
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Buttons2;