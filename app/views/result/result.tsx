import { Button, Group, Space, Stack, Title } from "@mantine/core";
import { IconReload } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { RecordedVideo } from "../../page";
import styles from "./result.module.scss";

interface ResultViewProps {
  recordedVideos: RecordedVideo[];
  setView: (view: string) => void;
  playerURL: string;
  playerName: string;
}

export const ResultView: React.FC<ResultViewProps> = ({
  recordedVideos,
  setView,
  playerURL,
  playerName,
}) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack align="center" justify="space-around">
      {showConfetti && <Confetti />}
      <Group className={styles.title}>
        <Title>Your swing syncs to...</Title>
        <Title c="teal">{playerName}</Title>
      </Group>
      <Group justify="center" className={styles.group}>
        <div className={styles.videoContainer}>
          <video src={playerURL} controls className={styles.video} />
        </div>
        <div className={styles.videoContainer}>
          <video
            src={recordedVideos[recordedVideos.length - 1]?.url}
            controls
            className={styles.video}
          />
        </div>
      </Group>
      <Space h="md" />
      <Button
        onClick={() => setView("home")}
        leftSection={<IconReload size={20} />}
        variant="light"
        color="teal"
        size="md"
        radius="md"
      >
        Reset
      </Button>
    </Stack>
  );
};
