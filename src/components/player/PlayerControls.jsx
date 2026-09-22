import React from "react";
import { Play, Pause } from "lucide-react";
import { VolumeControl } from "./VolumeControl";
import { FullscreenToggle } from "./FullscreenToggle";
import { ProxyToggle } from "./ProxyToggle";
import { QualitySelector } from "./QualitySelector";

export const PlayerControls = ({
  isPlaying,
  onPlayPause,
  isFullscreen,
  onToggleFullscreen,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/90 border-t border-zinc-800">
      <div className="flex items-center gap-4">
        <button
          onClick={onPlayPause}
          className="text-zinc-100 hover:text-indigo-400 transition"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 fill-current" />
          )}
        </button>
        <VolumeControl />
      </div>

      <div className="flex items-center gap-3">
        <ProxyToggle />
        <QualitySelector />
        <FullscreenToggle
          isFullscreen={isFullscreen}
          onToggle={onToggleFullscreen}
        />
      </div>
    </div>
  );
};
