import { useState, useEffect } from "react";

export const useMouseIdle = (timeout: number) => {
  const [isIdle, setIsIdle] = useState<boolean>(false);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsIdle(true);
      }, timeout);
    };
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timer);
      window.addEventListener("mousemove", resetTimer);
      window.addEventListener("keydown", resetTimer);
    };
  }, [timeout]);

  return { isIdle };
};
