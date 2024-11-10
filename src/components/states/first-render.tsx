import { useFirstMountState, useUpdate } from "react-use";

const FirstRender = () => {
  const isFirstMount = useFirstMountState();
  const update = useUpdate();

  return (
    <div>
      <p>This Components is just mounted : {isFirstMount ? "TES" : "NO"}</p>
      <p>NOW: {Date.now()}</p>
      <button onClick={update}>Update Component</button>
    </div>
  );
};

export default FirstRender;
