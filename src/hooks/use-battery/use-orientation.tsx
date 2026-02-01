import { useEffect, useState } from "react";

type OrientationType =
  | "portrait-primary"
  | "landscape-primary"
  | "portrait-secondary"
  | "landscape-secondary";

const getOrientation = (): OrientationType => {
  if (window.screen.orientation && window.screen.orientation.type) {
    return window.screen.orientation.type as OrientationType;
  }
  return window.innerWidth > window.innerHeight
    ? "landscape-primary"
    : "portrait-primary";
};

export const useOrientation = () => {
  const [orientation, setOrientation] =
    useState<OrientationType>(getOrientation);

  useEffect(() => {
    const handelOrientationChange = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener("orientationchange", handelOrientationChange);
    window.addEventListener("resize", handelOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handelOrientationChange);
      window.removeEventListener("resize", handelOrientationChange);
    };
  }, []);

  return { orientation, angle: window.screen.orientation.angle };
};
