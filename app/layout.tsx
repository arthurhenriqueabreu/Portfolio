import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  return {
    metadataBase: base,
    title: { default: "Arthur Henrique Abreu | Desenvolvedor", template: "%s | Arthur Henrique Abreu" },
    description: "Portfólio de Arthur Henrique Abreu, estudante de ADS e desenvolvedor em formação.",
    openGraph: { title: "Hotel Arthur — Portfólio", description: "Faça check-in em um portfólio pixel art sobre código, projetos e aprendizado.", type: "website", locale: "pt_BR", images: [{ url: new URL("/og.png", base).toString(), width: 1672, height: 941, alt: "Hotel Arthur, portfólio de desenvolvimento" }] },
    twitter: { card: "summary_large_image", images: [new URL("/og.png", base).toString()] },
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  };
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
