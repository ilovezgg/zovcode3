import React, { useState, useEffect } from "react";
import z from "./Buttons.module.css";
import { Link } from "react-router-dom";
const Buttons = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 290) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={z.mainHeader}>
      <div className={z.containerButtons}>
      <div className={`${z.backgroundBlur} ${
              isScrolled ? z.scrollyButton : ""
            }`} ></div>
        <div className={z.headerButtons}>
          <Link
            to="/"
            className={`${z.mainButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            Главная
          </Link>
          <Link
            to="/we"
            className={`${z.aboutusButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            О нас
          </Link>
          <Link
            to="/contacts"
            className={`${z.contactsButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            Контакты
          </Link>
          <Link
            to="/catalog"
            className={`${z.catalogButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            Каталог
          </Link>
          <Link
            to="/cabinet"
            className={`${z.callbackButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            Личный кабинет
          </Link>
          <Link
            to="/favourites"
            className={`${z.FavButton} ${
              isTransparent ? z.transparentButton : ""
            }`} 
          >
            <span className={z.heart}></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
