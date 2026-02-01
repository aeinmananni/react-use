import { useEffect, useState, useRef } from "react";

export const useTimeout = (ms: number): [() => boolean, () => void] => {
  const [ready, setReady] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setReady(true);
    }, ms);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [ms]);
  const cancel = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const isReady = () => ready;

  return [isReady, cancel];
};
