import React, { useState, useEffect } from 'react';
import Footer from '../home/footer/Footer';
import Buttons from '../home/header/Buttons';
import FilterPage from './catalogBar/FilterPage';
import CatalogMain from './homes/CatalogMain';
import houseData from './housedata/houseData';

const Catalog = () => {
  // Все состояния
  const [searchTerm, setSearchTerm] = useState('');
  const [price, setPrice] = useState(2000000);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [filteredHouses, setFilteredHouses] = useState(houseData);

  // Преобразуем цену "3 000 000 ₽" → 3000000
  const parsePrice = (priceStr) => {
    const num = parseInt(priceStr.replace(/\s+/g, '').replace('₽', ''));
    return isNaN(num) ? 0 : num; // Защита от NaN
  };

  // Основная фильтрация
  useEffect(() => {
    console.log('Фильтруем по:', { searchTerm, price, selectedFloor, selectedSize });
    
    const filtered = houseData.filter(house => {
      // Поиск по названию (если searchTerm не пустой)
      const matchesSearch = searchTerm 
        ? house.title.toLowerCase().includes(searchTerm.toLowerCase()) 
        : true;
      
      // Фильтр по цене
      const housePrice = parsePrice(house.price);
      const matchesPrice = housePrice <= price;
      
      // Фильтр по этажам
      const matchesFloor = selectedFloor 
        ? house.floors === selectedFloor 
        : true;
      
      // Фильтр по размерам
      const matchesSize = selectedSize 
        ? house.description === selectedSize 
        : true;
      
      return matchesSearch && matchesPrice && matchesFloor && matchesSize;
    });
    
    console.log('Найдено домов:', filtered.length);
    setFilteredHouses(filtered);
  }, [searchTerm, price, selectedFloor, selectedSize]);

  // Обработчики
  const handleSearch = (term) => setSearchTerm(term);
  const handlePriceChange = (newPrice) => setPrice(newPrice);
  const handleFloorChange = (floor) => setSelectedFloor(floor);
  const handleSizeChange = (size) => setSelectedSize(size);
  
  // Сброс всех фильтров
  const resetFilters = () => {
    setSearchTerm('');
    setPrice(2000000);
    setSelectedFloor(null);
    setSelectedSize(null);
  };

  return (
    <div>
      <Buttons />
      
      <FilterPage 
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onPriceChange={handlePriceChange}
        onFloorChange={handleFloorChange}
        onSizeChange={handleSizeChange}
        onResetFilters={resetFilters}
        activeFloor={selectedFloor}
        activeSize={selectedSize}
      />
      
      <CatalogMain houses={filteredHouses} />
      
      <Footer />
    </div>
  );
};

export default Catalog;