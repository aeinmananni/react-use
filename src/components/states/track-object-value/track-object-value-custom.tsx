import { useMap } from '../../../hooks/use-Map';

type PersonType = {
  id: number;
  firstName: string;
  age?: number;
};

type CityType = {
  id?: number;
  state?: string;
  populate?: string;
};

type Comnbind = PersonType & CityType;

export default function TrackObjectValueCustom() {
  const [obj, { set, setAll, remove, reset }] = useMap<Comnbind>({
    id: 1,
    firstName: 'hadi',
  });
  return (
    <div>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
      <button onClick={() => set('age', 24)}>Add</button>
      <br />
      <button
        onClick={() =>
          setAll({ id: 1, firstName: 'Hadi', age: 32, populate: '132000', state: 'Tehran' })
        }
      >
        Add All
      </button>
      <br />
      <button onClick={() => remove('populate')}>remove</button>
      <br />
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}
