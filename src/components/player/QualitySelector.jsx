import React from "react";
import { Settings } from "lucide-react";

export const QualitySelector = () => {
  return (
    <div className="flex items-center gap-1.5 text-zinc-400 text-xs px-2 py-1 bg-zinc-800/60 rounded border border-zinc-700/40">
      <Settings className="w-3.5 h-3.5" />
      <span>Auto (HLS)</span>
    </div>
  );
};
