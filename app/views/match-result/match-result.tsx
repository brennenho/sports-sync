import { Stack, Text } from "@mantine/core";
import React from "react";
import { HomeViewButton, VideoPlayer } from "../../components";
import { RecordedVideo } from "../../page";
import style from "./match-result.module.scss";

interface MatchResultViewProps {
  recordedVideos: RecordedVideo[];
  setView: (view: string) => void;
  playerURL: string;
  playerName: string;
}

export const MatchResultView: React.FC<MatchResultViewProps> = ({
  recordedVideos,
  setView,
  playerURL,
  playerName,
}) => {
  return (
    <div className={style.container}>
      <Stack>
        <Text className={style.title}>Your swing syncs to...</Text>
        <Text className={style.title}>{playerName}</Text>
        <div className={style.videoWrapper}>
          <div className={style.videoContainer}>
            <VideoPlayer src={playerURL} />
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
