import { useStartTyping } from "react-use";
import { useState } from "react";

const StartTyping = () => {
  const [keyInfo, setKeyInfo] = useState<{
    key: string;
    keyCode: number;
    code: string;
  } | null>(null);

  useStartTyping((e) => {
    const { key, keyCode, code } = e;
    setKeyInfo({ key, keyCode, code }); // Updated to set the new key information
  });

  return (
    <div>
      <h1>Start Typing</h1>
      {keyInfo && (
        <div>
          <p>Key: {keyInfo.key}</p>
          <p>KeyCode: {keyInfo.keyCode}</p>
          <p>Code: {keyInfo.code}</p>
        </div>
      )}
    </div>
  );
};

export default StartTyping;
