import React, { useState, useEffect } from 'react';
import Footer from '../home/footer/Footer';
import Buttons2 from '../home/header/Buttons2';
import FilterPage from './catalogBar/FilterPage';
import CatalogMain from './homes/CatalogMain';
import houseData from './housedata/houseData';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [price, setPrice] = useState(1850000); // было 2000000
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [filteredHouses, setFilteredHouses] = useState(houseData);

  const parsePrice = (priceStr) => {
    const num = parseInt(priceStr.replace(/\s+/g, '').replace('₽', ''));
    return isNaN(num)? 0 : num;
  };

  // Нормализация: 6x6, 6х6, 8,5x9 -> 6×6, 8.5×9
  const normalizeSize = (size) => {
    if (!size) return '';
    return size
      .toLowerCase()
      .replace(/x/g, '×')
      .replace(/х/g, '×')  // русская х
      .replace(/,/g, '.')
      .trim();
  };

  useEffect(() => {
    const filtered = houseData.filter(house => {
      const matchesSearch =!searchTerm || 
        house.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        house.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const housePrice = parsePrice(house.price);
      const matchesPrice = housePrice <= price;
      
      const matchesFloor = selectedFloor === null || house.floors === selectedFloor;
      
      const matchesSize = selectedSize === null || 
        normalizeSize(house.description) === normalizeSize(selectedSize);
      
      return matchesSearch && matchesPrice && matchesFloor && matchesSize;
    });
    
    setFilteredHouses(filtered);
  }, [searchTerm, price, selectedFloor, selectedSize]);

  const handleSearch = (term) => setSearchTerm(term);
  const handlePriceChange = (newPrice) => setPrice(newPrice);
  const handleFloorChange = (floor) => setSelectedFloor(floor);
  const handleSizeChange = (size) => setSelectedSize(size);
  
  const resetFilters = () => {
    setSearchTerm('');
    setPrice(1850000);
    setSelectedFloor(null);
    setSelectedSize(null);
  };

  return (
    <div>
      <Buttons2 />
      <FilterPage 
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onPriceChange={handlePriceChange}
        onFloorChange={handleFloorChange}
        onSizeChange={handleSizeChange}
        onResetFilters={resetFilters}
        activeFloor={selectedFloor}
        activeSize={selectedSize}
        activePrice={price}
      />
      <CatalogMain houses={filteredHouses} />
      <Footer />
    </div>
  );
};

export default Catalog;