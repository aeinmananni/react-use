import { useEffect, useState } from 'react';

export const useLocalStorage = <T,>(
  key: string,
  initailValue: T
): [T, (value: T) => void, () => void] => {
  const [storageValue, setStorageValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initailValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initailValue;
    } catch (error) {
      console.warn('Error Reading LocalStorage', error);
      return initailValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storageValue));
    } catch (error) {
      console.warn('Error Setting LocalStorage : ', error);
    }
  }, [key, storageValue]);

  const setValue = (value: T) => {
    setStorageValue(value);
  };

  const remove = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.warn('Error Removing localStorage : ', error);
    }
    setStorageValue(initailValue);
  };

  return [storageValue, setValue, remove];
};
