import React from 'react'
import z from './ReviewMain.module.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const RevieweMain = () => {
  const articlesData = [
    [
      {
        id: 1,
        title: "Зимний лес для сруба: мифы и реальность",
        subtitle: "Преимущества зимней заготовки древесины и особенности строительства",
        image: require('./pics/dom-so-sneznymi-sosnami-zimoi.jpg'),
       link: "/winterforest"
      },
      {
        id: 2,
        title: "Экологичность сруба: здоровье и комфорт",
        subtitle: "Как натуральная древесина влияет на микроклимат в доме",
        image: require('./pics/ziznennyi-stil-kantri-muzykantov-v-pomesenii.jpg'),
        link: "/ecohouse"
      }
    ],
    [
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
        subtitle: "Сравнительный анализ материалов для вашего проекта",
       image: require('./pics/kuca-derevannyh-dosok.jpg'),
         link: "/winterforest"
      }
    ],
    [
      {
        id: 5,
        title: "Фундамент для сруба: виды и особенности",
        subtitle: "Опыт профессионалов: как избежать распространенных ошибок",
     image: require('./pics/stal-noi-prutok-na-stroitel-noi-plosadke.jpg'),
         link: "/winterforest"
      },
      {
        id: 6,
        title: "Кровля для сруба: современные материалы",
        subtitle: "Все о естественных процессах и правильных сроках",
       image: require('./pics/krupnyi-plan-sistemy-ventilacii.jpg'),
         link: "/winterforest"
      }
    ]
  ]

return (
    <div className={z.main}>
      {articlesData.map((row, rowIndex) => (
        <div key={rowIndex} className={z.three}>
          {row.map(article => (
            <ArticleCard
              key={article.id}
              image={article.image}
              title={article.title}
              subtitle={article.subtitle}
              link={article.link}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

const ArticleCard = ({ image, title, subtitle, link }) => {
  // Если нет ссылки - рендери просто div вместо Link
  if (!link) {
    return (
      <div className={z.review}>
        <div 
          className={z.reviewPic}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={z.reviewText}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }

  // Если есть ссылка - рендери Link
  return (
    <Link to={link} className={z.cardLink}>
      <div className={z.review}>
        <div 
          className={z.reviewPic}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={z.reviewText}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  )
}

export default RevieweMain