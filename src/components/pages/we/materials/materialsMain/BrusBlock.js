import React from 'react';
import z from './MaterialsMain.module.css';

const BrusBlock = ({
  title = '',          
  mainText = '',
  imageUrl = '',
  secondImageUrl = '',
  features = [],      
}) => {
  return (
    <div className={z.brusCont}>
      <div className={z.brusTitle}>{title}</div>
      <div className={z.brusText}>{mainText}</div>
      
      <div className={z.containerPics}>
        <div className={z.brusPic}>
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title}
              className={z.image}
            />
          )}
        </div>

        {features.length > 0 && (
          <div className={z.container}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className={index % 2 === 0 ? z.contFirst : z.contTwo}
              >
                <div className={z.titleCont}>{feature.title}</div>
                <div className={z.textCont}>{feature.text}</div>
              </div>
            ))}
          </div>
        )}
        
        {secondImageUrl && (
          <div className={z.secondPic}>
          {secondImageUrl && (
            <img 
              src={secondImageUrl} 
              alt={title}
              className={z.image}
            />
          )}
        </div>
        )}
      </div>
    </div>
  );
};

export default BrusBlock;