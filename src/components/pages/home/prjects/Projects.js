import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import z from "./Projects.module.css";
import HouseSelectorModal from "./houseSelector/HouseSelectorModal";

const Projects = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBathsClick = () => navigate('/catalog');
  const handleHousesClick = () => navigate('/catalog');
  const handleAllProjectsClick = () => navigate('/catalog');
  const handleDetailsClick = () => navigate('/catalog');

  const projects = [
    { id: 1, title: "Проект Д2", size: "6х6", floors: 2 },
    { id: 2, title: "Проект Д5", size: "6х6", floors: 2 },
    { id: 3, title: "Проект Д7", size: "6х6", floors: 2 },
    { id: 4, title: "Проект Д12", size: "6х6", floors: 1 },
  ];

  const projectImages = [
    require("../header/img/house2.jpg"),
    require("../header/img/house5.jpg"),
    require("../header/img/house7.jpg"),
    require("../header/img/house12.jpg"),
  ];

  const ProjectCardDesktop = ({ project, imageSrc, onDetailsClick }) => {
    return (
      <div className={z.desktopCard}>
        <div 
          className={z.desktopCardImage}
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className={z.desktopCardGlass}>
          <div className={z.desktopCardTitle}>{project.title}</div>
          <div className={z.desktopCardText}>
            Сруб под усадку или под ключ
            <p className={z.desktopCardDetail}>Размеры — {project.size}</p>
            <p className={z.desktopCardDetail}>Этажность — {project.floors}</p>
          </div>
          <button className={z.desktopCardButton} onClick={onDetailsClick}>
            Подробнее
          </button>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project, imageSrc, onDetailsClick }) => {
    return (
      <div className={z.containerWith}>
        <div 
          className={z.projectImageMobile}
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className={z.textTitleContainer}>{project.title}</div>
        <div className={z.textContainer}>
          Сруб под усадку или под ключ
          <p className={z.razmer}>Размеры - {project.size}</p>
          <p className={z.floors}>Этажность - {project.floors}</p>
        </div>
        <button className={z.containerButton} onClick={onDetailsClick}>
          Подробнее
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className={z.mainProjects}>
        <div className={z.projectsTitle}>
          Посмотрите самые частопродаваемые дома. Они заслужили доверие покупателей.
        </div>

        <div className={z.totalContainer}>
          {isMobile ? (
            <div>
              <div className={z.mobileProjectsContainer}>
                {projects.map((project, index) => (
                  <div key={project.id} className={z.mobileProjectRow}>
                    <ProjectCard
                      project={project}
                      imageSrc={projectImages[index]}
                      onDetailsClick={handleDetailsClick}
                    />
                  </div>
                ))}
              </div>

              <div className={z.buttonsContainer}>
                <div className={z.upContainer}>
                  <div className={z.buttonWrapper}>
                    <div
                      className={z.buttonRight}
                      onClick={handleBathsClick}
                      style={{ 
                        backgroundImage: `url(${require("../header/img/9banya.jpg")})`,
                        cursor: 'pointer'
                      }}
                    />
                    <div className={z.buttonTitleMobile}>Проекты бань</div>
                  </div>
                  <div className={z.buttonWrapper}>
                    <div
                      className={z.buttonLeft}
                      onClick={handleHousesClick}
                      style={{ 
                        backgroundImage: `url(${require("../header/img/8dom.jpg")})`,
                        cursor: 'pointer'
                      }}
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
                  <button className={z.modalButton} onClick={() => setIsModalOpen(true)}>
                    <span className={z.modalButtonText}>Подобрать дом</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className={z.desktopRowsContainer}>
              <div className={z.desktopRow}>
                <ProjectCardDesktop 
                  project={projects[0]} 
                  imageSrc={projectImages[0]} 
                  onDetailsClick={handleDetailsClick} 
                />
                <ProjectCardDesktop 
                  project={projects[1]} 
                  imageSrc={projectImages[1]} 
                  onDetailsClick={handleDetailsClick} 
                />
              </div>
              <div className={z.desktopRow}>
                <ProjectCardDesktop 
                  project={projects[2]} 
                  imageSrc={projectImages[2]} 
                  onDetailsClick={handleDetailsClick} 
                />
                <ProjectCardDesktop 
                  project={projects[3]} 
                  imageSrc={projectImages[3]} 
                  onDetailsClick={handleDetailsClick} 
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <HouseSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Projects;