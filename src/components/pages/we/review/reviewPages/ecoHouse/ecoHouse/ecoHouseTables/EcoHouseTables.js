import React from 'react'
import { useInView } from 'react-intersection-observer';
import z from './EcoHouseTables.module.css'

const MaterialCard = ({ title, items, bgClass, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <div 
      ref={ref} 
      className={`${z.card} ${z[bgClass]} ${inView ? z.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={z.cardTitle}>{title}</div>
      <ul className={z.cardList}>
        {items.map((item, i) => (
          <li key={i} className={z.cardItem}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const EcoHouseTables = () => {
  const materials = [
    {
      title: 'Брус',
      bgClass: 'bgBrus',
      items: ['Естественная регуляция влажности', 'Выделяет фитонциды', 'Полностью перерабатывается и разлагается', 'Требует защиты от влаги и вредителей']
    },
    {
      title: 'Газобетон',
      bgClass: 'bgGaz',
      items: ['Хорошая теплоизоляция', 'Нетоксичен при эксплуатации', 'Долговечен', 'Энергоемкое производство', 'Высокий углеродный след']
    },
    {
      title: 'Кирпич',
      bgClass: 'bgKirp',
      items: ['Натуральные компоненты', 'Долговечность', 'Хорошая тепловая инерция', 'Высокий углеродный след от обжига', 'Очень энергоемкое производство']
    },
    {
      title: 'Каркас',
      bgClass: 'bgKarkas',
      items: ['Экономное использование древесины', 'Хорошая теплоизоляция', 'Синтетические утеплители', 'Паробарьеры нарушают естественную вентиляцию']
    }
  ];

  return (
    <section className={z.section}>
      <div className={z.container}>
        <h2 className={z.title}>Сравнение разных материалов для строительства дома</h2>
        <div className={z.grid}>
          {materials.map((mat, i) => (
            <MaterialCard key={i} {...mat} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default EcoHouseTables