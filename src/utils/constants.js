export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

export const DEFAULT_PLAYLIST_URL =
  "https://iptv-org.github.io/iptv/countries/us.m3u";

export const LOCAL_STORAGE_KEYS = {
  FAVORITES: "iptv_favorites",
  LAST_CHANNEL: "iptv_last_channel",
  VOLUME: "iptv_volume",
  MUTED: "iptv_muted",
  USE_PROXY: "iptv_use_proxy",
};
