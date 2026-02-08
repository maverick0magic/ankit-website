import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Ankit Govil. Built with Next.js.
          </div>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/learn" className="hover:text-foreground transition-colors">Learn</Link>
            <Link href="/toolkit" className="hover:text-foreground transition-colors">AI Toolkit</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
            <Link href="/thoughts" className="hover:text-foreground transition-colors">Thoughts</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
