import React from "react";
import { useParams } from "react-router-dom";
import houseData2 from "./houseData2/houseData2.js";
import HouseSlider from "./HouseSlider";
import z from "./FirstCardHouse.module.css";
import AllPart from './allInfoPart/AllPart.js'
import Buttons from "../../home/header/Buttons.js";

const FirstCardHouse = () => {
  const { id } = useParams();
  const house = houseData2.find((house) => house.id === Number(id));

  if (!house) {
    return <div>Дом не найден</div>;
  }

  if (!house.image || house.image.length === 0) {
    return <div>Для этого дома нет изображений</div>;
  }

  return (
    <div className={z.main}>
      <Buttons />
      <div className={z.sliderContainer}>
        <HouseSlider images={house.image} />
      </div>
      <div className={z.info}>
        <div className={z.projectName}>{house.title}</div>
        <div className={z.fullInfo}>
          <div className={z.price}>
            <div className={z.priceName}>Цена сруба из бруса 90×140</div>
            <div className={z.price90x140}>{house.price}</div>
          </div>
          <div className={z.price}>
            <div className={z.priceName}>Цена сруба из бруса 140×140</div>
            <div className={z.price90x140}>{house.pricetwo}</div>
          </div>
          <div className={z.floors}>
            <div className={z.floorsName}>Этажность</div>
            <div className={z.curFloors}>{house.floors}</div>
          </div>
          <div className={z.size}>
            <div className={z.sizeName}>Размеры</div>
            <div className={z.curSize}>{house.description}</div>
          </div>
        </div>
        <div className={z.plan}></div>
      </div>
    <AllPart/>
    </div>
  );
};

export default FirstCardHouse;
