import { useState, useEffect } from 'react';
import { auth, db } from '../../../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import styles from './ProfilePicture.module.css';

const ProfilePicture = () => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // Твой API ключ ImgBB
  const IMGBB_API_KEY = '365c0710b66d914e1f2412da859bced1';

  // Загрузка текущей аватарки
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setAvatarUrl(userData?.avatarUrl || '');
          }
        } catch (err) {
          setError('Ошибка загрузки аватарки');
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Загрузка файла в ImgBB
  const handleFileUpload = async (file) => {
    if (!file) return;

    // Проверка размера (32MB)
    if (file.size > 32 * 1024 * 1024) {
      setError('Файл слишком большой (макс 32MB)');
      return;
    }

    if (!file.type.startsWith('image/')) {
      setError('Выберите изображение');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('image', file);

      // Загружаем в ImgBB
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        const imageUrl = data.data.url;
        setAvatarUrl(imageUrl);
        
        // Сохраняем URL в Firestore
        if (user) {
          await setDoc(doc(db, 'users', user.uid), {
            avatarUrl: imageUrl,
            updatedAt: new Date().toISOString()
          }, { merge: true });
        }

        alert('Аватарка сохранена!');
      } else {
        throw new Error(data.error?.message || 'Ошибка загрузки');
      }
    } catch (err) {
      setError('Ошибка загрузки: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleRemove = async () => {
    if (!user) return;

    try {
      setIsLoading(true);
      await setDoc(doc(db, 'users', user.uid), {
        avatarUrl: '',
        updatedAt: new Date().toISOString()
      }, { merge: true });

      setAvatarUrl('');
      alert('Аватарка удалена!');
    } catch (err) {
      setError('Ошибка удаления: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Ваша аватарка</h3>
      
      {error && <div className={styles.error}>{error}</div>}

      {/* Превью аватарки */}
      <div className={styles.avatarPreview}>
        {avatarUrl ? (
          <img src={avatarUrl} alt="Аватар" className={styles.avatarImage} />
        ) : (
          <div className={styles.avatarPlaceholder}>👤</div>
        )}
      </div>

      {/* Кнопки управления */}
      <div className={styles.controls}>
        <input
          type="file"
          id="avatar-upload"
          accept="image/*"
          onChange={handleFileSelect}
          className={styles.fileInput}
          disabled={isLoading}
        />
        <label htmlFor="avatar-upload" className={styles.uploadButton}>
          {isLoading ? 'Загрузка...' : 'Выбрать фото (до 32MB)'}
        </label>

        {avatarUrl && (
          <button
            className={styles.removeButton}
            onClick={handleRemove}
            disabled={isLoading}
          >
            Удалить
          </button>
        )}
      </div>
    </div>
  );
};

 export default ProfilePicture;