import React from "react";
import { Radio } from "lucide-react";

export const CurrentProgramBadge = ({ title }) => {
  return (
    <div className="flex items-center gap-1.5 text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded">
      <Radio className="w-3 h-3 animate-pulse" />
      <span className="truncate max-w-[200px]">
        {title || "Live Transmission"}
      </span>
    </div>
  );
};
