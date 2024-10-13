import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { RecordedVideo } from "../page";

interface VideoModalProps {
  opened: boolean;
  close: () => void;
  recordedVideos: RecordedVideo[];
  processVideo: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  opened,
  close,
  recordedVideos,
  processVideo,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Approve Video"
      centered
      size="60%"
    >
      {recordedVideos.length == 0 ? (
        <Text>Error: Video not found.</Text>
      ) : (
        <Stack align="center">
          <video
            src={recordedVideos[recordedVideos.length - 1].url}
            controls
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <Group justify="space-between" grow style={{ width: "100%" }}>
            <Button
              leftSection={<IconCheck size={20} />}
              variant="light"
              color="teal"
              fullWidth
              onClick={processVideo}
              radius="md"
            >
              Yes
            </Button>
            <Button
              leftSection={<IconX size={20} />}
              variant="light"
              color="red"
              fullWidth
              onClick={close}
              radius="md"
            >
              No
            </Button>
          </Group>
        </Stack>
      )}
    </Modal>
  );
};
