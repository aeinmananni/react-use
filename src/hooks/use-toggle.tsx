import { useCallback, useState } from 'react';

export const useToggle = (
  initialValue: boolean = false
): [boolean, (value?: boolean | React.MouseEvent) => void] => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = useCallback((value?: boolean | React.MouseEvent) => {
    if (typeof value === 'boolean') {
      setState(value);
    } else {
      setState(prev => !prev);
    }
  }, []);

  return [state, toggle];
};
