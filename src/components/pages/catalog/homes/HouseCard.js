import React from "react";
import z from "./HouseCard.module.css";

const HouseCard = ({ image, title, description, price }) => {
  return (
    <div className={z.card}>
      <div
        className={z.cardImage}
        style={{
          backgroundImage: image ? `url(${image.default || image})` : "none",
        }}
      />
      <div className={z.cardContent}>
        <div className={z.cardTitle}>{title}</div>
        <div className={z.cardDescription}>{description}</div>
        <div className={z.cardPrice}>{price}</div>
      </div>
    </div>
  );
};

export default HouseCard;
