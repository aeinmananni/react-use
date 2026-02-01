import { useState } from 'react';
import { useTitle } from '../../../hooks/use-title';

export default function PageTitleCustom() {
  const [title, setTitle] = useState<string>('---');
  useTitle(title);
  return (
    <div>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => setTitle('---')}>Reset</button>
    </div>
  );
}
