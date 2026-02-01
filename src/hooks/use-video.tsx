/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import React from "react";

export const useVideo = (
  videoElement: JSX.Element
): [JSX.Element, any, any, React.RefObject<HTMLVideoElement>] => {
  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState({
    time: 0,
    duration: 0,
    volume: 1,
    muted: false,
    paused: true,
  });

  const updateState = () => {
    const el = ref.current;
    if (!el) return;
    setState({
      time: el.currentTime,
      duration: el.duration,
      volume: el.volume,
      muted: el.muted,
      paused: el.paused,
    });
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const events = [
      "timeupdate",
      "volumechange",
      "pause",
      "play",
      "durationchange",
    ];
    events.forEach((event) => el.addEventListener(event, updateState));
    updateState();

    return () => {
      events.forEach((event) => el.removeEventListener(event, updateState));
    };
  }, []);

  const controls = {
    play: () => ref.current?.play(),
    pause: () => ref.current?.pause(),
    mute: () => {
      if (ref.current) ref.current.muted = true;
    },
    unmute: () => {
      if (ref.current) ref.current.muted = false;
    },
    volume: (value: number) => {
      if (ref.current) ref.current.volume = value;
    },
    seek: (time: number) => {
      if (ref.current) ref.current.currentTime = time;
    },
  };

  const clonedVideo = React.cloneElement(videoElement, { ref });

  return [clonedVideo, state, controls, ref];
};
