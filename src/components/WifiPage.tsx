import { WifiIcon } from './Icons';

export type PortalTone = 'normal' | 'falsa';

export interface PortalField {
  label: string;
  value: string;
  /** Destaca o campo na cor do tom. */
  marked?: boolean;
  /** Número da anotação à mão que aponta para este campo. */
  pin?: number;
}

export interface Portal {
  tone: PortalTone;
  network: string;
  brand: string;
  tagline: string;
  /** Botão "Entrar com Google", comum nas páginas falsas. */
  social?: boolean;
  fields: PortalField[];
  /** Caixinha dos termos (normal) ou faixa pedindo para instalar app (falsa). */
  extra?: { kind: 'terms' | 'app'; pin?: number };
  button: string;
  /** Carimbo por cima da tela, como "GOLPE!". */
  stamp?: string;
}

/** A página falsa, igual na abertura e no momento 2 (lá ganha números, carimbo e a faixa do app). */
export const FAKE_PORTAL: Portal = {
  tone: 'falsa',
  network: 'Terminal Rodoviario Free',
  brand: 'Wi-Fi Grátis',
  tagline: 'Entre para liberar a internet',
  social: true,
  fields: [
    { label: 'Seu e-mail', value: 'maria.silva@email.com' },
    { label: 'Senha do seu e-mail', value: '••••••••', marked: true },
  ],
  button: 'Conectar',
};

/** Hora, Wi-Fi e bateria no topo da tela do celular. */
export function StatusBar() {
  return (
    <div className="status-bar">
      <span>15:40</span>
      <span className="status-bar__icons">
        <WifiIcon size={11} />
        <span className="status-bar__battery" />
      </span>
    </div>
  );
}

function Pin({ n }: { n: number }) {
  return <span className="wifi-page__pin">{n}</span>;
}

/**
 * Imita a tela que o celular abre sozinho ao entrar num Wi-Fi público ("Fazer login na rede").
 * Só ilustração: quem usa deve dizer o mesmo em texto ao lado ou num aria-label.
 */
export function WifiPage({ portal }: { portal: Portal }) {
  const { extra } = portal;

  return (
    <div className={`wifi-page wifi-page--${portal.tone}`}>
      <StatusBar />

      <div className="wifi-page__sheet">
        <span className="wifi-page__close">✕</span>
        <span>
          <span className="wifi-page__sheet-title">Fazer login na rede</span>
          <span className="wifi-page__sheet-net">{portal.network}</span>
        </span>
      </div>

      <div className="wifi-page__content">
        <div className="wifi-page__brand">
          <span className="wifi-page__logo">
            <WifiIcon size={18} />
          </span>
          <span>
            <span className="wifi-page__brand-name">{portal.brand}</span>
            <span className="wifi-page__tagline">{portal.tagline}</span>
          </span>
        </div>

        {portal.social && (
          <span className="wifi-page__social">
            <span className="wifi-page__g">G</span> Entrar com Google
          </span>
        )}

        {portal.fields.map((field) => (
          <span key={field.label} className="wifi-page__field">
            <span className="wifi-page__label">{field.label}</span>
            <span className={`wifi-page__input${field.marked || field.pin ? ' is-marked' : ''}`}>
              {field.value}
              {field.pin && <Pin n={field.pin} />}
            </span>
          </span>
        ))}

        {extra?.kind === 'terms' && (
          <span className={`wifi-page__terms${extra.pin ? ' is-marked' : ''}`}>
            <span className="wifi-page__check">✓</span>
            Li e aceito os termos de uso
            {extra.pin && <Pin n={extra.pin} />}
          </span>
        )}
        {extra?.kind === 'app' && (
          <span className={`wifi-page__app${extra.pin ? ' is-marked' : ''}`}>
            Para navegar, instale nosso app
            <span className="wifi-page__app-btn">Instalar</span>
            {extra.pin && <Pin n={extra.pin} />}
          </span>
        )}

        <span className="wifi-page__button">{portal.button}</span>
      </div>

      {portal.stamp && <span className="wifi-page__stamp">{portal.stamp}</span>}
    </div>
  );
}
