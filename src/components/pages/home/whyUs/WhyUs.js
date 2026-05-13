import React from 'react';
import { useInView } from 'react-intersection-observer';
import z from './WhyUs.module.css';

const Feature = ({ icon, title, text, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref} 
      className={`${z.feature} ${inView ? z.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={z.featureIcon} style={{ backgroundImage: `url(${icon})` }} />
      <div className={z.featureContent}>
        <h3 className={z.featureTitle}>{title}</h3>
        <p className={z.featureText}>{text}</p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  const features = [
    {
      icon: require("../header/img/free-icon-search-6404717.png"),
      title: "Контроль на всех этапах",
      text: "От заготовки бруса до сдачи дома. Личный прораб и фотоотчеты каждую неделю."
    },
    {
      icon: require("../header/img/free-icon-wood-939564.png"),
      title: "Качественный брус",
      text: "Зимний лес камерной сушки. Влажность 12-14%. Минимальная усадка, без трещин."
    },
    {
      icon: require("../header/img/free-icon-save-money-2801811.png"),
      title: "Фиксированная смета",
      text: "Цена в договоре не меняется. Детальная смета по материалам и работам."
    },
    {
      icon: require("../header/img/free-icon-validity-7870827.png"),
      title: "Документы под ключ",
      text: "Проект, разрешения, ввод в эксплуатацию. Берем бюрократию на себя."
    }
  ];

  return (
    <section className={z.whyUsMain}>
      <div className={z.container}>
        <div className={z.header}>
          <h2 className={z.title}>Почему выбирают нас</h2>
          <p className={z.subtitle}>
            Строим дома, в которых хочется жить. Без нервов и переплат.
          </p>
        </div>
        
        <div className={z.grid}>
          {features.map((item, index) => (
            <Feature
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;