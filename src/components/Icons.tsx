/** Ícones de traço usados em mais de uma seção. Todos decorativos. */

export function WifiIcon({ size = 22, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
      <path d="M2.5 9a14 14 0 0 1 19 0" />
      <path d="M5.8 12.4a9.2 9.2 0 0 1 12.4 0" />
      <path d="M9 15.7a4.5 4.5 0 0 1 6 0" />
      <circle cx="12" cy="19.2" r="1.4" fill={color} stroke="none" />
    </svg>
  );
}

export function ChevronIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function FlipIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12a8 8 0 1 0 2.5-5.8" />
      <path d="M4 3v4h4" />
    </svg>
  );
}
