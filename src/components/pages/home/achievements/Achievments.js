import React from 'react'
import z from './Achievments.module.css';
import AnimatedCounter from './AnimatedCounter';
const Achievments = () => {
 

 
  return (
    <div>
         <div className={z.achievmentsMain}>
         <div className={z.containerAch}>
          <div className={z.first}>
          <div className={z.years}> 
          <AnimatedCounter  target={15} className={z.animated} /> 
          <div className={z.textYears}>Лет на рынке</div>
          </div>
          </div>
          
          <div className={z.second}>
          <div className={z.houses}>
          <AnimatedCounter target={500} className={z.animated3}/>
          <div className={z.textHouses}> Построенных объектов</div>
          </div>
          </div>
         
          <div className={z.third}>
          <div className={z.garanti}>
          <AnimatedCounter target={3} className={z.animated2} /> 
          <div className={z.textGaranti}>Года гарантии</div>
          </div>
          </div>
          
      
  
       
    </div>
         </div>
    </div>
      
  )
}

export default Achievments
