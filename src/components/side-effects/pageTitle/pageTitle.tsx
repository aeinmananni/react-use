import { useTitle } from 'react-use';
import { useState } from 'react';

export default function PageTitle() {
  const [title, setTitle] = useState<string>('---');
  useTitle(title);
  return (
    <div>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => setTitle('---')}>Reset</button>
    </div>
  );
}
