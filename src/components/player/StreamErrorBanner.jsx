import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { usePlayer } from "../../context/PlayerContext";

export const StreamErrorBanner = ({ onRetry }) => {
  const { streamError, useProxy, setUseProxy } = usePlayer();

  if (!streamError) return null;

  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-950/90 backdrop-blur-sm p-6 text-center">
      <AlertTriangle className="w-12 h-12 text-rose-500 mb-3" />
      <h3 className="text-lg font-bold text-zinc-100">Playback Failed</h3>
      <p className="text-sm text-zinc-400 max-w-md mt-1 mb-4">{streamError}</p>

      <div className="flex items-center gap-3">
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold transition"
        >
          <RefreshCw className="w-4 h-4" /> Retry
        </button>

        {!useProxy && (
          <button
            onClick={() => setUseProxy(true)}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 rounded-lg text-sm font-semibold transition"
          >
            Switch to Server Proxy
          </button>
        )}
      </div>
    </div>
  );
};
