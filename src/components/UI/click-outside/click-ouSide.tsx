import { useClickAway } from "react-use";
import { useRef, useState } from "react";

const ClickOutSide = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useClickAway(elRef, (e) => {
    if (btnRef.current && !btnRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  });
  return (
    <>
      <button ref={btnRef} onClick={() => setIsOpen((c) => !c)}>
        OnToggle
      </button>
      {isOpen && (
        <div
          ref={elRef}
          style={{ width: 200, height: 200, backgroundColor: "red" }}
        >
          <h1>Click Out Side </h1>
        </div>
      )}
    </>
  );
};

export default ClickOutSide;
