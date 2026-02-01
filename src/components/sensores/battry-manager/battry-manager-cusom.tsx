import { useBattery } from "../../../hooks/use-battery/use-battery";

const BatteryManagerCustom = () => {
  const { batteryInfo, error } = useBattery();

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h1>{batteryInfo && batteryInfo?.level}%</h1>
      <h1>{batteryInfo.chargingTime}</h1>
      <h1>{batteryInfo.dischargingTime}</h1>
      <h1>{batteryInfo.charging ? "YES" : "NO"}</h1>
    </div>
  );
};

export default BatteryManagerCustom;
