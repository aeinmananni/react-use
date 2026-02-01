import { useTimeout } from "react-use";

const TestComponent = (props: { ms: number }) => {
  const ms = props.ms || 3000;
  const [isReady, cancel] = useTimeout(ms);
  return (
    <div>
      {isReady()
        ? "Time Reloded After timeout"
        : `i Will be reloaded after ${ms / 1000}s`}

      {isReady() === false ? <button onClick={cancel}>Cancel</button> : <></>}
    </div>
  );
};

export default function TimeOutRender() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <TestComponent ms={10000} />
      <TestComponent ms={5000} />
    </div>
  );
}
