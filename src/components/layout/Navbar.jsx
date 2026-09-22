import React, { useState } from "react";
import { Tv, RefreshCw } from "lucide-react";
import { Button } from "../common/Button";
import { PlaylistSyncModal } from "../playlist/PlaylistSyncModal";
import { PlaylistStatusCard } from "../playlist/PlaylistStatusCard";
import { useChannels } from "../../hooks/useChannels";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { totalChannels, refetchChannels } = useChannels();

  return (
    <>
      <header className="h-16 border-b border-zinc-800/80 px-6 flex items-center justify-between bg-zinc-950/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-950">
            <Tv className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-black tracking-tight text-white flex items-center gap-2">
              STREAMSTUDIO{" "}
              <span className="text-xs px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-medium">
                IPTV
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <PlaylistStatusCard totalChannels={totalChannels} />
          <Button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 text-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Import / Sync M3U
          </Button>
        </div>
      </header>

      <PlaylistSyncModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSynced={refetchChannels}
      />
    </>
  );
};
