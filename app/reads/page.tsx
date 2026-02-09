import { reads } from "@/data/reads";

export const metadata = { title: "Fav Reads | Ankit Govil" };

export default function ReadsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Fav Reads</h1>
      <p className="text-muted mb-10">
        Books and articles I keep coming back to. Updated weekly-ish.
      </p>

      <div className="space-y-6">
        {reads.map((read) => (
          <div
            key={read.title}
            className="p-5 bg-card-bg border border-card-border rounded-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                {read.url ? (
                  <a
                    href={read.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    {read.title} <span className="text-xs">&#8599;</span>
                  </a>
                ) : (
                  <h2 className="text-lg font-semibold text-foreground">
                    {read.title}
                  </h2>
                )}
                <p className="text-sm text-muted mt-0.5">
                  {read.author}
                </p>
              </div>
              <span className="shrink-0 text-xs px-2.5 py-1 rounded-full border border-card-border text-muted">
                {read.type === "book" ? "Book" : "Article"}
              </span>
            </div>
            <p className="text-sm text-muted mt-3 leading-relaxed">
              {read.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
