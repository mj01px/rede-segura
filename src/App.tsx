import { A11yDock } from './components/A11yDock';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Wave } from './components/Wave';
import { useActiveMoment } from './hooks/useActiveMoment';
import { useFontSize } from './hooks/useFontSize';
import { useReadAloud } from './hooks/useReadAloud';
import { Family } from './sections/Family';
import { Hero } from './sections/Hero';
import { MomentAfter } from './sections/MomentAfter';
import { MomentBefore } from './sections/MomentBefore';
import { MomentDuring } from './sections/MomentDuring';
import { Pamphlet } from './sections/Pamphlet';

const CREME = '#FFF4E4';
const LILAS = '#D9CCFF';

export function App() {
  const { isLargeText, toggleLargeText } = useFontSize();
  const { isSpeechSupported, isSpeaking, toggleReadAloud } = useReadAloud();
  const activeMoment = useActiveMoment();

  return (
    <>
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Header activeMoment={activeMoment} />

      <main id="conteudo-principal">
        <Hero />
        <MomentBefore />
        <Wave fill={LILAS} background={CREME} />
        <MomentDuring />
        <Wave fill={CREME} background={LILAS} />
        <MomentAfter />
        <Family />
        <Pamphlet />
      </main>

      <Footer />
      <A11yDock
        isLargeText={isLargeText}
        onToggleLargeText={toggleLargeText}
        isSpeechSupported={isSpeechSupported}
        isSpeaking={isSpeaking}
        onToggleReadAloud={toggleReadAloud}
      />
    </>
  );
}

export default App;
