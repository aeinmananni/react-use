import { useWindowSize } from "react-use";

const WindowSize = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <div>
        <h1>
          <p>{width}</p>
          <p>{height}</p>
        </h1>
      </div>
    </>
  );
};

export default WindowSize;
