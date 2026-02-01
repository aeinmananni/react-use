import { useState, useRef, useEffect } from "react";

export const useHover = <T extends HTMLElement>() => {
  const [isHoverd, setIsHoverd] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handlerMousEnter = () => setIsHoverd(true);
    const handelMouseLeave = () => setIsHoverd(false);
    const element = ref.current;
    if (element) {
      element.addEventListener("mouseenter", handlerMousEnter);
      element.addEventListener("mouseleave", handelMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handlerMousEnter);
        element.removeEventListener("mouseleave", handelMouseLeave);
      }
    };
  }, []);

  return [ref, isHoverd] as const;
};
