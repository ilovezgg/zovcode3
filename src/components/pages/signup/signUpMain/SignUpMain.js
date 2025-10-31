import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../lib/firebase';
import { useNavigate } from 'react-router-dom';
import z from './SignUpMain.module.css';

const SignUpMain = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (!email.includes('@') || !email.includes('.')) {
      setError('Введите корректный email');
      return;
    }
    if (password.length < 6) {
      setError('Пароль должен быть не менее 6 символов');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // 1. Регистрация пользователя
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim()
      );

      const user = userCredential.user;

      // 2. Создаем профиль в Firestore
      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        email: email.trim(),
        createdAt: new Date().toISOString(),
        emailVerified: false
      });

      // 3. Автоматический вход уже выполнен при регистрации
      // Переходим в профиль
      navigate('/profile');

    } catch (err) {
      console.error('Ошибка регистрации:', err);
      setError(
        err.code === 'auth/email-already-in-use' ? 'Этот email уже зарегистрирован' :
        err.code === 'auth/weak-password' ? 'Пароль слишком слабый' :
        err.code === 'auth/invalid-email' ? 'Неверный формат email' :
        'Ошибка регистрации: ' + err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={z.main}>
      <div className={z.field}>
        <div className={z.container}>
          <div className={z.text}>Регистрация</div>
          
          <input 
            className={z.email} 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input 
            className={z.password} 
            type="password" 
            placeholder="Пароль (минимум 6 символов)" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          
          <button 
            className={z.registr} 
            onClick={handleSignUp}
            disabled={loading}
          >
            {loading ? 'Регистрация...' : 'Создать аккаунт'}
          </button>
          <button 
            className={z.loginLink} 
            onClick={() => navigate('/login')} 
          >
            Уже есть аккаунт? Войти
          </button>

          {error && <div className={z.error}>{error}</div>}
        </div>
        <div className={z.pic}></div>
      </div>
    </div>
  );
};

export default SignUpMain;