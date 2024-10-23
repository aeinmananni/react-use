import { useState } from "react";
import { useFavicon } from "react-use";
import icon1 from "../icons/icon1.png";
import icon2 from "../icons/icon2.png";
const PageIcon = () => {
  const [icon, setIcon] = useState<string>();
  useFavicon(icon ?? "");
  return (
    <div>
      <button onClick={() => setIcon(icon1)}>Icon1</button>
      <button onClick={() => setIcon(icon2)}>Icon2</button>
    </div>
  );
};

export default PageIcon;
