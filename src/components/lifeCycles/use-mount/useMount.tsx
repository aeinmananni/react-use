import { CSSProperties, useState } from 'react';
import { useMount, useUnmount } from 'react-use';

const ColorBox = (props: { backColor?: string; onMessage?: (v: string) => void }) => {
  const backColor = props.backColor || 'red';

  const boxStyle: CSSProperties = {
    backgroundColor: backColor,
    width: 200,
    height: 200,
  };

  useMount(() => {
    if (props.onMessage) props.onMessage(`${backColor} box Mounted`);
  });
  useUnmount(() => {
    if (props.onMessage) props.onMessage(`${backColor} box Umounted `);
  });
  return <div style={boxStyle} />;
};

export default function UseMount() {
  const [message, setMessage] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setToggle(s => !s)}>Toggle</button>
      {/* <ColorBox onMessage={setMessage} /> */}
      {toggle && <ColorBox backColor="orange" onMessage={setMessage} />}
    </div>
  );
}
