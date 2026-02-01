import { useState, useEffect } from "react";

export const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: window.scrollX,
    y: window.scrollY,
  });

  useEffect(() => {
    const handelScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return { x: scrollPosition.x, y: scrollPosition.y };
};
