import { useRef, useEffect } from "react";
import { useSlider, useWindowSize } from "react-use";

const Slider = () => {
  const width = 555;
  const divRef = useRef<HTMLDivElement | null>(null);
  const { height } = useWindowSize();
  const { isSliding, value } = useSlider(divRef);

  // Adjust scroll position based on slider value
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollLeft =
        value * (width - divRef.current.clientWidth) * width;
    }
  }, [value]);

  return (
    <div
      ref={divRef}
      style={{
        width,
        height: "300px", // Set a fixed height for the scrollable area
        backgroundColor: "purple",
        marginLeft: "25%",
        position: "relative",
        overflowX: "scroll", // Allow horizontal scrolling
        whiteSpace: "nowrap", // Ensure child divs are in a single line
      }}
    >
      <p style={{ color: "white" }}>{`W:${width} | H: ${height} `}</p>
      <p
        style={{ textAlign: "center", color: isSliding ? "yellow" : "orange" }}
      >
        {Math.round(value * 100)}%
      </p>

      <br />

      {/* This element will no longer control scroll positioning directly */}
      <div
        id="elementScroll"
        style={{
          position: "absolute",
          left: `${Math.round(value * width)}px`,
        }}
      >
        <span>📐</span>
      </div>

      {/* Scrollable divs */}
      <div
        style={{
          display: "inline-block",
          width: "150px",
          height: "200px",
          backgroundColor: "lightblue",
          margin: "10px",
        }}
      >
        <p>Item 1</p>
      </div>
      <div
        style={{
          display: "inline-block",
          width: "150px",
          height: "200px",
          backgroundColor: "lightgreen",
          margin: "10px",
        }}
      >
        <p>Item 2</p>
      </div>
      <div
        style={{
          display: "inline-block",
          width: "150px",
          height: "200px",
          backgroundColor: "lightcoral",
          margin: "10px",
        }}
      >
        <p>Item 3</p>
      </div>
      <div
        style={{
          display: "inline-block",
          width: "150px",
          height: "200px",
          backgroundColor: "lightgoldenrodyellow",
          margin: "10px",
        }}
      >
        <p>Item 4</p>
      </div>
    </div>
  );
};

export default Slider;
