import { useWindowSize } from "react-use";

const WindowSize = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <h1>WIDTH : {width}</h1>
      <h1>HEIGTH : {height}</h1>
    </div>
  );
};

export default WindowSize;
