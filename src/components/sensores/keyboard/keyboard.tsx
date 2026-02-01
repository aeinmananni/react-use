import { useKeyPressEvent  ,useKey} from "react-use";
// import { UseEventTarget } from "react-use/lib/useEvent";
import { useState } from "react";
const Keyboard = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount(0);
  };
  //   useKey<UseEventTarget>("ArrowUp", increment);
  //   useKey<UseEventTarget>("ArrowDown", decrement);
  //   useKey<UseEventTarget>("r", reset);

  useKeyPressEvent("ArrowUp", increment);
  useKeyPressEvent("ArrowDown", decrement);
  useKeyPressEvent("r", reset);

  return (
    <div>
      <b>
        <span>{count}</span>
      </b>
    </div>
  );
};

export default Keyboard;
