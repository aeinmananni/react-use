import { useEffect } from 'react';

export const useTitle = (title: string) => {
  useEffect(() => {
    const PrevTitle = document.title;
    document.title = title;

    return () => {
      document.title = PrevTitle;
    };
  }, [title]);
};
