import React from "react";
import { Search } from "lucide-react";
import { useChannels } from "../../hooks/useChannels";

export const ChannelSearch = () => {
  const { searchQuery, setSearchQuery } = useChannels();

  return (
    <div className="relative w-full">
      <Search className="w-4 h-4 absolute left-3 top-3 text-zinc-500" />
      <input
        type="text"
        placeholder="Filter by channel name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-800 pl-9 pr-3 py-2 rounded-lg text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition"
      />
    </div>
  );
};
