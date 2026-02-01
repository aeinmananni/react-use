import { useRef } from "react";
import videoPlyer from "../../../video/video1.mp4";
import { useFullScreen } from "../../../hooks/use-fullscreen";

const FullScreenCustom = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { enterFullScreen: enterDivFull } = useFullScreen(divRef);

  const { enterFullScreen: enterVideoFull } = useFullScreen(videoRef);

  return (
    <>
      <div ref={divRef} style={{ backgroundColor: "skyblue", padding: 20 }}>
        <video ref={videoRef} src={videoPlyer} controls width={300} />
      </div>
      <br />
      <button onClick={enterDivFull}>{"Toggle Div"}</button>
      <button onClick={enterVideoFull}>{"Toggle Video"}</button>
    </>
  );
};

export default FullScreenCustom;
