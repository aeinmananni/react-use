import { useLocalStorage } from "react-use";
type PersonType = {
  firstName: string;
  age: number;
  authenticated: boolean;
  type?: string;
};
const person: PersonType = {
  firstName: "Name",
  age: 23,
  authenticated: true,
};

const LocalStorage = () => {
  const [value, setValue, remove] = useLocalStorage<PersonType>(
    "my-key",
    person
  );
  return (
    <div>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <button onClick={() => setValue({ ...person, type: "vip" })}>
        Add to Person
      </button>
      <button onClick={remove}>removeData</button>
    </div>
  );
};

export default LocalStorage;
