import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("publishes the updated professional profile and six technology groups", async () => {
  const [portfolio, sections, navigation] = await Promise.all([
    source("src/data/portfolio.ts"),
    source("src/components/HotelSections.tsx"),
    source("src/components/Navigation.tsx"),
  ]);

  assert.match(portfolio, /Arthur Henrique Abreu/);
  assert.match(portfolio, /Desenvolvedor em formação/);
  assert.match(portfolio, /Joinville/);
  assert.match(portfolio, /Front-end/);
  assert.match(portfolio, /Back-end e aplicações/);
  assert.match(portfolio, /Automação e inteligência artificial/);
  assert.match(portfolio, /Dados e validação/);
  assert.match(portfolio, /Ferramentas/);
  assert.match(portfolio, /Qualidade/);
  assert.match(sections, /Object\.entries\(technologyGroups\)\.map/);
  assert.match(navigation, /f\.navLabel/);
});

test("keeps exactly the four real portfolio projects and their detail routes", async () => {
  const [projects, sections, router] = await Promise.all([
    source("src/data/projects.ts"),
    source("src/components/HotelSections.tsx"),
    source("src/PortfolioRouter.tsx"),
  ]);

  const slugs = [
    "assistente-inteligente-conteudo",
    "assistente-recebimento-voz",
    "assistente-nfse",
    "landing-page-megahub",
  ];

  assert.equal((projects.match(/^\s+slug:/gm) ?? []).length, slugs.length);
  for (const slug of slugs) {
    assert.match(projects, new RegExp(`slug: "${slug}"`));
  }
  assert.match(sections, /projects\.map/);
  assert.match(router, /projetos\/:slug/);
});

test("does not expose fake external links and ships every project placeholder", async () => {
  const [links, projects] = await Promise.all([
    source("src/data/site.ts"),
    source("src/data/projects.ts"),
  ]);

  assert.doesNotMatch(links, /https?:\/\//);
  assert.match(links, /githubUrl: null/);
  assert.match(links, /linkedinUrl: null/);
  assert.match(links, /email: null/);
  assert.match(links, /resumeUrl: null/);

  const images = [
    "mega-notes-assistant.webp",
    "voice-equipment-intake.webp",
    "nfse-assistant.webp",
    "megahub.webp",
  ];
  for (const image of images) {
    assert.match(projects, new RegExp(image.replace(".", "\\.")));
    await access(new URL(`public/images/projects/${image}`, root));
  }
});