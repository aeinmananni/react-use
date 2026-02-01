import React, { useRef } from "react";
import { useMouseTracher } from "../../../hooks/use-mouse-tracker";

const MouseTrackerCustom = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const { docX, docY, elX, elY, elW, elH, posX, posY } =
    useMouseTracher(elementRef);

  return (
    <div>
      <div>
        <small>موقعیت موس روی تمام صفحه</small>
        <p>DocX: {docX}</p>
        <p>DocY: {docY}</p>
      </div>
      <div>
        <small>
          موقعیت موس روی المنتی که مشخص کردیم، طول و عرض المنت را نیز می‌توانیم
          داشته باشیم
        </small>
        <p>Height: {elH}</p>
        <p>Width: {elW}</p>
        <p>El X: {elX}</p>
        <p>El Y: {elY}</p>
      </div>
      <div
        ref={elementRef}
        style={{ width: 200, height: 200, backgroundColor: "red" }}
      ></div>
      <p>POS X: {posX}</p>
      <p>POS Y: {posY}</p>
    </div>
  );
};

export default MouseTrackerCustom;
