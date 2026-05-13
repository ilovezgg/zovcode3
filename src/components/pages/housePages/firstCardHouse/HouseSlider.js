import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import z from './HouseSlider.module.css';

const HouseSlider = ({ images = [] }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [mode, setMode] = useState('day');
  const [season, setSeason] = useState('summer');

  if (!images.length) {
    return <div className={z.empty}>Изображения не загружены</div>;
  }

  const getImagePath = (index, originalPath) => {
    if (index !== 0) return originalPath;
    const basePath = originalPath.replace(/-summer-day\.jpeg$/, '');
    return `${basePath}-${season}-${mode}.jpeg`;
  };

  return (
    <div ref={ref} className={`${z.main} ${inView ? z.visible : ''}`}>
      <div className={z.gallery}>
        {images.map((image, index) => (
          <div
            key={index}
            className={z.imageCard}
            style={{
              backgroundImage: index === 0 
                ? `url(${getImagePath(index, image)}), url(${image})`
                : `url(${image})`,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className={z.glassBar}>
              <span className={z.logo}>
                <span className={z.srub}>Сруб</span>
                <span className={z.dom}>Дом</span>
              </span>
            </div>
          </div>
        ))}

        <div className={z.controlsWrapper}>
          <div className={z.controlsRow}>
            <button
              className={`${z.squareBtn} ${mode === 'day' ? z.active : ''}`}
              onClick={() => setMode('day')}
            >
              ☀️<span>День</span>
            </button>
            <button
              className={`${z.squareBtn} ${mode === 'night' ? z.active : ''}`}
              onClick={() => setMode('night')}
            >
              🌙<span>Ночь</span>
            </button>
          </div>
          <div className={z.controlsRow}>
            <button
              className={`${z.squareBtn} ${season === 'summer' ? z.active : ''}`}
              onClick={() => setSeason('summer')}
            >
              ☀️<span>Лето</span>
            </button>
            <button
              className={`${z.squareBtn} ${season === 'winter' ? z.active : ''}`}
              onClick={() => setSeason('winter')}
            >
              ❄️<span>Зима</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseSlider;