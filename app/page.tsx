"use client";

import { LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { HomeView } from "./views";

export interface RecordedVideo {
  url: string;
  blob: Blob;
  name: string;
}

export default function Home() {
  const [view, setView] = useState<string>("home");
  const [recordedVideos, setRecordedVideos] = useState<RecordedVideo[]>([]);
  const [loading, { toggle }] = useDisclosure(false);

  const processVideo = () => {
    toggle();
    setView("empty");
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
        />
      )}
    </div>
  );
}
