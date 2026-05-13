import React from "react";
import { useParams } from "react-router-dom";
import houseData2 from "./houseData2/houseData2.js";
import HouseSlider from "./HouseSlider";
import z from "./FirstCardHouse.module.css";
import AllPart from './allInfoPart/AllPart.js'
import Buttons2 from "../../home/header/Buttons2.js";

const FirstCardHouse = () => {
  const { id } = useParams();
  const house = houseData2.find((house) => house.id === Number(id));

  if (!house) {
    return <div className={z.notFound}>Проект не найден</div>;
  }

  if (!house.image || house.image.length === 0) {
    return <div className={z.notFound}>Изображения отсутствуют</div>;
  }

  const mainSpecs = [
    { label: 'Брус 90×140 мм', value: house.price },
    { label: 'Брус 140×140 мм', value: house.pricetwo },
    { label: 'Этажность', value: house.floors },
    { label: 'Размер', value: house.description }
  ];

  return (
    <div className={z.main}>
      <Buttons2 />
      
      <div className={z.hero}>
        <HouseSlider images={house.image} />
      </div>

      <div className={z.content}>
        <div className={z.header}>
          <div className={z.titleBlock}>
            <span className={z.label}>Проект</span>
            <h1 className={z.title}>{house.title}</h1>
          </div>
          
          <div className={z.specs}>
            {mainSpecs.map((spec, i) => (
              <div key={i} className={z.specCard}>
                <div className={z.specLabel}>{spec.label}</div>
                <div className={z.specValue}>{spec.value}</div>
              </div>
            ))}
          </div>

          <div className={z.planWrapper}>
            <div className={z.planLabel}>Планировка</div>
            <img 
              src={house.planImage || './imgForSlider/d1-plan.png'} 
              alt={`План ${house.title}`} 
              className={z.planImage} 
            />
          </div>
        </div>
      </div>

      <AllPart/>
    </div>
  );
};

export default FirstCardHouse;