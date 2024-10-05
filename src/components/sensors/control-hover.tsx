import { useHover } from "react-use";

const HoverManager = () => {
  const element = (hoverd: boolean) => (
    <div>Hover me !{hoverd && "Thanks ! "}</div>
  );

  const btn = (hoverd: boolean) => {
    return (
      <button
        style={{
          backgroundColor: hoverd ? "green" : "blue",
          color: "white",
        }}
      >
        Click Me
      </button>
    );
  };

  const [hover_Element, hover_state] = useHover(element);
  const [hover_btn, state_btn] = useHover(btn);
  return (
    <>
      <div>
        <span>{hover_Element}</span>
        {hover_btn}
        <br />
        <span>{hover_state && "Yes My Hover Component"}</span>
        <span>{state_btn && "Yes My Hover BUtton"}</span>
      </div>
    </>
  );
};

export default HoverManager;
