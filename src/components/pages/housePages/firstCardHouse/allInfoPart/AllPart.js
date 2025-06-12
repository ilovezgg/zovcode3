import React, { useState, useRef } from "react";
import z from "./AllInfoPart.module.css";
import NewButtons from "../newButtons/NewButtons";

const AllPart = () => {
  const [activeTab, setActiveTab] = useState("base");
  const [direction, setDirection] = useState(null);
  const prevTabRef = useRef("base");

  const handleButtonClick = (tab) => {
    const tabsOrder = ["base", "garanty", "technology"];
    const currentIndex = tabsOrder.indexOf(prevTabRef.current);
    const newIndex = tabsOrder.indexOf(tab);

    setDirection(newIndex > currentIndex ? "left" : "right");
    prevTabRef.current = tab;
    setActiveTab(tab);
  };

  const getAnimationClass = (tab) => {
    if (activeTab === tab) {
      return direction === "left" ? z.slideInFromRight : z.slideInFromLeft;
    } else {
      if (prevTabRef.current === tab) {
        return direction === "left" ? z.slideOutToLeft : z.slideOutToRight;
      }
      return z.hidden;
    }
  };

  return (
    <div className={z.main}>
      <div className={z.title}>Комплектация</div>

      <NewButtons onButtonClick={handleButtonClick} activeTab={activeTab} />

      <div className={z.contentContainer}>
        <div className={`${z.content} ${getAnimationClass("base")}`}>
          {activeTab === "base" && (
            <div className={z.anotherInfo}>
              <div className={z.infoContainer}>
                <div className={z.leftPartInfo}>
                  <div className={z.fund}>
                    <div className={z.fundTitle}>Фундамент</div>
                    <div className={z.fundSubTitle}>В стоимость не входит</div>
                  </div>
                  <div className={z.obvyazka}>
                    <div className={z.obvyazkaTitle}>Обвязка</div>
                    <div className={z.obvyazkaSubTitle}>
                      Два обвязочных венца из бруса (сечение согласно проекту)
                    </div>
                  </div>
                  <div className={z.pol}>
                    <div className={z.polTitle}>Полы</div>
                    <div className={z.polSubTitle}>
                      Выкладывается первичный черновой пол из обрезной доски
                    </div>
                  </div>
                  <div className={z.lag}>
                    <div className={z.lagTitle}>Лаги</div>
                    <div className={z.lagSubTitle}>
                      1 этаж — Брус 100×150 мм через 600 мм.
                      <br /> 2 этаж — Брус 40х150 мм через 600 мм.
                    </div>
                  </div>
                  <div className={z.pereg}>
                    <div className={z.peregTitle}>
                      Перегородки в срубе (1-й этаж)
                    </div>
                    <div className={z.peregSubTitle}>
                      Профилированный брус 100×150 мм.
                    </div>
                  </div>
                  <div className={z.windows}>
                    <div className={z.windowsTitle}>Окна и двери</div>
                    <div className={z.windowsSubTitle}>Технические проёмы</div>
                  </div>
                  <div className={z.strop}>
                    <div className={z.stropTitle}>Стропильная система</div>
                    <div className={z.stropSubTitle}>
                      Брус 40х150мм через 600мм
                    </div>
                  </div>
                  <div className={z.front}>
                    <div className={z.frontTitle}>Фронтоны</div>
                    <div className={z.frontSubTitle}>Вагонка</div>
                  </div>
                  <div className={z.dostavka}>
                    <div className={z.dostavkaTitle}>Доставка</div>
                    <div className={z.dostavkaSubTitle}>
                      В пределах 400 км от Пестово включена в цену.
                      <br />
                      Расстояние свыше 400 км — 150 руб/км.
                    </div>
                  </div>
                </div>
                <div className={z.rightPartInfo}>
                  <div className={z.floorOne}>
                    <div className={z.floorOneTitle}>
                      Высота сруба (1-й этаж)
                    </div>
                    <div className={z.floorOneSubTitle}>17 рядов — 2.4 м.</div>
                  </div>
                  <div className={z.venz}>
                    <div className={z.venzTitle}>Межвенцовый утеплитель</div>
                    <div className={z.venzSubTitle}>Джут</div>
                  </div>
                  <div className={z.skrep}>
                    <div className={z.skrepTitle}>Скрепление венцов сруба</div>
                    <div className={z.skrepSubTitle}>Берёзовые нагеля</div>
                  </div>
                  <div className={z.ugol}>
                    <div className={z.ugolTitle}>Сборка углов сруба</div>
                    <div className={z.ugolSubTitle}>Тёплый угол</div>
                  </div>
                  <div className={z.ondulin}>
                    <div className={z.ondulinTitle}>Кровля</div>
                    <div className={z.ondulinSubTitle}>Ондулин</div>
                  </div>
                  <div className={z.time}>
                    <div className={z.timeTitle}>
                      Среднее время строительства
                    </div>
                    <div className={z.timeSubTitle}>6 — 16 дней</div>
                  </div>
                  <div className={z.usadka}>
                    <div className={z.usadkaTitle}>
                      Длительность процесса усадки
                    </div>
                    <div className={z.usadkaSubTitle}>12 месяцев</div>
                  </div>
                  <div className={z.sborka}>
                    <div className={z.sborkaTitle}>Сборка сруба</div>
                    <div className={z.sborkaSubTitle}>Входит в стоимость</div>
                  </div>
                  <div className={z.oplata}>
                    <div className={z.oplataTitle}>Оплата</div>
                    <div className={z.oplataSubTitle}>
                      70% после выгрузки материала на участке,
                      <br /> 30% после сдачи объекта.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`${z.content} ${getAnimationClass("garanty")}`}>
          {activeTab === "garanty" && (
            <div className={z.garantyContent}>
              <div className={z.firstTitle}>
                 На строительный объект, дом даётся гарантия 24 месяца
              </div>
              <div className={z.bigContainer}>
              <div className={z.containerForPics}>
              <div className={z.garantyProtek}>
               <div className={z.titleProtek}>
На протекание кровли
               </div>
               <div className={z.textProtek}>
Не распространяется на временные кровли, выполненные из пергамина, рубероида или аналогичных материалов.
               </div>
              </div>
              <div className={z.garantySrub}>
            <div className={z.titleSrub}>
На целостность конструкции
               </div>
               <div className={z.textSrub}>
Прочность фундамента, стен, каркаса — без повреждений. Не включает усадку, естественный износ или внешние воздействия.
               </div>
              </div>
              <div className={z.containerForTextBig}>
<div className={z.textBig}>
               Информация о сроках гарантии
              </div>
              </div>
               </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPart;
