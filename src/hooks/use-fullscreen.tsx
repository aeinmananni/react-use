/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";

export const useFullScreen = (elementRef: React.RefObject<HTMLElement>) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const enterFullScreen = useCallback(() => {
    if (elementRef.current) {
      if (elementRef.current.requestFullscreen) {
        elementRef.current.requestFullscreen();
      } else if ((elementRef.current as any).webkitRequestFullscreen) {
        (elementRef.current as any).webkitRequestFullscreen();
      } else if ((elementRef.current as any).mozRequestFullScreen) {
        (elementRef.current as any).mozRequestFullScreen();
      } else if ((elementRef.current as any).msRequestFullscreen) {
        (elementRef.current as any).msRequestFullscreen();
      }
      setIsFullScreen(true);
    }
  }, [elementRef]);

  const exitFullScreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  }, []);

  return { isFullScreen, enterFullScreen, exitFullScreen };
};
