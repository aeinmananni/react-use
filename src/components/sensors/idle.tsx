import { useIdle } from "react-use";

export default function Idle() {
  const idle = useIdle(4e3);
  return (
    <>
      <div>{!idle ? <h1>😁</h1> : <h1>😎</h1>}</div>
    </>
  );
}
