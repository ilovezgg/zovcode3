import React from 'react';
import z from './CatalogBar.module.css';

const CatalogBar = ({ searchTerm, onSearch }) => {
  const handleSearch = (e) => {
    if (typeof onSearch === 'function') {
      onSearch(e.target.value);
    }
  };

  return (
    <div >
      <input
        type="text"
        placeholder="Найти дом..."
        value={searchTerm}
        onChange={handleSearch}
        className={z.searchInput}
      />
    </div>
  );
};

export default CatalogBar;