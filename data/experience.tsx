export type Experience = {
  role: string;
  organisation: string;
  context?: string;
  period: string;
  description: string;
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Product Designer",
    organisation: "PLUS",
    period: "May 2026 – Present",
    description: "Placeholder description.",
    current: true,
  },
  {
    role: "Chief Product Officer",
    organisation: "LuteaSense",
    context: "Course project turned startup",
    period: "January 2026 – May 2026",
    description: "Placeholder description.",
  },
  {
    role: "Product Manager",
    organisation: "ARM Institute",
    context: "MHCI Capstone",
    period: "January 2026 – July 2026",
    description: "Placeholder description.",
  },
  {
    role: "Research Analyst",
    organisation: "BNY",
    context: "Measuring Social industry-sponsored project",
    period: "January 2026 – May 2026",
    description: "Placeholder description.",
  },
  {
    role: "Product Designer & Strategist",
    organisation: "Precision Health",
    context: "CMU Corporate Startup Lab",
    period: "August 2025 – December 2025",
    description: "Placeholder description.",
  },
  {
    role: "UX Designer",
    organisation: "University of Bristol",
    context: "MSc Dissertation",
    period: "May 2023 – September 2023",
    description: "Placeholder description.",
  },
  {
    role: "Dentist, Clinical Leader & Service Designer",
    organisation: "NHS",
    period: "September 2016 – July 2025",
    description: "Placeholder description.",
  },
];
