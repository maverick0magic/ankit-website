import PostCard from "@/components/thoughts/PostCard";
import { getAllContent } from "@/lib/mdx";

export const metadata = { title: "Thoughts | Ankit Govil" };

export default function ThoughtsPage() {
  const posts = getAllContent("thoughts");

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thoughts</h1>
        <p className="text-lg text-muted max-w-2xl">
          Ideas and reflections on AI product building.
        </p>
      </div>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted text-center py-16">Coming soon.</p>
      )}
    </div>
  );
}
