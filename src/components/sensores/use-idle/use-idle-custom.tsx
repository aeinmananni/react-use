import { useMouseIdle } from "../../../hooks/useIdle";

const IdleCustom = () => {
  const { isIdle } = useMouseIdle(3000);
  return (
    <div>
      <div>
        <span>User Is : {isIdle ? "YES 😴" : "NOP 😎"}</span>
      </div>
    </div>
  );
};

export default IdleCustom;
