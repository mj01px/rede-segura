import { useEffect, useState } from 'react';
import type { MomentId } from '../types';

const MOMENT_IDS: MomentId[] = ['momento-1', 'momento-2', 'momento-3'];

export function useActiveMoment(): MomentId {
  const [active, setActive] = useState<MomentId>('momento-1');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const elements = MOMENT_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id as MomentId);
          }
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return active;
}
