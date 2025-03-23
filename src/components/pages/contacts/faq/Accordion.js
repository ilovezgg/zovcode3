import React from 'react';
import z from './Accordion.module.css'; 

const Accordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={z.accordion}>
      <button className={z.accordionQuestion} onClick={onToggle}>
        {question}
        <span className={`${z.accordionIcon} ${isOpen ? z.open : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div className={`${z.accordionAnswer} ${isOpen ? z.open : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default Accordion;