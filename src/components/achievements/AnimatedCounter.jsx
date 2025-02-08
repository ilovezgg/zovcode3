import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import z from './Achievments.module.css';
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  // Анимация с помощью react-spring
  const props = useSpring({ number: count, from: { number: 0 }, config: { duration: 5000 } });

  useEffect(() => {
    if (count < target) {
      const interval = setInterval(() => {
        setCount(prevCount => Math.min(prevCount + 1, target)); 
      }, 1);

      return () => clearInterval(interval); 
    }
  }, [count, target]);

  return (
    <div className={z.animated}>
      <animated.span>
        {props.number.to(n => Math.floor(n))}
      </animated.span>
    </div>
    
  );
};

export default AnimatedCounter;

