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
    company: "Microsoft",
    location: "Seattle, WA",
    roles: [
      {
        title: "Senior Product Manager, Teams AI Platform",
        period: "May 2022 – Present",
        highlights: [
          "Own end-to-end product strategy for Teams AI extensibility — the platform layer that enables every Copilot, AI bot, and agentic experience across Microsoft 365 — influencing cross-BU roadmaps with Azure AI, Microsoft Graph, and the Copilot Studio org.",
          "Created and shipped the Teams AI Library (v1 & v2), the foundational SDK for building Copilot agents in JS, C#, and Python — driving adoption from 0 to 10K+ developers and 150+ production partners in under 12 months.",
          "Defined the GTM strategy for third-party AI agents on Teams, unlocking millions of net-new monthly active users and establishing Teams as the primary distribution surface for Copilot partner ecosystem.",
          "Integrated Azure OpenAI capabilities — RAG, persistent memory, compliance controls, and multi-agent orchestration — into the Teams platform, directly shaping how Microsoft delivers agentic AI at enterprise scale.",
          "Reduced developer time-to-first-agent from days to under 30 minutes by designing CLI scaffolding, opinionated templates, and streamlined auth flows — a key factor in winning platform adoption over competing ecosystems.",
          "Defined the product vision featured in Satya Nadella's keynote and Microsoft Build / Ignite mainstage demos — translating technical platform capabilities into a narrative that secured executive sponsorship and cross-org investment.",
        ],
      },
      {
        title: "Senior Product Manager, Teams Mobile Platform",
        period: "April 2019 – August 2022",
        highlights: [
          "Owned app acquisition and distribution strategy for Teams Mobile (iOS & Android), building the end-to-end experience for 3P, 1P, and LOB app discovery, installation, and engagement across 270M+ monthly active users.",
          "Designed and shipped the mobile app store experience — in-app search, contextual recommendations, and mobile-first install flows for frontline and EDU personas — driving 5M+ incremental MAU and creating a new platform revenue channel.",
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
        title: "Product Manager — Belong | Ezetap (Bengaluru)",
        period: "2014 – 2018",
        highlights: [
          "Built and launched an AI-driven talent matching SaaS platform from scratch, securing $0.6M ARR from enterprise clients (Ola, Amazon, Uber) and validating algorithmic matchmaking for passive candidates at scale.",
          "Led ARPU expansion at Ezetap through SMB discovery and new service rollouts in tier 2/3 cities, delivering 2x ARPU growth within one release cycle.",
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
    skills: ["JavaScript / TypeScript", "C# / Python", "API & Platform Design", "Distributed Systems", "Mobile Platforms (iOS/Android)", "Azure / Cloud Architecture"],
  },
  {
    category: "Leadership",
    skills: ["20+ Person Cross-functional Teams", "Executive Stakeholder Alignment", "Cross-BU Strategy & Roadmaps", "Developer Advocacy at Scale", "Keynote-level Storytelling", "Startup to Enterprise Range"],
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
  "Product leader who builds AI platforms from zero to scale. At Microsoft, I own the Teams AI extensibility platform — the SDK, developer experience, and partner ecosystem that powers every Copilot agent across M365. I drive cross-BU strategy with Azure AI and Graph, lead 20+ person teams, and have shipped products featured in Satya Nadella's keynotes. Previously: 0-to-1 SaaS at startups, founding engineer. BITS Pilani CS + Economics.";
