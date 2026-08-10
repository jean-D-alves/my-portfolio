export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  image: string;
  link?: string;
  repo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "Aitto-branding",
    title: "Aitto",
    description: "Portfolio e chat de conversa",
    longDescription:
      "Site institucional e chat de conversa. Tem foco em demonstrar os trabalhos ja feitos e um chat em tempo real para conversa com cliente",
    stack: ["html", "css", "Javascript", "Node.js", "Express"],
    image: "/projects/Aitto.png",
    link: "https://aitto-branding.netlify.app",
    featured: true,
  },
  {
    slug: "alfa-artes",
    title: "Alfa & Artes",
    description: "Site institucional para escola de artes",
    longDescription:
      "Landnpage de uma empresa local. com foco em redirecionar para o WhatsApp e demonstrar os serviços",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/alfa-artes.png",
    link: "https://alfa-artes.vercel.app",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
