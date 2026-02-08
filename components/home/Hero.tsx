import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Hey, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Ankit Govil</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-foreground mb-6">
            I build AI and agent platforms from zero to scale.
          </p>
          <p className="text-lg text-muted max-w-2xl mb-3">
            Currently leading <span className="text-foreground">Chat AI &amp; Agent Platform at Zoom</span> &mdash;
            rethinking how agents are built, distributed, and governed across the ecosystem.
          </p>
          <p className="text-lg text-muted max-w-2xl mb-3">
            I build AI platforms that win developer ecosystems through fast time-to-first-agent,
            enterprise-grade governance, and keynote-worthy narratives.
          </p>
          <p className="text-lg text-muted max-w-2xl mb-10">
            Previously created the <span className="text-foreground">Teams AI SDK at Microsoft</span> (0 &rarr; 10K+ developers, Satya Nadella keynote).
            15 years across Zoom, Microsoft, startups, and founding my own company.
          </p>

          {/* Key stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-2xl font-bold gradient-text">10K+</div>
              <div className="text-xs text-muted mt-0.5">Developers Onboarded</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">150+</div>
              <div className="text-xs text-muted mt-0.5">Production Partners</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">5M+</div>
              <div className="text-xs text-muted mt-0.5">Incremental MAU</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">15yr</div>
              <div className="text-xs text-muted mt-0.5">Product & Engineering</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary-hover text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              View Resume
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-card-border text-foreground font-medium transition-all hover:bg-card-bg hover:scale-105"
            >
              AI Agent Learnings
            </Link>
            <Link
              href="/toolkit"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent text-accent font-medium transition-all hover:bg-accent/10 hover:scale-105"
            >
              AI Toolkit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
