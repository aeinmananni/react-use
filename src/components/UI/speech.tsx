import { useSpeech } from "react-use";

const voices = window.speechSynthesis.getVoices();
const Speech = () => {
  const text = "khoda";
  const state = useSpeech(text, {
    rate: 0.8,
    pitch: 1,
    voice: voices[0],
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Speech;
