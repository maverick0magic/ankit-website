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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Hey, I&apos;m <span className="gradient-text">Ankit Govil</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-foreground mb-6">
            I build AI platforms and developer ecosystems.
          </p>
          <p className="text-lg text-muted max-w-2xl mb-3">
            Right now I&apos;m at <span className="text-foreground">Zoom</span>, leading Chat AI &amp; Agent Platform &mdash; figuring out how
            agents should work across a product used by hundreds of millions of people.
          </p>
          <p className="text-lg text-muted max-w-2xl mb-3">
            Before that I created the <span className="text-foreground">Teams AI SDK at Microsoft</span> &mdash; took it from nothing
            to 10K+ developers and a Satya Nadella keynote. I&apos;ve also built a mobile
            app store for 270M users, worked at startups, and started my own company.
          </p>
          <p className="text-lg text-muted max-w-2xl mb-10">
            I like hard problems, opinionated tools, and shipping things that work.
          </p>
          <div className="mb-10">
            <a
              href="https://github.com/microsoft/teams-sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              <span>&#8599;</span>
              Proof: Teams SDK on GitHub
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary-hover text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              Projects
            </Link>
            <Link
              href="/thoughts"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-card-border text-foreground font-medium transition-all hover:bg-card-bg hover:scale-105"
            >
              Ideas
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-card-border text-foreground font-medium transition-all hover:bg-card-bg hover:scale-105"
            >
              My Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
