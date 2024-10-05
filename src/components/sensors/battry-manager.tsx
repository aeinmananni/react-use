import { useBattery } from "react-use";

const ButtryManager = () => {
  const battryState = useBattery();
  if (!battryState.isSupported) {
    return (
      <>
        <strong>Buttery Senssor Not Suported !</strong>
      </>
    );
  }
  if (!battryState.fetched) {
    return (
      <>
        <strong>Buttery Senssor Suported !</strong>
        <br />
        <strong>Buttery Senssor Fetching...! </strong>
      </>
    );
  }
  const { level, charging } = battryState;
  return (
    <>
      <div>
        <strong>Buttery Senssor Suported</strong>
        <br />
        <strong>Buttery Senssor Fechtd </strong>
        <br />
        {`Charging Level : ${(level * 100).toFixed(0)}%`}
        <br />
        <strong>{`Charging Level : ${
          charging ? "charging..." : "is not Charging"
        }`}</strong>
      </div>
    </>
  );
};

export default ButtryManager;
