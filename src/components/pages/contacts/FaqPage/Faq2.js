import React, { useState } from 'react';
import z from './Faq2.module.css';
import Accordion from '../faq/Accordion';

const Faq2 = () => {
  const [activeIndex, setActiveIndex] = useState(null); 

  const faqData = [
    {
      question: 'Работаете ли с материнским капиталом?',
      answer: 'Да, мы работаем с материнским капиталом. Подробности уточняйте у наших менеджеров.',
    },
    {
      question: 'Сколько длится процесс усадки сруба?',
      answer: 'Процесс усадки сруба занимает от 6 до 12 месяцев в зависимости от влажности древесины.',
    },
    {
      question: 'Как производится оплата при заказе дома или бани?',
      answer: 'Оплата производится поэтапно: 30% предоплата, 70% — после завершения строительства.',
    },
    {
      question: 'За сколько в среднем строится сруб?',
      answer: 'Строительство сруба занимает от 2 до 4 недель в зависимости от сложности проекта.',
    },
    {
      question: 'Какой брус используется для постройки?',
      answer: 'Мы используем профилированный брус камерной сушки толщиной 150x150 мм.',
    },
    {
      question: 'Какой крепёж используется при сборке сруба из бруса?',
      answer: 'Для сборки сруба используются деревянные нагели и металлические стяжки.',
    },
    {
      question: 'Какое время года лучше выбрать для постройки сруба?',
      answer: 'Лучшее время для строительства — весна или осень, когда влажность древесины оптимальна.',
    },
    {
      question: 'Каков срок эксплуатации дома из профилированного бруса?',
      answer: 'Срок эксплуатации дома из профилированного бруса составляет более 50 лет при правильном уходе.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); 
  };

  return (
    <div>
      <div className={z.faqMain}>
        <div className={z.containerFor}>
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index} 
              onToggle={() => handleToggle(index)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq2;