import React from "react";
import { Heart } from "lucide-react";
import { usePlayer } from "../../context/PlayerContext";
import { useFavorites } from "../../hooks/useFavorites";

export const ChannelCard = ({ channel }) => {
  const { activeChannel, setActiveChannel } = usePlayer();
  const { isFavorite, toggleFavorite } = useFavorites();
  const isSelected = activeChannel?._id === channel._id;
  const isFav = isFavorite(channel._id);

  return (
    <div
      onClick={() => setActiveChannel(channel)}
      className={`group relative flex items-center justify-between p-3 rounded-lg border cursor-pointer transition ${
        isSelected
          ? "bg-indigo-600/15 border-indigo-500 shadow-md"
          : "bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-800/50 hover:border-zinc-700"
      }`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="w-10 h-10 rounded bg-zinc-950 border border-zinc-800 p-1 flex items-center justify-center shrink-0">
          {channel.logo ? (
            <img
              src={channel.logo}
              alt=""
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <span className="text-xs font-bold text-zinc-600 uppercase">
              {channel.name.slice(0, 2)}
            </span>
          )}
        </div>
        <div className="overflow-hidden">
          <h4 className="text-sm font-semibold text-zinc-200 truncate group-hover:text-indigo-300">
            {channel.name}
          </h4>
          <span className="text-xs text-zinc-500 truncate block">
            {channel.category || "General"}
          </span>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(channel._id);
        }}
        className={`p-1.5 rounded-md hover:bg-zinc-800 transition ${
          isFav ? "text-rose-500" : "text-zinc-600 hover:text-zinc-300"
        }`}
      >
        <Heart className={`w-4 h-4 ${isFav ? "fill-current" : ""}`} />
      </button>
    </div>
  );
};
