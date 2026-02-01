import { useForceToUpdate } from '../../../hooks/force-to-update';
import { useFirstMountState } from '../../../hooks/use-first-mount-state';

export default function FirstRenderCustom() {
  const isFirstMount = useFirstMountState();
  const update = useForceToUpdate();
  const getDateNow = () => Date.now();
  return (
    <div>
      <h1>First Render Component : {isFirstMount ? 'YES' : 'NO'}</h1>
      <p>{getDateNow()}</p>
      <button onClick={update}>Rerender</button>
    </div>
  );
}
