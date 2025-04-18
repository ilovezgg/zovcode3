import React from "react";
import z from "./CatalogMain.module.css";
import HouseCard from "../homes/HouseCard";

const CatalogMain = ({ houses }) => {
  // Группируем по 3 карточки в ряд
  const groupedHouses = [];
  for (let i = 0; i < houses.length; i += 3) {
    groupedHouses.push(houses.slice(i, i + 3));
  }

  return (
    <div className={z.catalogMain}>
      {groupedHouses.map((group, index) => (
        <div key={index} className={z.houseRow}>
          {group.map(house => (
            <HouseCard
              key={house.id}
              image={house.image}
              title={house.title}
              description={house.description}
              price={house.price}
              floors={house.floors} 
            />
          ))}
        </div>
      ))}
      
      {houses.length === 0 && (
        <p className={z.noResults}>Ничего не найдено</p>
      )}
    </div>
  );
};

export default CatalogMain;