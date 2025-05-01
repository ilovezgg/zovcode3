import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

const Preloader = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 3000); // Ждем завершения анимации
    }, 2000); // Показываем 1 секунду перед началом исчезновения

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`${styles.preloaderOverlay} ${isExiting ? styles.fadeOut : ''}`}>
      <div className={styles.waveContainer}>
        <div className={styles.wave}></div>
        <div className={styles.wave} style={{ animationDelay: '0.2s' }}></div>
        <div className={styles.wave} style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

export default Preloader;