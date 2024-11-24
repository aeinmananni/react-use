import { useSet } from "react-use";

const SetManager = () => {
  const [set, { add, has, remove, toggle, reset }] = useSet(
    new Set(["wellcom"])
  );
  return (
    <div>
      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
      <button onClick={() => add(Date.now().toString())}>Add</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => remove("wellcom")} disabled={!has("wellcom")}>
        Remove
      </button>
      <button onClick={() => toggle("wecclom")}>Toggle</button>
    </div>
  );
};

export default SetManager;
