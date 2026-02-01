import { useEffect } from "react";

type KeyboardEventHandler = (event: KeyboardEvent) => void;

const useStartTyping = (handler: KeyboardEventHandler) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      handler(event);
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handler]);
};

export default useStartTyping;
