import { useState, useEffect } from 'react';
import z from './RegionSelector.module.css';
import { auth, db } from '../../../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const REGIONS = [
  'Москва',
  'Санкт-Петербург',
  'Московская область',
  'Краснодарский край',
  'Свердловская область',
  'Ростовская область',
  'Республика Татарстан',
  'Челябинская область',
  'Нижегородская область',
  'Самарская область'
];

const RegionSelector = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // Загрузка текущего пользователя и региона
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          setIsLoading(true);
          setError('');
          
          // Получаем данные пользователя из Firestore
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            // Используем поле 'region' вместо 'address_region'
            setSelectedRegion(userData?.region || '');
          }
        } catch (err) {
          setError('Ошибка загрузки данных: ' + err.message);
        } finally {
          setIsLoading(false);
        }
      } else {
        setError('Требуется авторизация');
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSave = async () => {
    if (!selectedRegion) return;

    if (!user) {
      setError('Требуется авторизация');
      return;
    }

    try {
      setIsLoading(true);
      setError('');

      // Обновляем документ пользователя в Firestore
      await setDoc(doc(db, 'users', user.uid), {
        region: selectedRegion,
        updatedAt: new Date().toISOString()
      }, { merge: true }); // merge: true объединяет с существующими данными

      alert('Регион сохранен!');
    } catch (err) {
      setError('Ошибка сохранения: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className={z.container}>
      <h3 className={z.title}>Выберите ваш регион</h3>
      
      {error && <div className={z.error}>{error}</div>}
      
      <div className={z.inputGroup}>
        <select
          className={z.select}
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          disabled={isLoading}
        >
          <option value="">Выберите регион</option>
          {REGIONS.map(region => (
            <option key={region} value={region} className={z.option}>
              {region}
            </option>
          ))}
        </select>
      </div>
      
      <button
        className={`${z.button} ${isLoading ? z.buttonLoading : ''}`}
        onClick={handleSave}
        disabled={!selectedRegion || isLoading}
      >
        {isLoading ? 'Сохранение...' : 'Сохранить регион'}
      </button>
    </div>
  );
};

export default RegionSelector;