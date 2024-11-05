import { useCounter } from "react-use";

const NumberCounter = () => {
  const min = 1;
  const max = 20;
  const [value, { inc, dec, set, reset }] = useCounter(6, max, min);
  return (
    <div>
      <p>
        {value} | min : {min} | max : {max}{" "}
        <button onClick={() => inc()}>Increament</button>
        <button onClick={() => dec()}>decreament</button>
        <button onClick={() => reset()}>reset</button>
        <button onClick={() => set(12)}>setCount</button>
      </p>
    </div>
  );
};

export default NumberCounter;
