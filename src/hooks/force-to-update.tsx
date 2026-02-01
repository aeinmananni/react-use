import { useCallback, useState } from "react";

export const useForceToUpdate = (): (() => void) => {
  const [, setTick] = useState<number>(0);
  const update = useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);

  return update;
};
