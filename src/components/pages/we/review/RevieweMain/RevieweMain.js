import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import z from './ReviewMain.module.css';

const ArticleCard = ({ image, title, subtitle, link, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = (
    <div 
      ref={ref} 
      className={`${z.card} ${inView ? z.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={z.imageWrapper}>
        <img src={image} alt={title} className={z.image} loading="lazy" />
      </div>
      <div className={z.textWrapper}>
        <h3 className={z.cardTitle}>{title}</h3>
        <p className={z.cardSubtitle}>{subtitle}</p>
      </div>
    </div>
  );

  return link ? (
    <Link to={link} className={z.cardLink}>
      {content}
    </Link>
  ) : content;
};

const RevieweMain = () => {
  const articles = [
    {
      id: 1,
      title: "Зимний лес для сруба: мифы и реальность",
      subtitle: "Преимущества зимней заготовки древесины",
      image: require('./pics/dom-so-sneznymi-sosnami-zimoi.jpg'),
      link: "/winterforest"
    },
    {
      id: 2,
      title: "Экологичность сруба: здоровье и комфорт",
      subtitle: "Как натуральная древесина влияет на микроклимат",
      image: require('./pics/ziznennyi-stil-kantri-muzykantov-v-pomesenii.jpg'),
      link: "/ecohouse"
    },
    {
      id: 3,
      title: "Технология строительства сруба из бруса",
      subtitle: "Пошаговое руководство от фундамента до кровли",
      image: require('./pics/vysokii-vid-celoveka-derzasego-perforator.jpg'),
      link: "/winterforest"
    },
    {
      id: 4,
      title: "Профилированный или клееный брус?",
      subtitle: "Сравнительный анализ материалов для проекта",
      image: require('./pics/kuca-derevannyh-dosok.jpg'),
      link: "/winterforest"
    },
    {
      id: 5,
      title: "Фундамент для сруба: виды и особенности",
      subtitle: "Как избежать распространенных ошибок",
      image: require('./pics/stal-noi-prutok-na-stroitel-noi-plosadke.jpg'),
      link: "/winterforest"
    },
    {
      id: 6,
      title: "Кровля для сруба: современные материалы",
      subtitle: "Все о естественных процессах и сроках",
      image: require('./pics/krupnyi-plan-sistemy-ventilacii.jpg'),
      link: "/winterforest"
    }
  ];

  return (
    <section className={z.section}>
      <div className={z.container}>
        <h2 className={z.title}>Статьи и обзоры</h2>
        <div className={z.grid}>
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              image={article.image}
              title={article.title}
              subtitle={article.subtitle}
              link={article.link}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevieweMain;