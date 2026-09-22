import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { usePlayer } from "../context/PlayerContext";
import { defaultHlsConfig } from "../utils/hlsConfig";
import { API_BASE_URL } from "../utils/constants";

export const useHlsPlayer = (streamUrl) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const { useProxy, setStreamError, setIsPlaying, volume, isMuted } =
    usePlayer();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !streamUrl) return;

    setStreamError(null);

    const streamEndpoint = useProxy
      ? `${API_BASE_URL}/proxy?url=${encodeURIComponent(streamUrl)}`
      : streamUrl;

    if (Hls.isSupported()) {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }

      const hls = new Hls(defaultHlsConfig);
      hlsRef.current = hls;

      hls.loadSource(streamEndpoint);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => setIsPlaying(false));
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              setStreamError(
                "Network error encountered while loading the stream.",
              );
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              setStreamError(
                "Media codec error encountered. Attempting recovery...",
              );
              hls.recoverMediaError();
              break;
            default:
              setStreamError(
                "Stream terminated or unreachable by source host.",
              );
              hls.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamEndpoint;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => setIsPlaying(false));
      });
    } else {
      setStreamError(
        "HLS streaming is not natively supported by this browser.",
      );
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [streamUrl, useProxy, setStreamError, setIsPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  return videoRef;
};
