import { useLocalStorage } from '../../../hooks/use-localStorage';
import DataLoader from './data-loader';

export type PersonType = { firstName: string; age: number; authenticate: boolean; type?: string };
const PERSON: PersonType = {
  firstName: 'JOHAN',
  age: 24,
  authenticate: true,
};
export default function LocalStorageCustom() {
  const [value, setValue, remove] = useLocalStorage<PersonType>(`my-key`, PERSON);
  return (
    <div>
      <DataLoader value={value} />

      <button
        onClick={() => {
          if (value) setValue({ ...value, type: 'NORMAL' });
        }}
      >
        add VIP user
      </button>

      <button
        onClick={() => {
          setValue(PERSON);
        }}
      >
        add NORMAL user
      </button>
      <button onClick={remove}>remove</button>
      <h1>Local Storage</h1>
    </div>
  );
}
