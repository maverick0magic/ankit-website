export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: "live" | "in-progress" | "concept";
}

export const projects: Project[] = [
  {
    slug: "teams-ai-sdk",
    title: "Teams AI SDK",
    description: "Created the foundational SDK for building Copilot agents on Microsoft 365 — JS, C#, and Python libraries with first-class AI primitives, CLI scaffolding, and Azure OpenAI integration. 0 → 10K+ developers in under 12 months.",
    tags: ["Platform", "SDK", "AI Agents", "Microsoft", "Developer Ecosystem"],
    status: "live",
  },
  {
    slug: "zoom-chatbot-assistant",
    title: "Zoom Chatbot Assistant",
    description: "AI-powered Team Chat bot built with Zoom's Rivet SDK and OpenAI — featuring streaming responses, interactive feedback, and slash commands. Built as part of driving Zoom's Chat AI platform.",
    tags: ["Zoom Rivet SDK", "OpenAI", "AI Agent", "Streaming"],
    status: "live",
  },
  {
    slug: "pm-knowledge-engine",
    title: "PM Knowledge Engine",
    description: "Framework extraction system that processes podcast transcripts and articles to build a structured product management knowledge base.",
    tags: ["NLP", "Knowledge Graph", "Product"],
    status: "live",
  },
  {
    slug: "agentic-workflow-builder",
    title: "Agentic Workflow Builder",
    description: "Visual tool for designing and testing multi-agent workflows with drag-and-drop pattern composition.",
    tags: ["Agents", "Visual Builder", "LLM"],
    status: "concept",
  },
];
