import { useBattery } from "react-use";

const BattryManager = () => {
  const battryState = useBattery();

  if (!battryState.isSupported) {
    return <div>Battry Sensore Not Suported !</div>;
  }
  if (!battryState.fetched) {
    return (
      <>
        <strong>Battry Is Suporeted</strong>
        <br />
        <strong>Battry state fetching...</strong>
      </>
    );
  }
  return (
    <div>
      <strong>Battry Is Suporeted</strong>
      <br />
      <strong>Battry state fetching...</strong>
      <h1>{battryState.level * 100}%</h1>
      <h1>{battryState.charging ? "YES" : "NO"}</h1>
    </div>
  );
};

export default BattryManager;
