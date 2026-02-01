/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from 'react';

type ActionsType<T extends object> = {
  set: <k extends keyof T>(key: k, value: T[k]) => void;
  setAll: (newObj: Partial<T>) => void;
  remove: <k extends keyof T>(key: k) => void;
  reset: () => void;
};

export const useMap = <T extends object>(initail: T): [T, ActionsType<T>] => {
  const [state, setState] = useState<T>(initail);

  const set = useCallback(<k extends keyof T>(key: k, value: T[k]) => {
    setState(prev => ({ ...prev, [key]: value }));
  }, []);

  const setAll = useCallback((newObj: Partial<T>) => {
    setState(prev => ({ ...prev, ...newObj }));
  }, []);

  const remove = useCallback(<k extends keyof T>(key: k) => {
    setState(prev => {
      const { [key]: _, ...reset } = prev;
      //ابجکت دیستراکچرینگ انجام شده
      //  و اون کلیدی رو که میخواستن ازش خارج کردن و بقیه اجزا رو بیرون فرستادن
      return reset as T;
    });
  }, []);

  const reset = useCallback(() => {
    setState(initail);
  }, [initail]);

  return [state, { set, setAll, reset, remove }];
};
