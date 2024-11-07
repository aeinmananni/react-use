import { useToggle } from "react-use";

const ToggleValue = () => {
  const [status, toggle] = useToggle(true);
  return (
    <div>
      <span>Status : {`${status}`}</span>
      <button onClick={toggle}>Button Toggle</button>
    </div>
  );
};

export default ToggleValue;
