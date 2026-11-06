import { Bubble } from '../components/Bubble';
import { Mascot } from '../components/Mascot';
import { useCopy } from '../hooks/useCopy';
import { useShare } from '../hooks/useShare';

const MESSAGE =
  'Gente, cuidado com Wi-Fi grátis: se a página pedir a senha do e-mail, é golpe. Banco e Pix, só no 4G.';

export function Family() {
  const { copied, copy } = useCopy();
  const { copied: linkCopied, share } = useShare();
  const siteUrl = typeof window === 'undefined' ? '' : window.location.href.split('#')[0];

  return (
    <section className="family" aria-labelledby="familia-title" data-readable="true">
      <div className="container split split--center">
        <div>
          <p className="hand">Avise quem você ama</p>
          <h2 id="familia-title" className="section-title">
            Mande no grupo da família
          </h2>

          <figure className="note">
            <blockquote className="note__text">
              “{MESSAGE} Mais aqui: <span className="note__link">{siteUrl}</span>”
            </blockquote>
            <div className="note__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => void copy(`${MESSAGE} Mais aqui: ${siteUrl}`)}
              >
                {copied ? 'Mensagem copiada!' : 'Copiar mensagem'}
              </button>
              <button
                type="button"
                className="btn btn--light"
                onClick={() => void share({ title: 'Rede Segura', text: MESSAGE })}
              >
                {linkCopied ? 'Link copiado!' : 'Compartilhar'}
              </button>
            </div>
            <p className="sr-only" role="status">
              {copied ? 'Mensagem copiada.' : linkCopied ? 'Link copiado.' : ''}
            </p>
          </figure>
        </div>

        <div className="mascot-say mascot-say--family" aria-hidden="true">
          <Bubble className="mascot-say__bubble">Ih, me pegaram!</Bubble>
          <Mascot size={240} mood="caught" className="mascot-say__svg mascot-say__svg--tilt" />
        </div>
      </div>
    </section>
  );
}
