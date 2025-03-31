import React from "react";
import z from "./Cards.module.css";
export const Cards = () => {
  return (
    <div>
      <div className={z.cardsMain}>
        <div className={z.cards}>
          <div className={z.cardsTop}>
            <div className={z.card1}>
              <div className={z.card1Info}>
                <div className={z.card1Title}>2010</div>
                <div className={z.card1SubTitle}> год основания</div>
              </div>
            </div>
            <div className={z.card2}>
              <div className={z.card2Info}>
                <div className={z.card2Title}>500+</div>
                <div className={z.card2SubTitle}>законченных объектов</div>
              </div>
            </div>
          </div>
          <div className={z.cardsBottom}>
            <div className={z.card3}>
              <div className={z.card3Info}>
                <div className={z.card3Title}>3</div>
                <div className={z.card3SubTitle}>года гарантии</div>
              </div>
            </div>
            <div className={z.card4}>
              <div className={z.card4Info}>
                <div className={z.card4Title}>100%</div>
                <div className={z.card4SubTitle}>довольных клиентов</div>
              </div>
            </div>
            <div className={z.card5}>
              <div className={z.card5Info}>
                <div className={z.card5Title}>100+</div>
                <div className={z.card5SubTitle}>проектов в каталоге</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
