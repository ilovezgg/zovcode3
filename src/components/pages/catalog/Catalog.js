import React, { useState, useEffect } from 'react';
import Footer from '../home/footer/Footer';
import Buttons from '../home/header/Buttons';
import FilterPage from './catalogBar/FilterPage';
import CatalogMain from './homes/CatalogMain'; // Импортируем CatalogMain
import houseData from './housedata/houseData';


const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [price, setPrice] = useState(2000000);
  const [filteredHouses, setFilteredHouses] = useState(houseData);

  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/\s+/g, '').replace('₽', ''));
  };

  useEffect(() => {
    const filtered = houseData.filter(house => {
      const matchesSearch = house.title.toLowerCase().includes(searchTerm.toLowerCase());
      const housePrice = parsePrice(house.price);
      const matchesPrice = housePrice <= price;
      return matchesSearch && matchesPrice;
    });
    setFilteredHouses(filtered);
  }, [searchTerm, price]);

  return (
    <div >
      <Buttons />
      <FilterPage 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onPriceChange={setPrice}
      />
      <CatalogMain houses={filteredHouses} /> {/* Передаем отфильтрованные данные */}
      <Footer />
    </div>
  );
};

export default Catalog;