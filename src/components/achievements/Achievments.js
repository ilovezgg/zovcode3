import React from 'react'
import z from './Achievments.module.css';
import AnimatedCounter from './AnimatedCounter';
const Achievments = () => {
 

 
  return (
    <div>
         <div className={z.achievmentsMain}>
         <div className={z.containerAch}>
          <div className={z.first}>
          <div className={z.textYears}>Десять лет на рынке</div>
          <div className={z.years}> 
          <AnimatedCounter  target={10} className={z.animated} /> 
          </div>
          </div>
          
          <div className={z.second}>
          <div className={z.textHouses}>Более двухста построенных объектов</div>
          <div className={z.houses}>
          <AnimatedCounter target={200} className={z.animated3}/>
          </div>
          </div>
         
          <div className={z.third}>
          <div className={z.textGaranti}>Пять лет гарантии</div>
          <div className={z.garanti}>
          <AnimatedCounter target={5} className={z.animated2} /> 
          </div>
          </div>
          
      
  
       
    </div>
         </div>
    </div>
      
  )
}

export default Achievments
