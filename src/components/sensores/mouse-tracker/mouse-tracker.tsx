import { useMouse } from "react-use";
import { useRef } from "react";

const MouseTracker = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const { docX, docY, elH, elW, elX, elY, posX, posY } = useMouse(elementRef);
  return (
    <>
      <div>
        <small>موقعیت موس روی تمام صفحه</small>
        <p> DocY : {docY}</p>
        <p> Docx : {docX}</p>
      </div>
      <div>
        <small>
          موقعیت موس روی المنتی که مشخص کردیم طول و عرض المنت را نیز میتوانیم
          داشته باشیم
        </small>
        <p>Height : {elH}</p>
        <p>Width : {elW}</p>
        <p>El X : {elX}</p>
        <p>El Y : {elY}</p>
      </div>
      <div
        ref={elementRef}
        style={{ width: 200, height: 200, backgroundColor: "red" }}
      ></div>
      <p>POS X : {posX}</p>
      <p>POS Y : {posY}</p>
    </>
  );
};

export default MouseTracker;
