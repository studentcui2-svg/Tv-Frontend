import React from "react";

export const PlaylistSelector = ({ playlists, onSelect }) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 rounded-lg p-2 focus:outline-none"
    >
      <option value="">Select Preconfigured Source</option>
      {playlists.map((pl) => (
        <option key={pl._id} value={pl.url}>
          {pl.name}
        </option>
      ))}
    </select>
  );
};
