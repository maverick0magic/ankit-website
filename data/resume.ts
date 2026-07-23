export interface FlagshipWin {
  metric: string;
  label: string;
  description: string;
}

export const flagshipWins: FlagshipWin[] = [
  {
    metric: "0 → 10K+",
    label: "Developers",
    description: "Created the Teams AI SDK, the foundational layer for every Copilot agent on M365.",
  },
  {
    metric: "5M+",
    label: "Incremental MAU",
    description: "Designed mobile app store for Teams, creating a new platform distribution channel.",
  },
  {
    metric: "Satya Nadella",
    label: "Keynote",
    description: "Defined the product vision featured at Build/Ignite mainstage, securing cross-org investment.",
  },
];

export interface ProofPoint {
  label: string;
  url: string;
}

export const proofPoints: ProofPoint[] = [
  {
    label: "Teams SDK — GitHub",
    url: "https://github.com/microsoft/teams-sdk",
  },
  {
    label: "Teams AI Documentation",
    url: "https://learn.microsoft.com/en-us/microsoftteams/platform/bots/how-to/teams-conversational-ai/teams-conversation-ai-overview",
  },
];

export interface Experience {
  company: string;
  location: string;
  roles: {
    title: string;
    period: string;
    highlights: string[];
  }[];
}

export const experiences: Experience[] = [
  {
    company: "Zoom",
    location: "Seattle, WA",
    roles: [
      {
        title: "Product Lead, Agent Platform",
        period: "July 2025 – Present",
        highlights: [
          "Lead a 40-engineer organization building the app and agent extensibility platform for Zoom Workplace — rethinking how 1P, 2P, and 3P agents are built, distributed, and experienced across the Zoom ecosystem.",
          "Chose to rebuild the developer platform around an agent-first extensibility model rather than patching the legacy bot framework — re-engaging the developer community with modern integration patterns.",
          "Personally built and shipped an autonomous PM Report & Analytics agent, onboarding 10 PMs and saving each 10+ hours of manual reporting — a hands-on proof point for the platform's own developer experience.",
          "Own the built-in Zoom Workplace agent and drive cross-functional alignment across Zoom's AI, platform, and chat teams to ship an integrated agent experience spanning 1P AI features, partner-built agents, and custom enterprise workflows.",
          "Grew agent platform adoption 20% week-over-week since launch.",
        ],
      },
    ],
  },
  {
    company: "Microsoft",
    location: "Seattle, WA",
    roles: [
      {
        title: "Senior Product Manager, Teams AI Platform",
        period: "May 2022 – July 2025",
        highlights: [
          "Owned end-to-end product strategy for Teams AI extensibility — the platform layer that enables every Copilot, AI bot, and agentic experience across Microsoft 365 — influencing cross-BU roadmaps with Azure AI, Microsoft Graph, and the Copilot Studio org.",
          "Bet on an opinionated SDK with CLI scaffolding over a flexible-but-complex framework → reduced time-to-first-agent from days to 30 min → won 10K+ developers and 150+ production partners over competing ecosystems in under 12 months.",
          "Defined the GTM strategy for third-party AI agents on Teams, unlocking millions of net-new monthly active users and establishing Teams as the primary distribution surface for Copilot partner ecosystem.",
          "Made the call to integrate Azure OpenAI primitives (RAG, memory, guardrails) directly into the SDK rather than leaving integration to developers → became the default path for enterprise agentic AI on M365.",
          "Designed CLI scaffolding, opinionated templates, and streamlined auth flows that reduced developer time-to-first-agent from days to under 30 minutes — a key factor in winning platform adoption over competing ecosystems.",
          "Pitched and secured the Satya Nadella keynote slot by reframing the SDK from a developer tool into a platform narrative → unlocked cross-org executive sponsorship and multi-BU investment.",
        ],
      },
      {
        title: "Senior Product Manager, Teams Mobile Platform",
        period: "April 2019 – August 2022",
        highlights: [
          "Owned app acquisition and distribution strategy for Teams Mobile (iOS & Android), building the end-to-end experience for 3P, 1P, and LOB app discovery, installation, and engagement across 270M+ monthly active users.",
          "Prioritized mobile-first app discovery for frontline/EDU personas over enterprise-only flows → drove 5M+ incremental MAU and created a new platform revenue channel.",
          "Led cross-platform app strategy spanning mobile, desktop, and web, aligning 20+ engineers and 3 design pods to deliver a unified extensibility experience.",
        ],
      },
      {
        title: "Product Manager II, Microsoft 365 Admin",
        period: "June 2018 – March 2019",
        highlights: [
          "Built the centralized app management portal for M365 Admin Center from concept to launch — unifying administration of Office add-ins, Teams apps, and SPFX solutions across 10+ partner teams.",
          "Shipped V1 in 2 quarters with 20K global admin MAU and 60K monthly app installations, earning top-quartile CSAT scores and becoming the default admin surface for enterprise app governance.",
        ],
      },
    ],
  },
  {
    company: "Earlier Career",
    location: "",
    roles: [
      {
        title: "Product Manager (0-to-1) — Belong.co (Bengaluru)",
        period: "May 2015 – May 2018",
        highlights: [
          "Built and launched an HRMS/Applicant Tracking SaaS platform with algorithmic matchmaking for passive candidates, securing $0.6M ARR from enterprise clients including Ola, Amazon, and Uber.",
        ],
      },
      {
        title: "Product Manager — Ezetap (Bengaluru)",
        period: "September 2014 – May 2015",
        highlights: [
          "Led SMB discovery and rolled out new revenue lines (mobile recharges, ticket bookings) in tier 2/3 cities, driving a 2x ARPU increase within one release cycle.",
        ],
      },
      {
        title: "Product Developer & Founder — Startups | Oracle",
        period: "2010 – 2014",
        highlights: [
          "Founded a startup and led full-stack engineering across multiple early-stage ventures — architecting distributed systems, microservices, and scalable backend infrastructure from zero.",
        ],
      },
    ],
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Product & Strategy",
    skills: ["0-to-1 Product Creation", "Platform Strategy", "Go-to-Market", "Developer Experience", "Ecosystem & Partner Growth", "Cross-BU Influence"],
  },
  {
    category: "AI & ML",
    skills: ["Conversational AI", "Copilot / Agent Architecture", "RAG & Retrieval Systems", "LLM Integration & Orchestration", "Prompt Engineering", "AI SDK & Framework Design"],
  },
  {
    category: "Technical",
    skills: ["JavaScript / TypeScript", "C# / Python", "API & Platform Design", "Distributed Systems", "Mobile Platforms (iOS/Android)", "Cloud Architecture"],
  },
  {
    category: "Leadership",
    skills: ["40+ Engineer Org Leadership", "Executive Stakeholder Alignment", "Cross-BU Strategy & Roadmaps", "Developer Advocacy at Scale", "Keynote-level Storytelling", "Startup to Enterprise Range"],
  },
];

export const education = [
  {
    institution: "Birla Institute of Technology and Science (BITS Pilani)",
    location: "Pilani, India",
    degree: "B.E. (Hons) Computer Science & M.S. Economics — Integrated Dual Degree",
    period: "Graduated June 2010",
    gpa: "3.7 GPA",
  },
];

export const highlight =
  "Product leader who builds AI and agent platforms from zero to scale. At Zoom, I lead a 40-engineer organization building the Agent Platform — rethinking how 1P, 2P, and 3P agents are built and experienced across the ecosystem. Previously at Microsoft, I created and shipped the Teams AI SDK, onboarded 10K+ developers, and delivered products featured in Satya Nadella's keynotes. 15 years across FAANG, startups, and founding my own company. BITS Pilani CS + Economics.";
