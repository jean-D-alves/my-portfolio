import Link from "next/link";
import Image from "next/image";
import { projects } from "@/src/data/projects";
import BackBar from "@/src/Components/BackBar";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#171717] px-6 py-5">
      <BackBar name="My projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block rounded-xl overflow-hidden border border-white/10 hover:border-[#EF4444]/50 transition-colors"
          >
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
