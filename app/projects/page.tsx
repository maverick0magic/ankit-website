import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects | Ankit Govil" };

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted max-w-2xl">
          Things I&apos;ve built at the intersection of AI and product.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
