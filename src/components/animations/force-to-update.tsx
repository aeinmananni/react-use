import { useUpdate } from "react-use";

const ForceToUpdate = () => {
  const update = useUpdate();
  const now = new Date();
  console.log("EEEE", now.toLocaleDateString("fa-IR", { hour12: false }));
  console.log("EEEE", now.toLocaleTimeString("fa-IR", { hour12: false }));
  console.log(update);
  return (
    <div>
      <h1>Wellcom To Page</h1>
      <button onClick={update}>Update</button>
    </div>
  );
};

export default ForceToUpdate;
