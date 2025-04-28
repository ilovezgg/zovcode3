import { useState } from 'react';
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
    
    // Валидация
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
      const { data, error: authError } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`,
          data: {
            signup_date: new Date().toISOString()
          }
        }
      });

      if (authError) throw authError;

      // 2. Если требуется подтверждение email
      if (!data.user) {
        navigate('/check-email');
        return;
      }

      // 3. Ждём 1 секунду (чтобы избежать ошибки анти-спама)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 4. Создаём профиль (без лишних проверок, т.к. политика INSERT разрешена)
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: data.user.id,
          email: data.user.email,
          created_at: new Date().toISOString()
        });

      if (profileError) throw profileError;

      // 5. Перенаправление
      navigate('/profile', { replace: true });

    } catch (err) {
      setError(
        err.message.includes('already registered') ? 'Этот email уже зарегистрирован' :
        err.message.includes('Email rate limit exceeded') ? 'Слишком много запросов' :
        err.message.includes('For security purposes') ? 'Подождите 2 секунды перед повторной попыткой' :
        'Ошибка регистрации'
      );
      console.error('Registration error:', err);
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
            aria-busy={loading}
          >
            {loading ? 'Регистрация...' : 'Создать аккаунт'}
          </button>

          {error && (
            <div className={z.error}>
              {error}
            </div>
          )}
        </div>
        
        <div className={z.pic}></div>
      </div>
    </div>
  );
};

export default SignUpMain;