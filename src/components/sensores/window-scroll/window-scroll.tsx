import { useWindowScroll } from "react-use";

const WindowScroll = () => {
  const { x, y } = useWindowScroll();
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "skyblue",
          padding: 10,
          width: "100%",
        }}
      >
        <p>
          <b>Scroll Position</b>
        </p>
        <p>{`Horizontal : ${x}`}</p>
        <p>{`Vertical : ${y}`}</p>
      </div>
      <div
        style={{
          width: "200%",
          height: "100vh",
          backgroundColor: "gray",
          overflowY: "scroll",
          marginTop: "100px",
        }}
      >
        <p>Scroll To see Changes in scroll position</p>
      </div>
    </>
  );
};

export default WindowScroll;
