import React from 'react';
import { useFavorites } from '../../favourites/FavouritesContext';
import { useNavigate } from 'react-router-dom';
import z from './HouseCard.module.css';

const HouseCard = ({ id, image, title, description, price }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();
  const isFavorite = favorites.includes(id);

  const handleCardClick = () => {
    navigate(`/house/${id}`);
  };

  return (
    <div 
      className={z.card} 
      style={{ position: 'relative', cursor: 'pointer' }}
      onClick={handleCardClick}
    > 
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
        className={z.favoriteButton}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default HouseCard;