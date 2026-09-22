import React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { usePlayer } from "../../context/PlayerContext";

export const VolumeControl = () => {
  const { volume, setVolume, isMuted, setIsMuted } = usePlayer();

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="text-zinc-300 hover:text-white transition"
      >
        {isMuted || volume === 0 ? (
          <VolumeX className="w-4 h-4 text-rose-400" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
        className="w-16 md:w-24 h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
      />
    </div>
  );
};
