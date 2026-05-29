export type CaseStudy = {
  title: string;
  summary: string;
  tags: string[];
  imageSrc: string;
  slug: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Healthcare Portal Redesign",
    summary: "Simplified a complex patient dashboard used by 200k+ users.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    imageSrc: "https://picsum.photos/seed/healthcare-portal/800/500",
    slug: "healthcare-portal",
  },
  {
    title: "Mobile Banking App",
    summary: "Redesigned core flows to reduce task completion time by 40%.",
    tags: ["Mobile UX", "Usability Testing", "Wireframing"],
    imageSrc: "https://picsum.photos/seed/mobile-banking/800/500",
    slug: "mobile-banking",
  },
  {
    title: "E-commerce Checkout Flow",
    summary: "Streamlined checkout to lift conversion and reduce cart abandonment.",
    tags: ["Conversion UX", "A/B Testing", "Interaction Design"],
    imageSrc: "https://picsum.photos/seed/ecommerce-checkout/800/500",
    slug: "ecommerce-checkout",
  },
  {
    title: "SaaS Design System",
    summary: "Built a scalable component library adopted across three product teams.",
    tags: ["Design Systems", "Accessibility", "Documentation"],
    imageSrc: "https://picsum.photos/seed/saas-design-system/800/500",
    slug: "saas-design-system",
  },
];
