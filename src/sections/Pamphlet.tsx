import { useState } from 'react';
import { FlipIcon } from '../components/Icons';

export function Pamphlet() {
  const [showBack, setShowBack] = useState(false);
  const base = import.meta.env.BASE_URL;

  return (
    <section id="panfleto" className="pamphlet" aria-labelledby="panfleto-title" data-readable="true">
      <div className="container split split--center">
        <div className="pamphlet__text">
          <p className="hand hand--anil">Recebeu o nosso panfleto?</p>
          <h2 id="panfleto-title" className="section-title">
            É este aqui. Toque para virar.
          </h2>
          <p className="lead">
            A gente entregou o panfleto na rodoviária e em lugares com Wi-Fi grátis. O site é a versão completa dele.
          </p>
          <button type="button" className="btn btn--light" onClick={() => setShowBack((v) => !v)} aria-pressed={showBack}>
            <FlipIcon />
            {showBack ? 'Ver a frente' : 'Virar para o verso'}
          </button>
        </div>

        <button
          type="button"
          className={`pamphlet__card${showBack ? ' is-flipped' : ''}`}
          onClick={() => setShowBack((v) => !v)}
          aria-label={showBack ? 'Verso do panfleto. Toque para ver a frente.' : 'Frente do panfleto. Toque para ver o verso.'}
        >
          <span className="pamphlet__inner">
            <img className="pamphlet__face" src={`${base}panfleto/frente.png`} alt="" width={374} height={794} />
            <img className="pamphlet__face pamphlet__face--back" src={`${base}panfleto/verso.png`} alt="" width={374} height={794} />
          </span>
        </button>
      </div>
    </section>
  );
}
