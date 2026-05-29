export type Experience = {
  role: string;
  organisation: string;
  year: string;
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Master of Human-Computer Interaction",
    organisation: "Carnegie Mellon University",
    year: "2025 — Present",
    current: true,
  },
  {
    role: "UX Designer",
    organisation: "HealthTech Studio",
    year: "2023 — 2024",
  },
  {
    role: "Product Design Intern",
    organisation: "Northwind Digital",
    year: "2022",
  },
  {
    role: "B.A. Design & Cognitive Science",
    organisation: "University of California, Berkeley",
    year: "2018 — 2022",
  },
];
