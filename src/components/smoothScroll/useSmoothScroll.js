import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const scrollTo = (position) => {
      const start = window.pageYOffset;
      const distance = position - start;
      const duration = 1000; // Увеличьте для более медленной прокрутки
      let startTime = null;

      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutQuad = (t, b, c, d) => {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
      };

      requestAnimationFrame(animation);
    };

    // Переопределяем стандартное поведение
    window.__originalScrollTo = window.scrollTo;
    window.scrollTo = ({ top, behavior }) => {
      if (behavior === 'smooth') {
        scrollTo(top);
      } else {
        window.__originalScrollTo(top);
      }
    };

    return () => {
      window.scrollTo = window.__originalScrollTo;
    };
  }, []);
};

export default useSmoothScroll;