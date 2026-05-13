import React from 'react';
import z from './FiltersPanel.module.css';

const FiltersPanel = ({ 
  onFloorChange, 
  onSizeChange,
  activeFloor,
  activeSize
}) => {
  const floorOptions = [1, 1.5, 2];
  const sizeOptions = ['6×6','6×8','6×7.5','6×9','7×9','7.5×8','8×8.5','8×8','8×9','8.5×9','9×9','8×10','10×10'];

  const handleFloorClick = (floor) => {
    onFloorChange(activeFloor === floor? null : floor); // toggle
  };

  const handleSizeClick = (size) => {
    onSizeChange(activeSize === size? null : size); // toggle
  };

  return (
    <div className={z.filtersPanel}>
      <div className={z.filterGroup}>
        <h3 className={z.filterTitle}>Этажность</h3>
        <div className={z.buttonsContainer}>
          {floorOptions.map(floor => (
            <button
              key={floor}
              className={`${z.filterButton} ${activeFloor === floor? z.active : ''}`}
              onClick={() => handleFloorClick(floor)}
            >
              {floor}
            </button>
          ))}
        </div>
      </div>

      <div className={z.filterGroup}>
        <h3 className={z.filterTitle}>Размер</h3>
        <div className={z.buttonsContainer}>
          {sizeOptions.map(size => (
            <button
              key={size}
              className={`${z.filterButton} ${activeSize === size? z.active : ''}`}
              onClick={() => handleSizeClick(size)}
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