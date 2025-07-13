import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import z from './AboutUsDropdown.module.css'; 
import Materials from '../../../we/materials/Materials';
const AboutUsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={z.dropdownContainer}>

      <Link 
        to="/we" 
        className={z.aboutusButton}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)} 
      >
        О нас
      </Link>

 
      {isOpen && (
        <div 
          className={z.dropdownContent}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Link to="/sotrud" className={z.dropdownItem}>Оплата и работы</Link>
          <Link to="/matkap" className={z.dropdownItem}>Материнский капитал</Link>
          <Link to="/materials" className={z.dropdownItem}>Технология</Link>
          <Link to="/reviews" className={z.dropdownItem}>Статьи</Link>
        </div>
      )}
    </div>
  );
};

export default AboutUsDropdown;