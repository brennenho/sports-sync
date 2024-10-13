"use client";

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

  return (
    <div>
      {view === "home" && (
        <HomeView
          recordedVideos={recordedVideos}
          setRecordedVideos={setRecordedVideos}
        />
      )}
    </div>
  );
}
