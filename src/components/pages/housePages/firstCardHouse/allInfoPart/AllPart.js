import React from 'react'
import z from './AllInfoPart.module.css'
const AllPart = () => {
  return (
    <div className={z.main}>
  <div className={z.anotherInfo}>
        <div className={z.infoContainer}>
          <div className={z.leftPartInfo}>
            <div className={z.fund}>
              <div className={z.fundTitle}>Фундамент</div>
              <div className={z.fundSubTitle}>В стоимость не входит</div>
            </div>
            <div className={z.obvyazka}>
              <div className={z.obvyazkaTitle}>Обвязка</div>
              <div className={z.obvyazkaSubTitle}>Два обвязочных венца из бруса (сечение согласно проекту)</div>
            </div>
            <div className={z.pol}>
              <div className={z.polTitle}>Полы</div>
              <div className={z.polSubTitle}>Выкладывается первичный черновой пол из обрезной доски</div>
            </div>
            <div className={z.lag}>
              <div className={z.lagTitle}>Лаги</div>
              <div className={z.lagSubTitle}>1 этаж — Брус 100×150 мм через 600 мм.
2 этаж — Брус 40х150 мм через 600 мм.</div>
            </div>
          </div>
          <div className={z.rightPartInfo}>
            <div className={z.floorOne}>
              <div className={z.floorOneTitle}>Высота сруба (1-й этаж)</div>
              <div className={z.floorOneSubTitle}>17 рядов — 2.4 м.</div>
            </div>
            <div className={z.venz}>
              <div className={z.venzTitle}>Межвенцовый утеплитель</div>
              <div className={z.venzSubTitle}>
Джут</div>
            </div>
            <div className={z.skrep}>
              <div className={z.skrepTitle}>Скрепление венцов сруба</div>
              <div className={z.skrepSubTitle}>Берёзовые нагеля</div>
            </div>
            <div className={z.ugol}>
              <div className={z.ugolTitle}>Сборка углов сруба</div>
              <div className={z.ugolSubTitle}>Тёплый угол</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllPart;