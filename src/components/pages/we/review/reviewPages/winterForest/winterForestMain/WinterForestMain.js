import React from "react";
import { useInView } from 'react-intersection-observer';
import z from "./WinterForestMain.module.css";

const FadeIn = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div 
      ref={ref} 
      className={`${z.fadeIn} ${inView ? z.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const WinterForestMain = () => {
  const advantages = [
    "Естественная низкая влажность — дерево \"спит\", сокодвижение остановлено",
    "Повышенная плотность волокон — мороз делает структуру древесины более однородной", 
    "Защита от грибка и плесени — низкие температуры предотвращают развитие микроорганизмов",
    "Равномерная усадка — минимальное образование трещин и деформаций"
  ];

  const humidityData = [
    { name: 'Клееный брус', value: 10, color: '#a8a08a' },
    { name: 'Сушеный брус', value: 15, color: '#d7c9a9' },
    { name: 'Зимний брус', value: 35, color: '#d2b48c' },
    { name: 'Летний брус', value: 60, color: 'rgb(95, 180, 115)' }
  ];

  return (
    <section className={z.section}>
      <div className={z.container}>
        
        <FadeIn>
          <div className={z.hero}>
            <div className={z.heroBg} />
            <div className={z.heroContent}>
              <h1 className={z.heroTitle}>Зимний лес для сруба: мифы и реальность</h1>
              <p className={z.heroSubtitle}>
                Преимущества зимней заготовки древесины и особенности строительства
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className={z.textBlock}>
            В сфере деревянного домостроения давно укрепилось мнение, что для строительства качественного сруба идеально подходит древесина, заготовленная в зимний период. Но что из этого правда, а что — устоявшийся миф? Давайте разберемся, какие реальные преимущества имеет зимний лес и на что стоит обратить внимание при строительстве сруба из бруса в холодное время года.
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className={z.splitBlock}>
            <div className={z.splitImage} />
            <div className={z.splitContent}>
              <h3 className={z.splitTitle}>Преимущества зимней древесины:</h3>
              <ul className={z.featureList}>
                {advantages.map((item, i) => (
                  <li key={i} className={z.featureItem}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className={z.textBlock}>
            Однако важно понимать: преимущества зимней древесины не отменяют необходимости профессионального подхода к строительству. Даже самый качественный материал требует правильной обработки, сборки и последующего ухода. Современные технологии сушки позволяют достичь оптимальных показателей влажности и у летнего леса, но именно зимняя древесина сохраняет природную структуру волокон, что положительно сказывается на прочности и теплоизоляционных свойствах готового сруба.
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className={z.infoGrid}>
            <div className={z.infoImage} />
            
            <div className={z.chartCard}>
              <h3 className={z.chartTitle}>Сравнительный анализ влажности разной древесины (%)</h3>
              <div className={z.chart}>
                {humidityData.map((item, i) => (
                  <div key={i} className={z.barWrapper}>
                    <div 
                      className={z.bar} 
                      style={{ 
                        height: `${item.value * 1.2}%`, 
                        backgroundColor: item.color,
                        transitionDelay: `${i * 100}ms`
                      }}
                    >
                      <span className={z.barValue}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={z.legend}>
                {humidityData.map((item, i) => (
                  <div key={i} className={z.legendItem}>
                    <div className={z.legendDot} style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={z.textCard}>
              Многолетние исследования подтверждают, что оптимальная влажность древесины для строительства составляет 12-18%. Именно в этом диапазоне материал проявляет свои лучшие качества: минимальную усадку, устойчивость к деформациям и максимальную долговечность.
              <br/><br/>
              Зимний брус естественным образом приближается к этим идеальным значениям благодаря особенностям сезонной заготовки. Естественная сушка сохраняет уникальную структуру древесных волокон и природную прочность значительно лучше многих современных технологичных методов.
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div className={z.finalBlock}>
            <div className={z.finalImageOne} />
            <div className={z.finalText}>
              Строительство сруба из зимнего леса — это разумный выбор для тех, кто ценит натуральность, долговечность и здоровый микроклимат. Природные преимущества зимней древесины в сочетании с современными технологиями создают идеальный симбиоз традиций и инноваций.
              <br/><br/>
              Правильный зимний брус сохраняет все преимущества дерева и обеспечивает стабильность конструкции. Ваш дом — это не просто жилье, а наследие для поколений.
            </div>
            <div className={z.finalImageTwo} />
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default WinterForestMain;