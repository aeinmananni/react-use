import { useFullscreen } from "react-use";
import { useRef, useState } from "react";
import videoPlyer from "../../../video/video1.mp4";
const FullScreen = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [divFullScreen, setDivFullScreen] = useState<boolean>(false);
  const [videoFullScreen, setVideoFullScreen] = useState<boolean>(false);

  useFullscreen(divRef, divFullScreen, {
    onClose: () => setDivFullScreen(false),
  });
  useFullscreen(videoRef, videoFullScreen, {
    onClose: () => setVideoFullScreen(false),
  });

  return (
    <>
      <div ref={divRef} style={{ backgroundColor: "skyblue" }}>
        <video ref={videoRef} src={videoPlyer} controls width={300} />
      </div>
      <br />
      <button onClick={() => setDivFullScreen(true)}>Toggle Div</button>
      <button onClick={() => setVideoFullScreen(true)}>Toggle video</button>
    </>
  );
};

export default FullScreen;
