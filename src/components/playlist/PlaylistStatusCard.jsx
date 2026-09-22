import React from "react";
import { Layers } from "lucide-react";

export const PlaylistStatusCard = ({ totalChannels }) => {
  return (
    <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800">
      <Layers className="w-3.5 h-3.5 text-indigo-400" />
      <span>{totalChannels} Channels Indexed</span>
    </div>
  );
};
