import { useState, useEffect } from 'react';
import z from './PhoneForm.module.css';
import { auth, db } from '../../../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'; // ДОБАВИЛ

const PhoneInput = () => {
  const [phone, setPhone] = useState('+7 ');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const [isSaving, setIsSaving] = useState(false); // ОТДЕЛЬНО для кнопки

  const formatPhone = (input) => {
    let numbers = input.replace(/\D/g, '');
    
    // Если пусто или только +7
    if (!numbers || numbers === '7') {
      return '+7 ';
    }
    
    // Если начинается с 8 - меняем на 7
    if (numbers.startsWith('8')) {
      numbers = '7' + numbers.substring(1);
    }
    
    // Если не с 7 - добавляем 7
    if (!numbers.startsWith('7')) {
      numbers = '7' + numbers;
    }
    
    numbers = numbers.substring(0, 11);
    
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
    
    // Не даем стереть +7
    if (input.length < 2) {
      setPhone('+7 ');
      return;
    }
    
    setPhone(formatPhone(input));
  };

  const handleKeyDown = (e) => {
    // Блочим backspace на позиции 0-2 чтобы не стерли +7
    if (e.key === 'Backspace' && e.target.selectionStart <= 3) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          setIsLoading(true);
          setError('');
          
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData?.phone) {
              setPhone(formatPhone(userData.phone));
            }
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
    const phoneNumbers = phone.replace(/\D/g, '');
    
    if (phoneNumbers.length < 11) {
      setError('Введите полный номер телефона');
      return;
    }

    if (!user) {
      setError('Требуется авторизация');
      return;
    }

    try {
      setIsSaving(true); // отдельный стейт для кнопки
      setError('');

      const phoneToSave = '+7' + phoneNumbers.substring(1);

      await setDoc(doc(db, 'users', user.uid), {
        phone: phoneToSave,
        updatedAt: serverTimestamp() // лучше чем new Date()
      }, { merge: true });

      setError(''); // убираем alert
      // Можно добавить toast или success state
    } catch (err) {
      setError('Ошибка сохранения: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div>Загрузка...</div>;

  const phoneNumbers = phone.replace(/\D/g, '');
  const isValid = phoneNumbers.length === 11;

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
          onKeyDown={handleKeyDown} // ДОБАВИЛ
          placeholder="+7 000 000 00 00"
          disabled={isLoading || isSaving}
          maxLength={16}
        />
      </div>
      
      <button
        className={`${z.button} ${isSaving ? z.buttonLoading : ''}`}
        onClick={handleSave}
        disabled={!isValid || isLoading || isSaving}
      >
        {isSaving ? 'Сохранение...' : 'Сохранить телефон'}
      </button>
    </div>
  );
};

export default PhoneInput;