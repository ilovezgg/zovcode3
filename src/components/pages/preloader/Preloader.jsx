import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

const Preloader = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 600);
    }, 1400); // Чуть дольше из-за 7 букв

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`${styles.overlay} ${isExiting? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <span className={styles.letter}>С</span>
          <span className={styles.letter}>Р</span>
          <span className={styles.letter}>У</span>
          <span className={styles.letter}>Б</span>
          <span className={styles.letter}>Д</span>
          <span className={styles.letter}>О</span>
          <span className={styles.letter}>М</span>
        </div>
        <div className={styles.bars}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;