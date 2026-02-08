export interface Tool {
  slug: string;
  title: string;
  description: string;
  category: "evaluation" | "planning";
  icon: string;
}

export const tools: Tool[] = [
  {
    slug: "ai-readiness",
    title: "AI Readiness Assessment",
    description: "Score your org across 5 dimensions: data maturity, technical infrastructure, team skills, use case clarity, and risk tolerance.",
    category: "evaluation",
    icon: "📊",
  },
  {
    slug: "build-vs-buy",
    title: "Build vs Buy AI",
    description: "Answer questions on customization, data sensitivity, team capability, timeline, and budget to get a scored recommendation.",
    category: "evaluation",
    icon: "⚖️",
  },
  {
    slug: "llm-selector",
    title: "LLM Model Selector",
    description: "Compare models across cost, latency, context window, and capability. Filter by use case to get ranked recommendations.",
    category: "evaluation",
    icon: "🔍",
  },
  {
    slug: "use-case-prioritizer",
    title: "AI Use Case Prioritizer",
    description: "Add potential AI use cases, score each on impact, feasibility, data availability, alignment, and risk. Auto-rank with export.",
    category: "evaluation",
    icon: "📋",
  },
  {
    slug: "agent-architecture-planner",
    title: "Agent Architecture Planner",
    description: "Select agent patterns, define tools, data sources, and guardrails. Export an architecture summary document.",
    category: "planning",
    icon: "🏗️",
  },
  {
    slug: "ai-product-spec",
    title: "AI Product Spec Generator",
    description: "Guided form to create an AI product spec with problem statement, AI approach, model requirements, and success metrics.",
    category: "planning",
    icon: "📝",
  },
];

export const evaluationTools = tools.filter((t) => t.category === "evaluation");
export const planningTools = tools.filter((t) => t.category === "planning");

export interface Template {
  title: string;
  description: string;
  filename: string;
}

export const templates: Template[] = [
  {
    title: "AI Product PRD Template",
    description: "Complete product requirements document template for AI features",
    filename: "ai-product-prd-template.md",
  },
  {
    title: "LLM Evaluation Rubric",
    description: "Structured rubric for evaluating and comparing LLM models",
    filename: "llm-evaluation-rubric.md",
  },
  {
    title: "Agent Design Doc Template",
    description: "Architecture and design document template for AI agents",
    filename: "agent-design-doc-template.md",
  },
  {
    title: "AI Risk Assessment Checklist",
    description: "Comprehensive checklist for identifying and mitigating AI risks",
    filename: "ai-risk-assessment-checklist.md",
  },
];
