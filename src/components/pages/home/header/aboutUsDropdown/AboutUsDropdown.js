import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import z from './AboutUsDropdown.module.css'; 

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
          <Link to="/sotrud" className={z.dropdownItem}>Наша история</Link>
          <Link to="/team" className={z.dropdownItem}>Команда</Link>
          <Link to="/reviews" className={z.dropdownItem}>Отзывы</Link>
        </div>
      )}
    </div>
  );
};

export default AboutUsDropdown;