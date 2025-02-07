import React from 'react'
import z from './Header.module.css'
const Header = () => {
  return (
    <div>
      <div className={z.mainHeaderBackground}><div className={z.mainHeader}>
        <div className={z.mainHeaderTwo}> 
        <div className={z.headerButtons}>
            <button className={z.mainButton}>Главная</button>
            <button className={z.aboutusButton}>О нас</button>
            <button className={z.contactsButton}>Контакты</button>
            <button className={z.catalogButton}>Каталог</button>
            <button className={z.callbackButton}>Обратный звонок</button>
        </div>
        </div>
       
        <div className={z.headerTitle}>
            Качественные дома из профилированного бруса.
            Мы - синоним слову "Надежность"
        </div>
       
        </div></div>
      
        
      </div>
  )
}

export default Header
