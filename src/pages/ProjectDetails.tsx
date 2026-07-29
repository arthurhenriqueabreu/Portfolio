"use client";

import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ExternalLink, Github, Info, Lightbulb, ShieldCheck, UserRound, Wrench } from "lucide-react";
import { getProject } from "@/src/data/projects";
import { PixelWindow } from "@/src/components/PixelUI";
import NotFound from "./NotFound";

export default function ProjectDetails() {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;
  const hasActions = Boolean(project.githubUrl || project.demoUrl || project.caseStudyUrl);

  return <main className="project-page">
    <header className="project-header">
      <Link to="/#projetos"><ArrowLeft /> Voltar ao corredor</Link>
      <div className="brand"><span className="brand-mark">AH</span><span>HOTEL ARTHUR<small>QUARTO {project.room}</small></span></div>
    </header>
    <section className="project-hero">
      <div>
        <p className="eyebrow">QUARTO {project.room} • {project.status.toUpperCase()}</p>
        <h1>{project.name}</h1>
        {project.subtitle && <p className="project-detail-subtitle">{project.subtitle}</p>}
        <p>{project.shortDescription}</p>
        <p className="project-detail-category">{project.category.join(" • ")}</p>
        {project.privacyLabel && <span className={`project-privacy ${project.isPrivate ? "private" : "business"}`}>{project.privacyLabel}</span>}
        <div className="tech-chips">{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
      </div>
      <div className={`project-illustration project-${project.room}`} style={{ backgroundImage: `url("${project.image}")` }} role="img" aria-label={project.imageAlt}><span>{project.room}</span></div>
    </section>
    <section className="project-content">
      <PixelWindow><Lightbulb className="feature-icon" /><p className="window-label">CONTEXTO</p><h2>De onde surgiu</h2><p>{project.context}</p></PixelWindow>
      <PixelWindow><Wrench className="feature-icon" /><p className="window-label">SOLUÇÃO</p><h2>O que foi desenvolvido</h2><p>{project.solution}</p></PixelWindow>
      <PixelWindow><ShieldCheck className="feature-icon" /><p className="window-label">FUNCIONALIDADES</p><h2>O que foi construído</h2><ul className="check-list">{project.features.map(item => <li key={item}><Check />{item}</li>)}</ul></PixelWindow>
      <PixelWindow><UserRound className="feature-icon" /><p className="window-label">MINHA PARTICIPAÇÃO</p><h2>Como contribuí</h2><ul className="check-list">{project.participation.map(item => <li key={item}><Check />{item}</li>)}</ul></PixelWindow>
      {project.disclaimer && <PixelWindow className="project-disclaimer"><Info className="feature-icon" /><p className="window-label">ESCOPO DO PROJETO</p><h2>Observação importante</h2><p>{project.disclaimer}</p></PixelWindow>}
    </section>
    {hasActions && <div className="project-actions">
      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github /> GitHub</a>}
      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer"><ExternalLink /> Demonstração</a>}
      {project.caseStudyUrl && <a href={project.caseStudyUrl} target="_blank" rel="noreferrer"><ExternalLink /> Estudo de caso</a>}
    </div>}
    <Link className="pixel-button back-button" to="/#projetos"><ArrowLeft /> Voltar aos projetos</Link>
  </main>;
}