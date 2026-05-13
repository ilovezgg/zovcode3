import React from "react";
import z from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={z.aboutUsMain}>
      <div className={z.container}>
        <div className={z.pic}>
          <div className={z.textContainer}>
            <h2 className={z.textTitle}>
              Дерево, которое дышит.
            </h2>
            <p className={z.text}>
              Строим из отборного бруса. Без компромиссов в качестве. 
              Ваш дом будет теплым, тихим и простоит десятилетия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;