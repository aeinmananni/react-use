import { useUpdate } from "react-use";

export default function ForceToUpdate() {
  const update = useUpdate();
  return (
    <div>
      <h1>{Date.now()}</h1>
      <button onClick={update}>UpdateForce</button>
    </div>
  );
}
