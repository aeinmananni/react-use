import { useRef } from "react";
import useSlider from "../../../hooks/use-slider"; // مسیر درست هوک را وارد کنید

const SliderCustom = () => {
  const divRef = useRef(null);
  const { isSliding, value } = useSlider(divRef);

  return (
    <div
      ref={divRef}
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "purple",
        height: "50px",
      }}
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

export default SliderCustom;
