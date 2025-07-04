import React from 'react'
import z from './SotrudMain.module.css'
const SotrudMain = () => {
  return (
    <div className={z.main}>
      <div className={z.containerForPics}>
         <div className={z.picWater}>
<div className={z.titleWater}>
Электроэнергия и вода
</div>
<div className={z.textWater}>
Обеспечить бригаду электрической энергией и водой.
Вы можете взять у нас в аренду электрогенератор — 10 000 рублей.
Бензин предоставляет заказчик
</div>
         </div>
         <div className={z.picDost}>
<div className={z.titleDost}>
Доступ к объекту
</div>
<div className={z.textDost}>
Обеспечить подрядчику беспрепятственный доступ к объекту в течение всего периода строительства
</div>
         </div>
         <div className={z.picRoad}>
<div className={z.titleRoad}>
Подъезд к месту строительства
</div>
<div className={z.textRoad}>
Обеспечить подъезд к месту строительства, для автотехники не повышенной проходимости (расчистить подъездные пути к участку для беспрепятственного проезда грузовых автомобилей)
</div>
         </div>
         <div className={z.picBit}>
<div className={z.titleBit}>
Подъезд к месту строительства
</div>
<div className={z.textBit}>
Решить вопрос с проживанием рабочих на месте проведения работ. Если это невозможно, мы предлагаем купить бытовку 2 × 3 м., для проживания бригады (после всех работ остаётся на участке у заказчика). Цена бытовки — 25 000 рублей</div>
         </div>
      </div>
      <div className={z.containerForInfo}>

      </div>
    </div>
  )
}

export default SotrudMain