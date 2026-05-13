import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import z from "./AllInfoPart.module.css";
import NewButtons from "../newButtons/NewButtons";


import klenImg from './picall/klen.jpeg';
import krysaImg from './picall/krysa-i-oblaka-sovremennogo-doma-s-nizkim-uglom.jpg';

const SpecCard = ({ label, value, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div 
      ref={ref} 
      className={`${z.specCard} ${inView? z.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={z.specLabel}>{label}</div>
      <div className={z.specValue}>{value}</div>
    </div>
  );
};

const AllPart = () => {
  const [activeTab, setActiveTab] = useState("base");

  const baseSpecs = [
    { label: 'Фундамент', value: 'В стоимость не входит' },
    { label: 'Обвязка', value: 'Два обвязочных венца из бруса (сечение согласно проекту)' },
    { label: 'Полы', value: 'Выкладывается первичный черновой пол из обрезной доски' },
    { label: 'Лаги', value: '1 этаж — Брус 100×150 мм через 600 мм. 2 этаж — Брус 40×150 мм через 600 мм.' },
    { label: 'Перегородки в срубе (1-й этаж)', value: 'Профилированный брус 100×150 мм' },
    { label: 'Окна и двери', value: 'Технические проёмы' },
    { label: 'Стропильная система', value: 'Брус 40×150 мм через 600 мм' },
    { label: 'Фронтоны', value: 'Вагонка' },
    { label: 'Доставка', value: 'В пределах 400 км от Пестово включена в цену. Расстояние свыше 400 км — 150 руб/км' },
    { label: 'Высота сруба (1-й этаж)', value: '17 рядов — 2.4 м' },
    { label: 'Межвенцовый утеплитель', value: 'Джут' },
    { label: 'Скрепление венцов сруба', value: 'Берёзовые нагеля' },
    { label: 'Сборка углов сруба', value: 'Тёплый угол' },
    { label: 'Кровля', value: 'Ондулин' },
    { label: 'Среднее время строительства', value: '6 — 16 дней' },
    { label: 'Длительность процесса усадки', value: '12 месяцев' },
    { label: 'Сборка сруба', value: 'Входит в стоимость' },
    { label: 'Оплата', value: '70% после выгрузки материала на участке, 30% после сдачи объекта' }
  ];

  const warrantyCards = [
    {
      title: 'На протекание кровли',
      text: 'Не распространяется на временные кровли, выполненные из пергамина, рубероида или аналогичных материалов.',
      image: krysaImg  // импортированная переменная
    },
    {
      title: 'На целостность конструкции', 
      text: 'Прочность фундамента, стен, каркаса — без повреждений. Не включает усадку, естественный износ или внешние воздействия.',
      image: klenImg  // импортированная переменная
    }
  ];

  return (
    <div className={z.main}>
      <h2 className={z.title}>Комплектация</h2>

      <NewButtons onButtonClick={setActiveTab} activeTab={activeTab} />

      <div className={z.contentContainer}>
        {activeTab === "base" && (
          <div className={z.tabContent}>
            <div className={z.specsGrid}>
              {baseSpecs.map((spec, i) => (
                <SpecCard key={i} {...spec} delay={i * 30} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "garanty" && (
          <div className={z.tabContent}>
            <div className={z.warrantyHeader}>
              На строительный объект, дом даётся гарантия 24 месяца
            </div>
            <div className={z.warrantyGrid}>
              {warrantyCards.map((card, i) => (
                <div key={i} className={z.warrantyCard} style={{ backgroundImage: `url(${card.image})` }}>
                  <div className={z.warrantyOverlay}>
                    <h3 className={z.warrantyTitle}>{card.title}</h3>
                    <p className={z.warrantyText}>{card.text}</p>
                  </div>
                </div>
              ))}
              <div className={z.warrantyInfo}>
                <h3 className={z.warrantyInfoTitle}>Информация о сроках гарантии</h3>
                <p className={z.warrantyInfoText}>
                  Гарантия вступает в силу с момента полной оплаты договорной стоимости окончания работ по Договору и не распространяются на ущерб, нанесённый третьими лицами, либо Заказчиком, вследствие изменения проекта и при неправильной эксплуатации сооружения
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPart;