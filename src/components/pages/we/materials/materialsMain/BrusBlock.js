import React from 'react';
import { useInView } from 'react-intersection-observer';
import z from './MaterialsMain.module.css';

const ImageBox = ({ src, alt }) => {
  return (
    <div className={z.imageBox}>
      <div 
        className={z.imageBg} 
        style={{ backgroundImage: `url(${src})` }}
      />
      <img 
        src={src} 
        alt={alt}
        className={z.image}
        loading="lazy"
      />
    </div>
  );
};

const BrusBlock = ({
  title = '',          
  mainText = '',
  imageUrl = '',
  secondImageUrl = '',
  features = [],      
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`${z.brusCont} ${inView ? z.visible : ''}`}>
      <div className={z.headerBlock}>
        <h3 className={z.brusTitle}>{title}</h3>
        <p className={z.brusText}>{mainText}</p>
      </div>
      
      <div className={z.contentGrid}>
        {imageUrl && <ImageBox src={imageUrl} alt={title} />}

        {features.length > 0 && (
          <div className={z.featuresWrapper}>
            {features.map((feature, index) => (
              <div key={index} className={z.featureCard}>
                <div className={z.featureTitle}>{feature.title}</div>
                <div className={z.featureText}>{feature.text}</div>
              </div>
            ))}
          </div>
        )}
        
        {secondImageUrl && (
          <div className={z.imageSecondary}>
            <ImageBox src={secondImageUrl} alt={title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BrusBlock;