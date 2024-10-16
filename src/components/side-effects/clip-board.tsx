import { useCopyToClipboard } from "react-use";
import { ChangeEvent, useState } from "react";

const ClipBoard = () => {
  const [text, setText] = useState<string>("");
  const [state, copyToClipboard] = useCopyToClipboard();
  return (
    <div>
      <input
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <button type="button" onClick={() => copyToClipboard(text)}>
        Copy
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {state.error ? (
        <p>Unable To Copy Value:{state.error.message}</p>
      ) : (
        state.value && <p>{state.value}</p>
      )}
    </div>
  );
};

export default ClipBoard;
