import { useState } from 'react';
import { useStateValidator } from '../../../hooks/use-state-validator';

const even_number_validator = (n: number): boolean => +n % 2 === 0;

export default function StateValidatorCustom() {
  const [counter, setCounter] = useState<number>(0);
  const [isValid] = useStateValidator(counter, even_number_validator);
  return (
    <div>
      <h1>is valid State only if Number is even : {isValid ? <b>IsValid</b> : <b>NotValid</b>}</h1>
      <input value={counter} type="number" onChange={e => setCounter(+e.target.value)} />
    </div>
  );
}
