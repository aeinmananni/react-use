import { useRef, useState } from "react";
import { useClickAway } from "react-use";

const ClickOutSide = () => {
  const [show, setShow] = useState<boolean>(false);
  const refDiv = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useClickAway(refDiv, (e) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setShow(false);
    }
  });

  return (
    <div style={{ position: "relative" }}>
      <button
        ref={buttonRef}
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        OnClick
      </button>
      {show && (
        <div
          ref={refDiv}
          className="modal"
          style={{
            width: 200,
            height: 200,
            left: 54,
            backgroundColor: "red",
            position: "absolute",
          }}
        />
      )}
    </div>
  );
};

export default ClickOutSide;
