import { useMap } from "react-use";

const TrackObjectValue = () => {
  const [obj, { set, setAll, remove, reset }] = useMap<
    | {
        type?: "user";
        name: string;
        age?: number;
      }
    | { type?: string; message: string; mes: string }
  >({
    type: "user",
    name: "ali",
  });
  return (
    <div>
      <button onClick={() => obj.type === "user" && set("age", 24)}>Add</button>
      <button
        onClick={() =>
          setAll({ type: "Message", message: "hi", mes: "sey Hi Message" })
        }
      >
        Set All
      </button>
      <button onClick={() => remove("age")}>Remove</button>
      <button onClick={reset}>reset</button>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
    </div>
  );
};

export default TrackObjectValue;
