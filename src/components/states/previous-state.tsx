import { useState } from "react";
import { usePrevious } from "react-use";

const PreviousState = () => {
  const [count, setCount] = useState<number>(0);
  const prevCount = usePrevious(count);
  return (
    <div>
      <h1>
        Now : {count} | Before : {prevCount}
      </h1>
      <br />
      <button onClick={() => setCount((c) => c + 1)}>Increaemt</button>
      <button onClick={() => setCount((c) => c - 1)}>decreament</button>
    </div>
  );
};

export default PreviousState;
