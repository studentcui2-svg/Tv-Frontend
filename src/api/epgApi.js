import axiosClient from "./axiosClient";

export const epgApi = {
  getByChannelId: (channelId) => axiosClient.get(`/epg/${channelId}`),
};
