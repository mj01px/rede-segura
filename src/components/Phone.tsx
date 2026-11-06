import type { CSSProperties, ReactNode } from 'react';

interface PhoneProps {
  /** Largura em px. O desenho base tem 130 x 260; tudo escala a partir dele. */
  width: number;
  rotate?: number;
  className?: string;
  children: ReactNode;
}

/** Celular ilustrado do Rede Segura: corpo tinta, tela branca de ponta a ponta, câmera e barrinha. */
export function Phone({ width, rotate, className = '', children }: PhoneProps) {
  const style = {
    '--k': width / 130,
    width: `${width}px`,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  } as CSSProperties;

  return (
    <div className={`phone ${className}`.trim()} style={style}>
      <span className="phone__btn phone__btn--l1" aria-hidden="true" />
      <span className="phone__btn phone__btn--l2" aria-hidden="true" />
      <span className="phone__btn phone__btn--r" aria-hidden="true" />
      <div className="phone__body">
        <div className="phone__screen">
          <span className="phone__camera" aria-hidden="true" />
          {children}
          <span className="phone__home" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
