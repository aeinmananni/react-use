import { useTimeout } from "react-use";

type TestComponentProps = {
  ms?: number;
};

const TestComponent = (props: TestComponentProps) => {
  const ms = props.ms || 5000;
  const [isReady, cancel] = useTimeout(ms);
  return (
    <div>
      {isReady()
        ? "Im Reloaded After Timer Out"
        : `i well be Reloaded ${ms / 1000}s`}
      <br />
      {isReady() === false ? <button onClick={cancel}>Cancel</button> : <></>}
    </div>
  );
};

const TimeoutHandler = () => {
  return (
    <div>
      <TestComponent />
    </div>
  );
};

export default TimeoutHandler;
