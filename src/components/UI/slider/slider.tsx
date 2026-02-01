import { useRef } from "react";
import { useSlider } from "react-use";

const Slider = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { isSliding, value } = useSlider(divRef);
  return (
    <div
      ref={divRef}
      style={{ width: "100%", position: "relative", backgroundColor: "purple" }}
    >
      <p style={{ color: "white" }}>{` V : ${Math.round(100 * value)}`}</p>
      <p style={{ color: isSliding ? "yellow" : "white", textAlign: "center" }}>
        {Math.round(value * 100)}
      </p>
      <br />
      <div
        style={{
          position: "absolute",
          left: `calc(${Math.round(100 * value)}% - 10px)`,
        }}
      >
        <span>🔼</span>
      </div>
    </div>
  );
};

export default Slider;
