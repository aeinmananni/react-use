import { useDefault } from "@uidotdev/usehooks";

type DefaultParamters = {
  name: string;
};

const DefaultValue = () => {
  const defaultUser: DefaultParamters = { name: "admin" };
  const initailUser: DefaultParamters = { name: "gest" };

  const [user, setUser] = useDefault<DefaultParamters | null>(
    defaultUser,
    initailUser
  );
  return (
    <div>
      <p>{user?.name}</p>
      <button onClick={() => setUser(null)}>Set To Null</button>
    </div>
  );
};

export default DefaultValue;
