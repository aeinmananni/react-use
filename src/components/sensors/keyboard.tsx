/* eslint-disable react-hooks/rules-of-hooks */

import { useKey, useKeyPressEvent } from "react-use";
import { useState } from "react";

const KeyBoard = () => {
  const [count, setCount] = useState<number>(0);

  const increament = () => {
    setCount((prev) => prev + 1);
  };
  const decreament = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };
  useKeyPressEvent("ArrowUp", increament);
  useKey("ArrowDown", decreament);
  useKey("r", reset);
  return (
    <>
      <div>
        <b>
          Count : <span style={{ color: "red" }}>{count}</span>
        </b>
      </div>
    </>
  );
};

export default KeyBoard;
