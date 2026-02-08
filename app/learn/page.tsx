import TopicCard from "@/components/learn/TopicCard";
import { rookieTopics, advancedTopics } from "@/data/learn";

export const metadata = { title: "AI Agent Learnings | Ankit Govil" };

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">AI Agent Learnings</h1>
        <p className="text-lg text-muted max-w-2xl">
          From fundamentals to production-grade systems. Start with the basics or dive into advanced architecture patterns.
        </p>
      </div>

      {/* Rookie Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold">Getting Started</h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rookie-green/10 text-rookie-green border border-rookie-green/30">
            Rookie
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rookieTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </div>

      {/* Advanced Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold">Going Deeper</h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-advanced-purple/10 text-advanced-purple border border-advanced-purple/30">
            Advanced
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advancedTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
}
