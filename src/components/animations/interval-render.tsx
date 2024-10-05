import React, { useState } from "react";
import { useInterval } from "react-use";

const IntervalRender = () => {
  const [count, setCount] = useState<number>(0);
  const [delay, setDelay] = useState<number>(1000);
  const [isRunning, setIsRuning] = useState<boolean>(false);

  useInterval(() => setCount((c) => c + 1), isRunning ? delay : null);
  return (
    <div>
      <input value={delay} onChange={(e) => setDelay(+e.target.value)} />
      <h1> Counter : {count}</h1>
      <button onClick={() => setIsRuning((c) => !c)}>
        {isRunning ? "stop" : "start"}
      </button>
    </div>
  );
};

export default IntervalRender;
