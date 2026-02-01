import { useAudio } from "react-use";
import music from "../../../audio/music1.mp3";
const AudioPlayer = () => {
  const [audio, state, controls] = useAudio({
    src: music,
    autoPlay: false,
  });
  return (
    <div>
      <h1>React use Package</h1>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.play}>PLAY</button>
      <button onClick={controls.pause}>PAUSE</button>
      <br />
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>UnMute</button>
      <br />
      <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </div>
  );
};

export default AudioPlayer;
