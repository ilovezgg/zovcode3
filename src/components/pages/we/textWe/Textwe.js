import React from "react";
import z from "./TextWe.module.css";

const Textwe = () => {
  return (
    <div>
      <div className={z.mainText}>
        <div className={z.containerPic}>
          <div className={z.backgroundPic}>
            <div className={z.blackCube}>
              <div className={z.info1}>
                <div className={z.titleInfo}>
                  <div className={z.subTitleInfo}>Опыт</div>
                </div>
                <div className={z.textInfo}>
                  Мы работаем в этой сфере много лет, и за это время реализовали
                  десятки успешных проектов. Наша команда состоит из
                  профессионалов, которые знают все тонкости работы с деревом и
                  современными технологиями.
                </div>
              </div>
              <div className={z.info2}>
                <div className={z.titleInfo}>
                  <div className={z.subTitleInfo}>Скорость</div>
                </div>
                <div className={z.textInfo}>
                  Благодаря отработанным технологиям и слаженной работе команды,
                  мы возводим дома в кратчайшие сроки без ущерба для качества.
                  Каждый этап строительства тщательно спланирован, что позволяет
                  минимизировать задержки и сдать объект точно в срок.
                </div>
              </div>
              <div className={z.info3}>
                <div className={z.titleInfo}>
                  <div className={z.subTitleInfo}>Доверие</div>
                </div>
                <div className={z.textInfo}>
                  Мы ценим ваше решение выбрать нашу компанию для строительства
                  дома из профилированного бруса и делаем всё, чтобы оправдать
                  ваши ожидания. Каждый этап работы мы выполняем с максимальной
                  прозрачностью, держа вас в курсе всех деталей.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textwe;
