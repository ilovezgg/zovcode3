import React from "react";
import z from "./Accordion.module.css";

const Accordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`${z.accordion} ${isOpen ? z.open : ""}`}>
      <button 
        className={z.accordionQuestion} 
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={z.questionText}>{question}</span>
        <span className={`${z.icon} ${isOpen ? z.iconOpen : ""}`}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M6 9L12 15L18 9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className={`${z.answerWrapper} ${isOpen ? z.wrapperOpen : ""}`}>
        <div className={z.answer}>{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;