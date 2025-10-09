import React from 'react'
import z from './EcoHouseMain.module.css'
const EcoHouseMain = () => {
  return (
    <div className={z.main}>
      <div className={z.containerForPic}>
       <div className={z.pic}>
         <div className={z.blackCube}>
          <div className={z.title}>
           Экологичность сруба: здоровье и комфорт
          </div>
          <div className={z.subTitle}>
Как натуральная древесина влияет на микроклимат в доме
          </div>
         </div>
       </div>
      </div>
    </div>
  )
}

export default EcoHouseMain