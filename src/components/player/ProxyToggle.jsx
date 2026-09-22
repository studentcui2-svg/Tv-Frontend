import React from "react";
import { ShieldCheck, ShieldAlert } from "lucide-react";
import { usePlayer } from "../../context/PlayerContext";

export const ProxyToggle = () => {
  const { useProxy, setUseProxy } = usePlayer();

  return (
    <button
      onClick={() => setUseProxy(!useProxy)}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
        useProxy
          ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
          : "bg-zinc-800/80 text-zinc-400 border-zinc-700/50 hover:text-zinc-200"
      }`}
      title={
        useProxy
          ? "Bypassing CORS via backend proxy"
          : "Direct streaming from host"
      }
    >
      {useProxy ? (
        <ShieldCheck className="w-3.5 h-3.5" />
      ) : (
        <ShieldAlert className="w-3.5 h-3.5" />
      )}
      {useProxy ? "Proxy ON" : "Proxy OFF"}
    </button>
  );
};
