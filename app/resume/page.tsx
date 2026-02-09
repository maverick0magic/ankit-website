import { experiences, skillCategories, education, highlight, flagshipWins, proofPoints } from "@/data/resume";

export const metadata = { title: "My Story | Ankit Govil" };

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-1">My Story</h1>
          <p className="text-muted text-sm">Seattle, WA</p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg border border-primary text-primary text-sm hover:bg-primary/10 transition-colors"
        >
          Download PDF
        </a>
      </div>

      {/* Highlight */}
      <div className="mb-12 p-5 bg-card-bg border border-card-border rounded-xl">
        <p className="text-muted leading-relaxed">{highlight}</p>
      </div>

      {/* Flagship Wins */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-card-border">Flagship Wins</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {flagshipWins.map((win) => (
            <div key={win.label} className="p-5 bg-card-bg border border-card-border rounded-xl">
              <div className="text-2xl font-bold gradient-text mb-1">{win.metric}</div>
              <div className="text-sm font-medium text-foreground mb-2">{win.label}</div>
              <p className="text-xs text-muted leading-relaxed">{win.description}</p>
            </div>
          ))}
        </div>

        {/* Proof Points */}
        <div className="flex flex-wrap gap-2 mt-4">
          {proofPoints.map((point) => (
            <a
              key={point.label}
              href={point.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              <span>&#8599;</span>
              {point.label}
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-card-border">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
                {exp.location && <span className="text-sm text-muted">{exp.location}</span>}
              </div>
              <div className="space-y-6">
                {exp.roles.map((role, j) => (
                  <div key={j} className="relative pl-6 border-l-2 border-card-border">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                    <div className="mb-2">
                      <h4 className="font-medium text-foreground">{role.title}</h4>
                      <span className="text-sm text-muted">{role.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {role.highlights.map((h, k) => (
                        <li key={k} className="text-sm text-muted flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-xs shrink-0">&#9679;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-card-border">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="p-4 bg-card-bg border border-card-border rounded-xl">
              <h3 className="font-medium text-primary mb-3">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="text-xs px-2.5 py-1 bg-background rounded text-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-card-border">Education</h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="p-4 bg-card-bg border border-card-border rounded-xl">
              <h3 className="font-semibold text-foreground">{edu.institution}</h3>
              {edu.location && <p className="text-sm text-muted">{edu.location}</p>}
              <p className="text-sm text-primary mt-1">{edu.degree}</p>
              <p className="text-xs text-muted mt-1">{edu.period} &middot; {edu.gpa}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile download */}
      <div className="sm:hidden mt-10">
        <a
          href="/resume.pdf"
          download
          className="block text-center w-full py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
