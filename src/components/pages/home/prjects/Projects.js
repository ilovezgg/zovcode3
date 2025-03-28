import React from "react";
import z from "./Projects.module.css";

const Projects = () => {
  return (
    <div>
      <div className={z.mainProjects}>
        <div className={z.a}>
          <div className={z.projectsTitle}>
            Посмотрите самые частопродаваемые дома. Они заслужили доверие покупателей.
          </div>
        </div>
        <div className={z.totalContainer}>
          <div className={z.containerProjects}>
            <div className={z.containerWith}>
              <div className={z.picIn2}></div>
              <div className={z.textTitleContainer}>Дом 48</div>
              <div className={z.textContainer}>
                Сруб под усадку или под ключ
                <p className={z.razmer}>Размеры - 6х6</p>
                <p className={z.floors}>Этажность - 2</p>
              </div>
              <button className={z.containerButton}>Подробнее</button>
            </div>
            <div className={z.containerWith}>
              <div className={z.picIn3}></div>
              <div className={z.textTitleContainer}>Дом 48</div>
              <div className={z.textContainer}>
                Сруб под усадку или под ключ
                <p className={z.razmer}>Размеры - 6х6</p>
                <p className={z.floors}>Этажность - 2</p>
              </div>
              <button className={z.containerButton}>Подробнее</button>
            </div>

            <div className={z.containerWith}>
              <div className={z.picIn4}></div>
              <div className={z.textTitleContainer}>Дом 48</div>
              <div className={z.textContainer}>
                Сруб под усадку или под ключ
                <p className={z.razmer}>Размеры - 6х6</p>
                <p className={z.floors}>Этажность - 2</p>
              </div>
              <button className={z.containerButton}>Подробнее</button>
            </div>
          </div>
          <div className={z.secondContainer}>
            <div className={z.containerWith}>
              <div className={z.picIn5}></div>
              <div className={z.textTitleContainer}>Дом 48</div>
              <div className={z.textContainer}>
                Сруб под усадку или под ключ
                <p className={z.razmer}>Размеры - 6х6</p>
                <p className={z.floors}>Этажность - 1</p>
              </div>
              <button className={z.containerButton}>Подробнее</button>
            </div>
            <div className={z.mainContainerButton}>
              <div className={z.upContainer}>
                <div className={z.buttonRight}>
                  <div className={z.buttonTitleUp}>Проекты бань</div>
                </div>
                <div className={z.buttonLeft}>
                  <div className={z.buttonTitleBottom}>Проекты домов</div>
                </div>
              </div>
              <div className={z.bottomContainer}>
                <div className={z.bigButton}>
                  <div className={z.buttonTitleSecond}>
                    Перейти ко всем проектам
                  </div>
                </div>
              </div>
            </div>
            <div className={z.containerWith}>
              <div className={z.picIn6}></div>
              <div className={z.textTitleContainer}>Дом 48</div>
              <div className={z.textContainer}>
                Сруб под усадку или под ключ
                <p className={z.razmer}>Размеры - 6х6</p>
                <p className={z.floors}>Этажность - 2</p>
              </div>
              <button className={z.containerButton}>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
