import React, { useState } from 'react';
import z from './Accordion.module.css';
const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={z.accordion}>
      <button className={z.accordionQuestion} onClick={toggleAccordion}>
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