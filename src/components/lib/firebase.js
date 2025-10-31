import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// ЕБУЧАЯ КОНФИГУРАЦИЯ - НЕ КОММИТИТЬ В ГИТ!
const firebaseConfig = {
  apiKey: "AIzaSyB142glraY7SqqEjoZWWntjNAYnb_pSugI",
  authDomain: "zovcode3.firebaseapp.com",
  projectId: "zovcode3",
  storageBucket: "zovcode3.firebasestorage.app",
  messagingSenderId: "458713282869",
  appId: "1:458713282869:web:46b006d8cd3ea0cef1f47c"
};

// ЕБУЧАЯ ИНИЦИАЛИЗАЦИЯ
const app = initializeApp(firebaseConfig);

// ЕБУЧИЕ ЭКСПОРТЫ
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

// ⚠️ ЭТОТ ФАЙЛ ДОЛЖЕН БЫТЬ В .gitignore!
// ⚠️ НЕ КОММИТИТЬ ЕГО НАХУЙ!
// ⚠️ КЛЮЧИ ВИДНЫ ТОЛЬКО ТЕБЕ!