import { useState } from "react";
import useStartTyping from "../../../hooks/use-start-typing";
const StartTypingCustom = () => {
  const [keyInfo, setKeyInfo] = useState<Pick<
    KeyboardEvent,
    "key" | "keyCode" | "code"
  > | null>(null);

  useStartTyping((e: KeyboardEvent) => {
    setKeyInfo(e);
  });
  return (
    <div>
      <h1>key : {keyInfo?.key}</h1>
      <h1>key Code: {keyInfo?.keyCode}</h1>
      <h1>Code: {keyInfo?.code}</h1>
    </div>
  );
};

export default StartTypingCustom;
