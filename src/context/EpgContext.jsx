import React, { createContext, useContext, useState, useEffect } from "react";
import { epgApi } from "../api/epgApi";
import { usePlayer } from "./PlayerContext";

const EpgContext = createContext();

export const EpgProvider = ({ children }) => {
  const { activeChannel } = usePlayer();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!activeChannel?._id) {
      setPrograms([]);
      return;
    }

    const loadEpg = async () => {
      setLoading(true);
      try {
        const response = await epgApi.getByChannelId(activeChannel._id);
        setPrograms(response.data || []);
      } catch (err) {
        setPrograms([]);
      } finally {
        setLoading(false);
      }
    };

    loadEpg();
  }, [activeChannel]);

  return (
    <EpgContext.Provider value={{ programs, loading }}>
      {children}
    </EpgContext.Provider>
  );
};

export const useEpgContext = () => useContext(EpgContext);
