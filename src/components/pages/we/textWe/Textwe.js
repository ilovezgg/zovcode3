import React from "react";
import z from "./TextWe.module.css";

const Feature = ({ title, text, delay }) => {
  return (
    <div className={z.feature} style={{ transitionDelay: `${delay}ms` }}>
      <h3 className={z.featureTitle}>{title}</h3>
      <p className={z.featureText}>{text}</p>
    </div>
  );
};

const Textwe = () => {
  const features = [
    {
      title: "Опыт",
      text: "Много лет в сфере и десятки успешных проектов. Знаем все тонкости работы с деревом и современными технологиями."
    },
    {
      title: "Скорость", 
      text: "Отработанные технологии и слаженная команда. Возводим дома в кратчайшие сроки без потери качества."
    },
    {
      title: "Доверие",
      text: "Максимальная прозрачность на каждом этапе. Держим вас в курсе всех деталей строительства."
    }
  ];

  return (
    <section className={z.section}>
      <div className={z.container}>
        <div className={z.imageWrapper}>
          <div className={z.backgroundImage}>
            <div className={z.glassPanel}>
              {features.map((item, index) => (
                <Feature 
                  key={index}
                  title={item.title}
                  text={item.text}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Textwe;