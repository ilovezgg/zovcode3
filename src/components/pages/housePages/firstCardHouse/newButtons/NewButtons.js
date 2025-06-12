import React, { useState } from 'react';
import z from './NewButtons.module.css';

const NewButtons = ({ onButtonClick }) => {
  return (
    <div className={z.main}>
      <div className={z.buttons}>
        <button 
          className={z.baseComplectation} 
          onClick={() => onButtonClick('base')}
        >
          Базовая комплектация сруба дома
        </button>
        <button 
          className={z.garanty} 
          onClick={() => onButtonClick('garanty')}
        >
          Гарантия
        </button>
      </div>
    </div>
  );
};

export default NewButtons;