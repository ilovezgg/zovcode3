import React from 'react'
import z from './EcoHouseTables.module.css'
const EcoHouseTables = () => {
  return (
    <div className={z.main}>
 <div className={z.container}>
    <div className={z.brus}>
        <div className={z.brusTitle}>
         Брус
        </div>
<ul className={z.brusLine}>
    <li className={z.brusItem}>Eстественная регуляция влажности </li>
    <li className={z.brusItem}>Выделяет фитонциды</li>
    <li className={z.brusItem}>Полностью перерабатывается и разлагается</li>
    <li className={z.brusItem}>Требует защиты от влаги и вредителей</li>
</ul>
    </div>
    <div className={z.gazobeton}>
        <div className={z.gazobetonTitle}>
          Газобетон
        </div>
<ul className={z.gazobetonLine}>
    <li className={z.gazobetonItem}>Хорошая теплоизоляция </li>
    <li className={z.gazobetonItem}>Нетоксичен при эксплуатации</li>
    <li className={z.gazobetonItem}>Долговечен</li>
    <li className={z.gazobetonItem}>Энергоемкое производство</li>
    <li className={z.gazobetonItem}>Высокий углеродный след</li>
    
</ul>
    </div>
    <div className={z.kirp}>
        <div className={z.kirpTitle}>
         Кирпич
        </div>
<ul className={z.kirpLine}>
    <li className={z.kirpItem}>Натуральные компоненты </li>
    <li className={z.kirpItem}>Долговечность </li>
     <li className={z.kirpItem}> Хорошая тепловая инерция </li>
    <li className={z.kirpItem}>Высокий углеродный след от обжига</li>
    <li className={z.kirpItem}>Очень энергоемкое производство</li>
</ul>
    </div>
    <div className={z.karkas}>
        <div className={z.karkasTitle}>
         Каркас
        </div>
<ul className={z.karkasLine}>
    <li className={z.karkasItem}> Экономное использование древесины </li>
    <li className={z.karkasItem}>Хорошая теплоизоляция</li>
    <li className={z.karkasItem}>Синтетические утеплители</li>
    <li className={z.karkasItem}>Синтетические утеплители</li>
    <li className={z.karkasItem}>Паробарьеры нарушают естественную вентиляцию</li>
</ul>
    </div>
 </div>
    </div>
  )
}

export default EcoHouseTables