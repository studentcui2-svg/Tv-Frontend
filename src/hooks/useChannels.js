import { useChannelsContext } from "../context/ChannelContext";

export const useChannels = () => {
  return useChannelsContext();
};
