import React from 'react';
import { useFavorites } from '../FavouritesContext';
import HouseCard from '../../catalog/homes/HouseCard';
import z from './FavMain.module.css';
import houseData from '../../catalog/housedata/houseData';

const FavMain = ({ allHouses = houseData }) => { 
  const { favorites } = useFavorites();

  console.log("Все дома:", allHouses);
  console.log("Избранные ID:", favorites);

  const favoriteHouses = allHouses.filter(house => {
    const isFavorite = favorites.some(favId => String(favId) === String(house.id));
    console.log(`Дом ${house.id} — избранный?`, isFavorite);
    return isFavorite;
  });

  console.log("Отфильтрованные дома:", favoriteHouses);

  return (
    <div className={z.container}>
      <div>Избранное ({favoriteHouses.length})</div>
      {favoriteHouses.length > 0 ? (
        <div className={z.container2}>
<div className={z.grid}>
          {favoriteHouses.map(house => (
            <HouseCard key={house.id} {...house} isFavorite={true} />
          ))}
        </div>
        </div>
      ) : (
        <p>Пока что нет избранного</p>
      )}
    </div>
  );
};

export default FavMain;