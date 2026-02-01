import { useAudioPlayer } from "../../../hooks/use-audio-player";
import music from "../../../audio/music1.mp3";

const AudioPlayerCustom = () => {
  const { state, play, pause, mute, unmute, changeVolume, seek } =
    useAudioPlayer({
      src: music,
    });

  return (
    <div>
      <h1>Custom</h1>
      <pre>{JSON.stringify({ state }, null, 2)}</pre>
      <button onClick={play}>PLAY</button>
      <button onClick={pause}>PAUSE</button>
      <br />
      <button onClick={mute}>Mute</button>
      <button onClick={unmute}>UnMute</button>
      <br />
      <button onClick={() => changeVolume(0.1)}>Volume: 10%</button>
      <button onClick={() => changeVolume(0.5)}>Volume: 50%</button>
      <button onClick={() => changeVolume(1)}>Volume: 100%</button>
      <br />
      <button onClick={() => seek(state.currentTime - 5)}>-5 sec</button>
      <button onClick={() => seek(state.currentTime + 5)}>+5 sec</button>
    </div>
  );
};

export default AudioPlayerCustom;
