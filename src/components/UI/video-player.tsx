import { useVideo } from "react-use";
import cors from "../video/cors-zustand.mp4";

const VideoPlayer = () => {
  const [video, state, controls] = useVideo(
    <video
      style={{ width: "100%", height: "100%", borderRadius: "3rem" }}
      src={cors}
      autoPlay
    />
  );
  const { play, pause, volume, seek } = controls;
  return (
    <div>
      <div style={{ width: "35%", height: "35%" }}>{video}</div>
      <br />
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={play}>PLAY</button>
      <button onClick={pause}>PASE</button>
      <br />
      <button onClick={() => volume(0.1)}>Volume 10%</button>
      <button onClick={() => volume(0.5)}>Volume 50%</button>
      <button onClick={() => volume(1)}>Volume 100%</button>
      <br />
      <button onClick={() => seek(state.time - 5)}>-5</button>
      <button onClick={() => seek(state.time + 5)}>+5</button>
    </div>
  );
};

export default VideoPlayer;
