import { useState, useEffect } from 'react';
import z from './PhoneForm.module.css';
import { auth, db } from '../../../lib/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const PhoneInput = () => {
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // Форматируем телефон при изменении
  const formatPhone = (input) => {
    // Удаляем всё кроме цифр
    let numbers = input.replace(/\D/g, '');
    
    // Если начинается не с 7 или 8 - ставим +7
    if (!numbers.startsWith('7') && !numbers.startsWith('8')) {
      numbers = '7' + numbers;
    }
    
    // Обрезаем до 11 цифр (первая 7 или 8)
    numbers = numbers.substring(0, 11);
    
    // Форматируем по шаблону
    let formatted = '+7';
    if (numbers.length > 1) {
      formatted += ' ' + numbers.substring(1, 4);
    }
    if (numbers.length > 4) {
      formatted += ' ' + numbers.substring(4, 7);
    }
    if (numbers.length > 7) {
      formatted += ' ' + numbers.substring(7, 9);
    }
    if (numbers.length > 9) {
      formatted += ' ' + numbers.substring(9, 11);
    }
    
    return formatted;
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    // Если пытаются стереть +7 - не даём
    if (input.length < 3 && input !== '+7') {
      setPhone('+7 ');
      return;
    }
    setPhone(formatPhone(input));
  };

  // Загрузка текущего пользователя и телефона
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
            if (userData?.phone) {
              setPhone(formatPhone(userData.phone));
            } else {
              setPhone('+7 ');
            }
          } else {
            setPhone('+7 ');
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

  // Сохранение телефона
  const handleSave = async () => {
    if (!phone || phone.length < 16) { // +7 000 000 00 00 - 16 символов
      setError('Введите полный номер телефона');
      return;
    }

    if (!user) {
      setError('Требуется авторизация');
      return;
    }

    try {
      setIsLoading(true);
      setError('');

      // Удаляем пробелы для сохранения в БД
      const phoneToSave = phone.replace(/\s/g, '');

      // Обновляем документ пользователя в Firestore
      await setDoc(doc(db, 'users', user.uid), {
        phone: phoneToSave,
        updatedAt: new Date().toISOString()
      }, { merge: true }); // merge: true объединяет с существующими данными

      alert('Телефон сохранён!');
    } catch (err) {
      setError('Ошибка сохранения: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className={z.container}>
      <h3 className={z.title}>Ваш телефон</h3>
      
      {error && <div className={z.error}>{error}</div>}
      
      <div className={z.inputGroup}>
        <input
          type="tel"
          className={z.input}
          value={phone}
          onChange={handlePhoneChange}
          placeholder="+7 000 000 00 00"
          disabled={isLoading}
          maxLength={16} // +7 000 000 00 00
        />
      </div>
      
      <button
        className={`${z.button} ${isLoading ? z.buttonLoading : ''}`}
        onClick={handleSave}
        disabled={phone.length < 16 || isLoading}
      >
        {isLoading ? 'Сохранение...' : 'Сохранить телефон'}
      </button>
    </div>
  );
};

export default PhoneInput;