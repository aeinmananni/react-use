import { useDefault } from '../../../hooks/use-default';

export default function DefaultValueCustom() {
  const defaultUser = { name: 'Mike' };
  const initailUser = { name: 'John' };

  const [user, setUser] = useDefault<{ name: string } | null>(defaultUser, initailUser);

  return (
    <div>
      <h1>User : {user?.['name']}</h1>
      <button onClick={() => setUser(null)}>Set Null User</button>
    </div>
  );
}
