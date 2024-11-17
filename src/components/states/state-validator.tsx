import { useMultiStateValidator } from "react-use";
import { useState } from "react";

const evenNumbersValtore = (numbers: number[]): (boolean | null)[] => [
  numbers.every((num) => !(num % 2)),
];

const MultiStateValidator = () => {
  const [counter1, setCounter1] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);
  const [counter3, setCounter3] = useState<number>(0);
  const [[isValid]] = useMultiStateValidator(
    [counter1, counter2, counter3],
    evenNumbersValtore
  );
  return (
    <>
      <div>
        <h1>Even Number if all valida all of them is Even</h1>
        <input
          type="number"
          min={0}
          max={10}
          value={counter1}
          onChange={(e) => setCounter1(+e.target.value)}
        />
        <input
          type="number"
          min={0}
          max={10}
          value={counter2}
          onChange={(e) => setCounter2(+e.target.value)}
        />
        <input
          type="number"
          min={0}
          max={10}
          value={counter3}
          onChange={(e) => setCounter3(+e.target.value)}
        />
        <br />
        {isValid !== null && <>{isValid ? <p>Valid</p> : <p>Invalid</p>}</>}
      </div>
    </>
  );
};

export default MultiStateValidator;
