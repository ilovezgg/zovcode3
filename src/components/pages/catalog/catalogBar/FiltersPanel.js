import React from 'react';
import z from './FiltersPanel.module.css';

const FiltersPanel = ({ 
  onFloorChange, 
  onSizeChange,
  activeFloor,
  activeSize 
}) => {
  const floorOptions = [1, 1.5, 2];
  const sizeOptions = ['6х6','6х8','6х7.5','6x9','7x9','7.5x8','8x8.5','8x8','8x9','8.5x9','9x9','8x10','10х10'];

  return (
    <div className={z.filtersPanel}>
      <div className={z.filterGroup}>
        <h3>Этажность:</h3>
        <div className={z.buttonsContainer}>
          {floorOptions.map(floor => (
            <button
              key={floor}
              className={`${z.filterButton} ${activeFloor === floor ? z.active : ''}`}
              onClick={() => onFloorChange(floor)}
            >
              {floor} этаж
            </button>
          ))}
        </div>
      </div>

      <div className={z.filterGroup}>
        <h3>Размер:</h3>
        <div className={z.buttonsContainer}>
          {sizeOptions.map(size => (
            <button
              key={size}
              className={`${z.filterButton} ${activeSize === size ? z.active : ''}`}
              onClick={() => onSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;