import React from 'react';
import z from './CatalogBar.module.css';

const CatalogBar = ({ searchTerm, onSearch }) => {
  return (
    <div className={z.searchWrapper}>
      <svg className={z.searchIcon} viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
      <input
        type="text"
        placeholder="Поиск по проектам"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className={z.searchInput}
      />
    </div>
  );
};

export default CatalogBar;