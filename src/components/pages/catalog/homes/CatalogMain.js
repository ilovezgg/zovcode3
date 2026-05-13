import React from "react";
import HouseCard from "../homes/HouseCard";
import { useFavorites } from "../../favourites/useFavourites";
import z from "./CatalogMain.module.css";

const CatalogMain = ({ houses = [] }) => {
  const { favorites, toggleFavorite } = useFavorites();

  if (!houses.length) {
    return (
      <div className={z.catalogMain}>
        <div className={z.container}>
          <div className={z.noResults}>Ничего не найдено</div>
        </div>
      </div>
    );
  }

  return (
    <div className={z.catalogMain}>
      <div className={z.container}>
        <div className={z.grid}>
          {houses.map(house => (
            <HouseCard
              key={house.id}
              {...house}
              onToggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(house.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogMain;