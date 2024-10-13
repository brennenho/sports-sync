import { RecordedVideo } from "./page";

export const sendVideo = async (video: RecordedVideo) => {
  // try {
  //   const formData = new FormData();
  //   formData.append("video", video.blob, video.name);

  //   const response = await axios.post("/api/process-video", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });

  //   console.log(response.data);
  // } catch (err) {
  //   console.error("Error processing video.", err);
  // }
  await new Promise((resolve) => setTimeout(resolve, 2000));
};
