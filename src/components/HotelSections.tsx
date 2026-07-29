"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BriefcaseBusiness, Check, Copy, Download, ExternalLink, GraduationCap, Mail, Send, Sparkles, Trophy } from "lucide-react";
import { education, experience, profile, technologyGroups } from "@/src/data/portfolio";
import { projects } from "@/src/data/projects";
import { siteLinks } from "@/src/data/site";
import { PixelLink, PixelWindow, Reveal, Scene, SectionSign } from "./PixelUI";

export function Hero() {
  const [showWalker, setShowWalker] = useState(false);
  const [walkerSection, setWalkerSection] = useState(0);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const heroObserver = new IntersectionObserver(([entry]) => setShowWalker(!entry.isIntersecting), { rootMargin: "-72px 0px 0px 0px", threshold: 0 });
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section.floor:not(#inicio)"));
    const sectionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const index = sections.indexOf(entry.target as HTMLElement);
        if (index >= 0) setWalkerSection(index);
      }
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    heroObserver.observe(hero);
    sections.forEach(section => sectionObserver.observe(section));
    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return <>
    <section id="inicio" className="floor hero-floor">
      <div className="stars" />
      <div className="floor-inner hero-grid">
        <Reveal>
          <p className="eyebrow">CHECK-IN ABERTO • JOINVILLE, SC</p>
          <h1>Olá, eu sou<br /><strong>Arthur.</strong></h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-copy">{profile.subtitle}</p>
          <div className="button-row">
            <PixelLink href="#projetos">Visitar projetos</PixelLink>
            {siteLinks.resumeUrl && <PixelLink href={siteLinks.resumeUrl} secondary><Download size={16} /> Baixar currículo</PixelLink>}
          </div>
          <p className="availability"><i /> Buscando estágio ou primeira oportunidade</p>
        </Reveal>
        <Reveal delay={.15}>
          <div className="avatar-stage">
            <Scene crop="rooftop" alt="Cobertura neon do hotel virtual" />
            <span className="avatar-sprite avatar-idle" aria-hidden="true" />
            <span className="speech">Bem-vindo ao meu hotel profissional!</span>
          </div>
        </Reveal>
      </div>
      <a className="scroll-cue" href="#sobre">ROLE PARA EXPLORAR <span>↓</span></a>
    </section>
    <span key={walkerSection} className={`scroll-walker${showWalker ? " visible" : ""}${walkerSection % 2 ? " side-right walker-front" : " side-left walker-walk"}`} aria-hidden="true" />
  </>;
}

export function About() {
  return <section id="sobre" className="floor warm-floor"><div className="floor-inner">
    <SectionSign floor="08">Recepção · Quem sou</SectionSign>
    <div className="two-col">
      <Reveal><Scene crop="reception" alt="Recepção pixel art com balcão e plantas" /></Reveal>
      <Reveal delay={.08}><PixelWindow>
        <p className="window-label">FICHA DO HÓSPEDE #AH-2003</p>
        <h3>{profile.name}</h3>
        <p>{profile.about}</p>
        <blockquote>“{profile.goal}”</blockquote>
        <dl className="facts">
          <div><dt>STATUS</dt><dd>Cursando ADS</dd></div>
          <div><dt>FOCO</dt><dd>Web • Automação • IA</dd></div>
          <div><dt>BASE</dt><dd>Joinville • Santa Catarina</dd></div>
        </dl>
      </PixelWindow></Reveal>
    </div>
  </div></section>;
}

export function Technologies() {
  return <section id="tecnologias" className="floor tech-floor"><div className="floor-inner">
    <SectionSign floor="07">Laboratório tech</SectionSign>
    <p className="section-lead">Meu inventário de ferramentas — agrupado por contexto de uso, sem barras de proficiência inventadas.</p>
    <div className="tech-layout">
      <Reveal><Scene crop="lab" alt="Laboratório de tecnologia pixel art" /></Reveal>
      <div className="inventory">{Object.entries(technologyGroups).map(([group, items], index) => <Reveal key={group} delay={index * .04}><div className="inventory-group">
        <h3>{group}</h3>
        <div>{items.map(item => <span key={item}><i />{item}</span>)}</div>
      </div></Reveal>)}</div>
    </div>
    <p className="tech-note">Tecnologias utilizadas em projetos práticos e atividades acadêmicas, com aprendizado contínuo.</p>
  </div></section>;
}

export function Projects() {
  return <section id="projetos" className="floor corridor-floor"><div className="floor-inner">
    <SectionSign floor="06">Corredor de projetos</SectionSign>
    <p className="section-lead">Cada porta abre uma página própria com contexto, decisões e aprendizados.</p>
    <div className="room-grid four-rooms">{projects.map((project, index) => <Reveal key={project.slug} delay={index * .05}>
      <Link to={`/projetos/${project.slug}`} className="project-room" aria-label={`Abrir quarto ${project.room}: ${project.name}`}>
        <div className="door"><span>{project.room}</span><i /><b>ABRIR QUARTO</b></div>
        <div className="room-info">
          <small>{project.status}</small>
          <h3>{project.name}</h3>
          {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
          <p>{project.shortDescription}</p>
          <p className="project-category">{project.category.join(" • ")}</p>
          <div>{project.featuredTechnologies.map(technology => <span key={technology}>{technology}</span>)}</div>
          {project.privacyLabel && <small className="privacy-label">{project.privacyLabel}</small>}
        </div>
      </Link>
    </Reveal>)}</div>
  </div></section>;
}

export function ExperienceEducation() {
  return <>
    <section id="experiencia" className="floor office-floor"><div className="floor-inner">
      <SectionSign floor="05">Escritório administrativo</SectionSign>
      <div className="two-col reverse">
        <Reveal><PixelWindow>
          <BriefcaseBusiness className="feature-icon" />
          <p className="window-label">EXPERIÊNCIA PROFISSIONAL</p>
          <h3>{experience.title}</h3>
          <p className="experience-meta"><strong>{experience.company}</strong><span>{experience.period}</span></p>
          <ul className="check-list">{experience.activities.map(item => <li key={item}><Check />{item}</li>)}</ul>
        </PixelWindow></Reveal>
        <Reveal delay={.08}><Scene crop="office" alt="Escritório profissional pixel art" /></Reveal>
      </div>
    </div></section>
    <section id="formacao" className="floor study-floor"><div className="floor-inner">
      <SectionSign floor="04">Sala de estudos</SectionSign>
      <div className="education-card">
        <Scene crop="study" alt="Sala de estudos pixel art com biblioteca e notebook" />
        <PixelWindow>
          <GraduationCap className="feature-icon" />
          <span className="status-chip">CURSANDO</span>
          <p className="window-label">FORMAÇÃO ACADÊMICA · {education.phase}</p>
          <h3>{education.course}</h3>
          <p>{education.institution}</p>
          <p>{education.description}</p>
        </PixelWindow>
      </div>
    </div></section>
  </>;
}

export function Certifications() {
  return <section id="certificacoes" className="floor trophy-floor"><div className="floor-inner">
    <SectionSign floor="03">Sala de troféus</SectionSign>
    <div className="two-col">
      <Reveal><Scene crop="trophy" alt="Sala de troféus pixel art" /></Reveal>
      <Reveal delay={.08}><PixelWindow className="empty-cert">
        <Trophy className="feature-icon" />
        <p className="window-label">VITRINE EM PREPARAÇÃO</p>
        <h3>Próximas conquistas serão exibidas aqui.</h3>
        <p>A estrutura está pronta para certificação, instituição, data, validação e descrição — sem inventar credenciais.</p>
        <span className="add-slot"><Sparkles /> Slot disponível</span>
      </PixelWindow></Reveal>
    </div>
  </div></section>;
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const message = `Nome: ${form.name}\nE-mail: ${form.email}\nAssunto: ${form.subject}\n\n${form.message}`;
  const copy = async () => {
    await navigator.clipboard.writeText(message);
    setCopied(true);
  };
  const isDevelopment = process.env.NODE_ENV !== "production";
  const socialLinks = [
    { key: "github", label: "GitHub", url: siteLinks.githubUrl },
    { key: "linkedin", label: "LinkedIn", url: siteLinks.linkedinUrl },
  ];

  return <section id="contato" className="floor contact-floor"><div className="floor-inner">
    <SectionSign floor="02">Central de comunicação</SectionSign>
    <div className="contact-grid">
      <Reveal><div>
        <Scene crop="control" alt="Central de comunicação pixel art" />
        <div className="contact-links">{socialLinks.map(link => link.url
          ? <a key={link.key} href={link.url} target="_blank" rel="noreferrer">{link.label}<ExternalLink size={14} /></a>
          : isDevelopment ? <button key={link.key} className="disabled-link" disabled>{link.label}<small>configurar link</small></button> : null)}</div>
      </div></Reveal>
      <Reveal delay={.08}><form className="contact-console" onSubmit={event => {
        event.preventDefault();
        if (siteLinks.email) location.href = `mailto:${siteLinks.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(message)}`;
        else copy();
      }}>
        <div className="console-bar"><i /><i /><i /><span>contato.exe</span></div>
        <p>&gt; NOVA_MENSAGEM</p>
        <label>Seu nome<input required value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} placeholder="Digite seu nome" /></label>
        <label>Seu e-mail<input required type="email" value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} placeholder="voce@email.com" /></label>
        <label>Assunto<input required value={form.subject} onChange={event => setForm({ ...form, subject: event.target.value })} placeholder="Vamos conversar sobre..." /></label>
        <label>Mensagem<textarea required rows={5} value={form.message} onChange={event => setForm({ ...form, message: event.target.value })} placeholder="Escreva sua mensagem" /></label>
        <button className="pixel-button" type="submit">{siteLinks.email ? <Send size={16} /> : <Copy size={16} />} {copied ? "Mensagem copiada!" : siteLinks.email ? "Enviar mensagem" : "Copiar mensagem"}</button>
        {!siteLinks.email && <small className="form-note"><Mail size={13} /> O e-mail ainda será configurado. Por enquanto, copie a mensagem pronta.</small>}
      </form></Reveal>
    </div>
  </div></section>;
}

export function Footer() {
  return <footer><div><span className="brand-mark">AH</span><p><strong>Check-out concluído.</strong><br />Obrigado pela visita.</p></div><p>© 2026 Arthur Henrique Abreu<br /><small>Construído com React, TypeScript e muitos pixels.</small></p><a href="#inicio">Voltar à cobertura ↑</a></footer>;
}