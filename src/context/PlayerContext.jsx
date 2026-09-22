import React, { createContext, useContext, useState, useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../utils/constants";
import { getStorageItem, setStorageItem } from "../utils/storage";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [activeChannel, setActiveChannel] = useState(
    getStorageItem(LOCAL_STORAGE_KEYS.LAST_CHANNEL, null),
  );
  const [useProxy, setUseProxy] = useState(
    getStorageItem(LOCAL_STORAGE_KEYS.USE_PROXY, false),
  );
  const [volume, setVolume] = useState(
    getStorageItem(LOCAL_STORAGE_KEYS.VOLUME, 0.8),
  );
  const [isMuted, setIsMuted] = useState(
    getStorageItem(LOCAL_STORAGE_KEYS.MUTED, false),
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [streamError, setStreamError] = useState(null);

  useEffect(() => {
    setStorageItem(LOCAL_STORAGE_KEYS.LAST_CHANNEL, activeChannel);
  }, [activeChannel]);

  useEffect(() => {
    setStorageItem(LOCAL_STORAGE_KEYS.USE_PROXY, useProxy);
  }, [useProxy]);

  useEffect(() => {
    setStorageItem(LOCAL_STORAGE_KEYS.VOLUME, volume);
  }, [volume]);

  useEffect(() => {
    setStorageItem(LOCAL_STORAGE_KEYS.MUTED, isMuted);
  }, [isMuted]);

  return (
    <PlayerContext.Provider
      value={{
        activeChannel,
        setActiveChannel,
        useProxy,
        setUseProxy,
        volume,
        setVolume,
        isMuted,
        setIsMuted,
        isPlaying,
        setIsPlaying,
        streamError,
        setStreamError,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
