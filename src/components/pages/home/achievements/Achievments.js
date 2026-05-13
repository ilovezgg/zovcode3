import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import z from './Achievments.module.css';

const Counter = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing для плавности
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, isVisible]);

  return <span>{count}</span>;
};

const Achievments = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className={z.achievmentsMain}>
      <div className={z.containerAch}>
        <div
          className={`${z.block} ${inView1 ? z.visible : ''}`}
          ref={ref1}
        >
          <div className={z.animated}>
            <Counter target={15} isVisible={inView1} />
          </div>
          <div className={z.text}>ЛЕТ ДОВЕРИЯ И ОПЫТА</div>
        </div>

        <div
          className={`${z.block} ${inView2 ? z.visible : ''}`}
          ref={ref2}
        >
          <div className={z.animated}>
            <Counter target={500} isVisible={inView2} />
          </div>
          <div className={z.text}>ДОМОВ, КОТОРЫЕ СТАЛИ ДОМОМ</div>
        </div>

        <div
          className={`${z.block} ${inView3 ? z.visible : ''}`}
          ref={ref3}
        >
          <div className={z.animated}>
            <Counter target={3} isVisible={inView3} />
          </div>
          <div className={z.text}>ГОДА СПОКОЙСТВИЯ ПОСЛЕ СДАЧИ</div>
        </div>
      </div>
    </div>
  );
};

export default Achievments;