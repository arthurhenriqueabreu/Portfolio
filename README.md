# Hotel Arthur — Portfólio pixel art

Portfólio pessoal de Arthur Henrique Abreu apresentado como um hotel profissional, vertical e interativo. Cada andar representa uma área do perfil: cobertura, recepção, laboratório de tecnologias, corredor de projetos, escritório, sala de estudos, sala de troféus e central de comunicação.

O projeto preserva uma identidade visual inspirada em pixel art, com navegação por andares, quartos individuais para os projetos e um personagem animado que acompanha a exploração da página.

## Tecnologias
  
- React 19
- TypeScript
- Vite e vinext
- React Router
- Framer Motion
- Lucide React
- Tailwind CSS
- Cloudflare Workers

## Requisitos

- Node.js 22.13 ou superior
- npm
- Git, caso o projeto seja clonado pelo terminal

Versões antigas do Node.js podem causar erros durante a instalação ou a inicialização, pois Vite, vinext e Wrangler exigem versões recentes.

Para verificar a versão instalada:

```bash
node --version
npm --version
```

## Instalação e execução

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/arthurhenriqueabreu/Portfolio.git
cd Portfolio
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Depois, acesse:

```text
http://localhost:3000/
```

Se a porta 3000 já estiver em uso, o terminal informará a nova porta escolhida.

## Verificações

```bash
npm run lint
npx tsc --noEmit
npm test
```

O comando `npm test` executa o build e os testes automatizados do conteúdo, das rotas e dos assets principais.

Para gerar apenas o build:

```bash
npm run build
```

## Estrutura de personalização

- Perfil, apresentação, tecnologias, experiência e formação: `src/data/portfolio.ts`
- Projetos e conteúdo das páginas individuais: `src/data/projects.ts`
- GitHub, LinkedIn, e-mail e currículo: `src/data/site.ts`
- Seções da página principal: `src/components/HotelSections.tsx`
- Navegação e elevador: `src/components/Navigation.tsx`
- Página reutilizável dos projetos: `src/pages/ProjectDetails.tsx`
- Estilos e responsividade: `app/globals.css`

### Links pessoais

Os links externos ficam centralizados em `src/data/site.ts`:

```ts
export const siteLinks = {
  githubUrl: null,
  linkedinUrl: null,
  email: null,
  resumeUrl: null,
};
```

Enquanto um valor permanecer como `null`, o site não cria URLs falsas. O botão de currículo só aparece quando `resumeUrl` estiver configurado.

### Projetos

Os projetos ficam centralizados em `src/data/projects.ts`. Cada projeto possui número do quarto, slug, status, descrição, tecnologias, participação, imagem e links opcionais.

Projetos apresentados atualmente:

- Quarto 601 — Assistente Inteligente de Conteúdo
- Quarto 602 — Assistente de Recebimento por Voz
- Quarto 603 — Assistente para Preenchimento de NFS-e
- Quarto 604 — Landing Page MegaHub

Para adicionar outro projeto, inclua um novo objeto no arquivo de dados com um slug único. A rota `/projetos/slug-do-projeto` será atendida pela página reutilizável de detalhes.

## Imagens e sprites

- Imagens substituíveis dos projetos: `public/images/projects/`
- Sprites do personagem: `public/assets/sprites/`
- Atlas visual do hotel: `public/assets/hotel-atlas.png`
- Referência visual do personagem: `public/assets/avatar-referencia.png`

As imagens dos projetos utilizam os seguintes caminhos:

```text
/images/projects/mega-notes-assistant.webp
/images/projects/voice-equipment-intake.webp
/images/projects/nfse-assistant.webp
/images/projects/megahub.webp
```

## Observações

- Os projetos internos não exibem links de código ou demonstração enquanto esses endereços não forem fornecidos.
- A seção de certificações permanece preparada, sem apresentar credenciais inventadas.
- O formulário de contato copia uma mensagem formatada enquanto o e-mail real não estiver configurado.
- A aplicação respeita `prefers-reduced-motion` e mantém navegação acessível por teclado.

## Graphify

O diretório `graphify-out/` contém o grafo de conhecimento utilizado durante o desenvolvimento para navegar pelas relações entre arquivos e componentes.

O Graphify é uma ferramenta auxiliar e não é necessário para instalar, executar ou avaliar o portfólio. O ambiente virtual local `.graphify-venv/` não faz parte do repositório.
