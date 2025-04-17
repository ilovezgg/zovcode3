// components/SearchBar.js
import React, { useState } from "react";
import z from "./CatalogBar.module.css"; 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className={z.mainBar}>
    <div className={z.searchContainer}>
      <input
        type="text"
        placeholder="Найти дом (например, Д1)"
        value={searchTerm}
        onChange={handleSearch}
        className={z.searchInput}
      />
    </div>
    </div>
  );
};

export default SearchBar;