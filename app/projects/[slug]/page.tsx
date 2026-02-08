import { notFound } from "next/navigation";
import Link from "next/link";
import { getRenderedContent, getAllContent } from "@/lib/mdx";

export function generateStaticParams() {
  return getAllContent("projects").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getRenderedContent("projects", slug);
  if (!post) return { title: "Not Found" };
  return { title: `${post.frontmatter.title} | Ankit Govil` };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getRenderedContent("projects", slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/projects" className="text-sm text-primary hover:text-primary-hover transition-colors mb-8 inline-block">
        &larr; Back to Projects
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
      <p className="text-muted mb-8">{post.frontmatter.summary}</p>

      <div className="mdx-content" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
