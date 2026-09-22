import { useEpgContext } from "../context/EpgContext";

export const useEpg = () => {
  return useEpgContext();
};
