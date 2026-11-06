type MascotMood = 'sneaky' | 'worried' | 'caught';

interface MascotProps {
  size: number;
  mood?: MascotMood;
  className?: string;
}

/** O Wi-Fi disfarçado: a rede falsa, de óculos e bigode. Sempre decorativo. */
export function Mascot({ size, mood = 'sneaky', className }: MascotProps) {
  const body = mood === 'caught' ? '#FFF4E4' : '#FF7A35';
  // Olhando para baixo quando está desanimado; arregalado quando é pego.
  const pupilY = mood === 'worried' ? 78 : mood === 'caught' ? 73 : 76;
  const pupilX = mood === 'worried' ? -1 : mood === 'caught' ? 0 : 3;

  return (
    <svg className={className} width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <circle cx="60" cy="64" r="50" fill={body} stroke="#1F1A3D" strokeWidth="3" />
      <path d="M32 46a40 40 0 0 1 56 0" stroke="#1F1A3D" strokeWidth="5" strokeLinecap="round" />
      <path d="M43 56a23 23 0 0 1 34 0" stroke="#1F1A3D" strokeWidth="5" strokeLinecap="round" />
      <circle cx="45" cy="74" r="11" fill="#FFFFFF" stroke="#1F1A3D" strokeWidth="3" />
      <circle cx="75" cy="74" r="11" fill="#FFFFFF" stroke="#1F1A3D" strokeWidth="3" />
      <path d="M56 73h8" stroke="#1F1A3D" strokeWidth="3" />
      <path d="M34 72h-8M86 72h8" stroke="#1F1A3D" strokeWidth="3" strokeLinecap="round" />
      <circle cx={45 + pupilX} cy={pupilY} r="4" fill="#1F1A3D" />
      <circle cx={75 + pupilX} cy={pupilY} r="4" fill="#1F1A3D" />
      <ellipse cx="60" cy="87" rx="6" ry="5" fill="#E8591C" stroke="#1F1A3D" strokeWidth="2.2" />
      {mood === 'sneaky' && (
        <path d="M38 99c9-10 16-10 22-5 6-5 13-5 22 5-10 1.5-17-1-22-4.5-5 3.5-12 6-22 4.5z" fill="#1F1A3D" />
      )}
      {mood === 'worried' && (
        <path d="M38 101c9-6 16-6 22-2 6-4 13-4 22 2-10 2.5-17 1-22-1.5-5 2.5-12 4-22 1.5z" fill="#1F1A3D" />
      )}
      {mood === 'caught' && (
        <>
          <ellipse cx="60" cy="101" rx="7" ry="5" fill="#1F1A3D" />
          <path d="M60 14l4-8M74 18l8-6M46 18l-8-6" stroke="#1F1A3D" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
