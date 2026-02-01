import { useEffect } from "react";

export const useKey = (key: KeyboardEvent["key"], callback: () => void) => {
  useEffect(() => {
    const handelkeyPress = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback();
      }
    };

    window.addEventListener("keydown", handelkeyPress);
    return () => {
      window.removeEventListener("keydown", handelkeyPress);
    };
  });
};
