import { Bubble } from '../components/Bubble';
import { Mascot } from '../components/Mascot';
import { Phone } from '../components/Phone';
import { FAKE_PORTAL, WifiPage } from '../components/WifiPage';

const TAPE = ['NUNCA DIGITE A SENHA DO SEU E-MAIL', 'CONFIRA O NOME DA REDE', 'BANCO E PIX SÓ NO 4G'];

export function Hero() {
  return (
    <>
      <section id="inicio" className="hero" aria-labelledby="hero-title" data-readable="true">
        <p className="hero__hand">No Wi-Fi grátis,</p>
        <h1 id="hero-title" className="hero__title">
          nunca digite <span className="hero__accent">sua senha!</span>
        </h1>
        <p className="hero__lead">
          Golpistas criam redes falsas na rodoviária, no hospital e no shopping para pedir{' '}
          <mark>seu e-mail e a senha dele</mark>. Veja como não cair.
        </p>

        <div
          className="hero__stage"
          role="img"
          aria-label="Ilustração: uma página de Wi-Fi grátis pede o e-mail e a senha dele. Ao lado, a rede falsa, disfarçada de óculos e bigode, diz: é rapidinho, pode confiar!"
        >
          <svg className="hero__waves" viewBox="0 0 520 520" fill="none" aria-hidden="true">
            <circle cx="260" cy="260" r="110" stroke="#E4DAFF" strokeWidth="30" />
            <circle cx="260" cy="260" r="180" stroke="#EDE5FF" strokeWidth="30" />
            <circle cx="260" cy="260" r="245" stroke="#F3EEFF" strokeWidth="26" />
          </svg>

          <div className="hero__phone" aria-hidden="true">
            <Phone width={240} rotate={-4}>
              <WifiPage portal={FAKE_PORTAL} />
            </Phone>
          </div>

          <div className="hero__mascot" aria-hidden="true">
            <Bubble tail="left" className="hero__bubble">
              É rapidinho,
              <br />
              pode confiar!
            </Bubble>
            <Mascot size={250} className="hero__mascot-svg" />
            <span className="tag tag--danger hero__tag">Rede falsa</span>
          </div>
        </div>

        <a className="btn btn--primary hero__cta" href="#momento-1">
          Começar
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v15" />
            <path d="M6 13l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* A mesma informação está nas seções; a fita é só reforço visual. */}
      <div className="tape" aria-hidden="true">
        <div className="tape__track">
          {[0, 1].map((round) =>
            TAPE.map((text) => (
              <span key={`${round}-${text}`}>
                {text}
                <span className="tape__x">✕</span>
              </span>
            ))
          )}
        </div>
      </div>
    </>
  );
}
