import { useState } from 'react';
import { useMultiStateValidator } from 'react-use';

const even_numbers_validator = (numbers: number[]): [boolean] => {
  const isValid = numbers.every(number => number % 2 === 0);

  return [isValid];
};

type CountersType = {
  counter1: number;
  counter2: number;
  counter3: number;
};

export default function MultiStateValidator() {
  const [counters, setCounters] = useState<CountersType>({
    counter1: 0,
    counter2: 3,
    counter3: 4,
  });
  const { counter1, counter2, counter3 } = counters;
  const [[isValid]] = useMultiStateValidator(
    [counter1, counter2, counter3],
    even_numbers_validator
  );
  return (
    <div>
      <h1>is valid State only if Number is even : {isValid ? <b>IsValid</b> : <b>NotValid</b>}</h1>
      <input
        value={counter1}
        type="number"
        onChange={e => setCounters(prev => ({ ...prev, counter1: +e.target.value }))}
      />
      <input
        value={counter2}
        type="number"
        onChange={e => setCounters(prev => ({ ...prev, counter2: +e.target.value }))}
      />
      <input
        value={counter3}
        type="number"
        onChange={e => setCounters(prev => ({ ...prev, counter3: +e.target.value }))}
      />
    </div>
  );
}
