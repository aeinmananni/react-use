import { useRef } from "react";
import { useMouse } from "react-use";

const MouseTracker = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { docX, docY, elX, elY, posX, posY } = useMouse(elementRef);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "orange",
        }}
      >
        <span>Y : {docY}</span>
        <span>X :{docX}</span>
      </div>
      <div
        ref={elementRef}
        style={{
          backgroundColor: "red",
          width: "165px",
          height: "165px",
          position: "absolute",
          left: `${docX - 80}px`,
          top: `${docY}px`,
        }}
      >
        <span>{elY}</span>
        <br />
        <span>{elX}</span>
        <br />
        <span>{posX}</span>
        <br />
        <span>{posY}</span>
      </div>
    </>
  );
};

export default MouseTracker;
