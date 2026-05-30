export type OverviewSection = {
  type: "overview";
  problem: string;
  solution: string;
};

export type TextBodyParagraph = {
  type: "paragraph";
  content: string;
};

export type TextBodyBullets = {
  type: "bullets";
  intro?: string;
  items: string[];
};

export type TextBodyTwoColumn = {
  type: "two-column";
  columns: Array<{
    heading: string;
    items: string[];
  }>;
};

export type TextSection = {
  type: "text";
  category: string;
  heading: string;
  body: Array<TextBodyParagraph | TextBodyBullets | TextBodyTwoColumn>;
};

export type ImageSection = {
  type: "image";
  src: string;
  alt: string;
  caption: string;
};

export type DeliverablesSection = {
  type: "deliverables";
  heading?: string;
  items: string[];
};

export type CaseStudySection =
  | OverviewSection
  | TextSection
  | ImageSection
  | DeliverablesSection;

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  summary: string;
  tags: string[];
  role: string;
  timeline: string;
  tools: string[];
  context: string;
  thumbnail: string;
  heroImage: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "okuma",
    title: "Okuma",
    subtitle: "Designing for culture and context",
    intro:
      "Existing Type 2 Diabetes apps are not designed for the realities of Nigeria — its infrastructure, its culture, or the collaborative nature of diabetes care there. I designed a culturally grounded prototype that was tested in 13 co-design workshops with 19 participants, directly informing the development of a full mHealth intervention. Co-authored work published at ACM DIS 2025 and ACM AfriCHI 2025.",
    summary: "Digital health tool for Type 2 Diabetes in Nigeria",
    tags: ["UX Research", "Prototyping", "mHealth"],
    role: "UX Designer & Researcher",
    timeline: "5 months (May – Sep 2023)",
    tools: ["Figma", "Miro", "Zoom", "Google Forms"],
    context: "University of Bristol MSc Dissertation",
    thumbnail: "/images/okuma-thumbnail.jpg",
    heroImage: "/images/okuma-hero.jpg",
    sections: [
      {
        type: "overview",
        problem:
          "Existing T2D solutions impose Western design assumptions on Nigerian communities, and none address the patient-caregiver-pharmacist care triad fundamental to diabetes management in Nigeria.",
        solution:
          "A culturally sensitive mobile app prototype supporting collaborative diabetes care in Port Harcourt, Nigeria — tested in 13 co-design workshops with 19 participants and published at ACM DIS 2025 and ACM AfriCHI 2025.",
      },
      {
        type: "text",
        category: "The Challenge",
        heading: "Designing within real constraints",
        body: [
          {
            type: "paragraph",
            content:
              "University restrictions prevented direct access to Port Harcourt users, so every design decision had to be grounded in existing research data and validated through close collaboration with the Nigerian PhD researcher leading the project.",
          },
          {
            type: "paragraph",
            content:
              "I was designing for a cultural context I hadn't experienced, for infrastructure realities I'd never designed around, and for three distinct user groups — each with different needs — who needed to work together within a single app.",
          },
        ],
      },
      {
        type: "text",
        category: "Research",
        heading: "Understanding the landscape",
        body: [
          {
            type: "paragraph",
            content:
              "A scoping review of diabetes mHealth research in Africa and a competitive analysis of 8 existing apps revealed a clear gap: no solution addressed the specific realities of Nigeria, and none had been designed for the patient-caregiver-pharmacist triad.",
          },
          {
            type: "bullets",
            intro:
              "The infrastructure context made this gap even more significant:",
            items: [
              "Only 12.1% of Nigerians experience quality internet services",
              "Just 36% of Nigeria's urban population owns a smartphone",
              "Data costs are high — most existing solutions assumed consistent connectivity",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "/images/okuma-empathy-journey.jpg",
        alt: "Empathy maps and journey maps for patient, caregiver, and pharmacist user groups",
        caption: "Empathy maps and journey maps for each user group",
      },
      {
        type: "text",
        category: "Research",
        heading: "Synthesizing user needs",
        body: [
          {
            type: "paragraph",
            content:
              "Working with interview transcripts and survey data from Port Harcourt users, I built a picture of each user group's needs, frustrations, and goals. Empathy maps surfaced the emotional burden of chronic disease management, while journey maps identified where the intervention could meaningfully support each user type.",
          },
        ],
      },
      {
        type: "text",
        category: "Research",
        heading: "Cultural grounding",
        body: [
          {
            type: "paragraph",
            content:
              "As a non-Nigerian designer, I grounded every decision in user data rather than assumption, validating design choices through regular meetings with the Nigerian PhD researcher leading the project. When selecting content — recipes, imagery, community features — I prioritized what aligned with cultural values that emerged from the research.",
          },
        ],
      },
      {
        type: "text",
        category: "Design Process",
        heading: "Feature prioritization",
        body: [
          {
            type: "paragraph",
            content:
              "With Android accounting for over 86% of smartphone users in Nigeria, I designed for Android from the outset. Every feature decision was filtered through: 'Will this work on a slow connection with limited data?'",
          },
          {
            type: "two-column",
            columns: [
              {
                heading: "Included",
                items: [
                  "Lightweight, culturally relevant imagery",
                  "Nigerian recipes",
                  "Community features",
                  "Simple, data-efficient interfaces",
                ],
              },
              {
                heading: "Excluded",
                items: [
                  "Video consultations",
                  "Heavy media",
                  "Always-connected features",
                  "Generic Western health content",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "text",
        category: "Design Process",
        heading: "Five core features",
        body: [
          {
            type: "bullets",
            items: [
              "Health Tracker — blood sugar, medications, trends",
              "Nigerian Recipes — user-contributed, culturally relevant nutrition support",
              "My Personal Network — private collaboration space for the care triad",
              "Community Forum — peer support for the psychological burden of chronic disease",
              "Education — accessible, shareable diabetes information",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "/images/okuma-prototype.jpg",
        alt: "Okuma mobile app prototype screens",
        caption: "Technology probe prototype designed for co-design workshops",
      },
      {
        type: "text",
        category: "Design Process",
        heading: "Prototyping and iteration",
        body: [
          {
            type: "paragraph",
            content:
              "I designed technology probes to spark discussion in co-design workshops rather than serve as polished final products — accepting that cultural fit couldn't be validated until workshops happened in Nigeria, and designing for iteration accordingly.",
          },
          {
            type: "paragraph",
            content:
              "Usability testing with 4 proxy users revealed problems with terminology, iconography, and visual differentiation between user types. These findings drove refinements to labelling, icons, and role-based visual design before the probes reached real users.",
          },
        ],
      },
      {
        type: "text",
        category: "Reflection",
        heading: "What I learned",
        body: [
          {
            type: "paragraph",
            content:
              "The hardest part wasn't the design itself — it was making confident decisions without direct access to the people I was designing for. Secondary research and close collaboration were invaluable, but couldn't fully replicate direct user engagement. I had to accept that some uncertainty was unavoidable, and design in a way that left room for the workshops to surface what I couldn't.",
          },
          {
            type: "paragraph",
            content:
              "Designing across an unfamiliar cultural context while balancing three distinct user groups pushed me to interrogate every assumption. The discipline of grounding decisions in research data rather than instinct is something I'll carry into every project.",
          },
        ],
      },
      {
        type: "deliverables",
        items: [
          "Mobile app prototype (technology probe)",
          "Information architecture and sitemap",
          "Co-design workshop materials",
          "Research published at ACM DIS 2025 and ACM AfriCHI 2025",
        ],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
