import axiosClient from "./axiosClient";

export const favoriteApi = {
  getAll: () => axiosClient.get("/favorites"),
  toggle: (channelId) => axiosClient.post("/favorites/toggle", { channelId }),
};
