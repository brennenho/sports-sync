"use client";

import { LoadingOverlay } from "@mantine/core";
import { useState } from "react";
import { HomeView, MatchResultView } from "./views";

import { sendVideo } from "./api";

export interface RecordedVideo {
  url: string;
  blob: Blob;
  name: string;
}

export default function Home() {
  const [view, setView] = useState<string>("home");
  const [recordedVideos, setRecordedVideos] = useState<RecordedVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [playerURL, setPlayerURL] = useState<string>("");
  const [playerName, setPlayerName] = useState<string>("");

  const processVideo = async () => {
    setLoading(true);
    setView("empty");
    if (recordedVideos.length == 1) {
      const result = await sendVideo(recordedVideos[0]);
      if (!result) {
        setLoading(false);
        return;
      }

      const { player, url } = result;
      setPlayerURL(url);
      setPlayerName(player);
    }
    setLoading(false);
    setView("match-result");
  };

  return (
    <div>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      {view === "home" && (
        <HomeView
          recordedVideos={recordedVideos}
          setRecordedVideos={setRecordedVideos}
          processVideo={processVideo}
          setView={setView}
        />
      )}
      {view === "match-result" && (
        <MatchResultView
          recordedVideos={recordedVideos}
          setView={setView}
          playerURL={playerURL}
          playerName={playerName}
        />
      )}
    </div>
  );
}
