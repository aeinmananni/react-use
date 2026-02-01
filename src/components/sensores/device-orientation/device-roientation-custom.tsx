import { useOrientation } from "../../../hooks/use-battery/use-orientation";

const DeviceOrientationCustom = () => {
  const { orientation, angle } = useOrientation();
  return (
    <div
      style={{
        backgroundColor: orientation.includes("portrait")
          ? "skyblue"
          : "orange",
      }}
    >
      <p>{`angle : ${angle}`}</p>
      <p>{`Type : ${orientation}`}</p>
    </div>
  );
};

export default DeviceOrientationCustom;
