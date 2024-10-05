import { useState, useRef } from "react";
import corse from "../video/cors-zustand.mp4";
import { useFullscreen } from "react-use";

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
      <div
        ref={divRef}
        style={{ backgroundColor: "skyblue", width: "43rem", height: "24rem" }}
      >
        <video
          ref={videoRef}
          src={corse}
          controls
          style={{ width: "100%", height: "100%" }}
        />
        <br />
        <button onClick={() => setDivFullScreen(true)}>Toggle Div</button>
        <button onClick={() => setVideoFullScreen(true)}>Toggle video</button>
      </div>
    </>
  );
};

export default FullScreen;
