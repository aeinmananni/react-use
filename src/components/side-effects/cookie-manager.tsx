import { useState } from "react";
import { useCookie } from "react-use";
const CookieManager = () => {
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  const [counter, setCounter] = useState<number>(1);

  const updateCookieHandler = () => {
    updateCookie(`Updated Cookie number is : ${counter}`);
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>Value : {value}</p>
      <button onClick={updateCookieHandler}>Update Cookie</button>
      <button onClick={deleteCookie}>Delete Cookies</button>
    </div>
  );
};

export default CookieManager;
