import { Group, Stack, Text, Title } from "@mantine/core";
import React, { useRef } from "react";

import style from "./home.module.scss";

import { useDisclosure } from "@mantine/hooks";
import { VideoModal, VideoUploader, WebcamCapture } from "../../components";
import { RecordedVideo } from "../../page";

interface HomeProps {
  recordedVideos: RecordedVideo[];
  setRecordedVideos: React.Dispatch<React.SetStateAction<RecordedVideo[]>>;
  processVideo: () => void;
  setView: (view: string, videoUrl?: string) => void;
}

export const HomeView: React.FC<HomeProps> = ({
  recordedVideos,
  setRecordedVideos,
  processVideo,
  setView,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const webcamRef = useRef<{ startWebcam: () => void; stopWebcam: () => void }>(
    null
  );

  const handleVideoUpload = (video: RecordedVideo) => {
    setRecordedVideos((prev) => [...prev, video]);
    open();
  };

  const processVideoClose = () => {
    close();
    processVideo();
    if (webcamRef.current) {
      webcamRef.current.stopWebcam();
    }
  };

  return (
    <div>
      <Stack justify="flex-start" align="center" gap="md">
        <Group className={style.title} gap="xs">
          <Title c="teal">Sports</Title>
          <Title>Sync</Title>
        </Group>
        <WebcamCapture ref={webcamRef} handleVideoUpload={handleVideoUpload} />
        <Group>
          <Text>Or, manually upload a video</Text>
          <VideoUploader handleVideoUpload={handleVideoUpload} />
        </Group>
        <VideoModal
          opened={opened}
          close={close}
          recordedVideos={recordedVideos}
          processVideo={processVideoClose}
        />
      </Stack>
    </div>
  );
};
