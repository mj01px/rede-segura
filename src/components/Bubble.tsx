import type { ReactNode } from 'react';

interface BubbleProps {
  children: ReactNode;
  /** Onde fica o rabinho, em relação à largura do balão. */
  tail?: 'left' | 'center';
  className?: string;
}

/** Balão de fala escrito à mão, com o rabinho apontando para baixo. */
export function Bubble({ children, tail = 'center', className = '' }: BubbleProps) {
  return (
    <span className={`bubble bubble--tail-${tail} ${className}`.trim()}>
      {children}
      <svg className="bubble__tail" width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
        <path d="M2 -2 L2 0 L12 16 L22 0 L22 -2 Z" fill="#FFFFFF" />
        <path d="M2 0 L12 16 L22 0" stroke="#1F1A3D" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
