import React from "react";
import { PlayerProvider } from "./context/PlayerContext";
import { ChannelProvider } from "./context/ChannelContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { EpgProvider } from "./context/EpgContext";
import { MainLayout } from "./components/layout/MainLayout";
import { VideoPlayer } from "./components/player/VideoPlayer";

export default function App() {
  return (
    <PlayerProvider>
      <ChannelProvider>
        <FavoriteProvider>
          <EpgProvider>
            <MainLayout>
              <VideoPlayer />
            </MainLayout>
          </EpgProvider>
        </FavoriteProvider>
      </ChannelProvider>
    </PlayerProvider>
  );
}
