import { useFirstMountState, useUpdate } from 'react-use';

export default function FirstRender() {
  const isFirstMount = useFirstMountState();
  const update = useUpdate();
  const getDateNow = () => Date.now();
  return (
    <div>
      <h1>First Render Component : {isFirstMount ? 'YES' : 'NO'}</h1>
      <p>{getDateNow()}</p>
      <button onClick={update}>Rerender</button>
    </div>
  );
}
