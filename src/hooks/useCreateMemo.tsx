/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';

export const useCreateMemo = <T extends (...args: any[]) => any>(
  fn: T,
  args: Parameters<T>
): ReturnType<T> => {
  return useMemo(() => fn(...args), [args, fn]);
};
