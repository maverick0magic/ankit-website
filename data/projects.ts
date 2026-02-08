export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: "live" | "in-progress" | "concept";
}

export const projects: Project[] = [
  {
    slug: "zoom-chatbot-assistant",
    title: "Zoom Chatbot Assistant",
    description: "AI-powered Team Chat bot that integrates with Zoom's platform to provide intelligent responses and automate workflows.",
    tags: ["Chatbot", "Zoom API", "AI Agent"],
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
