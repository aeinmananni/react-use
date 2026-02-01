import { RefObject, useCallback, useEffect, useState } from "react";

type MousePosition = {
  docX: number;
  docY: number;
  elX: number | null;
  elY: number | null;
  elW: number | null;
  elH: number | null;
  posX: number | null;
  posY: number | null;
};

export const useMouseTracher = (ref: RefObject<HTMLElement>): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    docX: 0,
    docY: 0,
    elX: 0,
    elY: 0,
    elW: 0,
    elH: 0,
    posX: 0,
    posY: 0,
  });
  const updateMousePosition = useCallback(
    (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const element = ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        setMousePosition({
          docX: clientX,
          docY: clientY,
          elX: rect.left,
          elY: rect.top,
          elW: rect.width,
          elH: rect.height,
          posX: clientX - rect.left,
          posY: clientY - rect.top,
        });
      } else {
        setMousePosition((prev) => ({ ...prev, docX: clientX, docY: clientY }));
      }
    },
    [ref]
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  return mousePosition;
};
