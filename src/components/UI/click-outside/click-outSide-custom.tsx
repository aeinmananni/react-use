import { useClickOutSide } from "../../../hooks/use-click-outside";
import {useState } from "react";

const ClickOutSide = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
   const {ref} = useClickOutSide<HTMLDivElement>(() => setIsOpen(false));
  return (
    <div ref={ref} style={{position:'relative'}}>
      <button  onClick={() => setIsOpen((c) => !c)}>
        OnToggle
      </button>
      {isOpen && (
        <div         
          style={{ width: 200, height: 200, backgroundColor: "blue" , position:'absolute'}}
        >
          <h1>Click Out Side </h1>
        </div>
      )}
    </div>
  );
};

export default ClickOutSide;
