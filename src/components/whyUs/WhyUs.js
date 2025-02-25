import React from 'react';
import { useInView } from 'react-intersection-observer';
import z from './WhyUs.module.css';

const Panel = ({ className, picClassName, children }) => {
  const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
  });

  return (
      <div ref={ref} className={`${className} ${inView ? z.show : ''}`}>
          <div className={picClassName}></div>
          {children}
      </div>
  );
};

const WhyUs = () => {
  return (
      <div className={z.whyUsMain}>
          <div className={z.backgroundBig}>
              <div>
                  <div className={z.whyUsTitle}>Плюсы работы с нами</div>
                  <div className={z.whyUsText}>Выбирая нас, вы выбираете удобство, скорость и надежность. Мы создаем те дома, в которых хочется жить, воплощая все ваши мечты об идеальном доме в реальность.</div>
              </div>
              <div className={z.containerForAll}>
                  <div className={z.whyUsPanels}>
                  <Panel className={z.panel1} picClassName={z.picPanel1}>
    <div className={z.titlePanel1}>Контроль нашей работы на всех этапах</div>
    <div className={z.textPanel1}>Надежные срубы из бруса: строгий контроль качества на каждом этапе, от древесины до сборки.</div>
</Panel>
                          <Panel className={z.panel2} picClassName={z.picPanel2}>
    <div className={z.titlePanel2}>Качественный материал</div>
    <div className={z.textPanel2}>Наши срубы строятся из качественного, экологичного бруса, обеспечивающего долговечность и минимальную усадку.</div>
</Panel>
<Panel className={z.panel3} picClassName={z.picPanel3}>
    <div className={z.titlePanel3}>Финансовая прозрачность</div>
    <div className={z.textPanel3}>Финансовая прозрачность: детальная смета и отчетность на каждом этапе строительства. Полный контроль над бюджетом вашего проекта.</div>
</Panel>
<Panel className={z.panel4} picClassName={z.picPanel4}>
    <div className={z.titlePanel4}>Полный пакет документов</div>
    <div className={z.textPanel4}>Мы предоставляем полный пакет документов: от проекта до разрешений, все для вашего спокойствия и уверенности.</div>
</Panel>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default WhyUs;