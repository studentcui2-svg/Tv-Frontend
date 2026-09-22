import React from "react";
import { Maximize, Minimize } from "lucide-react";

export const FullscreenToggle = ({ isFullscreen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-1 text-zinc-300 hover:text-white transition"
      title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
    >
      {isFullscreen ? (
        <Minimize className="w-4 h-4" />
      ) : (
        <Maximize className="w-4 h-4" />
      )}
    </button>
  );
};
