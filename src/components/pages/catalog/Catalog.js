import React, { useState } from 'react';
import Footer from '../home/footer/Footer';
import Buttons from '../home/header/Buttons';
import CatalogMain from './homes/CatalogMain';
import CatalogBar from './catalogBar/CatalogBar'


export const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Buttons />
      <CatalogBar 
        searchTerm={searchTerm}
        onSearch={setSearchTerm} 
      />
      <CatalogMain searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

export default Catalog;