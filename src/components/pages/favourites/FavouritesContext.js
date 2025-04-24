import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Загрузка избранного
  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
        console.log("💾 Избранное загружено:", JSON.parse(saved)); // Отладка
      } catch (e) {
        console.error("❌ Ошибка чтения localStorage:", e);
      }
    }
  }, []);

  // Сохранение
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log("💾 Избранное сохранено:", favorites); // Отладка
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
    console.log("⭐ Избранное обновлено:", id); // Отладка
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);