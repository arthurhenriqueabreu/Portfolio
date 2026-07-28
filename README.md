# Hotel Arthur â€” PortfÃ³lio pixel art

PortfÃ³lio pessoal de Arthur Henrique Abreu apresentado como um hotel profissional vertical e interativo. Cada andar representa uma Ã¡rea do perfil: cobertura, recepÃ§Ã£o, laboratÃ³rio, corredor de projetos, escritÃ³rio, estudos, trofÃ©us e comunicaÃ§Ã£o.

## Stack

React, TypeScript, Vite/vinext, Tailwind CSS, React Router, Framer Motion e Lucide React. O projeto usa a base vinext para gerar uma aplicaÃ§Ã£o Vite compatÃ­vel com hospedagem em Cloudflare Workers.

## Executar

```bash
npm install
npm run dev
```

ValidaÃ§Ã£o e build:

```bash
npm run lint
npm run build
```

## PersonalizaÃ§Ã£o

- Textos, tecnologias e links sociais: `src/data/portfolio.ts`
- Projetos e pÃ¡ginas individuais: `src/data/projects.ts`
- Componentes e seÃ§Ãµes: `src/components/`
- PÃ¡ginas: `src/pages/`
- Estilos e responsividade: `app/globals.css`

Para adicionar um projeto, inclua um novo objeto em `src/data/projects.ts` com slug Ãºnico; a rota `/projetos/slug-do-projeto` serÃ¡ criada automaticamente.

Os valores `ADICIONAR_LINK_DO_GITHUB`, `ADICIONAR_LINK_DO_LINKEDIN` e `ADICIONAR_EMAIL` sÃ£o placeholders explÃ­citos e devem ser substituÃ­dos pelos links reais.

## CurrÃ­culo

Coloque o PDF em `public/curriculo-arthur.pdf`. Enquanto o arquivo nÃ£o existir, o botÃ£o permanece visualmente pronto, mas o navegador informarÃ¡ que o arquivo ainda nÃ£o foi disponibilizado.

## Avatar e assets

A imagem anexada foi usada como referÃªncia visual principal para o personagem: cabelo escuro volumoso com fade, roupa social preta, camisa branca e gravata. O avatar aparece no hero, nos ambientes e no atlas de poses. Os assets originais gerados estÃ£o em `public/assets/hotel-atlas.png`; a referÃªncia fornecida foi preservada em `public/assets/avatar-referencia.png`.

O atlas reÃºne rooftop, recepÃ§Ã£o, laboratÃ³rio, corredor, escritÃ³rio, sala de estudos, trofÃ©us, central de comunicaÃ§Ã£o, elevador, objetos decorativos e poses do avatar em uma paleta consistente. Nenhum asset oficial de jogos foi utilizado.

## ObservaÃ§Ãµes

As pÃ¡ginas de projeto deixam GitHub e demonstraÃ§Ã£o desativados atÃ© que URLs reais sejam informadas. CertificaÃ§Ãµes tambÃ©m ficam em estado preparado, sem credenciais inventadas. O formulÃ¡rio copia uma mensagem formatada enquanto o e-mail real nÃ£o estiver configurado.

## Graphify — contexto eficiente para agentes

O Graphify está instalado de forma isolada em `.graphify-venv/` e integrado ao Codex por `.codex/skills/graphify/`, `AGENTS.md` e `.codex/hooks.json`. O grafo persistente fica em `graphify-out/` e permite consultar relações do projeto sem reler arquivos inteiros.

Comandos úteis:

```bash
npm run graph:build
npm run graph:update
npm run graph:query -- "PortfolioRouter ProjectDetails routes projects"
```

A indexação padrão é somente de código e roda localmente, sem chave de API. Hooks `post-commit` e `post-checkout` mantêm o grafo sincronizado automaticamente. O merge driver de `graphify-out/graph.json` evita conflitos quando o grafo é versionado.
