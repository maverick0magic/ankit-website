export interface Read {
  title: string;
  author: string;
  type: "book" | "article";
  url?: string;
  description: string;
  dateAdded: string; // ISO date string
}

export const reads: Read[] = [
  {
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    type: "book",
    url: "https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205",
    description:
      "The most honest book about building companies. No sugarcoating — just real lessons from someone who actually did it.",
    dateAdded: "2025-02-01",
  },
  {
    title: "Inspired: How to Create Tech Products Customers Love",
    author: "Marty Cagan",
    type: "book",
    url: "https://www.amazon.com/INSPIRED-Create-Tech-Products-Customers/dp/1119387507",
    description:
      "The definitive guide to modern product management. Changed how I think about discovery vs delivery.",
    dateAdded: "2025-01-25",
  },
  {
    title: "Do Things That Don't Scale",
    author: "Paul Graham",
    type: "article",
    url: "https://paulgraham.com/ds.html",
    description:
      "The essay I come back to most. A reminder that the best products start with obsessive, manual effort.",
    dateAdded: "2025-01-18",
  },
  {
    title: "An Elegant Puzzle: Systems of Engineering Management",
    author: "Will Larson",
    type: "book",
    url: "https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management/dp/1732265186",
    description:
      "A systems-thinking approach to engineering leadership. Great frameworks for sizing teams, managing technical debt, and organizational design.",
    dateAdded: "2025-01-10",
  },
  {
    title: "How to Do Great Work",
    author: "Paul Graham",
    type: "article",
    url: "https://paulgraham.com/greatwork.html",
    description:
      "Paul Graham's synthesis on what it takes to do exceptional work in any field. Dense with insight.",
    dateAdded: "2025-01-05",
  },
];
