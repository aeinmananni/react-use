import { useQueue } from "react-use";

const QueueManager = () => {
  const { add, remove, first, last, size } = useQueue<number>();
  return (
    <div>
      <div>
        <p>first : {first}</p>
        <p>last :{last}</p>
        <p>size: {size}</p>
      </div>
      <button onClick={() => add((last || 0) + 1)}>Add</button>
      <button onClick={() => remove()}>remove</button>
    </div>
  );
};

export default QueueManager;
