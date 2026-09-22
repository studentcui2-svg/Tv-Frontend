import { useFavoritesContext } from "../context/FavoriteContext";

export const useFavorites = () => {
  return useFavoritesContext();
};
