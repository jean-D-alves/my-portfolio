import NavBar from "@/src/Components/NavBar";
import Image from "next/image";
import {
  TbSchool,
  TbBriefcase,
  TbLanguage,
  TbExternalLink,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandInstagram,
} from "react-icons/tb";

interface EducationItem {
  title: string;
  meta: string;
  date: string;
}

interface ExperienceItem {
  title: string;
  meta: string;
}

const education: EducationItem[] = [
  {
    title: "O Mercado de trabalho na área de tecnologia",
    meta: "Município de Acari-RN",
    date: "06/2025 – 11/2025",
  },
  {
    title: "Do Zero ao React com Next.js",
    meta: "Udemy",
    date: "10/2025 – 1/2026",
  },
  {
    title: "Curso de TypeScript",
    meta: "Udemy",
    date: "10/2025 – 10/2025",
  },
];

const experience: ExperienceItem[] = [
  {
    title: "Landing page para Alfa & Artes",
    meta: "Site institucional",
  },
  {
    title: "Website para a Aitto",
    meta: "Identidade e branding",
  },
];

const skills: string[] = [
  "Node.js",
  "TypeScript",
  "Next.js",
  "React Native",
  "MySQL",
  "MongoDB",
];

export default function Resume() {
  return (
    <div className="flex flex-col w-full h-full px-10 py-20">
      <NavBar />
      <section className="flex flex-col gap-4">
        <div className="flex flex-col border-2 border-primary rounded-2xl w-full justify-center items-center p-7 gap-3">
          <div className="Photo relative w-40 h-40 border-primary border-2 bg-linear-to-br from-primary to-background bg-bottom rounded-2xl">
            <Image
              src="/Perfil1-NB.png"
              alt="Foto de perfil de Jean Vinícius"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          <h1 className="text-3xl">Jean Vinícius</h1>
          <h2 className="text-2xl text-metadata">Full stack developer</h2>
          <div className="flex items-center gap-2 mt-3 text-xs font-mono text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            disponível para freelance
          </div>
          <hr className="border border-foreground w-full" />
          <div className="flex flex-col gap-4 w-full justify-items-start items-baseline text-center">
            <div className="flex flex-row items-center gap-2">
              <TbBrandInstagram size={25} />
              <a href="https://www.instagram.com/alves._.jean">
                Alves._.jean
              </a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <TbBrandLinkedin size={25} />
              <a href="https://www.linkedin.com/in/jean-vin%C3%ADcius/">
                jean-vinícius
              </a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <TbBrandGithub size={25} />
              <a
                href="https://github.com/jean-d-alves"
                target="_blank"
                rel="noreferrer"
              >
                jean-D-alves
              </a>
            </div>
          </div>
          <button className="flex bg-primary rounded-2xl text-foreground w-full h-12 justify-center items-center hover:opacity-50">
            Download CV
          </button>
        </div>
        <div className="Open-Resumo flex flex-col gap-6">
          <div className="border border-neutral-800 bg-neutral-900 rounded-2xl p-6 font-mono text-sm">
            <p className="pl-4 text-neutral-300">
              I&acute;m a backend developer focused on building reliable APIs
              and services with Node.js, Express, and TypeScript. I work with
              both relational and non-relational databases, adapting the data
              structure to what each project actually needs.
            </p>
            <p className="pl-4 text-neutral-300">
              I also build on the frontend with Next.js and React, and extend
              that into mobile with React Native which lets me take a project
              from the API all the way to the interface, on web and mobile
              alike.
            </p>
            <p className="pl-4 text-neutral-300">
              I&acute;m currently expanding into C# and ASP.NET to broaden my
              range across backend ecosystems.
            </p>
          </div>
        </div>
      </section>
      <div className="Open-Resumo md:col-span-2 flex flex-col gap-10">
        <section>
          <h2 className="font-display text-lg font-bold flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center">
              <TbSchool size={16} className="text-red-400" />
            </span>
            Education
          </h2>
          <div className=" relative pl-6  flex flex-col gap-6">
            {education.map((item, i) => (
              <div key={i} className="relative">
                <p className="font-mono text-sm">
                  <span className="text-primary">edu:</span>{" "}
                  <span className="text-neutral-100">{item.title}</span>
                </p>
                <p className="text-neutral-500 text-xs font-mono mt-1">
                  {item.meta} · {item.date}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className=" font-display text-lg font-bold flex items-center gap-2 mb-6">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center">
              <TbBriefcase size={16} className="text-red-400" />
            </span>
            Work Experience
          </h2>
          <div className="relative pl-6  flex flex-col gap-6">
            {experience.map((item, i) => (
              <div key={i} className="relative">
                <p className="font-mono text-sm">
                  <span className="text-primary">work:</span>{" "}
                  <span className="text-neutral-100">{item.title}</span>
                </p>
                <p className="text-neutral-500 text-xs font-mono mt-1">
                  {item.meta}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="border border-neutral-800 bg-neutral-900 rounded-2xl p-5">
          <h3 className="font-display font-bold flex items-center gap-2 mb-4 text-sm">
            <TbLanguage size={16} className="text-red-400" />
            Languages
          </h3>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-neutral-300">Português</span>
                <span className="text-neutral-500">Nativo</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 flex-1 rounded-full bg-red-500"
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-neutral-300">English</span>
                <span className="text-neutral-500">A2</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 flex-1 rounded-full"
                    style={{
                      backgroundColor: i < 2 ? "#EF4444" : "#2a2a2a",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="border border-neutral-800 bg-neutral-900 rounded-2xl p-5">
          <h3 className="text-xs font-mono text-neutral-500 mb-3">
            $ tech --list
          </h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs font-mono border border-neutral-800 rounded-full px-3 py-1.5 text-neutral-300"
              >
                {s}
              </span>
            ))}

            <span className="text-xs font-mono rounded-full text-primary px-3 py-1.5 border border-dashed">
              C# · learning
            </span>
          </div>
        </section>
        <a
          href="https://github.com/jean-d-alves"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-neutral-800 bg-neutral-900 hover:border-red-500 transition-colors rounded-2xl p-5 flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg flex items-center justify-center">
              <TbBrandGithub size={16} className="text-red-400" />
            </span>
            <div>
              <p className="font-mono text-sm text-neutral-100">jean-D-alves</p>
              <p className="text-xs text-neutral-500">ver repositórios</p>
            </div>
          </div>
          <TbExternalLink
            size={16}
            className="text-neutral-600 group-hover:text-red-400 transition-colors"
          />
        </a>
      </div>
    </div>
  );
}
