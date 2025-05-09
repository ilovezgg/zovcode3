import React from "react";
import HouseCard from "../homes/HouseCard";
import { useFavorites } from "../../favourites/useFavourites";
import z from "./CatalogMain.module.css";

const CatalogMain = ({ houses = [] }) => {
  const { favorites, toggleFavorite } = useFavorites();
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
              {...house}
              onToggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(house.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CatalogMain;