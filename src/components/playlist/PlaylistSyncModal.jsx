import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { playlistApi } from "../../api/playlistApi";
import { DEFAULT_PLAYLIST_URL } from "../../utils/constants";

export const PlaylistSyncModal = ({ isOpen, onClose, onSynced }) => {
  const [url, setUrl] = useState(DEFAULT_PLAYLIST_URL);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSync = async (e) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError(null);
    try {
      await playlistApi.sync(url);
      onSynced();
      onClose();
    } catch (err) {
      setError(err.message || "Playlist synchronization failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Import M3U Playlist">
      <form onSubmit={handleSync} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-400 mb-1">
            M3U Playlist Source URL
          </label>
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://domain.com/playlist.m3u"
          />
        </div>

        {error && (
          <p className="text-xs text-rose-400 bg-rose-950/40 p-2.5 rounded border border-rose-800">
            {error}
          </p>
        )}

        <div className="flex justify-end gap-2 pt-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Parsing & Indexing..." : "Sync Channels"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
