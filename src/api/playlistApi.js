import axiosClient from "./axiosClient";

export const playlistApi = {
  getAll: () => axiosClient.get("/playlists"),
  sync: (url) => axiosClient.post("/playlists/sync", { url }),
};
