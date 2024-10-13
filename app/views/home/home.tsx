import { Stack, Title } from "@mantine/core";
import React from "react";

import style from "./home.module.scss";

import { VideoUploader, WebcamCapture } from "../../components";
import { RecordedVideo } from "../../page";

interface HomeProps {
  recordedVideos: RecordedVideo[];
  setRecordedVideos: React.Dispatch<React.SetStateAction<RecordedVideo[]>>;
}

export const HomeView: React.FC<HomeProps> = ({
  recordedVideos,
  setRecordedVideos,
}) => {
  return (
    <div>
      <Stack justify="flex-start" align="center" gap="md">
        <Title className={style.title}>Sports Sync</Title>
        <WebcamCapture setRecordedVideos={setRecordedVideos} />
        <VideoUploader setRecordedVideos={setRecordedVideos} />
        <div>
          <h3>Recorded Videos</h3>
          {recordedVideos.length === 0 && <p>No recordings yet.</p>}
          {recordedVideos.map((video, index) => (
            <div key={index}>
              <video src={video.url} controls />
            </div>
          ))}
        </div>
      </Stack>
    </div>
  );
};
