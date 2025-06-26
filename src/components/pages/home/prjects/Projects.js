import React from "react";
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import z from "./Projects.module.css";

const Projects = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleBathsClick = () => navigate('/catalog');
  const handleHousesClick = () => navigate('/catalog');
  const handleAllProjectsClick = () => navigate('/catalog');
  const handleDetailsClick = () => navigate('/catalog'); 

  const projects = [
    { id: 1, image: z.picIn2, title: "Проект Д2", size: "6х6", floors: 2 },
    { id: 2, image: z.picIn3, title: "Проект Д5", size: "6х6", floors: 2 },
    { id: 3, image: z.picIn4, title: "Проект Д7", size: "6х6", floors: 2 },
    { id: 4, image: z.picIn5, title: "Проект Д12", size: "6х6", floors: 1 },
  ];

  return (
    <div>
      <div className={z.mainProjects}>
        <div className={z.projectsTitle}>
          Посмотрите самые частопродаваемые дома. Они заслужили доверие покупателей.
          https://github.com/ilovezgg/loh.git
        </div>
        
        <div className={z.totalContainer}>
          {isMobile ? (
            <div className={z.mobileProjectsContainer}>
              {projects.map((project) => (
                <div key={project.id} className={z.mobileProjectRow}>
                  <ProjectCard 
                    project={project} 
                    onDetailsClick={handleDetailsClick}
                    isMobile={true}
                  />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className={z.containerProjects}>
                {projects.slice(0, 3).map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onDetailsClick={handleDetailsClick}
                    isMobile={false}
                  />
                ))}
              </div>

              <div className={z.secondContainer}>
                <ProjectCard 
                  project={projects[3]} 
                  onDetailsClick={handleDetailsClick}
                  isMobile={false}
                />

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
            </>
          )}

          {isMobile && (
            <div className={z.buttonsContainer}>
              <div className={z.upContainer}>
                <div className={z.buttonWrapper}>
                  <div 
                    className={z.buttonRight} 
                    onClick={handleBathsClick}
                    style={{ cursor: 'pointer' }}
                  />
                  <div className={z.buttonTitleMobile}>Проекты бань</div>
                </div>
                <div className={z.buttonWrapper}>
                  <div 
                    className={z.buttonLeft} 
                    onClick={handleHousesClick}
                    style={{ cursor: 'pointer' }}
                  />
                  <div className={z.buttonTitleMobile}>Проекты домов</div>
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
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onDetailsClick, isMobile }) => {
  return (
    <div className={z.containerWith}>
      <div className={project.image}></div>
      <div className={z.textTitleContainer}>{project.title}</div>
      <div className={z.textContainer}>
        Сруб под усадку или под ключ
        {!isMobile && (
          <>
            <p className={z.razmer}>Размеры - {project.size}</p>
            <p className={z.floors}>Этажность - {project.floors}</p>
          </>
        )}
      </div>
      <button 
        className={z.containerButton}
        onClick={onDetailsClick}
      >
        Подробнее
      </button>
    </div>
  );
};

export default Projects;