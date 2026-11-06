import { Mascot } from './Mascot';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__wordmark">Rede Segura</p>
          <Mascot size={130} className="footer__mascot" />
        </div>
        <div className="footer__credits">
          <div>
            <p className="footer__strong">Engenharia de Software · 8B Noturno · UMC · 2026</p>
            <p>Mauro Junior, Pablo de Souza, Matheus Henrique e Victor Teixeira</p>
          </div>
          <p className="footer__privacy">Este site não coleta nenhum dado seu.</p>
        </div>
      </div>
    </footer>
  );
}
