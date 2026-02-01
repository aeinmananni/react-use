import { useState, useRef, useEffect } from "react";
import { AudioType } from "../models";
export const useAudioPlayer = (value: { src: string }) => {
  const [state, setState] = useState<AudioType>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    isMuted: false,
    volume: 1,
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(value.src);
    } else {
      audioRef.current.src = value.src;
    }

    const audio = audioRef.current;

    const updateTime = () =>
      setState((prev) => ({ ...prev, currentTime: audio.currentTime }));
    audio.addEventListener("timeupdate", updateTime);

    const setAudioDuration = () =>
      setState((prev) => ({ ...prev, duration: audio.duration }));
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [value.src]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setState((prev) => ({ ...prev, isPlaying: true }));
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setState((prev) => ({ ...prev, isPlaying: false }));
    }
  };

  const togglePlay = () => (state.isPlaying ? pause() : play());

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setState((prev) => ({ ...prev, currentTime: time }));
    }
  };

  const mute = () => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      setState((prev) => ({ ...prev, isMuted: true }));
    }
  };

  const unmute = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      setState((prev) => ({ ...prev, isMuted: false }));
    }
  };

  const toggleMute = () => (state.isMuted ? unmute() : mute());

  const changeVolume = (vol: number) => {
    if (audioRef.current) {
      audioRef.current.volume = vol;
      setState((prev) => ({ ...prev, volume: vol }));
    }
  };
  return {
    state,
    play,
    pause,
    togglePlay,
    seek,
    mute,
    unmute,
    toggleMute,
    changeVolume,
  };
};
