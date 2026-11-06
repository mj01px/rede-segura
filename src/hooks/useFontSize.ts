import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'rede-segura:large-text';

export function useFontSize() {
  const [isLargeText, setIsLargeText] = useState<boolean>(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-large-text', String(isLargeText));
    try {
      window.localStorage.setItem(STORAGE_KEY, String(isLargeText));
    } catch {
      // ignora se o navegador bloquear o armazenamento local
    }
  }, [isLargeText]);

  const toggleLargeText = useCallback(() => {
    setIsLargeText((prev) => !prev);
  }, []);

  return { isLargeText, toggleLargeText };
}
