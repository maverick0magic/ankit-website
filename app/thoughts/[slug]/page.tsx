import { notFound } from "next/navigation";
import Link from "next/link";
import { getRenderedContent, getAllContent } from "@/lib/mdx";

export function generateStaticParams() {
  return getAllContent("thoughts").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getRenderedContent("thoughts", slug);
  if (!post) return { title: "Not Found" };
  return { title: `${post.frontmatter.title} | Ankit Govil` };
}

export default async function ThoughtPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getRenderedContent("thoughts", slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/thoughts" className="text-sm text-primary hover:text-primary-hover transition-colors mb-8 inline-block">
        &larr; Back to Thoughts
      </Link>

      <div className="mb-8">
        <span className="text-sm text-muted">{post.frontmatter.date}</span>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">{post.frontmatter.title}</h1>
        <p className="text-muted">{post.frontmatter.summary}</p>
      </div>

      <div className="mdx-content" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
