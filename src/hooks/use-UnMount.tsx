import { useEffect } from 'react';

export const useUnMount = (fn: () => void) => {
  useEffect(() => {
    return () => {
      fn();
    };
  }, [fn]);
};
