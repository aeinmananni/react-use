import { useState } from "react";
// import { useKey } from "../../../hooks/use-keyboard/use-key";
import useKeyPressEvent from "../../../hooks/use-keyboard/useKeyPressEvent";
export default function KeyboardCustom() {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => {
    setCounter((c) => c + 1);
  };
  const decrement = () => {
    setCounter((c) => c - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  //   useKey("ArrowUp", increment);
  //   useKey("ArrowDown", decrement);
  //   useKey("r", reset);

  useKeyPressEvent("ArrowUp", increment);
  useKeyPressEvent("ArrowDown", decrement);
  useKeyPressEvent("r", reset);
  return <div>{counter}</div>;
}
