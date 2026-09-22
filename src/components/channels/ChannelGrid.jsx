import React from "react";
import { ChannelCard } from "./ChannelCard";

export const ChannelGrid = ({ channels }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
      {channels.map((channel) => (
        <ChannelCard key={channel._id} channel={channel} />
      ))}
    </div>
  );
};
