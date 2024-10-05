import { useWindowScroll } from "react-use";

const WindowScroll = () => {
  const { x, y } = useWindowScroll();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          backgroundColor: "skyBlue",
          padding: 10,
        }}
      >
        <h1>Scroll Position :</h1>
        <span>{`Horizontal : ${x}`}</span>
        <span>{`vertical : ${y}`}</span>
      </div>
      <div
        style={{
          width: "200%",
          height: "100vh",
          backgroundColor: "gray",
          overflow: "scroll",
        }}
      >
        <p>Scroll to See</p>
      </div>
    </>
  );
};

export default WindowScroll;
