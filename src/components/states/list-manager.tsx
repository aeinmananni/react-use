import { useList } from "react-use";

const ListManager = () => {
  const [
    list,
    {
      set,
      push,
      updateAt,
      insertAt,
      update,
      upsert,
      removeAt,
      sort,
      filter,
      clear,
      reset,
    },
  ] = useList([1, 2, 3, 4, 5, 6]);
  return (
    <div>
      <p>{list}</p>
      <button onClick={() => set([12, 65, 47])}>set</button>
      <button onClick={() => push(Date.now())}>Push</button>
      <button onClick={() => insertAt(0, 88888234)}>
        Insert value Index 1
      </button>
      <button onClick={() => update((a) => a % 2 !== 0, Date.now())}>
        update add odd numbers
      </button>
      <button onClick={() => updateAt(3, 999999)}>
        update value at index 3
      </button>
      <button onClick={() => upsert((a) => a > 2, 55555)}>Upsert</button>
      <button onClick={() => removeAt(3)}>remove Value at index 3</button>
      <button onClick={() => filter((a) => a % 2 === 1)}>Filter</button>
      <button onClick={() => sort((a, b) => a - b)}>Sort ASC</button>
      <button onClick={() => sort((a, b) => b - a)}>Sort Desc</button>
      <button onClick={reset}>reset</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};

export default ListManager;
