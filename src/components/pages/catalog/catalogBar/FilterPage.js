import React from 'react'
import z from './FilterPage.module.css'
import CatalogBar from './CatalogBar'
import PriceSlider from './PriceSlider';

const FilterPage = ({ searchTerm, setSearchTerm, onPriceChange }) => { // 1. Добавил пропс
  return (
    <div className={z.main}> 
      <CatalogBar 
        searchTerm={searchTerm}
        onSearch={setSearchTerm} 
      />
      <PriceSlider onPriceChange={onPriceChange} /> {/* 2. Передаём пропс */}
    </div>
  );
};

export default FilterPage;