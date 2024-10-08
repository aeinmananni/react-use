import { CSSProperties, useState } from "react";
import { useMount, useUnmount } from "react-use";

type ColorBoxProps = {
  backColor?: string;
  onMessage: (message: string) => void;
};

const ColorBox = ({ backColor, onMessage }: ColorBoxProps) => {
  const backColorClass = backColor || "red";

  const boxStyle: CSSProperties = {
    backgroundColor: backColorClass,
    width: 200,
    height: 200,
  };

  useMount(() => {
    onMessage(`${backColorClass} box Mounted`);
  });
  useUnmount(() => {
    onMessage(`${backColorClass} box UUNMounted`);
  });
  return <div style={boxStyle}></div>;
};

const AppLifeCycles = () => {
  const [message, setMessage] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setToggle((c) => !c)}>On Toggle Color Box</button>
      {/* {<ColorBox onMessage={setMessage} backColor="orange" />} */}
      {toggle && <ColorBox onMessage={setMessage} />}
    </div>
  );
};

export default AppLifeCycles;
