import { useToggle } from 'react-use';

export default function ToggleValue() {
  const [status, toggle] = useToggle(true);
  return (
    <div>
      <h1>Toggle Value : {`${status}`}</h1>
      <button onClick={toggle}>Toggler</button>
      <br />
      <button onClick={() => toggle(true)}>set true</button>
      <br />
      <button onClick={() => toggle(false)}>set flase</button>
    </div>
  );
}
