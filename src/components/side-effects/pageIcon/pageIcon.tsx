import { useState } from 'react';
import { useFavicon } from 'react-use';

export default function PageIcon() {
  const [icon, setIcon] = useState<string>('');
  const nextIcon =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSepW3FVSfeEw8GiWFnSCDuWbxHJPa4JD3w&s';
  const reactIcon =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_uXpUPq_3jzKiQUnKwthfpO7xuaxNEEunLw&s';

  useFavicon(icon);
  return (
    <div>
      <h1>Page Icone</h1>
      <button onClick={() => setIcon(nextIcon)}>Next Icon</button>
      <button onClick={() => setIcon(reactIcon)}>react Icon</button>
    </div>
  );
}
