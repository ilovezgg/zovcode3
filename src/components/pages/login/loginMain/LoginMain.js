import { useState } from 'react';
import { supabase } from '../../../lib/supabase';
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
      // 1. Авторизация
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (authError) throw authError;

      // 2. Переход в профиль после успешного входа
      navigate('/profile');

    } catch (err) {
      setError(
        err.message.includes('Invalid login credentials') 
          ? 'Неверный email или пароль' 
          : 'Ошибка: ' + err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={z.main}>
      <div className={z.field}>
        <div className={z.container}>
          <div className={z.text}>Вход в аккаунт</div> {/* Изменили заголовок */}
          
          {/* Поля формы (такие же, как в регистрации) */}
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
          
          {/* Кнопка "Войти" вместо "Создать аккаунт" */}
          <button 
            className={z.registr} // Используем тот же класс для стилей
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Вход...' : 'Войти'}
          </button>

          {/* Ссылка на регистрацию */}
          <button 
            className={z.loginLink} 
            onClick={() => navigate('/signup')}
          >
            Нет аккаунта? Зарегистрируйтесь
          </button>

          {error && <div className={z.error}>{error}</div>}
        </div>
        <div className={z.pic}></div> {/* Оставляем графический элемент */}
      </div>
    </div>
  );
};

export default LoginMain;