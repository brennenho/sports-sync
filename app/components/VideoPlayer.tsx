import React from "react";
import style from "./match-result.module.scss";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => (
  <div className={style.videoContainer}>
    <video width="320" height="240" controls className={style.video}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoPlayer;