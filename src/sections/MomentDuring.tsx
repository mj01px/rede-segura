import { useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronIcon, WifiIcon } from '../components/Icons';
import { MomentHead } from '../components/MomentHead';
import { Phone } from '../components/Phone';
import { FAKE_PORTAL, StatusBar, WifiPage } from '../components/WifiPage';
import type { Portal } from '../components/WifiPage';
import type { DevicePlatform } from '../types';

type PortalMode = 'normal' | 'falsa';

const PORTALS: Record<PortalMode, Portal & { notes: string[] }> = {
  normal: {
    tone: 'normal',
    network: 'Shopping_Centro_WiFi',
    brand: 'Shopping Centro',
    tagline: 'Wi-Fi grátis para clientes',
    fields: [
      { label: 'Nome completo', value: 'Maria da Silva', pin: 1 },
      { label: 'CPF ou telefone', value: '(11) 9••••-••••', pin: 1 },
    ],
    extra: { kind: 'terms', pin: 2 },
    button: 'Conectar',
    stamp: 'Normal',
    notes: ['nome, CPF ou telefone: pode acontecer', 'aceitar os termos: normal'],
  },
  falsa: {
    ...FAKE_PORTAL,
    fields: FAKE_PORTAL.fields.map((field) => (field.marked ? { ...field, pin: 1 } : field)),
    extra: { kind: 'app', pin: 2 },
    stamp: 'Golpe!',
    notes: ['senha do e-mail? golpe!', 'instalar app? golpe também!'],
  },
};

interface Row {
  label: string;
  sub?: string;
  active?: boolean;
  right?: ReactNode;
  /** Mostra o ícone de rede: aberta (sem cadeado) ou com senha. */
  net?: 'aberta' | 'senha';
  /** iPhone em modo Editar: bolinha vermelha de remover à esquerda. */
  minus?: boolean;
  /** Linha de ação em vermelho, como "Esquecer" no Android. */
  danger?: boolean;
}

interface Screen {
  title: string;
  /** Texto do "voltar" no topo (no iPhone é o nome da tela anterior). */
  back?: string;
  /** Botão no canto de cima, como o "Editar" do iPhone. */
  action?: { label: string; active?: boolean };
  rows: Row[];
}

interface Step {
  text: ReactNode;
  screen: Screen;
}

function Switch({ on }: { on: boolean }) {
  return <span className={`screen__switch${on ? ' is-on' : ''}`} />;
}

// O perigo real são as redes abertas que o celular já conhece: ele volta a entrar sozinho
// em qualquer rede com o mesmo nome, inclusive a do golpista. Por isso: esquecer essas redes.
const STEPS: Record<DevicePlatform, Step[]> = {
  android: [
    {
      text: <>Abra <strong>Configurações</strong> e toque em <strong>Rede e internet</strong> (na Samsung, <strong>Conexões</strong>).</>,
      screen: {
        title: 'Configurações',
        rows: [
          { label: 'Rede e internet', sub: 'Wi-Fi, rede móvel', active: true },
          { label: 'Dispositivos conectados', sub: 'Bluetooth' },
          { label: 'Aplicativos', sub: 'Apps recentes' },
          { label: 'Notificações', sub: 'Histórico' },
        ],
      },
    },
    {
      text: <>Toque em <strong>Internet</strong> e role até <strong>Redes salvas</strong> (na Samsung: <strong>Wi-Fi</strong>, três pontinhos e <strong>Gerenciar redes</strong>).</>,
      screen: {
        title: 'Internet',
        back: 'Rede e internet',
        rows: [
          { label: 'Wi-Fi', right: <Switch on /> },
          { label: 'Casa_Familia', sub: 'Conectado', net: 'senha' },
          { label: 'Preferências de rede' },
          { label: 'Redes salvas', sub: '6 redes', active: true },
        ],
      },
    },
    {
      text: <>Toque numa <strong>rede aberta</strong> que você usou na rua (sem cadeado).</>,
      screen: {
        title: 'Redes salvas',
        back: 'Internet',
        rows: [
          { label: 'Casa_Familia', net: 'senha' },
          { label: 'Terminal_Rodoviario', sub: 'Aberta', net: 'aberta', active: true },
          { label: 'Padaria_WiFi', sub: 'Aberta', net: 'aberta' },
          { label: 'Shopping_Centro_WiFi', sub: 'Aberta', net: 'aberta' },
        ],
      },
    },
    {
      text: <>Toque em <strong>Esquecer</strong>. Faça o mesmo com as outras redes abertas.</>,
      screen: {
        title: 'Terminal_Rodoviario',
        back: 'Redes salvas',
        rows: [
          { label: 'Esquecer', danger: true, active: true, right: null },
          { label: 'Conectar automaticamente', right: <Switch on={false} /> },
          { label: 'Privacidade', sub: 'MAC aleatório' },
        ],
      },
    },
  ],
  iphone: [
    {
      text: <>Abra <strong>Ajustes</strong> e toque em <strong>Wi-Fi</strong>.</>,
      screen: {
        title: 'Ajustes',
        rows: [
          { label: 'Modo Avião', right: <Switch on={false} /> },
          { label: 'Wi-Fi', sub: 'Casa_Familia', active: true },
          { label: 'Bluetooth', sub: 'Ativado' },
          { label: 'Celular' },
        ],
      },
    },
    {
      text: <>Toque em <strong>Editar</strong>, no canto de cima, para ver as redes que o iPhone já conhece.</>,
      screen: {
        title: 'Wi-Fi',
        back: 'Ajustes',
        action: { label: 'Editar', active: true },
        rows: [
          { label: 'Wi-Fi', right: <Switch on /> },
          { label: 'Casa_Familia', sub: 'Conectado', net: 'senha' },
          { label: 'Solicitar Conexão', sub: 'Notificar' },
        ],
      },
    },
    {
      text: <>Nas redes abertas que você usou na rua, toque no <strong>sinal de menos</strong> e em <strong>Apagar</strong>.</>,
      screen: {
        title: 'Redes conhecidas',
        back: 'Wi-Fi',
        action: { label: 'OK' },
        rows: [
          { label: 'Casa_Familia', net: 'senha', minus: true },
          { label: 'Terminal_Rodoviario', sub: 'Aberta', net: 'aberta', minus: true, active: true, right: <span className="screen__delete">Apagar</span> },
          { label: 'Padaria_WiFi', sub: 'Aberta', net: 'aberta', minus: true },
        ],
      },
    },
  ],
};

function NetIcon({ kind }: { kind: 'aberta' | 'senha' }) {
  return (
    <span className={`screen__net screen__net--${kind}`}>
      <WifiIcon size={12} />
      {kind === 'senha' && (
        <svg className="screen__lock" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="11" width="14" height="10" rx="2.5" fill="currentColor" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}

/** A tela de configurações dentro do celular, com o jeitão de cada sistema. Decorativa: o passo está no texto. */
function SettingsScreen({ platform, screen }: { platform: DevicePlatform; screen: Screen }) {
  return (
    <div className={`screen screen--${platform}`}>
      <StatusBar />

      <div className="screen__top">
        {screen.back ? (
          <span className="screen__back">
            {platform === 'iphone' ? '‹' : '←'}
            {platform === 'iphone' && <span> {screen.back}</span>}
          </span>
        ) : (
          <span />
        )}
        {screen.action && (
          <span className={`screen__action${screen.action.active ? ' is-active' : ''}`}>
            {screen.action.label}
            {screen.action.active && <span className="screen__tap" />}
          </span>
        )}
      </div>

      <p className="screen__title">{screen.title}</p>

      <div className="screen__group">
        {screen.rows.map((row) => (
          <div key={row.label} className={`screen__row${row.active ? ' is-active' : ''}${row.danger ? ' is-danger' : ''}`}>
            {row.minus && <span className="screen__minus">−</span>}
            {row.net && <NetIcon kind={row.net} />}
            <div className="screen__text">
              <p className="screen__label">{row.label}</p>
              {row.sub && <p className="screen__sub">{row.sub}</p>}
            </div>
            {row.right === undefined ? <ChevronIcon size={12} /> : row.right}
            {row.active && <span className="screen__tap" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MomentDuring() {
  const [mode, setMode] = useState<PortalMode>('falsa');
  const [platform, setPlatform] = useState<DevicePlatform>('android');
  const [stepIndex, setStepIndex] = useState(0);

  const portal = PORTALS[mode];
  const steps = STEPS[platform];
  const step = steps[stepIndex] ?? steps[0];

  function choosePlatform(next: DevicePlatform) {
    setPlatform(next);
    setStepIndex(0);
  }

  return (
    <section id="momento-2" className="moment moment--lilas" aria-labelledby="momento-2-title" data-readable="true">
      <div className="container">
        <MomentHead id="momento-2-title" number={2} label="Na hora de conectar" title="Página normal ou página falsa?" />

        <div className="split split--center compare">
          <div>
            <div className="toggle" role="group" aria-label="Escolha qual página ver">
              <button type="button" className={`toggle__btn${mode === 'normal' ? ' is-normal' : ''}`} aria-pressed={mode === 'normal'} onClick={() => setMode('normal')}>
                Página normal
              </button>
              <button type="button" className={`toggle__btn${mode === 'falsa' ? ' is-falsa' : ''}`} aria-pressed={mode === 'falsa'} onClick={() => setMode('falsa')}>
                Página falsa
              </button>
            </div>

            <div className="compare__stage">
              <div aria-hidden="true">
                <Phone width={250} rotate={mode === 'falsa' ? -3 : 3} className="compare__phone">
                  <WifiPage key={mode} portal={portal} />
                </Phone>
              </div>
              <ol className={`compare__notes compare__notes--${mode}`} aria-live="polite">
                {portal.notes.map((note, index) => (
                  <li key={note}>
                    <span className="compare__num">{index + 1}</span>
                    {note}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="compare__rule">
            <p>
              No Brasil, muitas redes de verdade pedem <strong>nome, CPF ou telefone</strong> e que você aceite os termos. Isso é normal.
            </p>
            <p>
              O que nenhuma rede de verdade pede é <strong>a senha do seu e-mail</strong> ou para <strong>instalar um aplicativo</strong>.
            </p>
            <div className="golden-rule">
              <p className="golden-rule__label">A regra de ouro:</p>
              <p className="golden-rule__text">Pediu a senha do seu e-mail ou para instalar algo? Feche a página.</p>
            </div>
          </div>
        </div>

        <div className="split split--center setup">
          <div className="setup__text">
            <p className="hand hand--anil">Em 1 minuto:</p>
            <h3 className="setup__title">Não deixe o celular conectar sozinho</h3>
            <p className="setup__lead">
              O celular volta sozinho para as redes abertas que já conhece. Se o golpista copiar o nome, ele conecta sem você ver. Apague essas redes.
            </p>
            <div className="pills" role="group" aria-label="Seu celular">
              {(['android', 'iphone'] as const).map((p) => (
                <button key={p} type="button" className={`pill${platform === p ? ' is-active' : ''}`} aria-pressed={platform === p} onClick={() => choosePlatform(p)}>
                  {p === 'android' ? 'Android' : 'iPhone'}
                </button>
              ))}
            </div>
            <ol className="steps">
              {steps.map((s, index) => (
                <li key={index}>
                  <button type="button" className={`steps__item${index === stepIndex ? ' is-active' : ''}`} aria-current={index === stepIndex ? 'step' : undefined} onClick={() => setStepIndex(index)}>
                    <span className="steps__num">{index + 1}</span>
                    <span>{s.text}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="setup__device">
            <div aria-hidden="true">
              <Phone width={250} rotate={platform === 'iphone' ? -3 : 3} className="setup__phone">
                <SettingsScreen key={`${platform}-${stepIndex}`} platform={platform} screen={step.screen} />
              </Phone>
            </div>
            <p className="sr-only" aria-live="polite">
              Passo {stepIndex + 1} de {steps.length}.
            </p>
            <div className="setup__nav">
              <button type="button" className="btn btn--ghost" disabled={stepIndex === 0} onClick={() => setStepIndex((i) => Math.max(0, i - 1))}>
                ← Anterior
              </button>
              <button type="button" className="btn btn--primary" disabled={stepIndex === steps.length - 1} onClick={() => setStepIndex((i) => Math.min(steps.length - 1, i + 1))}>
                Próximo passo →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
