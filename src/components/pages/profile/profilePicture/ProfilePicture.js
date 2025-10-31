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

  // Загрузка текущей аватарки из Firestore
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

  // Сжатие изображения (опционально, но рекомендуется)
  const compressImage = (file, maxWidth = 300, quality = 0.7) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          let { width, height } = img;
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (!blob) return reject(new Error('Canvas toBlob failed'));
              const compressedFile = new File([blob], file.name, { type: 'image/jpeg' });
              const reader2 = new FileReader();
              reader2.onloadend = () => resolve(reader2.result);
              reader2.readAsDataURL(compressedFile);
            },
            'image/jpeg',
            quality
          );
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = async (file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Выберите изображение');
      return;
    }

    // Ограничение: не более 5 МБ исходного файла (Base64 будет ~1.3x больше)
    if (file.size > 5 * 1024 * 1024) {
      setError('Файл слишком большой (макс. 5 МБ)');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Сжимаем и конвертируем в Base64
      const base64String = await compressImage(file);

      // Проверка длины (Firestore лимит ~1 МБ на документ)
      if (base64String.length > 900_000) {
        setError('Изображение слишком большое после сжатия. Выберите меньше.');
        return;
      }

      setAvatarUrl(base64String);

      // Сохраняем в Firestore
      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          avatarUrl: base64String,
          updatedAt: new Date().toISOString()
        }, { merge: true });
      }

      alert('Аватарка сохранена!');
    } catch (err) {
      console.error('Upload error:', err);
      setError(`Ошибка: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
    event.target.value = '';
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

      <div className={styles.avatarPreview}>
        {avatarUrl ? (
          <img src={avatarUrl} alt="Аватар" className={styles.avatarImage} />
        ) : (
          <div className={styles.avatarPlaceholder}>👤</div>
        )}
      </div>

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
          {isLoading ? 'Загрузка...' : 'Выбрать фото (до 5 МБ)'}
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