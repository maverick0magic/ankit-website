export type Difficulty = "rookie" | "advanced";

export interface LearnTopic {
  slug: string;
  title: string;
  summary: string;
  difficulty: Difficulty;
  readTime: string;
  tags: string[];
}

export const learnTopics: LearnTopic[] = [
  // Rookie Topics
  {
    slug: "what-are-ai-agents",
    title: "What Are AI Agents?",
    summary: "Mental model for autonomous AI systems vs chatbots vs copilots",
    difficulty: "rookie",
    readTime: "8 min",
    tags: ["Fundamentals", "Agents"],
  },
  {
    slug: "prompt-engineering-101",
    title: "Prompt Engineering 101",
    summary: "System prompts, few-shot, chain-of-thought, structured output",
    difficulty: "rookie",
    readTime: "10 min",
    tags: ["Prompting", "Fundamentals"],
  },
  {
    slug: "first-agentic-workflow",
    title: "Your First Agentic Workflow",
    summary: "Building a simple tool-using agent with function calling",
    difficulty: "rookie",
    readTime: "12 min",
    tags: ["Hands-on", "Agents"],
  },
  {
    slug: "ai-assisted-productivity",
    title: "AI-Assisted Productivity",
    summary: "Using agents for writing, research, code review, meeting prep",
    difficulty: "rookie",
    readTime: "7 min",
    tags: ["Productivity", "Use Cases"],
  },
  {
    slug: "llm-limitations",
    title: "Understanding LLM Limitations",
    summary: "Hallucinations, context windows, cost, latency tradeoffs",
    difficulty: "rookie",
    readTime: "9 min",
    tags: ["Fundamentals", "Evaluation"],
  },
  {
    slug: "evaluating-ai-tools",
    title: "Evaluating AI Tools",
    summary: "How to assess AI products as a user and buyer",
    difficulty: "rookie",
    readTime: "8 min",
    tags: ["Evaluation", "Product"],
  },
  // Advanced Topics
  {
    slug: "multi-agent-architectures",
    title: "Multi-Agent Architectures",
    summary: "Orchestrator patterns, agent handoffs, supervisor/worker models",
    difficulty: "advanced",
    readTime: "15 min",
    tags: ["Architecture", "Agents"],
  },
  {
    slug: "building-reliable-agents",
    title: "Building Reliable Agents",
    summary: "Guardrails, error recovery, human-in-the-loop, eval frameworks",
    difficulty: "advanced",
    readTime: "14 min",
    tags: ["Reliability", "Production"],
  },
  {
    slug: "rag-knowledge-systems",
    title: "RAG & Knowledge Systems",
    summary: "Retrieval-augmented generation, vector DBs, chunking strategies",
    difficulty: "advanced",
    readTime: "13 min",
    tags: ["RAG", "Architecture"],
  },
  {
    slug: "agent-memory-state",
    title: "Agent Memory & State",
    summary: "Short-term vs long-term memory, conversation management, persistence",
    difficulty: "advanced",
    readTime: "11 min",
    tags: ["Memory", "Architecture"],
  },
  {
    slug: "scaling-agentic-products",
    title: "Scaling Agentic Products",
    summary: "Cost optimization, caching, routing, model selection at scale",
    difficulty: "advanced",
    readTime: "12 min",
    tags: ["Scale", "Production"],
  },
  {
    slug: "ai-product-metrics",
    title: "AI Product Metrics",
    summary: "Measuring agent quality: task completion, accuracy, latency, user satisfaction",
    difficulty: "advanced",
    readTime: "10 min",
    tags: ["Metrics", "Product"],
  },
];

export const rookieTopics = learnTopics.filter((t) => t.difficulty === "rookie");
export const advancedTopics = learnTopics.filter((t) => t.difficulty === "advanced");
