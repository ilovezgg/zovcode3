import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import z from "./Buttons2.module.css";
import logo from "./img/Group 4.png";
import AboutUsDropdown from './aboutUsDropdown/AboutUsDropdown';

const Buttons2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(prev =>!prev);

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/catalog", label: "Каталог" },
    { to: "/contacts", label: "Контакты" },
    { to: "/signup", label: "Регистрация" },
    { to: "/callback", label: "Обратный звонок" }
  ];

  return (
    <header className={`${z.header} ${isScrolled? z.scrolled : ""}`}>
      <div className={z.container}>
        <div className={z.left}>
          <Link to="/" className={z.logoLink}>
            <img src={logo} alt="Логотип" className={z.logo} />
          </Link>
          <button className={`${z.burger} ${isMenuOpen? z.burgerActive : ""}`} onClick={toggleMenu} aria-label="Меню">
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={z.nav}>
          <Link to="/" className={z.navLink}>Главная</Link>
          <Link to="/catalog" className={z.navLink}>Каталог</Link>
          <AboutUsDropdown />
          <Link to="/contacts" className={z.navLink}>Контакты</Link>
          <Link to="/signup" className={z.navLink}>Регистрация</Link>
          <Link to="/callback" className={z.navLink}>Обратный звонок</Link>
        </nav>

        <div className={z.actions}>
          <button className={z.iconButton} aria-label="Избранное">
            <svg className={z.icon} viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
          <button className={z.iconButton} aria-label="Профиль">
            <svg className={z.icon} viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M20 20h-1a5 5 0 01-5-5v-1H10v1a5 5 0 01-5 5H4a1 1 0 01-1-1v-4a8 8 0 0114 0v4a1 1 0 01-1 1z" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${z.mobileOverlay} ${isMenuOpen? z.overlayVisible : ""}`} onClick={toggleMenu} />
      
      <div className={`${z.mobileMenu} ${isMenuOpen? z.menuVisible : ""}`}>
        <nav className={z.mobileNav}>
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className={z.mobileLink}>
              {link.label}
            </Link>
          ))}
          <Link to="/about" className={z.mobileLink}>О нас</Link>
        </nav>
      </div>
    </header>
  );
};

export default Buttons2;