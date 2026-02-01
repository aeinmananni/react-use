import { useNetworkState } from "react-use";

const NewWorkState = () => {
  const state = useNetworkState();
  return <div>{JSON.stringify(state, null, 2)}</div>;
};

export default NewWorkState;
