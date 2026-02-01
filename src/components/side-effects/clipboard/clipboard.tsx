import { useState } from 'react';
import { useCopyToClipboard } from 'react-use';

export default function Clipboard() {
  const [text, setText] = useState<string>('');
  const [state, copyToClipboard] = useCopyToClipboard();
  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <input className="border-2" value={text} onChange={e => setText(e.target.value)} />
      {state.error ? (
        <p>Unable To Copy Value : ${state.error.message} </p>
      ) : (
        <h1>Value Result :{state.value && state.value}</h1>
      )}
      <button onClick={() => copyToClipboard(text)}>Copy</button>
    </div>
  );
}
