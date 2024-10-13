import React, { useEffect, useState } from "react";
import { Stack } from "@mantine/core";
import VideoPlayer from "../../components/VideoPlayer";
import { HomeViewButton } from "../../components/HomeViewButton";
import { ResultTitle } from "../../components/ResultTitle"; // Import the ResultTitle component
import { RecordedVideo } from "../../page";
import style from "./match-result.module.scss"; 

interface MatchResultViewProps {
  recordedVideos: RecordedVideo[];
  setView: (view: string, videoUrl?: string) => void;
}

export const MatchResultView: React.FC<MatchResultViewProps> = ({ recordedVideos, setView }) => {
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [matchResultName, setMatchResultName] = useState<string>("");

  // Function to fetch the video URL
  const fetchVideo = () => {
    // Replace this with your actual video retrieval logic
    const fetchedVideoUrl = "video1.mp4"; // Hardcoded for demonstration
    setVideoSrc(fetchedVideoUrl);

    // Extract the match result name from the video URL
    const name = fetchedVideoUrl.split("/").pop()?.split(".")[0]; // Get the filename without extension
    setMatchResultName(name || "Unknown Player"); // Set the match result name
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div className={style.container}>
      <Stack>
        <ResultTitle text="You are most like" />
        <ResultTitle text={matchResultName} />
        <div className={style.videoWrapper}>
          {/* Left Video Player */}
          <VideoPlayer src={videoSrc} />
          {/* Right Video Player (can use a different source) */}
          <VideoPlayer src={recordedVideos[0].url} /> 
        </div>
        <HomeViewButton onClick={() => setView("home")} />
      </Stack>
    </div>
  );
};