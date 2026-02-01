import { useNetworkState } from "../../../hooks/use-network";

const NetworkStateCustom = () => {
  const { isOnline } = useNetworkState();
  console.log(isOnline);
  return <div>{isOnline ? "Online" : "Offline"}</div>;
};

export default NetworkStateCustom;
