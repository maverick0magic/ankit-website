import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    live: "bg-rookie-green/10 text-rookie-green border-rookie-green/30",
    "in-progress": "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
    concept: "bg-primary/10 text-primary border-primary/30",
  };

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="card-glow bg-card-bg border border-card-border rounded-xl p-5 h-full flex flex-col transition-all hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
            {project.status === "in-progress" ? "In Progress" : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
          {project.kind === "work" && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-accent/30 text-accent bg-accent/10">
              Work Highlight
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted flex-1">{project.description}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-muted bg-background px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
