import { useState, useEffect, RefObject } from "react";

// تایپ‌ها برای رویدادها
interface MouseEventWithClientX extends MouseEvent {
  clientX: number;
}

// هوک برای مدیریت اسلایدر
const useSlider = (ref: RefObject<HTMLDivElement>) => {
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);

  const handleMouseDown = (e: MouseEventWithClientX) => {
    setIsSliding(true);
    updateValue(e);
  };

  const handleMouseMove = (e: MouseEventWithClientX) => {
    if (isSliding) {
      updateValue(e);
    }
  };

  const handleMouseUp = () => {
    setIsSliding(false);
  };

  const updateValue = (e: MouseEventWithClientX) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const newValue = (e.clientX - rect.left) / rect.width;
      setValue(Math.min(Math.max(newValue, 0), 1));
    }
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isSliding]);

  return { isSliding, value };
};

export default useSlider;
