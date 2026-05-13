import React from 'react';
import { useInView } from 'react-intersection-observer';
import z from './Cards.module.css';

const Card = ({ value, label, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref} 
      className={`${z.card} ${inView ? z.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={z.cardValue}>{value}</div>
      <div className={z.cardLabel}>{label}</div>
    </div>
  );
};

export const Cards = () => {
  const stats = [
    { value: '2010', label: 'год основания', large: true },
    { value: '500+', label: 'готовых домов' },
    { value: '3', label: 'года гарантии' },
    { value: '100%', label: 'довольных клиентов' },
    { value: '100+', label: 'проектов в каталоге' },
  ];

  return (
    <section className={z.cardsMain}>
      <div className={z.container}>
        <div className={z.grid}>
          {stats.map((item, index) => (
            <Card 
              key={index}
              value={item.value}
              label={item.label}
              delay={index * 60}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;