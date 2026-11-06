interface WaveProps {
  /** Cor da seção que vem depois da onda. */
  fill: string;
  /** Cor da seção de cima, que aparece atrás da onda. */
  background: string;
}

/** Borda ondulada entre seções, lembrando as ondas do Wi-Fi. */
export function Wave({ fill, background }: WaveProps) {
  return (
    <svg className="wave" viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ background }} aria-hidden="true">
      <path d="M0 40 C180 0, 360 0, 540 30 C720 60, 900 70, 1080 40 C1260 10, 1350 10, 1440 30 L1440 70 L0 70 Z" fill={fill} />
    </svg>
  );
}
