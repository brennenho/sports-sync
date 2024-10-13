import axios from "axios";
import { RecordedVideo } from "./page";

export const sendVideo = async (video: RecordedVideo) => {
  try {
    const formData = new FormData();
    formData.append("file", video.blob, video.name);

    const response = await axios.post(
      "http://localhost:8000/process",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const player = response.data.player;
    const urlResponse = await axios.get(
      "http://localhost:8000/download/" + response.data.file_name,
      {
        responseType: "blob",
      }
    );

    const url = URL.createObjectURL(
      new Blob([urlResponse.data], { type: "video/mp4" })
    );

    return { player, url };
  } catch (err) {
    console.error("Error processing video.", err);
    return null;
  }
};
