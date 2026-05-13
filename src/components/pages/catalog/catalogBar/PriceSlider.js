import React, { useState, useEffect } from 'react';
import z from './PriceSlider.module.css'; 

const PriceSlider = ({ onPriceChange, currentPrice }) => {
  const [price, setPrice] = useState(currentPrice || 1850000); 

  // Синхронизация с родителем при сбросе
  useEffect(() => {
    if (currentPrice!== undefined) {
      setPrice(currentPrice);
    }
  }, [currentPrice]);

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value);
    setPrice(newPrice);
    onPriceChange?.(newPrice); 
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <div className={z.priceSliderContainer}>
      <div className={z.priceHeader}>
        <span className={z.priceLabel}>Цена до</span>
        <span className={z.priceValue}>{formatPrice(price)}</span>
      </div>
      <input
        type="range"
        min="640000" 
        max="1850000" 
        step="10000" 
        value={price}
        onChange={handlePriceChange}
        className={z.slider}
      />
    </div>
  );
};

export default PriceSlider;