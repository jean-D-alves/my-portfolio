import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, getProjectBySlug } from "@/src/data/projects";
import BackBar from "@/src/Components/BackBar";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <section className="min-h-screen bg-[#171717] px-6 py-5">
      <BackBar name={project.title}/>
      <div className="max-w-3xl mx-auto">
        <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">
          {project.title}
        </h1>
        <p className="text-gray-300 leading-relaxed">
          {project.longDescription ?? project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-[#EF4444] text-white font-medium hover:opacity-90 transition"
            >
              Ver projeto
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg border border-white/20 text-white hover:bg-white/5 transition"
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </section>
  );
}