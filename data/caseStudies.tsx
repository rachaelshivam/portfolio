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
    intro: "Existing Type 2 Diabetes apps aren't designed for the realities of Nigeria — its infrastructure, its culture, or the collaborative nature of diabetes care there. I designed a culturally grounded mobile prototype that was co-designed through 13 workshops with 19 participants in Port Harcourt, then evaluated by 30 additional users through think-aloud sessions and interviews. The work produced two publications at ACM DIS 2025 and ACM AfriCHI 2025, contributing methodological guidance for designing digital health tools that are locally relevant and regionally adaptable across diverse African communities.",
    summary: "Designed a culturally grounded digital health tool for collaborative Type 2 Diabetes care in Nigeria. Contributed methodological guidance for cross-cultural digital health design through 2 ACM publications.",
    tags: ["UX Research", "Prototyping", "mHealth"],
    role: "UX Designer & Researcher",
    timeline: "5 months (May – Sep 2023)",
    tools: ["Figma", "Miro", "Zoom", "Google Forms"],
    context: "University of Bristol MSc Dissertation",
    thumbnail: "/images/okuma-thumbnail.jpg",
    heroImage: "/images/okuma-hero.jpg",
    sections: [
      {
        type: "text",
        category: "The Challenge",
        heading: "I couldn't talk to the people I was designing for.",
        body: [
          {
            type: "paragraph",
            content: "University restrictions prevented direct access to Port Harcourt users, so every decision had to be grounded in existing research data and validated through close collaboration with the Nigerian PhD researcher leading the project. I was designing for a cultural context I hadn't experienced, infrastructure realities I'd never designed around, and three distinct user groups — patients, caregivers, and community pharmacists — who needed to work together within a single app."
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "No existing solution had been built for this context.",
        body: [
          {
            type: "paragraph",
            content: "A scoping review of diabetes mHealth research in Africa and a competitive analysis of 8 existing apps confirmed the gap: nothing addressed the specific realities of Nigeria, and nothing had been designed for the patient-caregiver-pharmacist triad."
          },
          {
            type: "paragraph",
            content: "The infrastructure context made this critical — only 12.1% of Nigerians experience quality internet services, just 36% of urban Nigerians own a smartphone, and data costs are high. Most existing solutions had been built on assumptions that don't hold in Port Harcourt."
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "Three user groups, three different relationships with the same disease.",
        body: [
          {
            type: "paragraph",
            content: "Patients managing their condition day to day. Caregivers carrying the emotional and practical burden at home. And community pharmacists, who in Nigeria often serve as the most accessible frontline healthcare providers, as they are more reachable than doctors. The collaboration between these groups is real but largely invisible, happening informally through community relationships rather than formal healthcare systems."
          },
          {
            type: "paragraph",
            content: "Working with interview transcripts and survey data from Port Harcourt, I adopted an Afrocentric approach — rooting design decisions in the sociocultural contexts and lived experiences of the end users rather than importing Western assumptions. Empathy maps surfaced the emotional burden of chronic disease management across all three groups, while journey maps identified where the intervention could meaningfully support each user type."
          }
        ]
      },
      {
        type: "image",
        src: "/images/okuma-empathy-journey.jpg",
        alt: "Empathy maps and journey maps for each user group",
        caption: "Empathy maps and journey maps for each user group"
      },
      {
        type: "text",
        category: "Design",
        heading: "What we left out mattered as much as what we kept.",
        body: [
          {
            type: "paragraph",
            content: "With Android accounting for over 86% of smartphone users in Nigeria, I designed for Android from the outset. Every feature was evaluated against the same constraint — lightweight, data-efficient, and culturally relevant. That meant no video consultations, no heavy media, no always-connected features, and no generic Western health content."
          }
        ]
      },
      {
        type: "text",
        category: "Design",
        heading: "Five features, one app — designed to work across all three sides of the care relationship.",
        body: [
          {
            type: "paragraph",
            content: "Working with the PhD researcher, I landed on five core features driven by the research: a Health Tracker for logging blood sugar and medications, Nigerian Recipes contributed by users, My Personal Network as a private collaboration space for the care triad, a Community Forum for peer support, and an Education section with accessible, shareable diabetes information."
          }
        ]
      },
      {
        type: "image",
        src: "/images/okuma-prototype.jpg",
        alt: "Okuma mobile app prototype screens",
        caption: "Prototype screens"
      },
      {
        type: "text",
        category: "Design",
        heading: "The probes had to work on first contact — there was no second chance to test before the workshops.",
        body: [
          {
            type: "paragraph",
            content: "I designed technology probes — intentionally unpolished prototypes meant to spark discussion in co-design workshops rather than serve as finished products. I accepted that cultural fit couldn't be fully validated until the workshops happened in Nigeria, so the probes needed to be clear enough to be useful while leaving room for participants to reshape them."
          },
          {
            type: "paragraph",
            content: "Proxy usability testing with 4 users before handoff revealed problems with terminology, iconography, and visual differentiation between user types, which I addressed before the probes reached real users."
          }
        ]
      },
      {
        type: "text",
        category: "Impact",
        heading: "The prototype went further than I expected.",
        body: [
          {
            type: "paragraph",
            content: "My technology probes were used in 13 co-design workshops with 19 participants — patients, caregivers, and pharmacists from diverse ethnic groups in Port Harcourt. Participants shaped the features, named the app \"Okuma\" through consensus, and identified where the design aligned with local cultural norms and where it fell short across sociocultural boundaries within the same city."
          },
          {
            type: "paragraph",
            content: "The prototype was then evaluated by 30 additional participants through think-aloud sessions and interviews — a second study I hadn't originally designed for but that my prototype was robust enough to support."
          },
          {
            type: "paragraph",
            content: "The work contributed to two publications: one at ACM DIS 2025 on cross-cultural participatory design methodology, and one at ACM AfriCHI 2025 on the design of the tool itself. Together they offer methodological guidance for developing digital health tools that are locally relevant and regionally adaptable."
          }
        ]
      },
      {
        type: "text",
        category: "Reflection",
        heading: "Designing across cultures taught me to navigate uncertainty.",
        body: [
          {
            type: "paragraph",
            content: "The hardest part wasn't the design itself — it was making confident decisions for a context I hadn't experienced, knowing some of them would be wrong. I had to design in a way that left room for the workshops to surface what I couldn't — and they did, revealing that features which worked for one ethnic group didn't always land for another, even within the same city."
          }
        ]
      }
    ]
  },
  {
    slug: "mise-ai",
    title: "Mise.AI",
    subtitle: "Designing trust into autonomous AI",
    intro: "Fast-casual restaurants lose around $179,000 per store annually from bad ingredient stocking — a problem that existing tools flag but don't fix. As Lead Designer on Mise.AI, I was responsible for making the agent's automation visible, trustworthy, and controllable.",
    summary: "Agentic AI inventory management system for fast-casual restaurants",
    tags: ["AI Design", "Product Design", "Agentic Systems"],
    role: "Lead Product Designer",
    timeline: "Fall Semester 2024",
    tools: ["Figma", "Figma Make", "Miro"],
    context: "Design of AI Products and Services, Carnegie Mellon University",
    thumbnail: "/images/mise-ai-thumbnail.jpg",
    heroImage: "/images/mise-ai-hero.jpg",
    sections: [
      {
        type: "text",
        category: "The Challenge",
        heading: "Every screen had to communicate what the agent was about to do — and why.",
        body: [
          {
            type: "paragraph",
            content: "The core design challenge was knowing when the agent should act, and when it should pause for human input. A wrong order in a fast-casual kitchen doesn't just waste money — it affects customers, staff, and supplier relationships. Every design decision had to account for both the normal case and the failure case."
          }
        ]
      },
      {
        type: "text",
        category: "Understanding the System",
        heading: "I needed to understand what the agent was doing under the hood before I could design for it.",
        body: [
          {
            type: "paragraph",
            content: "Mise.AI is built on three modules: a demand forecasting model that predicts ingredient demand 3–7 days out; a supplier ranking model that scores suppliers per order; and a multimodal ordering agent that contacts suppliers via phone, email, or portal and surfaces the result for manager approval. Every screen had to reflect a specific type of agent action, not just a generic AI output."
          },
          {
            type: "paragraph",
            content: "Before committing to the concept, the team ran consequence scanning to anticipate risks — including unfair supplier ranking and good suppliers being incorrectly flagged. Rather than treating these as edge cases, we designed mitigations in from the outset."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "Complex model outputs needed to be simplified without losing meaning.",
        body: [
          {
            type: "paragraph",
            content: "The forecasting model produces probability ranges and confidence intervals, but I simplified these to High/Medium/Low demand labels to give managers what they needed at a glance. The same logic applied to supplier data — rather than surfacing everything the model had access to, I kept the interface to three criteria: reliability, delivery time, and price."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "The agent ranks suppliers, but the manager makes the final call.",
        body: [
          {
            type: "paragraph",
            content: "I chose to show all ranked supplier options rather than pre-selecting the top one. The agent can rank by data, but a manager might have context the model doesn't — a relationship with a supplier, or knowledge of a local issue — and the design needed to preserve that judgment."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "Every consequential action requires manager approval.",
        body: [
          {
            type: "paragraph",
            content: "The agent could have been designed to place orders automatically, with no manager involvement. But in a high-stakes operational context, automation without oversight felt like the wrong trade-off. Manual overrides feed back into the agent's future learning — so manager expertise improves the system over time."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "The confirmation screen closes the loop between approval and action.",
        body: [
          {
            type: "paragraph",
            content: "Every AI-generated order includes a rationale card explaining the agent's reasoning in plain language. The confirmation screen shows outreach status in real time — whether the agent has succeeded, is in progress, or has failed — and flags any orders it couldn't complete for manual follow-up. Feedback from our class critique revealed that the agent contacting a supplier wasn't visually connected to the manager's approval action, which I addressed in a refined version of the screen."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "We simulated a live supplier call to stress-test the ordering module.",
        body: [
          {
            type: "paragraph",
            content: "To demonstrate the ordering module, we used GPT's voice mode to simulate a conversation between the agent and a supplier in real time — including edge cases like a supplier running low on stock. This directly informed how the confirmation screen communicates when an order needs human intervention."
          }
        ]
      },
      {
        type: "text",
        category: "Impact",
        heading: "Presented at the final course pitch to faculty and peers.",
        body: [
          {
            type: "paragraph",
            content: "The financial model projected $46,000 in annual savings per store, with break-even at approximately 450 stores."
          }
        ]
      },
      {
        type: "text",
        category: "Reflection",
        heading: "PLACEHOLDER — to be refined.",
        body: [
          {
            type: "paragraph",
            content: "This was my first time designing for agentic AI. Until this project, every system I'd designed responded to the user — this one acted for them. Knowing what to show, what to simplify, and where to ask for human input were challenges I hadn't encountered before. The throughline across every decision was keeping the human informed and in control, without making that feel like a burden."
          }
        ]
      },
      {
        type: "deliverables",
        items: [
          "End-to-end product prototype",
          "Consequence scanning analysis",
          "Agent transparency framework",
          "Final pitch to faculty and peers"
        ]
      }
    ]
  },
  {
    slug: "fastdental",
    title: "FastDental",
    subtitle: "AI powered documentation overlay for dental practices",
    intro: "Dentists in the US lose an average of 312 hours per year to clinical documentation — the result of working across fragmented systems where X-rays, notes, charting, and billing live in separate windows and software. AI scribes reduce transcription time but don't fix the fragmentation. FastDental is a non-disruptive clinical overlay that unifies everything in a single screen, on top of the systems dentists already use.",
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
        type: "text",
        category: "The Challenge",
        heading: "Speed and accuracy were non-negotiable constraints.",
        body: [
          {
            type: "paragraph",
            content: "A dentist seeing 15 patients a day needs to complete each note in under five minutes — but dental documentation is genuinely complex, covering clinical findings, X-ray diagnostics, treatment planning, and billing codes that all have to be accurate and legally defensible. Every design decision was filtered through both constraints."
          }
        ]
      },
      {
        type: "text",
        category: "Understanding the Problem",
        heading: "I sized the problem before designing anything.",
        body: [
          {
            type: "paragraph",
            content: "The documentation gap per patient is around 12.5 minutes — the difference between the 17.5-minute average and the five-minute target. Multiplied across 1,500 patient visits per year, that's 312 hours of excess documentation time per dentist annually. A FastDental subscription recovers its full annual cost in under three weeks of time savings — a 24:1 benefit-to-cost ratio."
          }
        ]
      },
      {
        type: "text",
        category: "Understanding the Problem",
        heading: "No existing product addressed the gap for solo practitioners.",
        body: [
          {
            type: "paragraph",
            content: "Mapping the competitive landscape across AI scribes, AI-native PMS platforms, and manual documentation confirmed that no existing product combined a unified display, AI diagnostics, and automated billing in a non-disruptive overlay accessible to solo practitioners. The ADA's ODIN interoperability standard (ADA Standard No. 1111) is what makes the overlay approach technically feasible — it allows FastDental to securely read from and write back to existing PMS systems, functioning as a seamless extension rather than a separate silo."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "The layout follows the clinical workflow, left to right.",
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
        heading: "The form pre-fills what's already known and only asks for what isn't.",
        body: [
          {
            type: "paragraph",
            content: "The right panel adapts to the appointment type — an emergency visit surfaces different required fields to a routine checkup. It also pre-fills anything already known: patient intake data, previous visit history, current medications. What remains is only what the dentist needs to confirm. AI-flagged pathologies from the X-ray appear as suggestions the dentist can approve or dismiss — approving a finding automatically generates a draft treatment plan, which in turn generates the billing codes. The dentist moves through a chain of approvals rather than a chain of data entry tasks."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "The dentist stays in control of every export.",
        body: [
          {
            type: "paragraph",
            content: "Legal responsibility for clinical documentation sits with the dentist, not the system. I made this structural: nothing exports until every section has been actively reviewed and signed off. The Export button stays disabled until all fields are cleared. The friction is intentional — it surfaces accountability rather than burying it."
          }
        ]
      },
      {
        type: "text",
        category: "Design Process",
        heading: "Three deliberate tradeoffs shaped the product.",
        body: [
          {
            type: "bullets",
            items: [
              "Overlay over native PMS — FastDental reads from and writes back to existing PMS systems using the ADA's ODIN interoperability standard, requiring no migration",
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
        heading: "Presented at ProdHacks 2026, CMU's product management hackathon.",
        body: [
          {
            type: "paragraph",
            content: "The financial model projected a 24:1 benefit-to-cost ratio for the target user."
          }
        ]
      },
      {
        type: "text",
        category: "Reflection",
        heading: "Stress-testing the business model changed how I think about design.",
        body: [
          {
            type: "paragraph",
            content: "This was my first time approaching a design problem through a full product strategy lens — sizing the problem in hours and dollars before drawing a single screen. It changed how I think about what makes a design defensible: not just whether it's usable, but whether the tradeoffs are understood and the value is legible to the person being asked to pay for it. Working through the financial model also surfaced a harder question — whether FastDental could survive as a business at scale, not just perform well on paper for a single user. That uncertainty is something I'd want to resolve before taking it further."
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
  {
    slug: "luteasense",
    title: "LuteaSense",
    subtitle: "Predicting PMDD symptoms before they happen",
    intro: "LuteaSense is a multimodal biosensor patch that continuously monitors hormone levels and predicts PMDD symptoms 24-48 hours in advance — giving users the time and information they need to manage what's coming. At CMU's Medical Device Innovation and Realization (MDIR) Demo Day 2026, LuteaSense was voted 1st place overall by a panel of industry expert judges. We are now pursuing LuteaSense as a startup through CMU's Swartz Center for Entrepreneurship.",
    summary: "Wearable hormone monitoring for PMDD management",
    tags: ["Product Design", "Women's Health", "Wearable Tech"],
    role: "Chief Product Officer",
    timeline: "Spring Semester 2026",
    tools: ["Figma", "React Native", "Windsurf"],
    context: "Medical Device Innovation and Realization, Carnegie Mellon University",
    thumbnail: "/images/luteasense-thumbnail.jpg",
    heroImage: "/images/luteasense-hero.jpg",
    sections: [
      {
        type: "text",
        category: "My Role",
        heading: "As CPO, I led product and design for a five-person medical device startup.",
        body: [
          {
            type: "paragraph",
            content: "This was my first time working in medical device development, which pushed me well beyond my comfort zone — into IP strategy, regulatory pathways, and the intersection of hardware and software product design."
          },
          {
            type: "bullets",
            intro: "In this role I:",
            items: [
              "Defined the product vision and feature set for the companion app",
              "Conducted AI-assisted persona interviews with simulated PMDD patients and healthcare providers, using advanced prompting methodology from CMU's AI Augmented Designer course",
              "Led Demo Day pitch preparation and presentation strategy"
            ]
          }
        ]
      },
      {
        type: "text",
        category: "Design & Development",
        heading: "I designed and built the companion app frontend end to end.",
        body: [
          {
            type: "paragraph",
            content: "Using Windsurf as my development environment, I vibecoded the full React Native frontend — translating my own designs directly into a working prototype without a separate engineering handoff. The MVP was built with mock data and iterated screen by screen based on product requirements."
          }
        ]
      },
      {
        type: "text",
        category: "Product",
        heading: "The app gives users advance warning and the strategies to act on it.",
        body: [
          {
            type: "paragraph",
            content: "The MVP centred on six core features:"
          },
          {
            type: "bullets",
            items: [
              "Onboarding and biosensor pairing",
              "Dashboard showing real-time hormone levels and current menstrual cycle stage",
              "24-48 hour symptom prediction alerts with actionable management strategies",
              "Period and symptom/mood logger",
              "Symptom visualisation over time",
              "Healthcare provider data sharing"
            ]
          },
          {
            type: "paragraph",
            content: "The decision to pair predictions with actionable strategies — rather than notifications alone — was grounded in existing PMDD coping research, which shows that structured self-care and coping strategies during the premenstrual phase meaningfully reduce symptom impact."
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "Without access to real users, I used AI-simulated persona interviews to ground the design.",
        body: [
          {
            type: "paragraph",
            content: "I built personas representing PMDD patients and healthcare providers using advanced prompting methodology from CMU's AI Augmented Designer course, grounded in published PMDD research and clinical context rather than generated from scratch."
          }
        ]
      },
      {
        type: "image",
        src: "/images/luteasense-demoday-1.jpg",
        alt: "LuteaSense team at CMU MDIR Demo Day 2026",
        caption: "CMU MDIR Demo Day 2026, hosted at the Swartz Center for Entrepreneurship"
      },
      {
        type: "text",
        category: "Recognition",
        heading: "LuteaSense was voted 1st place overall at MDIR Demo Day 2026.",
        body: [
          {
            type: "paragraph",
            content: "Scoring consistently high across device quality, presentation, and prototype strength, LuteaSense emerged as the top quantitative performer among seven competing teams, judged by a panel of industry experts hosted at the Swartz Center for Entrepreneurship."
          }
        ]
      },
      {
        type: "image",
        src: "/images/luteasense-demoday-2.jpg",
        alt: "LuteaSense prototype demonstration at Demo Day",
        caption: "Prototype demonstration at Demo Day"
      },
      {
        type: "text",
        category: "What's Next",
        heading: "Watch this space.",
        body: [
          {
            type: "paragraph",
            content: "We are actively pursuing LuteaSense as a startup through CMU's Swartz Center for Entrepreneurship. More details will be shared as the project develops — if you're interested in what we're building, feel free to get in touch."
          }
        ]
      },
      {
        type: "deliverables",
        items: [
          "React Native companion app frontend prototype",
          "Product vision and feature roadmap",
          "AI-assisted persona research",
          "Demo Day pitch — 1st place overall, CMU MDIR 2026"
        ]
      }
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
