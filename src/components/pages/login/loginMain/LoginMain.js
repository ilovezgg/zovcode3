import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../lib/firebase';
import { useNavigate } from 'react-router-dom';
import z from './LoginMain.module.css';

const LoginMain = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
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
      // Авторизация
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim()
      );

      // Переход в профиль после успешного входа
      navigate('/profile');

    } catch (err) {
      console.error('Ошибка входа:', err);
      setError(
        err.code === 'auth/invalid-credential' ? 'Неверный email или пароль' :
        err.code === 'auth/user-not-found' ? 'Пользователь не найден' :
        err.code === 'auth/wrong-password' ? 'Неверный пароль' :
        'Ошибка входа: ' + err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={z.main}>
      <div className={z.field}>
        <div className={z.container}>
          <div className={z.text}>Вход в аккаунт</div>
          
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
            placeholder="Пароль" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          
          <button 
            className={z.registr}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Вход...' : 'Войти'}
          </button>

          <button 
            className={z.loginLink} 
            onClick={() => navigate('/signup')}
          >
            Нет аккаунта? Зарегистрируйтесь
          </button>

          {error && <div className={z.error}>{error}</div>}
        </div>
        <div className={z.pic}></div>
      </div>
    </div>
  );
};

export default LoginMain;