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
  {
    slug: "fastdental",
    title: "FastDental",
    subtitle: "AI powered documentation overlay for dental practices",
    intro: "Dentists in the US lose an average of 312 hours per year to clinical documentation. AI scribes reduce transcription time, but don't fix the underlying problem. FastDental is a non-disruptive clinical overlay that unifies X-rays, charting, notes, and billing in a single screen, on top of the systems dentists already use.",
    summary: "AI-powered clinical documentation overlay for solo dental practices",
    tags: ["Product Strategy", "UX Design", "AI"],
    role: "Lead Designer & Strategist",
    timeline: "Spring Semester 2026",
    tools: ["Figma", "Figma Make", "MCP", "Cursor"],
    context: "Product Management Essentials, Carnegie Mellon University · ProdHacks 2026",
    thumbnail: "/images/fastdental-thumbnail.jpg",
    heroImage: "/images/fastdental-hero.jpg",
    sections: [
      {
        type: "overview",
        problem: "Dentists spend an average of 17.5 minutes per patient on documentation — three times the five-minute target. The root cause is display fragmentation: X-rays, notes, charting, and billing live in separate windows. AI scribes help with transcription but leave everything else broken. Full AI-native PMS platforms solve fragmentation but require costly migrations most solo practices won't risk.",
        solution: "A web-based clinical overlay that sits on top of the dentist's existing PMS — no migration required. It reads patient data and X-rays from the existing system, presents everything in one unified screen, and writes the completed note and billing codes back on export."
      },
      {
        type: "text",
        category: "The Challenge",
        heading: "Comprehensiveness vs. speed",
        body: [
          {
            type: "paragraph",
            content: "The core tension was between comprehensiveness and speed. A dentist seeing 15 patients a day needs to complete each note in under five minutes — but dental documentation is genuinely complex, covering clinical findings, X-ray diagnostics, treatment planning, and billing codes that all have to be accurate and legally defensible. Every design decision was filtered through both constraints."
          }
        ]
      },
      {
        type: "text",
        category: "Understanding the Problem",
        heading: "Sizing the problem rigorously",
        body: [
          {
            type: "paragraph",
            content: "The documentation gap per patient is around 12.5 minutes — the difference between the 17.5-minute average and the five-minute target. Multiplied across 1,500 patient visits per year, that's 312 hours of excess documentation time per dentist annually. A FastDental subscription recovers its full annual cost in under three weeks of time savings — a 24:1 benefit-to-cost ratio."
          },
          {
            type: "paragraph",
            content: "Mapping the competitive landscape across AI scribes, AI-native PMS platforms, and manual documentation confirmed the gap: no existing product combined a unified display, AI diagnostics, and automated billing in a non-disruptive overlay accessible to solo practitioners."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "Eliminating fragmentation without adding complexity",
        body: [
          {
            type: "paragraph",
            content: "The unified screen places X-ray imaging on the left, the interactive odontogram in the centre, and an adaptive clinical note panel on the right — so the dentist's eyes move left to right through the clinical workflow without switching windows. The risk was that consolidating four tools into one screen would feel overwhelming; the layout was designed so each zone maps to a distinct cognitive task, not just a visual region."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "A form that does the work",
        body: [
          {
            type: "paragraph",
            content: "The right panel adapts to the appointment type — an emergency visit surfaces different required fields to a routine checkup. It also pre-fills anything already known: patient intake data, previous visit history, current medications. What remains is only what the dentist needs to confirm."
          },
          {
            type: "paragraph",
            content: "AI-flagged pathologies from the X-ray appear as suggestions the dentist can approve or dismiss. Approving a finding automatically generates a draft treatment plan, which in turn generates the billing codes. The dentist moves through a chain of approvals rather than a chain of data entry tasks."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "Keeping the dentist accountable, not the AI",
        body: [
          {
            type: "paragraph",
            content: "Legal responsibility for clinical documentation sits with the dentist, not the system. Rather than treating this as a disclaimer, I made it structural: nothing exports until every section has been actively reviewed and signed off. The Export button stays disabled until all fields are cleared. The friction is intentional — it surfaces accountability rather than burying it."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "Key tradeoffs",
        body: [
          {
            type: "bullets",
            items: [
              "Overlay over native PMS — made feasible by the ADA's ODIN interoperability standard (ADA Standard No. 1111), allowing FastDental to securely read from and write back to existing PMS systems",
              "Structured form over voice input — prioritises speed and legal defensibility over conversational interaction",
              "AI suggestion over full automation — keeps the dentist in the loop and maintains clinical accountability"
            ]
          },
          {
            type: "paragraph",
            content: "Naming these tradeoffs explicitly in the pitch was a deliberate choice — they show the constraints were understood, not ignored."
          }
        ]
      },
      {
        type: "text",
        category: "Impact",
        heading: "ProdHacks 2026",
        body: [
          {
            type: "bullets",
            items: [
              "24:1 benefit-to-cost ratio for the target user",
              "Projected gross margin of 76.7% at scale",
              "Revenue CAGR of 118.5%"
            ]
          }
        ]
      },
      {
        type: "text",
        category: "Reflection",
        heading: "What I learned",
        body: [
          {
            type: "paragraph",
            content: "This was my first time approaching a design problem through a full product strategy lens — sizing the problem in hours and dollars before drawing a single screen, and stress-testing the business model alongside the design decisions. It changed how I think about what makes a design defensible: not just whether it's usable, but whether the tradeoffs are understood and the value is legible to the person being asked to pay for it."
          }
        ]
      },
      {
        type: "deliverables",
        items: [
          "Web-based clinical overlay prototype",
          "Competitive landscape analysis",
          "Financial model and business case",
          "ProdHacks 2026 pitch deck"
        ]
      }
    ]
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
