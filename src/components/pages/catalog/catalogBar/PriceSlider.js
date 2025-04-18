import React, { useState } from 'react';
import z from './PriceSlider.module.css'; // Создашь стили потом

const PriceSlider = ({ onPriceChange }) => {
  const [price, setPrice] = useState(3000000); // Дефолт = максимум (2 ляма)

  // Обработчик изменения цены
  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value);
    setPrice(newPrice);
    if (onPriceChange) onPriceChange(newPrice); // Пробрасываем в родитель
  };

  // Форматируем цену (1 500 000 ₽)
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <div className={z.priceSliderContainer}>
      <label className={z.priceLabel}>
        Цена до: <span className={z.priceValue}>{formatPrice(price)}</span>
      </label>
      <input
        type="range"
        min="640000"    
        max="3000000"   
        step="10000"    
        value={price}
        onChange={handlePriceChange}
        className={z.slider}
      />
    </div>
  );
};

export default PriceSlider;