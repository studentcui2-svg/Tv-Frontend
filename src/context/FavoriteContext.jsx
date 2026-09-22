import React, { createContext, useContext, useState, useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../utils/constants";
import { getStorageItem, setStorageItem } from "../utils/storage";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    getStorageItem(LOCAL_STORAGE_KEYS.FAVORITES, []),
  );

  useEffect(() => {
    setStorageItem(LOCAL_STORAGE_KEYS.FAVORITES, favorites);
  }, [favorites]);

  const toggleFavorite = (channelId) => {
    setFavorites((prev) =>
      prev.includes(channelId)
        ? prev.filter((id) => id !== channelId)
        : [...prev, channelId],
    );
  };

  const isFavorite = (channelId) => favorites.includes(channelId);

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoriteContext);
