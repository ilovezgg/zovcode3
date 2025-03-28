import React from "react";
import z from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div>
      <div className={z.aboutUsMain}>
        <div className={z.container}>
          <div className={z.textAbout}>
           <div className={z.titleAbout}>
           Мы воплощаем ваши мечты о идеальном доме.
           </div>
           <div className={z.textOne}>
           Мы воплощаем ваши мечты о идеальном доме, внимательно прислушиваясь
            к каждому пожеланию, чтобы создать жилье, сочетающее в себе красоту,
            комфорт и долговечность. Будь то баня или уютный
            дом, мы готовы стать вашим надежным партнером.
           </div>
          </div>
          <div className={z.pic}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
