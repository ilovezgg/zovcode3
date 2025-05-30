import React from "react";
import { useNavigate } from 'react-router-dom';
import z from "./Projects.module.css";

const Projects = () => {
  const navigate = useNavigate();


  const handleBathsClick = () => navigate('/catalog');
  const handleHousesClick = () => navigate('/catalog');
  const handleAllProjectsClick = () => navigate('/catalog');
  const handleDetailsClick = () => navigate('/catalog'); 

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
              <button 
                className={z.containerButton}
                onClick={handleDetailsClick}
              >
                Подробнее
              </button>
            </div>

            <div className={z.containerWith}>
              <div className={z.picIn3}></div>
              <div className={z.textTitleContainer}>Дом 48</div>
              <div className={z.textContainer}>
                Сруб под усадку или под ключ
                <p className={z.razmer}>Размеры - 6х6</p>
                <p className={z.floors}>Этажность - 2</p>
              </div>
              <button 
                className={z.containerButton}
                onClick={handleDetailsClick}
              >
                Подробнее
              </button>
            </div>

            <div className={z.containerWith}>
              <div className={z.picIn4}></div>
              <div className={z.textTitleContainer}>Дом 48</div>
              <div className={z.textContainer}>
                Сруб под усадку или под ключ
                <p className={z.razmer}>Размеры - 6х6</p>
                <p className={z.floors}>Этажность - 2</p>
              </div>
              <button 
                className={z.containerButton}
                onClick={handleDetailsClick}
              >
                Подробнее
              </button>
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
              <button 
                className={z.containerButton}
                onClick={handleDetailsClick}
              >
                Подробнее
              </button>
            </div>

            {/* Блок с кнопками навигации */}
            <div className={z.mainContainerButton}>
              <div className={z.upContainer}>
                <div 
                  className={z.buttonRight} 
                  onClick={handleBathsClick}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={z.buttonTitleUp}>Проекты бань</div>
                </div>
                <div 
                  className={z.buttonLeft} 
                  onClick={handleHousesClick}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={z.buttonTitleBottom}>Проекты домов</div>
                </div>
              </div>
              <div className={z.bottomContainer}>
                <div 
                  className={z.bigButton} 
                  onClick={handleAllProjectsClick}
                  style={{ cursor: 'pointer' }}
                >
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
              <button 
                className={z.containerButton}
                onClick={handleDetailsClick}
              >
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;