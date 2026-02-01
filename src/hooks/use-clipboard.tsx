import { useCallback, useState } from 'react';

type ClipboardState = {
  value?: string;
  error?: Error;
};

export const useClipboard = () => {
  const [state, setState] = useState<ClipboardState>({});

  const copyToClipboard = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      const error = new Error('Clipboard API not supported');
      setState({ error });
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setState({ value: text });
    } catch (err) {
      setState({ error: err as Error });
    }
  }, []);

  return [state, copyToClipboard] as const;
};
