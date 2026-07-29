"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Menu, X } from "lucide-react";
import { floors } from "@/src/data/portfolio";

export function Navigation({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="topbar">
      <a className="brand" href="#inicio"><span className="brand-mark">AH</span><span>HOTEL ARTHUR<small>PORTFÓLIO • DISPONÍVEL</small></span></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{floors.map(f => <a key={f.id} className={active === f.id ? "active" : ""} href={`#${f.id}`}>{f.navLabel}</a>)}</nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
    </header>
    <nav id="mobile-menu" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Navegação mobile">{floors.map(f => <a key={f.id} href={`#${f.id}`} onClick={() => setOpen(false)}>{f.number} · {f.label}</a>)}</nav>
  </>;
}

export function Elevator({ active, progress }: { active: string; progress: number }) {
  const floor = floors.find(x => x.id === active) ?? floors[0];
  const progressStyle = { "--progress": `${progress}%` } as CSSProperties;
  return <aside className="elevator" style={progressStyle} aria-label={`Elevador: ${floor.label}, andar ${floor.number}`}>
    <div className="elevator-display"><span>{floor.number}</span><small>{floor.label}</small></div>
    <div className="elevator-track"><i style={{ height: `${progress}%` }} /><b style={{ top: `${progress}%` }}>◆</b></div>
    <div className="elevator-buttons" aria-hidden="true">{floors.map(x => <span key={x.id} className={x.id === active ? "lit" : ""} />)}</div>
  </aside>;
}

export function useScrollFloor() {
  const [active, setActive] = useState("inicio");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const sections = floors.map(f => document.getElementById(f.id)).filter(Boolean) as HTMLElement[];
      const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= innerHeight * .42);
      if (current) setActive(current.id);
      const available = document.documentElement.scrollHeight - innerHeight;
      setProgress(available > 0 ? Math.min(100, scrollY / available * 100) : 0);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);
  return { active, progress };
}