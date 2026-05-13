import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import z from "./Projects.module.css";
import HouseSelectorModal from "./houseSelector/HouseSelectorModal";

const Projects = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBathsClick = () => navigate('/catalog');
  const handleHousesClick = () => navigate('/catalog');
  const handleAllProjectsClick = () => navigate('/catalog');
  const handleDetailsClick = () => navigate('/catalog');

  const projects = [
    { id: 1, title: "Проект Д2", size: "6×6", floors: 2 },
    { id: 2, title: "Проект Д5", size: "6×6", floors: 2 },
    { id: 3, title: "Проект Д7", size: "6×6", floors: 2 },
    { id: 4, title: "Проект Д12", size: "6×6", floors: 1 },
  ];

  const projectImages = [
    require("../header/img/house2.jpg"),
    require("../header/img/house5.jpg"),
    require("../header/img/house7.jpg"),
    require("../header/img/house12.jpg"),
  ];

  const ProjectCard = ({ project, imageSrc, onDetailsClick }) => {
    return (
      <div className={z.card}>
        <div 
          className={z.cardImage}
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className={z.cardContent}>
          <div className={z.cardHeader}>
            <h3 className={z.cardTitle}>{project.title}</h3>
            <p className={z.cardDesc}>Сруб под усадку или под ключ</p>
          </div>
          <div className={z.cardSpecs}>
            <span className={z.cardSpec}>Размер — {project.size}</span>
            <span className={z.cardSpec}>Этажность — {project.floors}</span>
          </div>
          <button className={z.cardButton} onClick={onDetailsClick}>
            Подробнее
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className={z.mainProjects}>
      <div className={z.container}>
        <h2 className={z.projectsTitle}>
          Популярные проекты. Их выбирают чаще всего.
        </h2>

        <div className={z.grid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              imageSrc={projectImages[index]}
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </div>

        <div className={z.actions}>
          <div className={z.actionButtons}>
            <button 
              className={z.actionCard}
              onClick={handleBathsClick}
              style={{ backgroundImage: `url(${require("../header/img/9banya.jpg")})` }}
            >
              <span className={z.actionLabel}>Проекты бань</span>
            </button>
            <button 
              className={z.actionCard}
              onClick={handleHousesClick}
              style={{ backgroundImage: `url(${require("../header/img/8dom.jpg")})` }}
            >
              <span className={z.actionLabel}>Проекты домов</span>
            </button>
          </div>
          
          <div className={z.mainActions}>
            <button className={z.primaryButton} onClick={handleAllProjectsClick}>
              Смотреть все проекты
            </button>
            <button className={z.secondaryButton} onClick={() => setIsModalOpen(true)}>
              Подобрать дом
            </button>
          </div>
        </div>
      </div>

      <HouseSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;