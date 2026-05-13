import React from 'react'
import { useInView } from 'react-intersection-observer';
import z from './EcoHouseInfo.module.css'

const EcoHouseInfo = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <section ref={ref} className={`${z.section} ${inView ? z.visible : ''}`}>
      <div className={z.container}>
        <div className={z.card}>
          <div className={z.text}>
            Научные данные свидетельствуют: каждая порода дерева формирует особую среду в помещении, воздействуя на самочувствие человека. Хвойные выделяют фитонциды для очистки воздуха, дуб содержит укрепляющие дыхательные пути танины, а береза обеспечивает гипоаллергенное пространство. У разных пород — разный терапевтический потенциал. Мы поможем выбрать оптимальную древесину для вашего жилья, чтобы превратить его в источник здоровья и комфорта.
          </div>
        </div>
        <div className={z.image} />
      </div>
    </section>
  )
}
export default EcoHouseInfo