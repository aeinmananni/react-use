import { PersonType } from './local-storge';

type DataLoaderProps = {
  value: PersonType | undefined;
};

export default function DataLoader({ value }: DataLoaderProps) {
  return <>{value && <pre>{JSON.stringify(value, null, 2)}</pre>}</>;
}
