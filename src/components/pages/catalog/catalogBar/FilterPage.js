import React from 'react'
import z from './FilterPage.module.css'
import CatalogBar from './CatalogBar'
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
  activeSize 
}) => { 
  return (
    <div className={z.main}> 
      <div className={z.filters}>
        <div className={z.leftPart}>
        <CatalogBar 
          searchTerm={searchTerm}
          onSearch={onSearch} 
        />
        <PriceSlider onPriceChange={onPriceChange} /> 
        </div>
        <div className={z.rightPart}>
        <FiltersPanel 
          onFloorChange={onFloorChange}
          onSizeChange={onSizeChange}
          activeFloor={activeFloor}
          activeSize={activeSize}
          width="100%" 
        />
        <div className={z.buttonsContainer}>
          <button 
            className={z.resetButton}
            onClick={onResetFilters}
          >
            Очистить фильтры
          </button>
          
        </div>
        </div> 
      </div>
    </div>
  );
};

export default FilterPage;