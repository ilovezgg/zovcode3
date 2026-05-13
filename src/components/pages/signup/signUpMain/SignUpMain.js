import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../lib/firebase';
import { useNavigate, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import z from './SignUpMain.module.css';

const SignUpMain = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim()
      );

      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        email: email.trim(),
        createdAt: new Date().toISOString(),
        emailVerified: false
      });

      navigate('/profile');

    } catch (err) {
      console.error('Ошибка регистрации:', err);
      const errorMessages = {
        'auth/email-already-in-use': 'Этот email уже зарегистрирован',
        'auth/weak-password': 'Пароль слишком слабый',
        'auth/invalid-email': 'Неверный формат email',
        'auth/network-request-failed': 'Ошибка сети. Проверьте подключение'
      };
      setError(errorMessages[err.code] || 'Ошибка регистрации');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={z.section}>
      <div ref={ref} className={`${z.container} ${inView ? z.visible : ''}`}>
        <div className={z.formWrapper}>
          <div className={z.formContent}>
            <h1 className={z.title}>Регистрация</h1>
            
            <form onSubmit={handleSignUp} className={z.form}>
              <div className={z.inputGroup}>
                <input 
                  className={z.input} 
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  disabled={loading}
                  required
                />
              </div>
              
              <div className={z.inputGroup}>
                <input 
                  className={z.input} 
                  type="password" 
                  placeholder="Пароль (минимум 6 символов)" 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  minLength={6}
                  disabled={loading}
                  required
                />
              </div>
              
              {error && <div className={z.error}>{error}</div>}
              
              <button 
                className={z.submitBtn} 
                type="submit"
                disabled={loading || !email || !password}
              >
                {loading ? 'Регистрация...' : 'Создать аккаунт'}
              </button>
            </form>

            <div className={z.divider}>
              <span>или</span>
            </div>

            <Link to="/login" className={z.loginLink}>
              Уже есть аккаунт? Войти
            </Link>
          </div>
        </div>
        
        <div className={z.imageWrapper}>
          <div className={z.image} />
        </div>
      </div>
    </section>
  );
};

export default SignUpMain;