import { useEffect, useState } from 'react';

export const useStateValidator = <T,>(value: T, validator: (val: T) => boolean): [boolean] => {
  const [isValid, setIsValid] = useState<boolean>(validator(value));

  useEffect(() => {
    setIsValid(validator(value));
  }, [value, validator]);

  return [isValid];
};
