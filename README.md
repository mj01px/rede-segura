<p align="center">
  <img src="docs/banner.png" alt="Rede Segura: no Wi-Fi grátis, nunca digite sua senha! Ilustração de um celular com uma página de Wi-Fi falsa pedindo o e-mail e a senha dele, ao lado do mascote, a rede falsa de óculos e bigode." width="100%">
</p>

<p align="center">
  Um <b>site</b> e um <b>panfleto</b> para ensinar pessoas mais velhas e suas famílias<br>
  a não cair no golpe do Wi-Fi falso.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-3442E0?labelColor=555" alt="React 18">
  <img src="https://img.shields.io/badge/TypeScript-strict-1F1A3D?labelColor=555" alt="TypeScript strict">
  <img src="https://img.shields.io/badge/Vite-5-3442E0?labelColor=555" alt="Vite 5">
  <img src="https://img.shields.io/badge/acess%C3%ADvel-A%2B%20e%20ouvir-E8591C?labelColor=555" alt="Acessível: A+ e ouvir">
  <img src="https://img.shields.io/badge/dados%20coletados-nenhum-E5384F?labelColor=555" alt="Dados coletados: nenhum">
</p>

## O golpe

<img src="docs/golpe.png" alt="Como o golpe acontece: 1, criam uma rede falsa com o nome parecido com a do lugar. 2, pedem seu e-mail e a senha dele numa página que imita a do Wi-Fi. 3, entram no seu e-mail e trocam a senha das suas outras contas. Regra de ouro: pediu a senha do seu e-mail ou para instalar algo? Feche a página." width="100%">

## O site

Feito para ser aberto no celular, depois de receber o panfleto. Tudo em português simples, sem termo técnico, dividido em três momentos: antes de conectar, na hora de conectar e se já conectou.

<img src="docs/vitrine.png" alt="Quatro celulares mostrando o site: a abertura, a comparação com a página falsa, o passo a passo para apagar redes abertas e o que fazer se já digitou o e-mail e a senha." width="100%">

- **Antes de conectar:** o golpe em 30 segundos e uma lista rápida para conferir antes de tocar na rede.
- **Página normal ou falsa?** As duas telas de login do Wi-Fi lado a lado, com anotações do que é normal e do que é golpe.
- **Não deixe o celular conectar sozinho:** o passo a passo para apagar as redes abertas salvas no Android e no iPhone, com as telas do celular.
- **Se já conectou:** o que fazer na hora, em ordem, para o golpista perder o acesso.
- **Família:** uma mensagem pronta para mandar no grupo, com botão de copiar e de compartilhar.

## Pensado para quem tem mais idade

- **A+** aumenta o texto do site inteiro, e **Ouvir** lê em voz alta a parte que está na tela.
- Botões grandes, contraste alto e foco visível para quem usa o teclado.
- Nenhum dado é coletado: sem cadastro, sem formulário, sem rastreamento.

## Rodando o projeto

```bash
npm install
npm run dev     # abre o site no endereço que aparecer no terminal
npm run build   # gera a versão final em dist/
```

<details>
<summary><b>Estrutura das pastas</b></summary>

```
src/
├── components/   cabeçalho, rodapé, mascote, celular, página do Wi-Fi e ícones
├── sections/     uma parte da página por arquivo (abertura, os três momentos, família...)
├── hooks/        A+, leitura em voz alta, seção ativa, copiar e compartilhar
├── lib/          leitura em voz alta
├── styles/       cores e estilos, tirados do panfleto
└── types/        tipos compartilhados

public/panfleto/  frente e verso do panfleto
docs/             imagens deste README
```

</details>

## Quem fez

**[Mauro Junior](https://github.com/mj01px)**, **[Pablo de Souza](https://github.com/1pablex)**, **Matheus Henrique** e **Victor Teixeira**<br>
Engenharia de Software, 8B Noturno · Universidade de Mogi das Cruzes · 2026
