// homes/CatalogMain.js
import React from "react";
import z from "./CatalogMain.module.css";
import HouseCard from "./HouseCard";
import housesData from "../housedata/houseData"; // Импортируем данные

const CatalogMain = ({ searchTerm }) => {
  const safeSearchTerm = (searchTerm || "").toLowerCase();
  
  const filteredHouses = housesData.filter(house => 
    house?.title?.toLowerCase().includes(safeSearchTerm)
  );

 
  const groupedHouses = [];
  for (let i = 0; i < filteredHouses.length; i += 3) {
    groupedHouses.push(filteredHouses.slice(i, i + 3));
  }

  return (
    <div className={z.catalogMain}>
      {groupedHouses.map((group, index) => (
        <div key={index} className={z.first3}>
          {group.map(house => (
            <HouseCard
              key={house.id}
              image={house.image}
              title={house.title}
              description={house.description}
              price={house.price}
            />
          ))}
        </div>
      ))}
      
      {filteredHouses.length === 0 && (
        <p className={z.noResults}>Дома не найдены</p>
      )}
    </div>
  );
};
export default CatalogMain;
