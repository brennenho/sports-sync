import { Button } from "@mantine/core";
import { IconPlayerPlay, IconPlayerStop } from "@tabler/icons-react";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { RecordedVideo } from "../page";
import styles from "./WebcamCapture.module.scss";

interface WebcamCaptureProps {
  handleVideoUpload: (video: RecordedVideo) => void;
}

export const WebcamCapture = forwardRef((props: WebcamCaptureProps, ref) => {
  const { handleVideoUpload } = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const startWebcam = useCallback(async () => {
    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing media devices.", err);
    }
  }, []);

  const stopWebcam = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  }, []);

  useImperativeHandle(ref, () => ({
    startWebcam,
    stopWebcam,
  }));

  // Request access to the webcam when the component mounts
  useEffect(() => {
    startWebcam();
  }, []);

  // Function to start recording
  const startRecording = useCallback(() => {
    if (!videoRef.current || !videoRef.current.srcObject) {
      return;
    }

    const options: MediaRecorderOptions = {
      mimeType: "video/webm; codecs=vp9",
    };
    const mediaRecorder = new MediaRecorder(
      videoRef.current.srcObject as MediaStream,
      options
    );

    mediaRecorderRef.current = mediaRecorder;

    const chunks: Blob[] = [];

    mediaRecorder.ondataavailable = (event: BlobEvent) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const newRecordedVideo: RecordedVideo = {
        url,
        blob,
        name: `recording_${new Date().toISOString()}.webm`,
      };
      handleVideoUpload(newRecordedVideo);
    };

    mediaRecorder.start();
    setIsRecording(true);
  }, []);

  // Function to stop recording
  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  }, []);

  // Function to download a recorded video
  const downloadVideo = useCallback((video: RecordedVideo) => {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = video.url;
    a.download = video.name;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(video.url);
    document.body.removeChild(a);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={styles.video}
        />
      </div>
      <div className={styles.controls}>
        {!isRecording ? (
          <Button
            onClick={startRecording}
            leftSection={<IconPlayerPlay size={20} />}
            variant="light"
            color="teal"
            fullWidth
            radius="md"
          >
            Record
          </Button>
        ) : (
          <Button
            onClick={stopRecording}
            leftSection={<IconPlayerStop size={20} />}
            variant="light"
            color="red"
            fullWidth
            radius="md"
          >
            Record
          </Button>
        )}
      </div>
    </div>
  );
});
