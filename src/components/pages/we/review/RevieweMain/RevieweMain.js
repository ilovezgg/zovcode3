import React from 'react'
import z from './ReviewMain.module.css'
import { useNavigate } from 'react-router-dom'
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
        image: require('./pics/ziznennyi-stil-kantri-muzykantov-v-pomesenii.jpg')
      }
    ],
    [
      {
        id: 3,
        title: "Технология строительства сруба из бруса",
        subtitle: "Пошаговое руководство от фундамента до кровли",
       image: require('./pics/vysokii-vid-celoveka-derzasego-perforator.jpg')
      },
      {
        id: 4,
        title: "Профилированный или клееный брус?",
        subtitle: "Сравнительный анализ материалов для вашего проекта",
       image: require('./pics/kuca-derevannyh-dosok.jpg')
      }
    ],
    [
      {
        id: 5,
        title: "Фундамент для сруба: виды и особенности",
        subtitle: "Опыт профессионалов: как избежать распространенных ошибок",
     image: require('./pics/stal-noi-prutok-na-stroitel-noi-plosadke.jpg')
      },
      {
        id: 6,
        title: "Кровля для сруба: современные материалы",
        subtitle: "Все о естественных процессах и правильных сроках",
       image: require('./pics/krupnyi-plan-sistemy-ventilacii.jpg')
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
  const navigate = useNavigate()

  const handleImageClick = () => {
    navigate(link)
  }

  return (
    <div className={z.review}>
      <div 
        className={z.reviewPic}
        style={{ backgroundImage: `url(${image})` }}
        onClick={handleImageClick}
      />
      <div className={z.reviewText}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default RevieweMain