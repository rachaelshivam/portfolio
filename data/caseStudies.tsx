export type CaseStudyMetadata = {
  role: string;
  timeline: string;
  tools: string;
  context: string;
};

export type OverviewSection = {
  type: "overview";
  problem: string;
  solution: string;
};

export type TextBodyParagraph = {
  kind: "paragraph";
  content: string;
};

export type TextBodyList = {
  kind: "list";
  items: string[];
};

export type TextBodyComparison = {
  kind: "comparison";
  included: string[];
  excluded: string[];
};

export type TextSection = {
  type: "text";
  category: string;
  heading: string;
  body: Array<TextBodyParagraph | TextBodyList | TextBodyComparison>;
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
  title: string;
  summary: string;
  subtitle: string;
  tags: string[];
  imageSrc: string;
  slug: string;
  metadata: CaseStudyMetadata;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Healthcare Portal Redesign",
    summary: "Simplified a complex patient dashboard used by 200k+ users.",
    subtitle:
      "Reducing cognitive load for patients managing chronic care online.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    imageSrc: "https://picsum.photos/seed/healthcare-portal/800/500",
    slug: "healthcare-portal",
    metadata: {
      role: "Lead UX Designer",
      timeline: "6 months",
      tools: "Figma, Maze, FigJam",
      context: "Enterprise healthcare SaaS",
    },
    sections: [
      {
        type: "overview",
        problem:
          "Patients struggled to find critical information across a fragmented dashboard. Appointment details, lab results, and care plans lived in separate modules with inconsistent patterns.",
        solution:
          "We consolidated key actions into a single home view, introduced a progressive disclosure model, and aligned terminology with how patients described their care journey in research.",
      },
      {
        type: "text",
        category: "Research",
        heading: "Understanding patient mental models",
        body: [
          {
            kind: "paragraph",
            content:
              "We conducted 18 contextual interviews and mapped common task flows to identify where patients lost confidence. Most friction occurred when switching between clinical and administrative tasks.",
          },
          {
            kind: "list",
            items: [
              "72% of participants missed upcoming appointments without reminders",
              "Lab results were the most visited page but hardest to interpret",
              "Caregivers often completed tasks on behalf of patients",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "https://picsum.photos/seed/healthcare-wireframes/1200/675",
        alt: "Wireframes of the redesigned patient dashboard",
        caption: "Early wireframes exploring a unified dashboard hierarchy.",
      },
      {
        type: "text",
        category: "Scope",
        heading: "Defining what shipped in v1",
        body: [
          {
            kind: "comparison",
            included: [
              "Unified dashboard with prioritized actions",
              "Plain-language lab result summaries",
              "Caregiver access and permissions",
            ],
            excluded: [
              "Insurance billing workflows",
              "Provider messaging redesign",
              "Native mobile app parity",
            ],
          },
        ],
      },
      {
        type: "deliverables",
        heading: "Deliverables",
        items: [
          "Research synthesis and journey maps",
          "Interactive Figma prototype",
          "Component specifications for engineering",
          "Usability test report with recommendations",
        ],
      },
    ],
  },
  {
    title: "Mobile Banking App",
    summary: "Redesigned core flows to reduce task completion time by 40%.",
    subtitle: "Making everyday banking tasks faster on mobile.",
    tags: ["Mobile UX", "Usability Testing", "Wireframing"],
    imageSrc: "https://picsum.photos/seed/mobile-banking/800/500",
    slug: "mobile-banking",
    metadata: {
      role: "Product Designer",
      timeline: "4 months",
      tools: "Figma, UserTesting",
      context: "Consumer fintech startup",
    },
    sections: [
      {
        type: "overview",
        problem:
          "Users abandoned transfers and bill pay mid-flow due to unclear steps and excessive verification prompts.",
        solution:
          "We streamlined flows to three steps, surfaced progress indicators, and reduced redundant confirmations for low-risk actions.",
      },
      {
        type: "text",
        category: "Outcomes",
        heading: "Measuring impact",
        body: [
          {
            kind: "paragraph",
            content:
              "Post-launch usability testing showed a 40% reduction in task completion time and a measurable drop in support tickets related to payments.",
          },
        ],
      },
      {
        type: "deliverables",
        items: [
          "Redesigned transfer and bill pay flows",
          "Mobile component library updates",
          "QA checklist for edge cases",
        ],
      },
    ],
  },
  {
    title: "E-commerce Checkout Flow",
    summary: "Streamlined checkout to lift conversion and reduce cart abandonment.",
    subtitle: "A frictionless path from cart to confirmation.",
    tags: ["Conversion UX", "A/B Testing", "Interaction Design"],
    imageSrc: "https://picsum.photos/seed/ecommerce-checkout/800/500",
    slug: "ecommerce-checkout",
    metadata: {
      role: "UX Designer",
      timeline: "3 months",
      tools: "Figma, Optimizely",
      context: "Direct-to-consumer retail",
    },
    sections: [
      {
        type: "overview",
        problem:
          "Cart abandonment peaked at shipping and payment steps, with users unsure about total costs and delivery timing.",
        solution:
          "We introduced upfront cost summaries, guest checkout, and clearer delivery estimates before payment.",
      },
      {
        type: "image",
        src: "https://picsum.photos/seed/ecommerce-checkout-detail/1200/675",
        alt: "Checkout flow screens",
        caption: "Final checkout screens after A/B validation.",
      },
      {
        type: "deliverables",
        items: [
          "Checkout wireframes and hi-fi screens",
          "A/B test plan and results summary",
          "Handoff documentation for engineering",
        ],
      },
    ],
  },
  {
    title: "SaaS Design System",
    summary: "Built a scalable component library adopted across three product teams.",
    subtitle: "One system, three products, consistent experiences.",
    tags: ["Design Systems", "Accessibility", "Documentation"],
    imageSrc: "https://picsum.photos/seed/saas-design-system/800/500",
    slug: "saas-design-system",
    metadata: {
      role: "Design Systems Lead",
      timeline: "8 months",
      tools: "Figma, Storybook, Zeroheight",
      context: "B2B SaaS platform",
    },
    sections: [
      {
        type: "overview",
        problem:
          "Teams shipped inconsistent UI patterns, slowing development and creating accessibility gaps across products.",
        solution:
          "We audited existing patterns, defined core tokens and components, and rolled out documentation with contribution guidelines.",
      },
      {
        type: "text",
        category: "Process",
        heading: "Building adoption",
        body: [
          {
            kind: "paragraph",
            content:
              "Adoption grew through office hours, paired design reviews, and a clear process for proposing new components.",
          },
          {
            kind: "list",
            items: [
              "40+ components documented in Storybook",
              "WCAG 2.1 AA baseline for all primitives",
              "Shared Figma library with versioning",
            ],
          },
        ],
      },
      {
        type: "deliverables",
        items: [
          "Design token specification",
          "Component library in Figma and code",
          "Accessibility guidelines and checklists",
        ],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
