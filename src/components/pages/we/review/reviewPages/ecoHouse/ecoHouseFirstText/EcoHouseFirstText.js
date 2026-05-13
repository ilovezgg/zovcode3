import React from 'react'
import { useInView } from 'react-intersection-observer';
import z from './EcoHouseFirstText.module.css'

const EcoHouseFirstText = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const facts = [
    { 
      text: 'Дерево "дышит" - за сутки бревенчатые стены обновляют воздух в помещении до 3 раз', 
      className: 'factBg1'
    },
    { 
      text: 'Древесина естественным образом поддерживает идеальную влажность 45-55%', 
      className: 'factBg2'
    },
    { 
      text: 'Фитонциды в хвойных породах убивают до 70% болезнетворных бактерий', 
      className: 'factBg3'
    }
  ];

  return (
    <section ref={ref} className={`${z.section} ${inView ? z.visible : ''}`}>
      <div className={z.container}>
        <div className={z.pic} />
        <div className={z.text}>
          Представьте дом, который не просто защищает вас от непогоды, а становится активным участником создания здоровой атмосферы. Деревянный сруб — это не просто строительная конструкция, а живая система, которая естественным образом регулирует микроклимат, очищает воздух и создает уникальную среду для вашего благополучия.
          <br/><br/>
          В эпоху пластика и синтетических материалов мы все чаще вспоминаем о многовековой мудрости деревянного зодчества. Но что именно делает жизнь в срубе такой комфортной? Как обычные стены из бруса могут влиять на физическое здоровье и психологическое состояние? Давайте разберемся, какие природные механизмы работают в деревянном доме и почему его часто называют "третьей кожей" человека.
        </div>
        <div className={z.facts}>
          {facts.map((fact, i) => (
            <div key={i} className={`${z.factItem} ${z[fact.className]}`}>
              <div className={z.factText}>{fact.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default EcoHouseFirstText