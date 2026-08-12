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

export type TwoColumnTextSection = {
  type: "two-column-text";
  category?: string;
  heading?: string;
  left: { heading?: string; body: string; };
  right: { heading?: string; body: string; };
};

export type WhatIDidSection = {
  type: "what-i-did";
  items: string[];
};

export type MetricsSection = {
  type: "metrics";
  metrics: Array<{
    value: string;
    label: string;
    comparison?: string;
  }>;
};

export type ThreeColumnSection = {
  type: "three-column";
  columns: Array<{
    heading?: string;
    body: string;
  }>;
};

export interface ImageComparisonSection {
  type: "image-comparison";
  left: { src: string; alt: string; caption: string };
  right: { src: string; alt: string; caption: string };
}

export interface PullQuoteSection {
  type: "pullquote";
  quote: string;
  attribution: string;
}

export type CaseStudySection =
  | TextSection
  | ImageSection
  | DeliverablesSection
  | TwoColumnTextSection
  | WhatIDidSection
  | MetricsSection
  | ThreeColumnSection
  | ImageComparisonSection
  | PullQuoteSection;

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  summary: string;
  tags: string[];
  metadata: Array<{ label: string; value: string }>;
  thumbnail: string;
  heroImage: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "roboticscareer",
    title: "RoboticsCareer.org",
    subtitle: "Turning a one-visit platform into a measurable career journey",
    intro: "RoboticsCareer.org is the ARM Institute's federally funded national platform for connecting people to careers in advanced manufacturing and robotics. The platform serves a broad audience, but low engagement and no outcome data means the ARM Institute can't prove its impact. As Product Manager for a multidisciplinary team of five, I led research and strategy to identify the highest-impact design opportunities. We delivered an ecosystem of three integrated solutions: a career interest quiz, career journey map, and career dashboard.",
    summary: "Led product strategy and research for a national robotics career platform to increase engagement and give a federally funded organization the outcome data it needs to prove impact. 100% of perception measures outperformed the existing tool and mechanism trust exceeded 2x in design validation.",
    tags: ["Product Management", "UX Research", "Product Strategy"],
    metadata: [
      { label: "Role", value: "Product Manager" },
      { label: "Timeline", value: "January - July 2026" },
      { label: "Team", value: "Stephen Chen, Caelan Moglovkin, Kayla Windust, Tian Zhou" }
    ],
    thumbnail: "/images/roboticscareer-thumbnail.jpg",
    heroImage: "/images/roboticscareer-hero.jpg",
    sections: [{
        type: "text",
        category: "What I Did",
        heading: "",
        body: [
          {
            type: "bullets",
            items: [
              "Led product strategy and cross-functional coordination across our team, ARM, and Fivestar (ARM's external development partner)",
              "Drove key scoping decisions including targeting Gen Z/Gen Alpha based on market sizing and a broader environmental analysis",
              "Defined research strategy from planning through synthesis and shaped the product direction for three integrated solutions: a Career Interest Quiz, Career Journey Map, and Career Dashboard",
              "Designed UX improvement screens addressing critical-severity issues identified through heuristic evaluation and usability testing",
              "Framed the value case for ARM, including defining metrics for measuring solution impact"
            ]
          }
        ]
      },
      {
        type: "text",
        category: "The Challenge",
        heading: "Giving someone access to a field isn't the same as guiding them through it.",
        body: [
          {
            type: "paragraph",
            content: "RoboticsCareer.org gets people through the door, but doesn't give them much reason to stay. Users browse jobs and training programs but rarely come back. The moment someone clicks on a listing, they're sent to an external site, and ARM loses sight of whether they pursued training, applied, or got hired. Low engagement and no outcome data meant ARM couldn't demonstrate the platform's value to its funders. So, ARM came to us with three core challenges for RoboticsCareer.org:"
          }
        ]
      },
      {
        type: "three-column",
        columns: [
          {
            heading: "01",
            body: "Help ARM understand their current and future users"
          },
          {
            heading: "02",
            body: "Grow the userbase for RoboticsCareer.org"
          },
          {
            heading: "03",
            body: "Increase the stickiness of the site"
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "ARM gave us their user groups, and we made a strategic call on where to focus.",
        body: [
          {
            type: "paragraph",
            content: "ARM identified four user segments for RoboticsCareer.org: Gen Z, Gen Alpha, career switchers, and veterans. I led a user segmentation and environmental analysis to identify which would drive the largest impact within the project timeline. This led us to Gen Z and Gen Alpha, an obtainable audience of ~750,000 compared to under 90,000 for the other two."
          }
        ]
      },
      {
        type: "image",
        src: "/images/roboticscareer-segments.jpg",
        alt: "User segmentation diagram",
        caption: "User segmentation diagram"
      },
      {
        type: "text",
        category: "Research",
        heading: "I led a mixed-methods research strategy to understand the full ecosystem around a career journey.",
        body: [
          {
            type: "paragraph",
            content: "Across seven methods and 190 participants, we spoke to high schoolers and college students directly, but also to the people who influence their decisions: parents, teachers, and robotics program leaders. We wanted to understand how these groups shape perceptions of the field and engage younger audiences, and to surface barriers and motivators across the full journey, not just at the point of platform interaction."
          }
        ]
      },
      {
        type: "image",
        src: "/images/roboticscareer-research.jpg",
        alt: "Research methods breakdown",
        caption: "Research methods breakdown"
      },
      {
        type: "image",
        src: "/images/roboticscareer-workshop.jpg",
        alt: "Facilitating research at a high school workshop",
        caption: "Facilitating research at a high school workshop"
      },
      {
        type: "text",
        category: "Research",
        heading: "Our research produced five insights. Three pointed to systemic problems beyond our reach. Two shaped our design direction.",
        body: [
          {
            type: "paragraph",
            content: "Insight 1: Career identity forms earlier than most people assume. By college, most students have already decided on their career path, and younger audiences are meaningfully more open to new possibilities."
          },
          {
            type: "paragraph",
            content: "Insight 2: The barrier into the field isn't a lack of interest, but rather a lack of specificity. At a robotics competition, 41% of high schoolers said 'maybe' when asked if they could see themselves working in the field — not because they weren't interested, but because they couldn't picture what the work actually looks like or connect it to their existing skills and interests."
          },
          {
            type: "paragraph",
            content: "This led us to narrow our primary audience from Gen Z and Gen Alpha broadly to high schoolers specifically. I drove this scoping decision based on the research: they were the group where interest was highest, openness was greatest, and where intervention could have the most impact before career plans solidified."
          }
        ]
      },
      {
        type: "image",
        src: "/images/roboticscareer-audience-narrowing.jpg",
        alt: "Audience narrowing from college students and high schoolers to high schoolers",
        caption: "Narrowing our primary audience to high schoolers"
      },
      {
        type: "text",
        category: "Research",
        heading: "A workshop with ARM confirmed our focus.",
        body: [
          {
            type: "paragraph",
            content: "Our research had surfaced systemic problems like outdated perceptions of manufacturing that were real but beyond the project's reach. We presented our recommendation to stay focused on what we could ship and measure within the platform, and ARM agreed."
          },
          {
            type: "paragraph",
            content: "That decision gave us our two guiding questions: How might we turn someone's interest into a real path? And how might we make that path trackable, so ARM can finally see it?"
          }
        ]
      },
      {
        type: "pullquote",
        quote: "This is the most valuable research I've seen come out of one of these capstone projects.",
        attribution: "Livia Rice, Senior Director of Communications, ARM Institute"
      },
      {
        type: "text",
        category: "Solution",
        heading: "We designed three integrated solutions, each addressing a different stage of the career discovery journey and feeding into the next.",
        body: []
      },
      {
        type: "text",
        category: "Solution",
        heading: "01 Career Interest Quiz: Connecting interests to roles",
        body: [
          {
            type: "paragraph",
            content: "A scenario-based quiz that uses day-in-the-life questions to connect younger users' existing interests to robotics and manufacturing careers, surfacing multiple ranked roles with actionable next steps rather than a single verdict."
          },
          {
            type: "bullets",
            items: [
              "We chose a narrative format over a traditional questionnaire after testing both, as participants found it more engaging, personal, and trustworthy.",
              "We deliberately kept the quiz on the longer side and refined length through multiple iterations, as testing showed users trusted results more when the quiz felt thorough.",
              "Results are transparent about how each answer mapped to the match, something users explicitly asked for."
            ]
          }
        ]
      },
      {
        type: "image",
        src: "/images/roboticscareer-quiz.jpg",
        alt: "Career Interest Quiz screens",
        caption: "Career Interest Quiz screens"
      },
      {
        type: "text",
        category: "Solution",
        heading: "02 Career Journey Map: Showing the path forward",
        body: [
          {
            type: "paragraph",
            content: "Once a user sets a target role from their quiz results, the journey map shows a customizable path from training through certification, first job, and beyond."
          },
          {
            type: "bullets",
            items: [
              "Milestones are structured around training, certification, and progression, giving users a reason to return to the platform at each stage.",
              "The path continues past first hire with branching options based on user goals (e.g. earning more, moving into a specific role), because our research showed career paths aren't linear, and even specialists might circle back to training."
            ]
          }
        ]
      },
      {
        type: "image",
        src: "/images/roboticscareer-journeymap.jpg",
        alt: "Career Journey Map screens",
        caption: "Career Journey Map screens"
      },
      {
        type: "text",
        category: "Solution",
        heading: "03 Career Dashboard: Tracking progress and closing ARM's data gap",
        body: [
          {
            type: "paragraph",
            content: "A customizable, widget-based home where users track applications, saved jobs, and training in one place, with a one-tap self-reporting nudge that closes ARM's data gap on applications, enrolment, completions, and hires for the first time."
          },
          {
            type: "bullets",
            items: [
              "The layout is customizable because users at different career stages need fundamentally different views.",
              "The nudge is timed to the moment of return because testing showed users self-report most reliably right after taking an action, not when prompted later."
            ]
          }
        ]
      },
      {
        type: "image",
        src: "/images/roboticscareer-dashboard.jpg",
        alt: "Career Dashboard screens",
        caption: "Career Dashboard screens"
      },
      {
        type: "text",
        category: "Solution",
        heading: "04 UX Improvements",
        body: [
          {
            type: "paragraph",
            content: "Our heuristic evaluation and usability testing of the current site catalogued 82 distinct issues, five of them critical. We redesigned the surfaces with the most critical issues — the landing page, sign-up, and job search — each paired with the research rationale behind the change."
          }
        ]
      },
      {
        type: "image",
        src: "/images/roboticscareer-ux.jpg",
        alt: "Redesigned screens",
        caption: "Redesigned landing page, sign-up, and job search"
      },
      {
        type: "text",
        category: "Impact",
        heading: "Our solutions outperformed the existing tool across every measure we tested.",
        body: []
      },
      {
        type: "metrics",
        metrics: [
          {
            value: "6.67/7",
            label: "Mechanism trust",
            comparison: "vs 3.00 existing tool"
          },
          {
            value: "7/7",
            label: "New career discovery",
            comparison: "vs 3.33 existing tool"
          },
          {
            value: "6.67/7",
            label: "Return intent",
            comparison: "vs 2.67 existing tool"
          },
          {
            value: "100%",
            label: "Perception measures outperformed",
            comparison: "vs existing tool"
          }
        ]
      },
      {
        type: "text",
        category: "Impact",
        heading: "",
        body: [
          {
            type: "paragraph",
            content: "Because our solutions weren't deployed during the project timeline, I designed testing protocols to demonstrate their value — measuring trust, return intent, and perceived value as proxies for the engagement and outcome metrics ARM needs."
          },
          {
            type: "paragraph",
            content: "Together, the three solutions are designed to increase engagement and close ARM's data gap — generating the outcome data ARM needs to demonstrate impact to funders for the first time."
          },
          {
            type: "paragraph",
            content: "ARM and Fivestar were enthusiastic following our final presentation. We've handed over all deliverables, implementation guidelines, and documentation. The real test will come with deployment. Our design validation was strong, but live usage will show whether the patterns we saw in testing hold at scale."
          }
        ]
      },
      {
        type: "text",
        category: "Reflection",
        heading: "Leading a project is a different skill from contributing to one.",
        body: [
          {
            type: "paragraph",
            content: "This was my first time working as a Product Manager on a team. The hardest adjustment was knowing when to make a call on scope or strategy, and when to step back and defer to my team's expertise."
          },
          {
            type: "paragraph",
            content: "Translating our research and design into something ARM could act on, in language that connected to their funding pressures and organizational goals, required a different kind of thinking than I'd practiced before. Part of that was defining the right metrics for measuring impact, because without deployed solutions, the case for our work had to be built on evidence we could generate ourselves."
          },
          {
            type: "paragraph",
            content: "Finally, this project reinforced something I believe strongly about the PM role: being hands-on matters. I didn't just set direction — I wrote research protocols, facilitated interviews and workshops, designed screens, and used AI tools to accelerate the work. In a small team working at pace, a PM who can contribute directly moves the work forward faster."
          }
        ]
      }
    ]
  },
  {
    slug: "okuma",
    title: "Okuma",
    subtitle: "Designing for culture and context",
    intro: "Existing Type 2 Diabetes apps aren't designed for the realities of Nigeria — its infrastructure, its culture, or the collaborative nature of diabetes care there. I designed a culturally grounded mobile prototype for the specific context of Port Harcourt, Nigeria, which was then used as a technology probe in 13 co-design workshops with 19 participants and evaluated by 30 additional users. The work produced two publications at ACM DIS 2025 and ACM AfriCHI 2025, contributing methodological guidance for designing digital health tools that are locally relevant and regionally adaptable across diverse African communities.",
    summary: "Designed a culturally grounded digital health tool for collaborative Type 2 Diabetes care in Nigeria. Contributed methodological guidance for cross-cultural digital health design through 2 ACM publications.",
    tags: ["UX Research", "Prototyping", "mHealth"],
    metadata: [
      { label: "Role", value: "UX Designer & Researcher" },
      { label: "Timeline", value: "5 months (May – Sep 2023)" },
      { label: "Context", value: "University of Bristol MSc Dissertation" }
    ],
    thumbnail: "/images/okuma-thumbnail.jpg",
    heroImage: "/images/okuma-hero.jpg",
    sections: [
      {
        type: "text",
        category: "The Challenge",
        heading: "I couldn't talk to the people I was designing for, or access the context I was designing for.",
        body: [
          {
            type: "paragraph",
            content: "The app needed to work for real people in Port Harcourt — a city with its own infrastructure constraints, cultural dynamics, and healthcare realities I hadn't experienced. But university restrictions prevented direct access to users there, so every decision had to be grounded in existing research data and validated through close collaboration with the Nigerian PhD researcher leading the project. I was designing for a cultural context I hadn't experienced, infrastructure realities I'd never designed around, and three distinct user groups — patients, caregivers, and community pharmacists — each with different needs that the app had to address while enabling them to work together."
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
            content: "I conducted a scoping review of diabetes mHealth research in Africa and a competitive analysis of 8 existing apps, which confirmed the gap: nothing addressed the specific realities of Nigeria, and nothing had been designed for the patient-caregiver-pharmacist triad."
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "Nigeria's infrastructure ruled out most existing approaches.",
        body: [
          {
            type: "paragraph",
            content: "Only 12.1% of Nigerians experience quality internet services, just 36% of urban Nigerians own a smartphone, and data costs are high. Existing diabetes apps assumed reliable connectivity, capable devices, and cheap data — none of which held in Port Harcourt. Any solution for this context would need to be built from different assumptions entirely."
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "Diabetes care in Port Harcourt runs primarily on informal relationships, not formal systems.",
        body: [
          {
            type: "paragraph",
            content: "Patients rely on caregivers for daily support, and community pharmacists — more accessible than doctors — often serve as the primary clinical contact. These three groups already function as a care triad, but their coordination is informal and largely unsupported by any existing tool.",
          },
          {
            type: "paragraph",
            content: "Working with interview transcripts and survey data from Port Harcourt, I adopted an Afrocentric approach — rooting design decisions in the sociocultural contexts and lived experiences of the end users rather than in Western assumptions. Empathy mapping across all three groups surfaced shared needs — for better Type 2 Diabetes education, culturally relevant nutritional guidance, and improved communication. Journey maps revealed where the informal, largely unregulated care relationships that already existed could be formalised and better supported through the app."
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
        category: "Key Design Decisions",
        heading: "I built around what users in Port Harcourt actually had access to.",
        body: [
          {
            type: "paragraph",
            content: "Android was the clear platform choice, used by over 86% of smartphone owners in Nigeria, and I designed with Material Design 3 guidelines to align with interaction patterns users would already be familiar with. But I also had to design for Port Harcourt's infrastructure realities: low connectivity, high data costs, and limited device storage. That meant cutting video consultations, heavy media, and always-connected features entirely. The core features I did include were designed to work within these constraints — lightweight, data-efficient, and functional without a reliable connection."
          }
        ]
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "Five features, each serving the needs of all three user groups.",
        body: [
          {
            type: "paragraph",
            content: "Working with the PhD researcher, I landed on five core features driven by the research:"
          },
          {
            type: "bullets",
            items: [
              "Health Tracker — gives patients visibility into their own blood sugar and medications, while enabling caregivers and pharmacists to share in monitoring",
              "Nigerian Recipes — addresses the cultural gap in nutrition guidance for patients managing T2D within a Nigerian dietary context",
              "My Personal Network — formalises the informal care triad, giving all three groups a private shared space for communication and coordination",
              "Community Forum — addresses the psychological burden of chronic illness that patients carry, often invisibly, by enabling peer support",
              "Education — gives pharmacists shareable, accessible materials to support patients during consultations, and patients the tools to better understand their condition"
            ]
          }
        ]
      },
      {
        type: "image",
        src: "/images/okuma-prototype.jpg",
        alt: "Okuma mobile app prototype screens",
        caption: "Technology probe prototype designed for co-design workshops"
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "I had one chance to get the prototypes right before they reached real users.",
        body: [
          {
            type: "paragraph",
            content: "I designed technology probes to spark discussion in co-design workshops rather than serve as finished products — accepting that cultural fit couldn't be fully validated until the workshops happened in Nigeria. Proxy usability testing with 4 users before handoff revealed problems with terminology, iconography, and visual differentiation between user types, which I addressed before the probes reached real users."
          }
        ]
      },
      {
        type: "text",
        category: "Impact",
        heading: "The prototype contributed to research that extended well beyond the original brief.",
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
            content: "The work contributed to two publications: one at ACM DIS 2025 on cross-cultural participatory design methodology, and one at ACM AfriCHI 2025 on the design of the tool itself."
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
            content: "The most challenging aspect of this project was making confident decisions for a context I hadn't experienced, knowing some of them would be wrong. I had to design within real constraints — infrastructure, access, cultural unfamiliarity — while still meeting the distinct needs of three very different user groups within a single app. And I had to leave room for the workshops to surface what I couldn't anticipate. Embracing that uncertainty turned out to be the most important skill I developed on this project."
          }
        ]
      }
    ]
  },
  {
    slug: "mise-ai",
    title: "Mise.AI",
    subtitle: "Balancing AI autonomy with human oversight",
    intro: "Fast-casual restaurants lose around $179,000 per store annually from inventory mismanagement, a problem that existing tools flag but don't fix. Operating on tight margins and lean teams, these restaurants need more than alerts. They need action. As Lead Designer on a team of 5, I designed and built the end-to-end interface for an agentic AI system that forecasts demand, ranks suppliers, and places orders, pausing for human-in-the-loop approval before executing. The financial model projected $46,000 in annual savings per store.",
    summary: "Built the end-to-end interface for an agentic AI inventory system for fast-casual restaurants with human-in-the-loop oversight, making the agent's automation visible, trustworthy, and controllable. Financial model projected $46,000 in annual savings per store.",
    tags: ["AI Design", "Product Design", "Agentic Systems"],
    thumbnail: "/images/mise-ai-thumbnail.jpg",
    heroImage: "/images/mise-ai-hero.jpg",
    metadata: [
      { label: "Role", value: "Lead Product Designer" },
      { label: "Timeline", value: "2 weeks (Spring 2025)" },
      { label: "Context", value: "Design of AI Products and Services, Carnegie Mellon University" }
    ],
    sections: [
      {
        type: "text",
        category: "What I Did",
        heading: "",
        body: [
          {
            type: "bullets",
            items: [
              "Designed and vibecoded the full interactive prototype in React, translating design decisions directly into a working demo",
              "Led consequence scanning to identify and mitigate risks including unfair supplier ranking",
              "Applied FATE principles (fairness, accountability, transparency, explainability) to every design decision, drawing on Microsoft's Responsible AI framework"
            ]
          }
        ]
      },
      {
        type: "text",
        category: "The Challenge",
        heading: "I had to balance making the agent helpful enough to save time with giving managers enough control to trust it.",
        body: [
          {
            type: "paragraph",
            content: "If the agent automates too much, managers don't trust it. If it asks for approval on every small decision, it's no faster than doing things manually. The design had to find the line — giving the agent enough autonomy to genuinely save time, while making sure a manager always has visibility into what it's doing and the ability to intervene before anything irreversible happens."
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
          }
        ]
      },
      {
        type: "image",
        src: "/images/mise-ai-system-flowchart.jpg",
        alt: "Flowchart showing the three modules of the Mise.AI system",
        caption: "System architecture: demand forecasting, supplier ranking, and multimodal ordering"
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "It was important to me that every design decision reflected responsible AI principles.",
        body: [
          {
            type: "paragraph",
            content: "I drew on Microsoft's Responsible AI framework to guide my thinking around fairness, accountability, transparency, and explainability, because in a system that acts on behalf of a user, getting the interface wrong has real operational consequences."
          }
        ]
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "I led the team through consequence scanning before building anything.",
        body: [
          {
            type: "paragraph",
            content: "Before committing to the concept, I led the team through consequence scanning to anticipate risks and design mitigations from the outset. We identified three key risks: over/under-stocking, unfair supplier ranking, and incorrect automated orders. The mitigations I designed for included human-in-the-loop approval for every order, transparent rationale for AI recommendations, manager overrides on supplier selection, and prominent error handling when orders fail."
          }
        ]
      },
      {
        type: "image",
        src: "/images/mise-ai-consequence-scanning.jpg",
        alt: "Consequence scanning workshop output",
        caption: "Consequence scanning workshop output"
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "I simplified complex model outputs to what managers actually need.",
        body: [
          {
            type: "paragraph",
            content: "The forecasting model produces probability ranges and confidence intervals, but I simplified these to High/Medium/Low demand labels to give managers what they needed at a glance. The same logic applied to supplier data — rather than surfacing everything the model had access to, I kept the interface to three criteria: reliability, delivery time, and price."
          }
        ]
      },
      {
        type: "image",
        src: "/images/mise-ai-dashboard-labels.jpg",
        alt: "Dashboard showing High/Medium/Low demand forecast labels",
        caption: "Simplified demand labels on the dashboard"
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "I decided early on that the agent should never act without manager approval.",
        body: [
          {
            type: "paragraph",
            content: "The agent could have been designed to place orders automatically, but in a high-stakes operational context where a wrong order affects customers, staff, and supplier relationships, automation without oversight felt like the wrong trade-off. Every consequential action requires manager approval — the agent recommends, the manager decides."
          }
        ]
      },
      {
        type: "image",
        src: "/images/mise-ai-approval.jpg",
        alt: "Order approval screen showing manager review",
        caption: "Manager approval screen"
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "Managers can override the AI, and the AI learns from those overrides.",
        body: [
          {
            type: "paragraph",
            content: "I chose to show all ranked supplier options rather than pre-selecting the top one. A manager might have context the model doesn't — a relationship with a supplier, or knowledge of a local issue — and I wanted the design to preserve that judgment. Manual overrides feed back into the agent's future learning, so manager expertise improves the system over time."
          }
        ]
      },
      {
        type: "image",
        src: "/images/mise-ai-supplier-ranking.jpg",
        alt: "Supplier ranking list showing override option",
        caption: "Supplier ranking with override capability"
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "I made sure every AI action was explained in plain language.",
        body: [
          {
            type: "paragraph",
            content: "Every AI-generated order includes a rationale card showing the agent's reasoning, and the confirmation screen shows outreach status in real time — so the manager always knows what the agent did and why."
          }
        ]
      },
      {
        type: "image",
        src: "/images/mise-ai-rationale.jpg",
        alt: "AI rationale card explaining the agent's reasoning",
        caption: "AI rationale card in plain language"
      },
      {
        type: "text",
        category: "Iteration",
        heading: "I redesigned how the agent contacts suppliers after peer critique challenged my assumption.",
        body: [
          {
            type: "paragraph",
            content: "I'd originally designed the agent to contact all suppliers by phone — it felt like the most direct approach. But during a design critique, a peer pointed out that suppliers have their own communication preferences and that a phone call from an AI agent might not be welcome for all of them. I redesigned the agent to use a multimodal approach, contacting each supplier through their preferred method — whether phone, email, or portal. It was a shift in thinking for me: suppliers aren't just endpoints in the system, they're users too."
          }
        ]
      },
      {
        type: "image-comparison",
        left: { src: "/images/mise-ai-contact-before.jpg", alt: "Original phone-only contact approach", caption: "Original: phone-only contact" },
        right: { src: "/images/mise-ai-contact-after.jpg", alt: "Redesigned multimodal contact approach", caption: "After: multimodal contact" }
      },
      {
        type: "text",
        category: "Iteration",
        heading: "Managers needed visibility into what the agent is doing, not just what's in stock.",
        body: [
          {
            type: "paragraph",
            content: "The dashboard I originally designed showed only current stock levels and the 7-day demand forecast. But during testing I realised that when an agent is acting on your behalf, knowing what's in stock isn't enough — you need to see what it's doing about it. I added Pending Auto-Orders and an Agent Activity Log so managers could track the agent's actions in real time."
          }
        ]
      },
      {
        type: "image-comparison",
        left: { src: "/images/mise-ai-dashboard-before.jpg", alt: "Original dashboard with two cards", caption: "Original: stock levels and forecast only" },
        right: { src: "/images/mise-ai-dashboard-after.jpg", alt: "Updated dashboard with four cards", caption: "After: added auto-orders and activity log" }
      },
      {
        type: "text",
        category: "Iteration",
        heading: "I learned that designing for failure states matters as much as designing the happy path.",
        body: [
          {
            type: "paragraph",
            content: "My original confirmation flow only accounted for successful orders. When I added error handling for failed supplier contact, I initially placed it inline with the other order statuses. But testing showed that users missed it — the error was buried in the order list alongside successful orders. I moved it to a prominent notification banner at the top of the confirmation page and changed the dashboard button to flag when manual follow-up is needed. The error had to be impossible to miss, not just present."
          }
        ]
      },
      {
        type: "image-comparison",
        left: { src: "/images/mise-ai-error-before.jpg", alt: "Original confirmation with error inline", caption: "Original: error buried in order list" },
        right: { src: "/images/mise-ai-error-after.jpg", alt: "Redesigned confirmation with error banner", caption: "After: error surfaced in notification banner" }
      },
      {
        type: "text",
        category: "Impact",
        heading: "The prototype demonstrated a $46,000 per-store case for human-AI collaboration in inventory management.",
        body: [
          {
            type: "paragraph",
            content: "The financial model projected $46,000 in annual savings per store, with break-even at approximately 450 stores. The prototype covered the full flow from demand forecasting through supplier selection, manager approval, and order confirmation, including error handling for failed supplier contact."
          }
        ]
      },
      {
        type: "text",
        category: "Reflection",
        heading: "This project changed how I think about the designer's role in AI systems.",
        body: [
          {
            type: "paragraph",
            content: "This was my first time designing for agentic AI. Until this project, every system I'd designed responded to the user — this one acted for them. Knowing what to show, what to simplify, and where to ask for human input were challenges I hadn't encountered before. The throughline across every decision was keeping the human informed and in control, without making that feel like a burden."
          }
        ]
      }
    ]
  },
  /*
  {
    slug: "fastdental",
    title: "FastDental",
    subtitle: "AI powered documentation overlay for dental practices",
    intro: "Dentists in the US lose an average of 312 hours per year to clinical documentation — the result of working across fragmented systems where X-rays, notes, charting, and billing live in separate windows and software. AI scribes reduce transcription time but don't fix the fragmentation. FastDental is a non-disruptive clinical overlay that unifies everything in a single screen, on top of the systems dentists already use.",
    summary: "AI-powered clinical documentation overlay for solo dental practices",
    tags: ["Product Strategy", "UX Design", "AI"],
    metadata: [
      { label: "Role", value: "Lead Designer & Strategist" },
      { label: "Timeline", value: "Spring Semester 2026" },
      { label: "Context", value: "Product Management Essentials, Carnegie Mellon University · ProdHacks 2026" }
    ],
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
  */
  {
    slug: "luteasense",
    title: "LuteaSense",
    subtitle: "Predicting PMDD symptoms before they happen",
    intro: "LuteaSense is a multimodal biosensor patch that continuously monitors hormone levels and predicts PMDD symptoms 24-48 hours in advance — giving users the time and information they need to manage what's coming. At CMU's Medical Device Innovation and Realization (MDIR) Demo Day 2026, LuteaSense was voted 1st place overall by a panel of industry expert judges. We are now pursuing LuteaSense as a startup through CMU's Swartz Center for Entrepreneurship.",
    summary: "Led product and design for a wearable biosensor that predicts PMDD symptoms 24-48 hours in advance for women and AFAB individuals. 1st place overall at CMU MDIR Demo Day 2026, now pursuing as a Swartz Center startup.",
    tags: ["Product Design", "Women's Health", "Wearable Tech"],
    thumbnail: "/images/luteasense-thumbnail.jpg",
    heroImage: "/images/luteasense-hero.jpg",
    metadata: [
      { label: "Role", value: "Chief Product Officer" },
      { label: "Timeline", value: "Spring Semester 2026" },
      { label: "Context", value: "Medical Device Innovation and Realization, Carnegie Mellon University" }
    ],
    sections: [
      {
        type: "text",
        category: "What I Did",
        heading: "",
        body: [
          {
            type: "bullets",
            items: [
              "Led product vision, UX strategy, and companion app development as Chief Product Officer",
              "Vibecoded the full React Native frontend prototype using Windsurf",
              "Conducted AI-assisted persona interviews with simulated PMDD patients and healthcare providers, using methodology from CMU's AI Augmented Designer course",
              "Led Demo Day pitch preparation and presentation strategy"
            ]
          }
        ]
      },
      {
        type: "image",
        src: "/images/luteasense-team.jpg",
        alt: "LuteaSense team at CMU MDIR Demo Day 2026",
        caption: "LuteaSense team at MDIR Demo Day 2026"
      },
      {
        type: "text",
        category: "Context",
        heading: "PMDD affects millions of women and AFAB individuals, and current management is entirely reactive.",
        body: [
          {
            type: "paragraph",
            content: "PMDD affects an estimated 3-8% of women and AFAB individuals of reproductive age, causing severe mood and physical symptoms in the luteal phase. Current management is reactive — people experience symptoms before they can prepare. No consumer product offers advance warning grounded in continuous hormone monitoring."
          }
        ]
      },
      {
        type: "text",
        category: "The Challenge",
        heading: "This was my first time working in medical device development.",
        body: [
          {
            type: "paragraph",
            content: "Taking on the CPO role pushed me well beyond my comfort zone — into IP strategy, regulatory pathways, and the intersection of hardware and software product design. I had to lead product decisions in a domain where I had no prior experience, while learning fast enough to make those decisions well."
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
            content: "The MVP centred on five core features:"
          },
          {
            type: "bullets",
            items: [
              "Onboarding and biosensor pairing",
              "Real-time dashboard showing hormone levels and menstrual cycle stage",
              "24-48 hour symptom prediction alerts with actionable management strategies",
              "Symptom and mood logging with visualisation over time",
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
        type: "image",
        src: "/images/luteasense-app-screens.jpg",
        alt: "LuteaSense companion app prototype screens",
        caption: "Companion app prototype screens"
      },
      {
        type: "text",
        category: "Design & Development",
        heading: "I designed and vibecoded the companion app.",
        body: [
          {
            type: "paragraph",
            content: "Using Windsurf as my development environment, I vibecoded the full React Native frontend — translating my own designs directly into a working prototype without a separate engineering handoff. The MVP was built with mock data and iterated screen by screen based on product requirements."
          }
        ]
      },
      {
        type: "text",
        category: "Impact",
        heading: "1st place overall at CMU MDIR Demo Day 2026.",
        body: [
          {
            type: "paragraph",
            content: "LuteaSense was voted 1st place overall among seven competing teams by a panel of industry expert judges at the Swartz Center for Entrepreneurship, scoring consistently high across device quality, presentation, and prototype strength. Judges also connected with the mission behind the product — women's health remains one of the most underresearched areas in healthcare, and tools like LuteaSense address a gap that the industry has historically overlooked."
          }
        ]
      },
      {
        type: "text",
        category: "What's Next",
        heading: "LuteaSense is becoming a real company.",
        body: [
          {
            type: "paragraph",
            content: "We are actively pursuing LuteaSense as a startup through CMU's Swartz Center for Entrepreneurship. More details will be shared as the project develops — if you're interested in what we're building, feel free to get in touch."
          }
        ]
      }
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
