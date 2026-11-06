import { useCallback } from 'react';
import { useCopy } from './useCopy';

interface ShareData {
  title: string;
  text: string;
}

export function useShare() {
  const { copied, copy } = useCopy();

  const share = useCallback(
    async ({ title, text }: ShareData) => {
      const url = window.location.href.split('#')[0];

      if (typeof navigator.share === 'function') {
        try {
          await navigator.share({ title, text, url });
          return;
        } catch (err) {
          if (err instanceof Error && err.name === 'AbortError') return;
        }
      }

      await copy(url);
    },
    [copy]
  );

  return { copied, share };
}
