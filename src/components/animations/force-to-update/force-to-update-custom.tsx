import { useForceToUpdate } from "../../../hooks/force-to-update";

export default function ForceToUpdateCustom() {
  const update = useForceToUpdate();
  return (
    <div>
      <h1>{Date.now()}</h1>
      <button onClick={update}>UpdateForce</button>
    </div>
  );
}
