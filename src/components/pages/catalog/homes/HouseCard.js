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
    <div className={z.card} onClick={handleCardClick}>
      <div 
        className={z.cardImage}
        style={{ backgroundImage: `url(${image})` }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(id);
          }}
          className={`${z.favoriteButton} ${isFavorite ? z.active : ''}`}
          aria-label="В избранное"
        >
          <svg className={z.heartIcon} viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      
      <div className={z.cardContent}>
        <h3 className={z.title}>{title}</h3>
        <p className={z.desc}>{description}</p>
        <div className={z.footer}>
          <span className={z.price}>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;