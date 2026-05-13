import React from 'react';
import z from './NewButtons.module.css';

const NewButtons = ({ onButtonClick, activeTab }) => {
  return (
    <div className={z.main}>
      <div className={z.tabs}>
        <button 
          className={`${z.tab} ${activeTab === 'base' ? z.active : ''}`}
          onClick={() => onButtonClick('base')}
        >
          Базовая комплектация
        </button>
        <button 
          className={`${z.tab} ${activeTab === 'garanty' ? z.active : ''}`}
          onClick={() => onButtonClick('garanty')}
        >
          Гарантия
        </button>
      </div>
    </div>
  );
};

export default NewButtons;