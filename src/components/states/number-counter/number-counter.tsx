import { useCounter } from 'react-use';
export default function NumberCounter() {
  const min = 1;
  const max = 20;
  const [value, { inc, dec, set, reset }] = useCounter(6, max, min);
  return (
    <div>
      <h1>
        Current : {value} [min = {min} , max = {max}]
        <br />
        <button onClick={() => inc()}>Increament</button>
        <br />
        <button onClick={() => dec()}>Decreament</button>
        <br />
        <button onClick={() => set(15)}>set</button>
        <br />
        <button onClick={() => reset()}>reset</button>
      </h1>
    </div>
  );
}
