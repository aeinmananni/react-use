import { useCallback, useState } from 'react';

type CounterActions = {
  inc: (value?: number) => void;
  dec: (value?: number) => void;
  set: (value: number) => void;
  reset: () => void;
};

export const useCounter = (
  initailValue: number = 0,
  max?: number,
  min?: number
): [number, CounterActions] => {
  const [value, setValue] = useState<number>(initailValue);

  const set = useCallback(
    (val: number) => {
      let newValue: number = val;
      if (typeof max === 'number') newValue = Math.min(newValue, max);
      if (typeof min === 'number') newValue = Math.max(newValue, min);
      setValue(newValue);
    },
    [min, max]
  );
  const inc = useCallback(
    (delta: number = 1) => {
      setValue(value => {
        let newValue = value + delta;
        if (typeof max === 'number') newValue = Math.min(newValue, max);
        return newValue;
      });
    },
    [max]
  );

  const dec = useCallback(
    (delta: number = 1) => {
      setValue(value => {
        let newValue = value - delta;
        if (typeof min === 'number') newValue = Math.max(newValue, min);
        return newValue;
      });
    },
    [min]
  );

  const reset = useCallback(() => {
    set(initailValue);
  }, [initailValue, set]);

  return [value, { inc, dec, set, reset }];
};
