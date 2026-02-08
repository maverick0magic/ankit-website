import ToolCard from "@/components/toolkit/ToolCard";
import { evaluationTools, planningTools, templates } from "@/data/toolkit";

export const metadata = { title: "AI Product Builder Toolkit | Ankit Govil" };

export default function ToolkitPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">AI Product Builder Toolkit</h1>
        <p className="text-lg text-muted max-w-2xl">
          Interactive tools and frameworks to help you make better AI product decisions.
        </p>
      </div>

      {/* Evaluation Frameworks */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold">Evaluation Frameworks</h2>
          <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary">Interactive</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {evaluationTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>

      {/* Planning Tools */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold">Planning Tools</h2>
          <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent">Builders</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {planningTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>

      {/* Templates */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Downloadable Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {templates.map((template) => (
            <a
              key={template.filename}
              href={`/templates/${template.filename}`}
              download
              className="card-glow bg-card-bg border border-card-border rounded-xl p-5 flex items-start gap-4 transition-all hover:-translate-y-1"
            >
              <div className="text-2xl">📄</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{template.title}</h3>
                <p className="text-sm text-muted">{template.description}</p>
                <span className="text-xs text-primary mt-2 inline-block">Download Markdown &darr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
