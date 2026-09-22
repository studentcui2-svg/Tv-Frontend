import React from "react";
import { ChannelCard } from "./ChannelCard";
import { Loader } from "../common/Loader";

export const ChannelList = ({ channels, loading }) => {
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <Loader size="md" />
      </div>
    );
  }

  if (channels.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-center p-6 text-zinc-500 text-sm">
        No television channels match the applied filter.
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto space-y-1.5 pr-1">
      {channels.map((ch) => (
        <ChannelCard key={ch._id} channel={ch} />
      ))}
    </div>
  );
};
