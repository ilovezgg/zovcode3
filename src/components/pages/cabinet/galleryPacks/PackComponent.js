import React, { useState, useRef, useEffect } from 'react';
import z from './PackComponent.module.css';

const PackComponent = ({ title, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [animationStyle, setAnimationStyle] = useState({});
  const imageRefs = useRef([]);

  // Запоминаем рефы для фоток
  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, 3);
  }, []);

  // Блокируем скролл при открытии модалки
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  const openModal = (index) => {
    const clickedImage = imageRefs.current[index];
    if (!clickedImage) return;

    const rect = clickedImage.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 - window.innerWidth / 2;
    const startY = rect.top + rect.height / 2 - window.innerHeight / 2;

    setAnimationStyle({
      '--start-x': `${startX}px`,
      '--start-y': `${startY}px`,
      '--start-width': `${rect.width}px`,
      '--start-height': `${rect.height}px`,
    });

    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 400);
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === 0 ? 2 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === 2 ? 0 : prev + 1));
  };

  const imagesArray = [images.pic1, images.pic2, images.pic3];

  return (
    <div className={z.pack1}>
      <div className={z.topPack}>
        <div className={z.packTitle}>{title}</div>
      </div>
      
      <div className={z.bottomPack}>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            ref={el => imageRefs.current[index] = el}
            className={z[`pic${index + 1}`]}
            style={{ backgroundImage: `url(${imagesArray[index]})` }}
            onClick={() => openModal(index)}
          >
            <div className={z.plusIcon}>+</div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={`${z.modalOverlay} ${isClosing ? z.closing : ''}`} onClick={closeModal}>
          <div className={z.modalContent} onClick={e => e.stopPropagation()}>
            <img
              src={imagesArray[currentIndex]}
              className={z.modalImage}
              alt=""
              style={animationStyle}
            />
            
            <div className={z.counter}>
              {currentIndex + 1} / 3
            </div>
            
            <div className={z.titleOverlay}>
              <div className={z.mainTitle}>Полудерное тело</div>
              <div className={z.subTitle}>опосталось дома</div>
            </div>
            
            <button className={z.prevButton} onClick={goToPrev}>←</button>
            <button className={z.nextButton} onClick={goToNext}>→</button>
            <button className={z.closeButton} onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackComponent;