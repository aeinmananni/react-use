import { CSSProperties, useState } from "react";
import { useMount } from "react-use";

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
  return <div style={boxStyle}></div>;
};

const AppLifeCycles = () => {
  const [message, setMessage] = useState<string>("");
  return (
    <div>
      <p>{message}</p>
      {/* {<ColorBox onMessage={setMessage} backColor="orange" />} */}
      {<ColorBox onMessage={setMessage} />}
    </div>
  );
};

export default AppLifeCycles;
