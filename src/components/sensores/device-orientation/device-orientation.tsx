import { useOrientation } from "react-use";

const DeviceOrientation = () => {
  const { angle, type } = useOrientation();
  console.log("Type : ", type);
  return (
    <div
      style={{
        backgroundColor: type.includes("portrait") ? "skyblue" : "orange",
      }}
    >
      <p>{`Angle : ${angle}`}</p>
      <p>{`Type : ${type}`}</p>
    </div>
  );
};

export default DeviceOrientation;
