interface MomentHeadProps {
  id: string;
  number: 1 | 2 | 3;
  label: string;
  title: string;
  /** No momento 3 o número fica em cima do título, na coluna da esquerda. */
  stacked?: boolean;
}

/** Abertura de capítulo: o número gigante, a frase à mão e o título. */
export function MomentHead({ id, number, label, title, stacked = false }: MomentHeadProps) {
  return (
    <div className={`moment-head moment-head--n${number}${stacked ? ' moment-head--stacked' : ''}`}>
      <span className="moment-head__number" aria-hidden="true">
        {number}
      </span>
      <div>
        <p className="moment-head__label">{label}</p>
        <h2 id={id} className="moment-head__title">
          {title}
        </h2>
      </div>
    </div>
  );
}
