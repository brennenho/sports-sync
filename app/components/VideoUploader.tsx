import React, { useCallback } from "react";

import { Button, FileButton } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { RecordedVideo } from "../page";

interface VideoUploaderProps {
  handleVideoUpload: (video: RecordedVideo) => void;
}

export const VideoUploader: React.FC<VideoUploaderProps> = ({
  handleVideoUpload,
}) => {
  const handleFileChange = useCallback((file: File | null) => {
    if (file) {
      const url = URL.createObjectURL(file);
      const newUploadedVideo: RecordedVideo = {
        url,
        blob: file,
        name: file.name,
      };
      handleVideoUpload(newUploadedVideo);
    }
  }, []);

  return (
    <div>
      <FileButton onChange={handleFileChange} accept="video/*">
        {(props) => (
          <Button
            leftSection={<IconUpload size={20} />}
            variant="light"
            color="teal"
            {...props}
          >
            Upload Video
          </Button>
        )}
      </FileButton>
    </div>
  );
};
