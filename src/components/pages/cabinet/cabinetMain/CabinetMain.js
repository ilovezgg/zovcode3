import React from 'react'
import z from './CabinetMain.module.css'
const CabinetMain = () => {
  return (
    <div className={z.cabinetMain}>
        <div className={z.cabinetRegister}>
          <div className={z.leftPart}>
            <div className={z.titleRegister}>
             Вход
            </div>
          <button className={z.number}>
              Вход по номеру телефона
          </button>
          <input className={z.email}
           type="email"
           placeholder="Ваша почта"
          />
           <input className={z.password}
           type="password"
           placeholder="Ваш пароль"
          />
          <button className={z.register}>
             Регистрация
          </button>
          </div>
          <div className={z.rightPart}>
           
          </div>
        </div>
    </div>
  )
}

export default CabinetMain;