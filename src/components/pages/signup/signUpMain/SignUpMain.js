import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
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
      // 1. Регистрация с автоматическим подтверждением
      const { data, error: authError } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
          data: {
            email_confirmed_at: new Date().toISOString() // Подтверждаем email сразу
          }
        }
      });

      if (authError) throw authError;

      // 2. Принудительно подтверждаем email (для локальной разработки)
      await supabase
        .from('auth.users')
        .update({ email_confirmed_at: new Date().toISOString() })
        .eq('email', email.trim());

      // 3. Автоматический вход
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
      });

      if (signInError) throw signInError;

      // 4. Создаем профиль
      await supabase
        .from('profiles')
        .upsert({
          id: data.user?.id,
          email: email.trim(),
          created_at: new Date().toISOString()
        });

      // 5. Переходим в профиль
      navigate('/profile');

    } catch (err) {
      setError(
        err.message.includes('already registered') ? 'Этот email уже зарегистрирован' :
        'Ошибка: ' + err.message
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

          {error && <div className={z.error}>{error}</div>}
        </div>
        <div className={z.pic}></div>
      </div>
    </div>
  );
};

export default SignUpMain;