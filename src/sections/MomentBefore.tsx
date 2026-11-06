import { useState } from 'react';
import { Bubble } from '../components/Bubble';
import { Mascot } from '../components/Mascot';
import { MomentHead } from '../components/MomentHead';
import { WifiIcon } from '../components/Icons';

const CHECKS = [
  { id: 'nome', text: <><strong>O nome da rede</strong> está no cartaz ou o balcão confirmou.</> },
  { id: 'banco', text: <>Vai mexer em <strong>banco ou Pix</strong>? Vou usar o 4G.</> },
  { id: 'senha', text: <>Se pedir <strong>a senha do meu e-mail</strong>, eu fecho a página.</> },
];

export function MomentBefore() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const total = CHECKS.filter((item) => checked[item.id]).length;
  const allDone = total === CHECKS.length;

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section id="momento-1" className="moment" aria-labelledby="momento-1-title" data-readable="true">
      <div className="container">
        <MomentHead id="momento-1-title" number={1} label="Antes de conectar" title="Entenda o golpe em 30 segundos" />

        <ol className="flow">
          <li className="flow__step">
            <span className="flow__circle flow__circle--anil" aria-hidden="true">
              <WifiIcon size={74} color="#3442E0" />
              <span className="flow__num">1</span>
            </span>
            <h3 className="flow__title">Criam uma rede falsa</h3>
            <p className="flow__text">
              Com o nome parecido com a do lugar. Do lado da <strong>Terminal_Rodoviario</strong>, aparece a{' '}
              <strong>Terminal Rodoviario Free</strong>.
            </p>
          </li>
          <li className="flow__step">
            <span className="flow__circle flow__circle--laranja" aria-hidden="true">
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#E8591C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="3" width="17" height="18" rx="3" />
                <path d="M7 8h10" />
                <rect x="7" y="11" width="10" height="3.5" rx="1" />
                <path d="M7 17.5h6" />
              </svg>
              <span className="flow__num">2</span>
            </span>
            <h3 className="flow__title">Pedem seu e-mail e a senha dele</h3>
            <p className="flow__text">Numa página que imita a do Wi-Fi, ou num login do Google ou do Facebook.</p>
          </li>
          <li className="flow__step">
            <span className="flow__circle flow__circle--framboesa" aria-hidden="true">
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#E5384F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
              </svg>
              <span className="flow__num flow__num--danger">3</span>
            </span>
            <h3 className="flow__title">Entram no seu e-mail</h3>
            <p className="flow__text">E, a partir dele, trocam a senha das suas outras contas.</p>
          </li>
        </ol>

        <div className="split split--center checklist-row">
          <fieldset className="checklist">
            <legend className="checklist__legend">
              <span className="hand">Antes de tocar na rede,</span>
              <span className="checklist__title">confira:</span>
            </legend>
            {CHECKS.map((item) => (
              <label key={item.id} className={`checklist__item${checked[item.id] ? ' is-checked' : ''}`}>
                <input type="checkbox" checked={!!checked[item.id]} onChange={() => toggle(item.id)} />
                <span>{item.text}</span>
              </label>
            ))}
            <p className="sr-only" aria-live="polite">
              {total} de {CHECKS.length} cuidados marcados.
            </p>
          </fieldset>

          <div className="mascot-say" aria-hidden="true">
            <Bubble className="mascot-say__bubble">
              {allDone ? (
                <>
                  Marcou tudo?
                  <br />
                  Assim não tem graça...
                </>
              ) : (
                <>
                  Deixa desmarcado,
                  <br />é rapidinho!
                </>
              )}
            </Bubble>
            <Mascot size={210} mood={allDone ? 'worried' : 'sneaky'} className="mascot-say__svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
