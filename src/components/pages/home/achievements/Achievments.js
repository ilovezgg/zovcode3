import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import z from './Achievments.module.css';

const Counter = ({ target, resetKey }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0); // Сбрасываем при каждом изменении resetKey
    let start = 0;
    const increment = target / 60; // 60 кадров анимации

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, resetKey]);

  return <span>{count}</span>;
};

const Achievments = () => {
  const [resetKey, setResetKey] = useState(0);
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });

  // Сброс при перезагрузке страницы
  useEffect(() => {
    const handleBeforeUnload = () => setResetKey(prev => prev + 1);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <div className={z.achievmentsMain}>
      <div className={z.containerAch}>
        <div className={z.first} ref={ref1}>
          <div className={z.years}>
            <div className={z.animated}>
              {inView1 ? <Counter target={15} resetKey={resetKey} /> : '0'}
            </div>
            <div className={z.textYears}>ЛЕТ НА РЫНКЕ</div>
          </div>
        </div>

        <div className={z.second} ref={ref2}>
          <div className={z.houses}>
            <div className={z.animated}>
              {inView2 ? <Counter target={500} resetKey={resetKey} /> : '0'}
            </div>
            <div className={z.textHouses}>ПОСТРОЕННЫХ ОБЪЕКТОВ</div>
          </div>
        </div>

        <div className={z.third} ref={ref3}>
          <div className={z.garanti}>
            <div className={z.animated}>
              {inView3 ? <Counter target={3} resetKey={resetKey} /> : '0'}
            </div>
            <div className={z.textGaranti}>ГОДА ГАРАНТИИ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievments;