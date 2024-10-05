import { useOrientation } from "react-use";

const DeviceOrientation = () => {
  const { angle, type } = useOrientation();
  return (
    <>
      <div
        style={{
          backgroundColor: `${type === "portrait-primary" ? "blue" : "orange"}`,
        }}
      >
        <h1>{`Angle : ${angle}`}</h1>
        <h1>{`type : ${type}`}</h1>
      </div>
    </>
  );
};

export default DeviceOrientation;
