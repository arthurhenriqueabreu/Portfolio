export type Project = {
  slug: string;
  room: string;
  name: string;
  subtitle?: string;
  category: string[];
  status: string;
  shortDescription: string;
  context: string;
  solution: string;
  features: string[];
  technologies: string[];
  featuredTechnologies: string[];
  participation: string[];
  image: string;
  imageAlt: string;
  githubUrl: string | null;
  demoUrl: string | null;
  caseStudyUrl: string | null;
  isPrivate: boolean;
  privacyLabel?: string;
  disclaimer?: string;
};

export type Floor = {
  id: string;
  number: string;
  label: string;
  navLabel: string;
};