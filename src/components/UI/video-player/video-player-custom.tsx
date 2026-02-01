import { useVideo } from "../../../hooks/use-video";

const VideoPlayerCustom = () => {
  const [video, state, controls] = useVideo(
    <video
      src="/src/video/video1.mp4"
      controls
      autoPlay={false}
      width={400}
      height={200}
    />
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {video}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <div style={{ display: "flex", gap: 7 }}>
        <button onClick={controls.pause}>PUSE</button>
        <button onClick={controls.play}>PLAY</button>
      </div>
      <div style={{ display: "flex", gap: 7 }}>
        <button onClick={controls.mute}>MUTE</button>
        <button onClick={controls.unmute}>UNMUTE</button>
      </div>
      <div style={{ display: "flex", gap: 7 }}>
        <button onClick={() => controls.volume(0.1)}>Volume : 10%</button>
        <button onClick={() => controls.volume(0.5)}>Volume : 50%</button>
        <button onClick={() => controls.volume(1)}>Volume : 100%</button>
      </div>
      <div style={{ display: "flex", gap: 7 }}>
        <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
        <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
      </div>
    </div>
  );
};

export default VideoPlayerCustom;
