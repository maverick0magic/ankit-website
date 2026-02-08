import Link from "next/link";
import { MDXPost } from "@/lib/mdx";

export default function PostCard({ post }: { post: MDXPost }) {
  return (
    <Link href={`/thoughts/${post.slug}`}>
      <div className="card-glow bg-card-bg border border-card-border rounded-xl p-5 h-full flex flex-col transition-all hover:-translate-y-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-muted">{post.frontmatter.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{post.frontmatter.title}</h3>
        <p className="text-sm text-muted flex-1">{post.frontmatter.summary}</p>
        {post.frontmatter.tags && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {post.frontmatter.tags.map((tag: string) => (
              <span key={tag} className="text-xs text-muted bg-background px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
