import React, { useCallback } from "react";

import { Button, FileButton } from "@mantine/core";
import { RecordedVideo } from "../page";

interface VideoUploaderProps {
  setRecordedVideos: React.Dispatch<React.SetStateAction<RecordedVideo[]>>;
}

export const VideoUploader: React.FC<VideoUploaderProps> = ({
  setRecordedVideos,
}) => {
  const handleFileChange = useCallback((file: File | null) => {
    if (file) {
      const url = URL.createObjectURL(file);
      const newUploadedVideo: RecordedVideo = {
        url,
        blob: file,
        name: file.name,
      };
      setRecordedVideos((prev) => [...prev, newUploadedVideo]);
    }
  }, []);

  return (
    <div>
      <FileButton onChange={handleFileChange} accept="video/*">
        {(props) => <Button {...props}>Upload Video</Button>}
      </FileButton>
    </div>
  );
};
