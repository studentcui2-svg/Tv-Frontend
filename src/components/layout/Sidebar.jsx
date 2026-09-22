import React from "react";
import { ChannelSearch } from "../channels/ChannelSearch";
import { CategoryFilter } from "../channels/CategoryFilter";
import { ChannelList } from "../channels/ChannelList";
import { useChannels } from "../../hooks/useChannels";

export const Sidebar = () => {
  const { channels, loading } = useChannels();

  return (
    <aside className="w-80 md:w-96 border-r border-zinc-800/80 bg-zinc-950/40 p-4 flex flex-col gap-3 h-full overflow-hidden">
      <ChannelSearch />
      <CategoryFilter />
      <ChannelList channels={channels} loading={loading} />
    </aside>
  );
};
