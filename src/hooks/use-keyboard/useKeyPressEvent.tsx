import { useEffect, useRef } from "react";

const useKeyPressEvent = (key: KeyboardEvent["key"], callback: () => void) => {
  const isKeyHeld = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key && !isKeyHeld.current) {
        isKeyHeld.current = true;
        callback();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === key) {
        isKeyHeld.current = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [key, callback]);
};

export default useKeyPressEvent;
