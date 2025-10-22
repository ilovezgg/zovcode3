import React from 'react'
import z from './EcoHouseFirstText.module.css'

const EcoHouseFirstText = () => {
  return (
    <div className={z.main}>
      <div className={z.container}>
        <div className={z.pic}></div>
        <div className={z.text}>
          Представьте дом, который не просто защищает вас от непогоды, а становится активным участником создания здоровой атмосферы. Деревянный сруб — это не просто строительная конструкция, а живая система, которая естественным образом регулирует микроклимат, очищает воздух и создает уникальную среду для вашего благополучия. 
          
          В эпоху пластика и синтетических материалов мы все чаще вспоминаем о многовековой мудрости деревянного зодчества. Но что именно делает жизнь в срубе такой комфортной? Как обычные стены из бруса могут влиять на физическое здоровье и психологическое состояние? Давайте разберемся, какие природные механизмы работают в деревянном доме и почему его часто называют "третьей кожей" человека.
        </div>
        <div className={z.facts}>
          <div className={z.factsContent}>
            <div className={z.factItemOne}>
              <div className={z.factText}>
                Дерево "дышит" - за сутки бревенчатые стены обновляют воздух в помещении до 3 раз
              </div>
            </div>
            <div className={z.factItemTwo}>
              <div className={z.factText}>
                Древесина естественным образом поддерживает идеальную влажность 45-55%
              </div>
            </div>
            <div className={z.factItemThree}>
              <div className={z.factText}>
                Фитонциды в хвойных породах убивают до 70% болезнетворных бактерий
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EcoHouseFirstText