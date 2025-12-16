import React from "react";
import { useMediaQuery } from "react-responsive";
import z from "./AboutUs.module.css";

const AboutUs = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={z.aboutUsMain}>
      <div className={z.container}>
        <div className={z.pic}>
          <div className={z.textContainer}>
            <h2 className={z.textTitle}>
              Дерево, которое дышит. Дом, который служит.
            </h2>
            <p className={z.text}>
              Мы строим не просто дома — мы создаём наследие.  
              Каждый брус — отборный, каждое соединение — проверено веками.  
              Ваш дом будет крепким, тёплым и живым — как лес, из которого он вырос.
            </p>
          </div>
        </ div>
      </div>
    </div>
  );
};

export default AboutUs;