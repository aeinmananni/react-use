import { useAudio } from "react-use";
import music from "./../audio/muzic.mp3";
const AutoPlayer = () => {
  const [audio, state, controls] = useAudio({
    src: music,
    autoPlay: true,
  });
  return (
    <div>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.play}>PLAY</button>
      <button onClick={controls.pause}>PUSE</button>
      <br />
      <button onClick={controls.mute}>mute</button>
      <button onClick={controls.unmute}>unMute</button>
      <br />
      <button onClick={() => controls.volume(0.1)}>10%</button>
      <button onClick={() => controls.volume(0.5)}>50%</button>
      <button onClick={() => controls.volume(1)}>100%</button>
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5sec</button>
    </div>
  );
};

export default AutoPlayer;
