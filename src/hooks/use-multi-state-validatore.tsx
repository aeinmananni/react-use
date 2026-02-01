/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useMemo, useState } from 'react';

type ValidatoreFn<T, R extends any[]> = (value: T[]) => R;

export const useMultiStateValidator = <T, R extends any[]>(
  states: T[],
  validator: ValidatoreFn<T, R>
): [R, T[]] => {
  const [result, setResult] = useState<R>(() => validator(states));

  useEffect(() => {
    setResult(validator(states));
  }, [states, validator]);

  return useMemo(() => [result, states], [result, states]);
};
