import { useQueue } from "react-use";

export default function QueueManager() {
  const { add, remove, first, last, size } = useQueue<number>();

  return (
    <div>
      <ul>
        <li>first : {first}</li>
        <li>last : {last}</li>
        <li>size : {size}</li>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => add((last || 0) + 1)}
        >
          on Add
        </button>
        <br />
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => remove()}
        >
          on Remove
        </button>
      </ul>
    </div>
  );
}
