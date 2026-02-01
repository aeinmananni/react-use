import { useState } from 'react';
import { useCookie } from '../../../hooks/use-cookie';

export default function CookieCustom() {
  const [value, updateCookie, deleteCookie] = useCookie('my-cookie');
  const [counter, setCounter] = useState<number>(0);

  const updateCookieHandler = () => {
    updateCookie(`My stored number is ${counter}`);
    setCounter(prev => prev + 1);
  };
  return (
    <div>
      <h1>value : {value}</h1>
      <button onClick={updateCookieHandler}>Update Cookie</button>
      <button onClick={deleteCookie}>Delete Cookie</button>
    </div>
  );
}
