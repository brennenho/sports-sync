import React, { useEffect, useState } from "react";
import { Stack, Text } from "@mantine/core";
import VideoPlayer from "../../components/VideoPlayer";
import { HomeViewButton } from "../../components/HomeViewButton";
import { ResultTitle } from "../../components/ResultTitle"; 
import { RecordedVideo } from "../../page";
import style from "./match-result.module.scss"; 

interface MatchResultViewProps {
  recordedVideos: RecordedVideo[];
  setView: (view: string, videoUrl?: string) => void;
}

export const MatchResultView: React.FC<MatchResultViewProps> = ({ recordedVideos, setView }) => {
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [matchResultName, setMatchResultName] = useState<string>("");

  useEffect(() => {
    const fetchedVideoUrl = "video1.mp4"; // Get first video URL
    setVideoSrc(fetchedVideoUrl);

    const name = fetchedVideoUrl.split("/").pop()?.split(".")[0] || "Unknown Player"; // Extract name
    setMatchResultName(name);
  }, [recordedVideos]);

  return (
    <div className={style.container}>
      <Stack>
        <Text className={style.title}>Your swing syncs to...</Text>
        <Text className={style.title}>{matchResultName}</Text>
        <div className={style.videoWrapper}>
          <div className={style.videoContainer}>
            <VideoPlayer src={videoSrc} />
          </div>
          <div className={style.videoContainer}>
            <VideoPlayer src={recordedVideos[0]?.url} />
          </div>
        </div>
        <div className={style.button}>
          <HomeViewButton onClick={() => setView("home")} />
        </div>
      </Stack>
    </div>
  );
};