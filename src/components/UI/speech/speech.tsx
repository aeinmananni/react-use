import { useEffect, useState } from "react";
import { useSpeech } from "react-use";

const Speech = () => {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const loadVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setVoice(voices.find((it) => it.lang.includes("fa")) || voices[0]);
      }
    };
    if (window.speechSynthesis.onvoiceschanged! == undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoice;
    }
    loadVoice();
  }, []);

  const text = "Hello World";
  const state = useSpeech(text, {
    rate: 0.8,
    pitch: 1,
    voice: voice || undefined,
  });
  return (
    <div className="">
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Speech;
