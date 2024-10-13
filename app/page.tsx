"use client";

import { LoadingOverlay, Switch } from "@mantine/core";
import { useState } from "react";
import { AboutView, HomeView, ResultView } from "./views";

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
  const [aboutView, setAboutView] = useState(false);

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
    setView("result");
  };

  return (
    <div>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <Switch
        label="About"
        labelPosition="left"
        size="md"
        color="teal"
        checked={aboutView}
        onChange={(event) => setAboutView(event.currentTarget.checked)}
        style={{ position: "fixed", top: 20, right: 20 }}
      />
      {!aboutView && view === "home" && (
        <HomeView
          recordedVideos={recordedVideos}
          setRecordedVideos={setRecordedVideos}
          processVideo={processVideo}
          setView={setView}
        />
      )}
      {!aboutView && view === "result" && (
        <ResultView
          recordedVideos={recordedVideos}
          setView={setView}
          playerURL={playerURL}
          playerName={playerName}
        />
      )}
      {aboutView && <AboutView />}
    </div>
  );
}
