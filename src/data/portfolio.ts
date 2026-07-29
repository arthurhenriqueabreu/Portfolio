import type { Floor } from "@/src/types";

export const profile = {
  name: "Arthur Henrique Abreu",
  role: "Desenvolvedor em formação",
  subtitle: "Estudante de Análise e Desenvolvimento de Sistemas, criando aplicações web, automações e ferramentas internas com o apoio de inteligência artificial.",
  about: "Sou estudante de Análise e Desenvolvimento de Sistemas no Senac e tenho experiência prática na criação de aplicações web, automações e ferramentas internas utilizadas em processos reais. Utilizo inteligência artificial como ferramenta de desenvolvimento, participando da definição dos requisitos, planejamento dos fluxos, execução, testes, validação e evolução das soluções. Tenho interesse em desenvolvimento web, automação de processos, inteligência artificial aplicada e criação de produtos digitais.",
  goal: "Busco uma oportunidade de estágio ou posição inicial em desenvolvimento de software, onde eu possa fortalecer minha base técnica e contribuir com a criação de soluções reais.",
};

export const floors: Floor[] = [
  { id: "inicio", number: "09", label: "Cobertura", navLabel: "Início" },
  { id: "sobre", number: "08", label: "Recepção", navLabel: "Sobre" },
  { id: "tecnologias", number: "07", label: "Laboratório tech", navLabel: "Tecnologias" },
  { id: "projetos", number: "06", label: "Quartos de projetos", navLabel: "Projetos" },
  { id: "experiencia", number: "05", label: "Escritório", navLabel: "Experiência" },
  { id: "formacao", number: "04", label: "Sala de estudos", navLabel: "Formação" },
  { id: "certificacoes", number: "03", label: "Sala de troféus", navLabel: "Certificações" },
  { id: "contato", number: "02", label: "Comunicação", navLabel: "Contato" },
];

export const technologyGroups = {
  "Front-end": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS", "Three.js"],
  "Back-end e aplicações": ["Node.js", "Express", "Python", "APIs REST", "Aplicações desktop"],
  "Automação e inteligência artificial": ["Playwright", "Vosk", "OpenCV", "Ollama", "Gemini", "Tavily", "Automação de navegador", "Reconhecimento de voz", "Integração com APIs"],
  "Dados e validação": ["SQLite", "MySQL", "Zod", "Sequelize"],
  Ferramentas: ["Git", "GitHub", "VS Code", "Postman", "Figma", "XAMPP", "Windows", "Linux"],
  Qualidade: ["Testes automatizados", "Validação de dados", "Logs e diagnóstico de erros", "Testes manuais de interface e fluxo"],
};

export const experience = {
  title: "Assistente técnico, comercial e de automação",
  company: "Mega Notes — Joinville/SC",
  period: "2025 — atual",
  activities: [
    "Diagnóstico e manutenção preventiva de notebooks",
    "Formatação e configuração de sistemas",
    "Preparação de equipamentos para venda",
    "Pesquisa e organização de especificações técnicas",
    "Desenvolvimento de ferramentas internas",
    "Automação de processos repetitivos",
    "Criação de materiais para redes sociais",
    "Cadastro e apresentação de produtos",
    "Atendimento e suporte ao cliente",
    "Testes e validação de ferramentas utilizadas pela empresa",
  ],
};

export const education = {
  course: "Análise e Desenvolvimento de Sistemas",
  institution: "Senac Santa Catarina",
  phase: "3ª fase",
  description: "Formação voltada ao desenvolvimento de software, banco de dados, APIs, testes, engenharia de requisitos, padrões de projeto e construção de soluções digitais.",
};