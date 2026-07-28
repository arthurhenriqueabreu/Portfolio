# Hotel Arthur — Portfólio pixel art

Portfólio pessoal de Arthur Henrique Abreu apresentado como um hotel profissional vertical e interativo. Cada andar representa uma área do perfil: cobertura, recepção, laboratório, corredor de projetos, escritório, estudos, troféus e comunicação.

## Stack

React, TypeScript, Vite/vinext, Tailwind CSS, React Router, Framer Motion e Lucide React. O projeto usa a base vinext para gerar uma aplicação Vite compatível com hospedagem em Cloudflare Workers.

## Executar

```bash
npm install
npm run dev
```

Validação e build:

```bash
npm run lint
npm run build
```

## Personalização

- Textos, tecnologias e links sociais: `src/data/portfolio.ts`
- Projetos e páginas individuais: `src/data/projects.ts`
- Componentes e seções: `src/components/`
- Páginas: `src/pages/`
- Estilos e responsividade: `app/globals.css`

Para adicionar um projeto, inclua um novo objeto em `src/data/projects.ts` com slug único; a rota `/projetos/slug-do-projeto` será criada automaticamente.

Os valores `ADICIONAR_LINK_DO_GITHUB`, `ADICIONAR_LINK_DO_LINKEDIN` e `ADICIONAR_EMAIL` são placeholders explícitos e devem ser substituídos pelos links reais.

## Currículo

Coloque o PDF em `public/curriculo-arthur.pdf`. Enquanto o arquivo não existir, o botão permanece visualmente pronto, mas o navegador informará que o arquivo ainda não foi disponibilizado.

## Avatar e assets

A imagem anexada foi usada como referência visual principal para o personagem: cabelo escuro volumoso com fade, roupa social preta, camisa branca e gravata. O avatar aparece no hero, nos ambientes e no atlas de poses. Os assets originais gerados estão em `public/assets/hotel-atlas.png`; a referência fornecida foi preservada em `public/assets/avatar-referencia.png`.

O atlas reúne rooftop, recepção, laboratório, corredor, escritório, sala de estudos, troféus, central de comunicação, elevador, objetos decorativos e poses do avatar em uma paleta consistente. Nenhum asset oficial de jogos foi utilizado.

## Observações

As páginas de projeto deixam GitHub e demonstração desativados até que URLs reais sejam informadas. Certificações também ficam em estado preparado, sem credenciais inventadas. O formulário copia uma mensagem formatada enquanto o e-mail real não estiver configurado.
