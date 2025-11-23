import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // Load initial favorites directly from localStorage (SAFE)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save favorites whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add if not exists (safe)
  const addFavorite = (text) => {
    setFavorites((prev) =>
      prev.includes(text) ? prev : [...prev, text]
    );
  };

  // Remove favorite
  const removeFavorite = (text) => {
    setFavorites((prev) => prev.filter((item) => item !== text));
  };

  // Toggle favorite (useful for heart button)
  const toggleFavorite = (text) => {
    setFavorites((prev) =>
      prev.includes(text)
        ? prev.filter((item) => item !== text)
        : [...prev, text]
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => useContext(FavoritesContext);
