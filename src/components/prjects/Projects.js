import React from 'react'
import z from './Projects.module.css'
import LShapePolygon from './QuestionButton'
const projects = () => {
  return (
    <div>
        <div className={z.mainProjects}>
            
        <div className={z.projectsTitle}>
          Посмотрите самые частопродаваемые дома. Они <p className={z.zasluga}>заслужили</p> доверие покупателей.
        </div>
        <div className={z.totalContainer}>
        <div className={z.containerProjects}>
         <div className={z.containerWith}>
          <div className={z.picIn2}>
           
          </div>
          <div className={z.textTitleContainer}>
           Дом 48
          </div>
          <div className={z.textContainer}>
           Сруб под усадку или под ключ
           <p className={z.razmer}>Размеры - 6х6</p>
           <p className={z.floors}>Этажность - 2</p> 
          </div>
          <button className={z.containerButton}>Подробнее</button>
         </div>
         <div className={z.containerWith}>
          <div className={z.picIn3}>
           
          </div>
          <div className={z.textTitleContainer}>
           Дом 48
          </div>
          <div className={z.textContainer}>
           Сруб под усадку или под ключ
           <p className={z.razmer}>Размеры - 6х6</p>
           <p className={z.floors}>Этажность - 2</p> 
          </div>
          <button className={z.containerButton}>Подробнее</button>
         </div>
      
         <div className={z.containerWith}>
          <div className={z.picIn4}>
           
          </div>
          <div className={z.textTitleContainer}>
           Дом 48
          </div>
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
          <div className={z.picIn5}>
           
          </div>
          <div className={z.textTitleContainer}>
           Дом 48
          </div>
          <div className={z.textContainer}>
           Сруб под усадку или под ключ
           <p className={z.razmer}>Размеры - 6х6</p>
           <p className={z.floors}>Этажность - 1</p> 
          </div>
          <button className={z.containerButton}>Подробнее</button>
         </div><div className={z.containerWith}>
          <div className={z.picIn6}>
           
          </div>
          <div className={z.textTitleContainer}>
           Дом 48
          </div>
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
  )
}

export default projects