import { useCallback, useState } from 'react';

const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
  );

  return matches ? decodeURIComponent(matches[1]) : undefined;
};

function setCookie(name: string, value: string, days = 7) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; path=/`;
}

export function useCookie(key: string) {
  const [value, setValue] = useState<string | undefined>(() => getCookie(key));

  const updateCookie = useCallback(
    (newValue: string) => {
      setCookie(key, newValue);
      setValue(newValue);
    },
    [key]
  );

  const removeCookie = useCallback(() => {
    deleteCookie(key);
    setValue(undefined);
  }, [key]);

  return [value, updateCookie, removeCookie] as const;
}
