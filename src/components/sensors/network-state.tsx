import { useNetworkState } from "react-use";

const NetWorkSate = () => {
  const state = useNetworkState();
  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default NetWorkSate;
