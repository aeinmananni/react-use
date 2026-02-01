import { useWindowSize } from "../../../hooks/use-window-size";

const WindowSizeCustom = () => {
  const { height, width } = useWindowSize();
  return (
    <div>
      <h1>Width : {width}</h1>
      <h1>height : {height}</h1>
    </div>
  );
};

export default WindowSizeCustom;
