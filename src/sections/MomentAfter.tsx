import { MomentHead } from '../components/MomentHead';

const TIMELINE = [
  { when: 'Agora', tone: 'danger', title: 'Desligue o Wi-Fi e use o 4G', text: 'Saia da rede na hora. Faça o resto pelo 4G do celular.' },
  { when: 'Logo depois', tone: 'laranja', title: 'Troque a senha do seu e-mail', text: 'Abra o app do seu e-mail (Gmail, Outlook) e crie uma senha nova.' },
  { when: 'Em seguida', tone: 'lilas', title: 'Usa essa senha em outro lugar?', text: 'Troque lá também: Facebook, Instagram, lojas.' },
  { when: 'Ainda hoje', tone: 'anil', title: 'Ative a verificação em duas etapas', text: 'No seu e-mail. Assim, mesmo com a senha, ninguém entra sem o seu celular.' },
];

export function MomentAfter() {
  return (
    <section id="momento-3" className="moment" aria-labelledby="momento-3-title" data-readable="true">
      <div className="container split split--top">
        <div className="after__intro">
          <MomentHead id="momento-3-title" number={3} label="Se já conectou" title="Digitou seu e-mail e senha? Respire." stacked />
          <p className="lead">Dá para resolver. Faça nesta ordem, que o golpista perde o acesso.</p>
        </div>
        <ol className="timeline">
          {TIMELINE.map((item) => (
            <li key={item.when} className="timeline__item">
              <span className={`timeline__when timeline__when--${item.tone}`}>{item.when}</span>
              <div className="timeline__body">
                <h3 className="timeline__title">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
