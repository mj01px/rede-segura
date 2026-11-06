import { Mascot } from './Mascot';
import type { MomentId } from '../types';

const MOMENTS: { id: MomentId; label: string }[] = [
  { id: 'momento-1', label: '1 · Antes' },
  { id: 'momento-2', label: '2 · Na hora' },
  { id: 'momento-3', label: '3 · Se já conectou' },
];

export function Header({ activeMoment }: { activeMoment: MomentId | null }) {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="brand" href="#inicio">
          <Mascot size={40} />
          <span className="brand__name">Rede Segura</span>
        </a>
        <nav className="moments-nav" aria-label="Os 3 momentos">
          {MOMENTS.map((moment) => (
            <a
              key={moment.id}
              href={`#${moment.id}`}
              className={`moments-nav__link${activeMoment === moment.id ? ' is-active' : ''}`}
              aria-current={activeMoment === moment.id ? 'location' : undefined}
            >
              {moment.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
