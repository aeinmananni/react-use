import { ChangeEvent, useState } from "react";
import { useInterval } from "../../../hooks/use-interval";

export default function IntervalRenderCustom() {
  const [count, setCount] = useState<number>(0);
  const [delay, setDelay] = useState<number>(1000);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  useInterval(() => setCount((prev) => prev + 1), isRunning ? delay : null);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
        <input
          type="text"
          value={delay}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDelay(+e.target.value)
          }
        />
        <button onClick={() => setIsRunning((prev) => !prev)}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
      <h1>COUNTER : {count}</h1>
    </div>
  );
}
