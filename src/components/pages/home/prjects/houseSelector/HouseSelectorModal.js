import { useState } from 'react';
import houseData from '../../../catalog/housedata/houseData';
import styles from './HouseSelectorModal.module.css';

const HouseSelectorModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState([]);

  const questions = [
    {
      id: 1,
      question: "Ваш бюджет на коробку?",
      key: "budget",
      options: [
        { label: "До 800 000 ₽", value: 800000 },
        { label: "800 000 - 1 000 000 ₽", value: 1000000 },
        { label: "1 000 000 - 1 500 000 ₽", value: 1500000 },
        { label: "1 500 000 - 2 000 000 ₽", value: 2000000 },
        { label: "Более 2 000 000 ₽", value: 9999999 }
      ]
    },
    {
      id: 2,
      question: "Сколько этажей нужно?",
      key: "floors",
      options: [
        { label: "1 этаж", value: 1 },
        { label: "1.5 этажа (с мансардой)", value: 1.5 },
        { label: "2 этажа", value: 2 }
      ]
    },
    {
      id: 3,
      question: "Размер участка?",
      key: "plotSize", 
      options: [
        { label: "Маленький (до 6 соток)", value: "small" },
        { label: "Средний (6-10 соток)", value: "medium" },
        { label: "Большой (10+ соток)", value: "large" }
      ]
    },
    {
      id: 4,
      question: "Количество комнат?",
      key: "rooms",
      options: [
        { label: "1-2 комнаты", value: "1-2" },
        { label: "3 комнаты", value: "3" },
        { label: "4+ комнаты", value: "4+" }
      ]
    },
    {
      id: 5,
      question: "Нужна терраса/балкон?",
      key: "extras",
      options: [
        { label: "Да, с террасой", value: "terrace" },
        { label: "Да, с балконом", value: "balcony" },
        { label: "Не важно", value: "none" }
      ]
    },
    {
      id: 6,
      question: "Сроки строительства?",
      key: "timeline",
      options: [
        { label: "Срочно (готовые проекты)", value: "urgent" },
        { label: "1-2 месяца", value: "standard" },
        { label: "Не ограничено", value: "flexible" }
      ]
    }
  ];

  const calculateResults = () => {
    console.log('📊 Ответы пользователя:', answers);
    
    const { budget, floors, plotSize } = answers;
    
    // ПРОВЕРКА - есть ли ответы
    if (!budget || !floors || !plotSize) {
      console.error('❌ Не все ответы заполнены!');
      setResults([]);
      return;
    }
    
    let filtered = houseData.filter(house => {
      const price = parseInt(house.price.replace(/\s/g, '').replace('₽', ''));
      
      console.log(`🏠 Проверяем дом ${house.title}:`, {
        цена: price,
        бюджет: budget,
        этажи: house.floors,
        нужныеЭтажи: floors
      });
      
      // Бюджет
      if (price > budget) {
        console.log(`❌ ${house.title} - не подходит по бюджету`);
        return false;
      }
      
      // Этажность
      if (house.floors !== floors) {
        console.log(`❌ ${house.title} - не подходит по этажности`);
        return false;
      }
      
      // Размер участка
      const size = house.description;
      if (plotSize === 'small' && !['6х6', '6х7.5'].includes(size)) {
        console.log(`❌ ${house.title} - не подходит по размеру участка`);
        return false;
      }
      if (plotSize === 'medium' && !['6х8', '6х9', '7x9'].includes(size)) {
        console.log(`❌ ${house.title} - не подходит по размеру участка`);
        return false;
      }
      if (plotSize === 'large' && !['8x8', '9x9', '10x10'].includes(size)) {
        console.log(`❌ ${house.title} - не подходит по размеру участка`);
        return false;
      }
      
      console.log(`✅ ${house.title} - ПОДХОДИТ!`);
      return true;
    });

    console.log('🎯 Найдено проектов:', filtered.length);
    console.log('📋 Подходящие проекты:', filtered);

    // Сортируем по цене (от дешевых к дорогим)
    filtered.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/\s/g, '').replace('₽', ''));
      const priceB = parseInt(b.price.replace(/\s/g, '').replace('₽', ''));
      return priceA - priceB;
    });

    // Берем ТОП-3 подходящих проекта
    const topResults = filtered.slice(0, 3);
    setResults(topResults);
  };

  const handleAnswer = (value) => {
    const currentQuestion = questions[step - 1];
    const newAnswers = { 
      ...answers, 
      [currentQuestion.key]: value 
    };
    
    console.log('📝 Новый ответ:', { 
      вопрос: currentQuestion.key, 
      ответ: value,
      всеОтветы: newAnswers 
    });
    
    setAnswers(newAnswers);
    
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      console.log('🎯 Все вопросы пройдены, начинаем расчет...');
      calculateResults();
    }
  };

  const handleRestart = () => {
    setStep(1);
    setAnswers({});
    setResults([]);
    console.log('🔄 Подбор начат заново');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            {step <= questions.length ? 'Подбор проекта дома' : 'Вам подходят эти проекты!'}
          </h2>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>

        <div className={styles.modalContent}>
          {step <= questions.length ? (
            <>
              <div className={styles.progress}>
                <div className={styles.progressInfo}>
                  Вопрос {step} из {questions.length}
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className={styles.question}>
                <h3 className={styles.questionText}>{questions[step - 1].question}</h3>
                <div className={styles.options}>
                  {questions[step - 1].options.map(option => (
                    <button
                      key={option.value}
                      className={styles.optionButton}
                      onClick={() => handleAnswer(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className={styles.results}>
              <h3 className={styles.resultsTitle}>
                {results.length > 0 ? `Топ-${results.length} подходящих проекта` : 'Результаты поиска'}
              </h3>
              
              {results.length === 0 ? (
                <div className={styles.noResults}>
                  <p className={styles.noResultsText}>К сожалению, по вашим критериям проектов не найдено 😔</p>
                  <p>Попробуйте изменить параметры поиска</p>
                  <div className={styles.debugInfo}>
                    <p><strong>Отладка:</strong></p>
                    <p>Бюджет: {answers.budget} ₽</p>
                    <p>Этажность: {answers.floors}</p>
                    <p>Размер участка: {answers.plotSize}</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.housesGrid}>
                    {results.map((house, index) => (
                      <div 
                        key={house.id} 
                        className={styles.houseCard}
                        onClick={() => window.open(`/house/${house.id}`, '_blank')}
                      >
                        <div className={styles.medal}>{index + 1}</div>
                        <div 
                          className={styles.cardImage}
                          style={{ backgroundImage: `url(${house.image})` }}
                        />
                        <div className={styles.cardContent}>
                          <h4 className={styles.cardTitle}>{house.title}</h4>
                          <p className={styles.cardDescription}>{house.description} | {house.floors} эт.</p>
                          <div className={styles.cardPrice}>{house.price}</div>
                          <button className={styles.detailsButton}>
                            Посмотреть проект
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className={styles.resultsSummary}>
                    <p>🎯 На основе ваших ответов мы подобрали самые подходящие проекты</p>
                  </div>
                </>
              )}
              
              <div className={styles.actions}>
                <button className={styles.restartButton} onClick={handleRestart}>
                  🔄 Подобрать заново
                </button>
                <button className={styles.closeButtonSecondary} onClick={onClose}>
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HouseSelectorModal;