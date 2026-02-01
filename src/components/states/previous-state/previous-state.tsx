import { useState } from 'react';
import { usePrevious } from 'react-use';
export default function PreviousState() {
  const [count, setCount] = useState<number>(0);
  const prevCount = usePrevious(count);
  return (
    <div>
      <h1>
        Now : {count} | Before : {prevCount || 0}
      </h1>
      <br />
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <br />
      <button onClick={() => setCount(c => c - 1)}>-</button>
    </div>
  );
}
