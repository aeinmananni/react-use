import { useStateValidator } from "react-use";
import { useState } from "react";

const evenNumberValtore = (n: number): (boolean | null)[] => [
  n === 0 ? null : n % 2 === 0,
];

const StateValidator = () => {
  const [counter, setCounter] = useState<number>(0);
  const [[isValid]] = useStateValidator(counter, evenNumberValtore);
  return (
    <>
      <div>
        <h1>Even Number valid</h1>
        <input
          type="number"
          min={0}
          max={10}
          value={counter}
          onChange={(e) => setCounter(+e.target.value)}
        />
        <br />
        {isValid !== null && <>{isValid ? <p>Valid</p> : <p>Invalid</p>}</>}
      </div>
    </>
  );
};

export default StateValidator;
