# Graph Report - Portfolio  (2026-07-28)

## Corpus Check
- 43 files · ~34,323 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 261 nodes · 281 edges · 29 communities (19 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `252fec76`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- HotelSections.tsx
- compilerOptions
- dependencies
- scripts
- What You Must Do When Invoked
- include
- chatgpt-auth.ts
- PortfolioRouter.tsx
- route.ts
- worker/index.ts
- rendered-html.test.mjs
- eslint.config.mjs
- next.config.ts
- postcss.config.mjs
- vite.config.ts
- cloudflare-env.d.ts
- graphify reference: extra exports and benchmark
- Hotel Arthur â€” PortfÃ³lio pixel art
- graphify reference: query, path, explain
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- AGENTS.md
- extraction-spec.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `What You Must Do When Invoked` - 12 edges
3. `scripts` - 10 edges
4. `/graphify` - 10 edges
5. `graphify reference: extra exports and benchmark` - 8 edges
6. `Hotel Arthur â€” PortfÃ³lio pixel art` - 8 edges
7. `include` - 7 edges
8. `graphify reference: query, path, explain` - 5 edges
9. `safeRelativeReturnPath()` - 4 edges
10. `getDb()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `GET()` --calls--> `getDb()`  [EXTRACTED]
  examples/d1/app/api/notes/route.ts → db/index.ts
- `POST()` --calls--> `getDb()`  [EXTRACTED]
  examples/d1/app/api/notes/route.ts → db/index.ts
- `Home()` --calls--> `useScrollFloor()`  [EXTRACTED]
  src/pages/Home.tsx → src/components/Navigation.tsx
- `ProjectDetails()` --calls--> `getProject()`  [EXTRACTED]
  src/pages/ProjectDetails.tsx → src/data/projects.ts

## Import Cycles
- None detected.

## Communities (29 total, 10 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.06
Nodes (35): @cloudflare/vite-plugin, @cloudflare/workers-types, drizzle-kit, eslint, eslint-config-next, devDependencies, @cloudflare/vite-plugin, @cloudflare/workers-types (+27 more)

### Community 1 - "HotelSections.tsx"
Cohesion: 0.09
Nodes (28): About(), Certifications(), Contact(), ExperienceEducation(), Footer(), Hero(), Projects(), Technologies() (+20 more)

### Community 2 - "compilerOptions"
Cohesion: 0.10
Nodes (21): @cloudflare/workers-types, dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental (+13 more)

### Community 3 - "dependencies"
Cohesion: 0.13
Nodes (15): drizzle-orm, framer-motion, lucide-react, next, dependencies, drizzle-orm, framer-motion, lucide-react (+7 more)

### Community 4 - "scripts"
Cohesion: 0.12
Nodes (16): engines, node, name, private, scripts, build, db:generate, dev (+8 more)

### Community 5 - "What You Must Do When Invoked"
Cohesion: 0.08
Nodes (24): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+16 more)

### Community 6 - "include"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 7 - "chatgpt-auth.ts"
Cohesion: 0.39
Nodes (8): chatGPTSignInPath(), chatGPTSignOutPath(), ChatGPTUser, getChatGPTUser(), isReservedAuthPath(), requireChatGPTUser(), safeDecodeURIComponent(), safeRelativeReturnPath()

### Community 8 - "PortfolioRouter.tsx"
Cohesion: 0.24
Nodes (4): Home, NotFound, PortfolioRouter(), ProjectDetails

### Community 9 - "route.ts"
Cohesion: 0.39
Nodes (5): getDb(), GET(), POST(), toRouteErrorMessage(), notes

### Community 10 - "worker/index.ts"
Cohesion: 0.29
Nodes (3): Env, ExecutionContext, worker

### Community 19 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 20 - "Hotel Arthur â€” PortfÃ³lio pixel art"
Cohesion: 0.22
Nodes (8): Avatar e assets, CurrÃ­culo, Executar, Graphify — contexto eficiente para agentes, Hotel Arthur â€” PortfÃ³lio pixel art, ObservaÃ§Ãµes, PersonalizaÃ§Ã£o, Stack

### Community 21 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 22 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 23 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 24 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

## Knowledge Gaps
- **125 isolated node(s):** `ChatGPTUser`, `Cloudflare`, `Env`, `eslintConfig`, `nextConfig` (+120 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `ChatGPTUser`, `Cloudflare`, `Env` to the rest of the system?**
  _125 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._
- **Should `HotelSections.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09446693657219973 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._