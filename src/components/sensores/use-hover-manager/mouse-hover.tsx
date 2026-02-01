import { useHover } from "react-use";

const MouseHover = () => {
  const element = (hoverd: boolean) => <div>hover me {hoverd && "Tansks"}</div>;
  const [hoverElement, hover_status] = useHover(element);

  const btn = (hoverd: boolean) => (
    <button style={{ backgroundColor: hoverd ? "green" : "blue" }}>
      onClick me
    </button>
  );
  const [btn_hover, btn_hover_status] = useHover(btn);
  return (
    <>
      <div>{hoverElement}</div>
      <div>{hover_status ? "YES" : "NO"}</div>
      <div>{btn_hover}</div>
      <div>{btn_hover_status ? "YES" : "NO"}</div>
    </>
  );
};

export default MouseHover;
