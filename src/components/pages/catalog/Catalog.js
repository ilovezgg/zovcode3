import React, { useState, useEffect } from 'react';
import Footer from '../home/footer/Footer';
import Buttons from '../home/header/Buttons';
import FilterPage from './catalogBar/FilterPage';
import CatalogMain from './homes/CatalogMain';
import houseData from './housedata/houseData';

const Catalog = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [price, setPrice] = useState(2000000);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [filteredHouses, setFilteredHouses] = useState(houseData);


  const parsePrice = (priceStr) => {
    const num = parseInt(priceStr.replace(/\s+/g, '').replace('₽', ''));
    return isNaN(num) ? 0 : num; // Защита от NaN
  };


  useEffect(() => {
    console.log('Фильтруем по:', { searchTerm, price, selectedFloor, selectedSize });
    
    const filtered = houseData.filter(house => {
      const matchesSearch = searchTerm 
        ? house.title.toLowerCase().includes(searchTerm.toLowerCase()) 
        : true;
      

      const housePrice = parsePrice(house.price);
      const matchesPrice = housePrice <= price;
      

      const matchesFloor = selectedFloor 
        ? house.floors === selectedFloor 
        : true;
      

      const matchesSize = selectedSize 
        ? house.description === selectedSize 
        : true;
      
      return matchesSearch && matchesPrice && matchesFloor && matchesSize;
    });
    
    console.log('Найдено домов:', filtered.length);
    setFilteredHouses(filtered);
  }, [searchTerm, price, selectedFloor, selectedSize]);


  const handleSearch = (term) => setSearchTerm(term);
  const handlePriceChange = (newPrice) => setPrice(newPrice);
  const handleFloorChange = (floor) => setSelectedFloor(floor);
  const handleSizeChange = (size) => setSelectedSize(size);
  

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