import React from 'react'
import z from './Main.module.css'
const Main = () => {
  return (
    <div>
      <div className={z.main}>
        <div className={z.picContainer1}>
        <div className={z.winter}>
       
        </div>
        <div className={z.winter2}> 

        </div>
        </div>
        <div className={z.text}> 
        <span className={z.workFor}>Работаем для вас зимой и летом.</span> 
         <br/>Компания «СИГМА» специализируется на строительстве домов под ключ из газобетона, кирпича и керамоблока в Великом Новгороде и Новгородской области.
         <br/>В нашей компании работают узкие специалисты-профессионалы всех направлений, задействованных при строительстве и проектировании Вашего дома. У нас есть все необходимое, чтобы квалифицированно реализовать 
         проект любой степени сложности! Для строительства используются только высококачественные стройматериалы и успешные современные технологии.
        </div>
        <div className={z.picContainer2}>

        
        <div className={z.summer}>

        </div>
        <div className={z.summer2}> 

        </div>
        </div>
      </div>
    </div>
  )
}

export default Main
