import React from "react";
import { useMediaQuery } from "react-responsive";
import z from "./AboutUs.module.css";

const AboutUs = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      <div className={z.aboutUsMain}>
        <div className={z.container}>
          <div className={z.textAbout}>
            <div className={z.titleAbout}>
              {isMobile 
                ? "Мечтаете о доме, который будет полностью соответствовать вашим представлениям? Мы делаем это возможным" 
                : "Мы воплощаем ваши мечты о идеальном доме."}
            </div>
            <div className={z.textOne}>
              Мы воплощаем ваши мечты о идеальном доме, внимательно прислушиваясь
              к каждому пожеланию, чтобы создать жилье, сочетающее в себе красоту,
              комфорт и долговечность. Будь то баня или уютный
              дом, мы готовы стать вашим партнером.
            </div>
          </div>
          <div className={z.pic}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;