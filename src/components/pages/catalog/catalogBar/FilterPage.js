import React from 'react';
import z from './FilterPage.module.css';
import CatalogBar from './CatalogBar';
import PriceSlider from './PriceSlider';
import FiltersPanel from './FiltersPanel';

const FilterPage = ({ 
  searchTerm, 
  onSearch,
  onPriceChange,
  onFloorChange,
  onSizeChange,
  onResetFilters,
  activeFloor,
  activeSize,
  activePrice 
}) => { 
  return (
    <section className={z.main}> 
      <div className={z.container}>
        <div className={z.filters}>
          <div className={z.leftPart}>
            <CatalogBar 
              searchTerm={searchTerm}
              onSearch={onSearch} 
            />
            <PriceSlider 
              onPriceChange={onPriceChange} 
              currentPrice={activePrice}
            /> 
          </div>
          
          <div className={z.rightPart}>
            <FiltersPanel 
              onFloorChange={onFloorChange}
              onSizeChange={onSizeChange}
              activeFloor={activeFloor}
              activeSize={activeSize}
            />
            <button 
              className={z.resetButton}
              onClick={onResetFilters}
            >
              Сбросить фильтры
            </button>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default FilterPage;