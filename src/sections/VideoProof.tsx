/**
 * Vídeo em pé (9:16) que mostra o golpe acontecendo de verdade.
 * Para trocar: substitua os arquivos em public/video e ajuste o crédito abaixo.
 */
const VIDEO = {
  src: 'video/golpe-wifi.mp4',
  poster: 'video/capa.jpg',
  author: '@macedosec',
  authorUrl: 'https://www.instagram.com/macedosec/',
} as const;

const POINTS = [
  'Com um aparelho do tamanho de um cartão, ele cria uma rede Wi-Fi grátis.',
  'O celular conecta e abre uma página igual à do Google pedindo e-mail e senha.',
  'Tudo o que a pessoa digita aparece na hora na tela do golpista.',
];

export function VideoProof() {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="video" className="proof" aria-labelledby="video-title" data-readable="true">
      <div className="container split split--center">
        <div className="proof__text">
          <p className="hand">Parece exagero?</p>
          <h2 id="video-title" className="section-title">
            Veja o golpe acontecendo de verdade
          </h2>
          <p className="lead">Em menos de um minuto, num shopping, com um aparelho que cabe no bolso.</p>
          <p className="proof__notice">
            <strong>É só uma demonstração educativa.</strong> Quem gravou usou o próprio celular para mostrar como o
            golpe funciona. Ninguém foi enganado e nenhum dado de verdade foi roubado.
          </p>
          <ol className="proof__points">
            {POINTS.map((point, index) => (
              <li key={point}>
                <span className="proof__num" aria-hidden="true">
                  {index + 1}
                </span>
                {point}
              </li>
            ))}
          </ol>
        </div>

        <figure className="proof__video">
          <div className="proof__frame">
            <video
              controls
              playsInline
              preload="none"
              poster={`${base}${VIDEO.poster}`}
              aria-label="Vídeo: demonstração de uma rede Wi-Fi falsa roubando e-mail e senha"
            >
              <source src={`${base}${VIDEO.src}`} type="video/mp4" />
            </video>
          </div>
          <figcaption className="proof__credit">
            Vídeo de{' '}
            <a href={VIDEO.authorUrl} target="_blank" rel="noopener noreferrer">
              {VIDEO.author}
            </a>
            , no Instagram
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
