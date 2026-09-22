import axiosClient from "./axiosClient";

export const channelApi = {
  getAll: (params) => axiosClient.get("/channels", { params }),
  getById: (id) => axiosClient.get(`/channels/${id}`),
};
