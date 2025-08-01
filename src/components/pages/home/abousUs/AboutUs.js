import React from "react";
import { useMediaQuery } from "react-responsive";
import z from "./AboutUs.module.css";

const AboutUs = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      <div className={z.aboutUsMain}>
        <div className={z.container}>
          <div className={z.pic}>
           <div className={z.textContainer}>
            <div className={z.textTitle}>
            Традиции деревянного зодчества в современном исполнении
            </div>
            <div className={z.text}>
Строим дома из бруса с точным расчетом нагрузок и соединений. Каждый проект проходит проверку на соответствие строительным нормативам. Отбор материалов, контроль качества работ, соблюдение технологий.
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;