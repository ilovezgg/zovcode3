import React from 'react'
import { useInView } from 'react-intersection-observer';
import z from './SotrudMain.module.css'
import dogovor from './dog/dogovor.rtf'

const InfoCard = ({ title, text, className, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <div 
      ref={ref} 
      className={`${z.card} ${z[className]} ${inView ? z.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={z.cardOverlay}>
        <h3 className={z.cardTitle}>{title}</h3>
        <p className={z.cardText}>{text}</p>
      </div>
    </div>
  );
};

const SotrudMain = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = dogovor;
    link.download = 'Договор_строительный.rtf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cards = [
    {
      title: 'Электроэнергия и вода',
      text: 'Обеспечить бригаду электрической энергией и водой. Вы можете взять у нас в аренду электрогенератор — 10 000 рублей. Бензин предоставляет заказчик',
      className: 'picWater'
    },
    {
      title: 'Доступ к объекту',
      text: 'Обеспечить подрядчику беспрепятственный доступ к объекту в течение всего периода строительства',
      className: 'picDost'
    },
    {
      title: 'Подъезд к месту строительства',
      text: 'Обеспечить подъезд к месту строительства, для автотехники не повышенной проходимости (расчистить подъездные пути к участку для беспрепятственного проезда грузовых автомобилей)',
      className: 'picRoad'
    },
    {
      title: 'Проживание бригады',
      text: 'Решить вопрос с проживанием рабочих на месте проведения работ. Если это невозможно, мы предлагаем купить бытовку 2×3 м., для проживания бригады (после всех работ остаётся на участке у заказчика). Цена бытовки — 25 000 рублей',
      className: 'picBit'
    }
  ];

  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={z.section}>
      <div className={z.container}>
        <div className={z.cardsWrapper}>
          {cards.map((card, i) => (
            <InfoCard key={i} {...card} delay={i * 100} />
          ))}
        </div>

        <div ref={infoRef} className={`${z.infoWrapper} ${infoInView ? z.visible : ''}`}>
          <div className={z.paymentCard}>
            <div className={z.paymentTitle}>1-й платёж</div>
            <div className={z.paymentText}>70% от суммы договора после привоза материала на ваш участок</div>
          </div>
          
          <div className={z.paymentCard}>
            <div className={z.paymentTitle}>2-й платёж</div>
            <div className={z.paymentText}>30% от суммы договора по завершению строительных работ</div>
          </div>

          <button className={z.downloadBtn} onClick={handleDownload}>
            Скачать образец типового договора (.rtf)
          </button>
        </div>
      </div>
    </section>
  )
}

export default SotrudMain