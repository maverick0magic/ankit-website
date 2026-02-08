import Link from "next/link";
import { Tool } from "@/data/toolkit";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={`/toolkit/${tool.slug}`}>
      <div className="card-glow bg-card-bg border border-card-border rounded-xl p-5 h-full flex flex-col transition-all hover:-translate-y-1">
        <div className="text-3xl mb-3">{tool.icon}</div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{tool.title}</h3>
        <p className="text-sm text-muted flex-1">{tool.description}</p>
        <div className="mt-3">
          <span className={`text-xs px-2 py-0.5 rounded ${
            tool.category === "evaluation"
              ? "bg-primary/10 text-primary"
              : "bg-accent/10 text-accent"
          }`}>
            {tool.category === "evaluation" ? "Evaluation" : "Planning"}
          </span>
        </div>
      </div>
    </Link>
  );
}
