import React, { useRef } from "react";
import { Tv, Heart } from "lucide-react";
import { usePlayer } from "../../context/PlayerContext";
import { useFavorites } from "../../hooks/useFavorites";
import { useHlsPlayer } from "../../hooks/useHlsPlayer";
import { useFullscreen } from "../../hooks/useFullscreen";
import { PlayerControls } from "./PlayerControls";
import { StreamErrorBanner } from "./StreamErrorBanner";
import { Badge } from "../common/Badge";

export const VideoPlayer = () => {
  const containerRef = useRef(null);
  const { activeChannel, isPlaying, setIsPlaying } = usePlayer();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isFullscreen, toggleFullscreen } = useFullscreen(containerRef);
  const videoRef = useHlsPlayer(activeChannel?.streamUrl);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (!activeChannel) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-zinc-950 text-zinc-500 p-8 border border-zinc-800/40 rounded-xl m-4">
        <Tv className="w-16 h-16 mb-4 opacity-30 animate-pulse text-indigo-500" />
        <h3 className="text-lg font-semibold text-zinc-300">
          No Stream Selected
        </h3>
        <p className="text-sm mt-1 text-zinc-500">
          Pick any TV channel from the channel directory to play live content.
        </p>
      </div>
    );
  }

  const isFav = isFavorite(activeChannel._id);

  return (
    <div className="flex-1 flex flex-col h-full bg-zinc-950 p-4 overflow-hidden">
      <div
        ref={containerRef}
        className="relative flex-1 flex flex-col bg-black rounded-xl overflow-hidden border border-zinc-800/80 shadow-2xl"
      >
        <div className="relative flex-1 flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <StreamErrorBanner onRetry={() => videoRef.current?.load()} />
        </div>

        <PlayerControls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
      </div>

      <div className="mt-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center overflow-hidden">
            {activeChannel.logo ? (
              <img
                src={activeChannel.logo}
                alt=""
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ) : (
              <span className="text-sm font-bold text-zinc-600">
                {activeChannel.name.slice(0, 2)}
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-zinc-100">
                {activeChannel.name}
              </h2>
              <Badge variant="live">● LIVE</Badge>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Category:{" "}
              <span className="text-zinc-200">
                {activeChannel.category || "General"}
              </span>{" "}
              | Region: {activeChannel.country || "Global"}
            </p>
          </div>
        </div>

        <button
          onClick={() => toggleFavorite(activeChannel._id)}
          className={`p-2.5 rounded-lg border transition ${
            isFav
              ? "bg-rose-500/10 text-rose-500 border-rose-500/30"
              : "bg-zinc-800/60 text-zinc-400 border-zinc-700/40 hover:text-zinc-100"
          }`}
        >
          <Heart className={`w-5 h-5 ${isFav ? "fill-current" : ""}`} />
        </button>
      </div>
    </div>
  );
};
