import React from 'react';
import { useFavorites } from '../../favourites/FavouritesContext';
import z from './HouseCard.module.css';

const HouseCard = ({ id, image, title, description, price }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(id);

 

  return (
    <div className={z.card} style={{ position: 'relative' }}> 
      <div 
        className={z.cardImage}
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className={z.cardContent}>
        <h3 className={z.title}>{title}</h3>
        <p className={z.desc}>{description}</p>
        <div className={z.price}>{price}</div>
      </div>

      <button
  onClick={(e) => {
    e.stopPropagation();
    toggleFavorite(id);
  }}
  style={{
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    fontSize: '20px',
    cursor: 'pointer',
    zIndex: 10,
    color: isFavorite ? 'gold' : 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {isFavorite ? '❤️' : '🤍'} {/* Используем эмодзи для гарантии */}
</button>
    </div>
  );
};

export default HouseCard;