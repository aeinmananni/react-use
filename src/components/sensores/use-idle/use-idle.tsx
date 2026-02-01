import { useIdle } from "react-use";

const Idle = () => {
  const isIdle = useIdle(3e3);
  return (
    <div>
      <span>User Is : {isIdle ? "YES 😴" : "NOP 😎"}</span>
    </div>
  );
};

export default Idle;
