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

export type CarouselSection = {
  type: "carousel";
  slides: Array<{
    src: string;
    alt: string;
  }>;
};

export type CaseStudySection =
  | TextSection
  | ImageSection
  | DeliverablesSection
  | TwoColumnTextSection
  | WhatIDidSection
  | MetricsSection
  | ThreeColumnSection
  | ImageComparisonSection
  | PullQuoteSection
  | CarouselSection;

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
    intro: "RoboticsCareer.org is the ARM Institute's national platform for connecting people to careers in advanced manufacturing and robotics. The platform has engagement and visibility challenges: 87.3% of account holders never return after signing up, and ARM lacks visibility into user outcomes, making it difficult to demonstrate impact to federal funders. As Product Manager for a multidisciplinary team of five, I led research and strategy that shaped a solution ecosystem designed to give users more reasons to return and ARM a way to measure their career journeys.",
    summary: "Led product strategy and research for a federally funded robotics career platform to increase engagement and close a critical outcome data gap. 100% of perception measures outperformed the existing tool, with return intent exceeding 2.5x in design validation.",
    tags: ["Product Management", "UX Research", "Product Strategy"],
    metadata: [
      { label: "Role", value: "Product Manager" },
      { label: "Timeline", value: "January - July 2026" },
      { label: "Team", value: "Stephen Chen, Caelan Moglovkin, Kayla Windust, Tian Zhou" },
      { label: "Context", value: "MHCI Capstone" }
    ],
    thumbnail: "/images/case-studies/roboticscareer-thumbnail.mp4",
    heroImage: "/images/case-studies/roboticscareer-thumbnail.mp4",
    sections: [{
        type: "text",
        category: "What I did",
        heading: "",
        body: [
          {
            type: "bullets",
            items: [
              "Led product strategy and cross-functional coordination across our team, the ARM Institute, and Fivestar, ARM's external software development partner",
              "Defined audience strategy using market sizing and environmental analysis",
              "Led research from planning through synthesis, translating findings into product direction",
              "Drove scoping and strategic decisions as research changed our understanding of the problem",
              "Defined success metrics and the value case for the ARM Institute"
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
            content: "RoboticsCareer.org helps people discover careers in advanced manufacturing and robotics, but gives them little reason to return. 87.3% of account holders never return after signing up. Additionally, the platform directs users to external sites to pursue jobs, training, and other opportunities, but ARM has no visibility into what happens once they leave—making it difficult to understand the platform's impact and demonstrate its value to federal funders."
          },
          {
            type: "paragraph",
            content: "ARM came to us with three questions:"
          }
        ]
      },
      {
        type: "three-column",
        columns: [
          {
            heading: "01.",
            body: "Who are our current and future users?"
          },
          {
            heading: "02.",
            body: "How might we grow our userbase?"
          },
          {
            heading: "03.",
            body: "How might we give people a reason to keep coming back?"
          }
        ]
      },
            {
        type: "text",
        category: "The Challenge",
        heading: "",
        body: [
          {
            type: "paragraph",
            content: "These questions gave us a starting point, but ARM encouraged us to follow the research wherever it led. Our challenge was to understand what users actually needed from RoboticsCareer.org and where the platform could have the greatest impact."
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "We started with ARM's four user groups and used research to determine where to focus.",
        body: [
          {
            type: "paragraph",
            content: "ARM identified four user segments: Gen Z, Gen Alpha, career switchers, and veterans. I led user segmentation using TAM/SAM/SOM modeling and environmental analysis to identify where we could have the greatest impact within the project timeline."
          },
          {
            type: "paragraph",
            content: "This led us to focus on Gen Z and Gen Alpha, an obtainable audience of ~750,000 compared with fewer than 90,000 for the other two segments."
          }
        ]
      },
      {
        type: "image",
        src: "/images/roboticscareer-segments.png",
        alt: "User segmentation diagram",
        caption: "User segmentation diagram"
      },
      {
        type: "text",
        category: "Research",
        heading: "I led a mixed-methods research strategy to understand the ecosystem shaping career journeys.",
        body: [
          {
            type: "paragraph",
            content: "Across seven methods and 190 participants, we spoke to high schoolers and college students directly, but also to the people who influence their decisions: parents, teachers, and robotics program leaders."
          },
          {
            type: "paragraph",
            content: "We wanted to understand how these groups shape perceptions of the field and engage younger audiences, and to surface barriers and motivators across the full journey, not just at the point of platform interaction."
          }
        ]
      },
      {
        type: "image",
        src: "/images/roboticscareer-research.png",
        alt: "Research methods breakdown",
        caption: "Research methods breakdown"
      },
      {
        type: "image",
        src: "/images/roboticscareer-workshop.png",
        alt: "Facilitating research at a high school workshop",
        caption: "Facilitating research at a high school workshop"
      },
      {
        type: "text",
        category: "Research",
        heading: "Our research surfaced five insights that pointed to two different kinds of opportunity.",
        body: [
          {
            type: "paragraph",
            content: "Three revealed broader systemic barriers, including outdated perceptions of manufacturing and limited awareness of what careers in the field actually look like. Two pointed to opportunities RoboticsCareer.org could directly address:"
          }
        ]
      },
      {
        type: "two-column-text",
        left: {
          body: "Insight 1: Career identity forms early.\nBy college, most students have already decided on their career path, while younger audiences are more open to new possibilities."
        },
        right: {
          body: "Insight 2: People don't reject the field — they just don't know enough to see themselves in it.\nUsers were open to careers in robotics and manufacturing but struggled to connect the field to their own skills and interests."
        }
      },
      {
        type: "text",
        category: "Research",
        heading: "",
        body: [
          {
            type: "paragraph",
            content: "These findings led us to narrow our primary audience from Gen Z and Gen Alpha broadly to high schoolers. They showed the strongest interest and openness while still being early in their career journeys."
          }
        ]
      },
      {
        type: "text",
        category: "Client Alignment",
        heading: "We brought the broader research back to ARM to align on where we could intervene.",
        body: [
          {
            type: "paragraph",
            content: "The three systemic insights raised a strategic question: Should we broaden our intervention to address these systemic barriers, or focus on what RoboticsCareer.org could directly influence?"
          },
          {
            type: "paragraph",
            content: "We brought this tension to ARM in a client workshop. Together, we made the decision to focus the project on RoboticsCareer.org: making the platform more useful for people who land on it and giving them reasons to return. The broader systemic barriers were important, but too large to meaningfully address within our project timeline. Focusing on the platform also gave ARM greater control over the intervention and its outcomes."
          }
        ]
      },
      {
        type: "image",
        src: "/images/roboticscareer-workshop.jpg",
        alt: "Client workshop with ARM",
        caption: "Client workshop with ARM"
      },
      {
        type: "pullquote",
        quote: "This is the most valuable research I've seen come out of one of these capstone projects.",
        attribution: "Livia Rice, Senior Director of Communications, ARM Institute"
      },
      {
        type: "text",
        category: "Solution",
        heading: "We designed three connected experiences to give users more reasons to return and give ARM a way to measure their career journeys.",
        body: [
          {
            type: "paragraph",
            content: "Rather than treating RoboticsCareer.org as a directory of jobs and training, we designed a system that supports users from discovering a possible career → understanding the path → taking action → tracking what happens next."
          }
        ]
      },
      {
        type: "text",
        category: "Solution",
        heading: "01. Career Interest Quiz: Connecting interests to roles",
        body: [
          {
            type: "paragraph",
            content: "A scenario-based quiz connects users' existing interests to robotics and manufacturing careers, surfacing multiple ranked roles and actionable next steps."
          },
          {
            type: "bullets",
            items: [
              "We chose a narrative format over a traditional questionnaire after testing both, as participants found it more engaging, personal, and trustworthy.",
              "We kept the quiz longer than we initially expected, refining its length through multiple iterations after testing showed that participants trusted the results more when the quiz felt thorough.",
              "The results are transparent about how each answer mapped to the match, something users explicitly asked for."
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
        heading: "02. Career Journey Map: Showing the path forward",
        body: [
          {
            type: "paragraph",
            content: "After a user selects a target role from their quiz results, the journey map lays out a customizable path: what training they need, what certifications to pursue, and what progression looks like beyond their first job. Each milestone gives users a reason to return to the platform, turning a one-time visit into an ongoing relationship."
          },
          {
            type: "bullets",
            items: [
              "Milestones are structured around training, certification, and progression, giving users a reason to return to the platform at each stage.",
              "The map is designed to be flexible rather than linear, so users can loop back into training, branch into adjacent roles, or pursue different progression paths based on their own goals."
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
        heading: "03. Career Dashboard: Tracking progress and closing ARM's data gap",
        body: [
          {
            type: "paragraph",
            content: "When a user clicks out to apply for a job or enrol in training on an external site, the dashboard logs it. When they return, a one-tap check-in captures what happened — whether they applied, enrolled, completed training, or got hired. For the first time, ARM gets visibility into outcomes that previously disappeared the moment a user left the platform."
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
        category: "Impact",
        heading: "Our solutions outperformed the existing platform across every measure we tested.",
        body: []
      },
      {
        type: "metrics",
        metrics: [
          {
            value: "6.67/7",
            label: "Trust in results",
            comparison: "vs 3.00 existing quiz"
          },
          {
            value: "7/7",
            label: "Career discovery",
            comparison: "vs 3.33 existing quiz"
          },
          {
            value: "6.67/7",
            label: "Return intent",
            comparison: "vs 2.67 existing quiz"
          },
          {
            value: "100%",
            label: "Outcome visibility",
            comparison: "No existing tracking mechanism"
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
            content: "Because our solutions weren't deployed during the project timeline, I designed testing protocols to demonstrate the quiz's value, measuring trust, return intent, and career discovery against the existing tool. Outcome visibility required no comparison—ARM currently has no way to track outcomes after users leave the platform, which the Journey Map and Dashboard are designed to address."
          },
          {
            type: "paragraph",
            content: "ARM and Fivestar were enthusiastic following our final presentation. We handed over all deliverables, implementation guidelines, and documentation. The real test will come with deployment: live usage will show whether the patterns we saw in testing hold at scale."
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
            content: "This was my first time working as a Product Manager on a team. The biggest adjustment was finding the right balance between making clear calls on scope and strategy and giving my team the autonomy to lead in their areas of expertise."
          },
          {
            type: "paragraph",
            content: "I also learned to think beyond the user when making product decisions. Our research and design had to address user needs while also making sense within ARM's organizational goals, funding pressures, and need to demonstrate impact."
          },
          {
            type: "paragraph",
            content: "Finally, this project reinforced something I believe strongly about the PM role: being hands-on matters. I didn't just set direction — I wrote research protocols, facilitated interviews and workshops, designed screens, and used AI tools to accelerate the work. In a small team with a tight project timeline, a PM who can contribute directly moves the work forward faster."
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
    summary: "Designed a culturally grounded mobile technology probe for collaborative Type 2 Diabetes care in Nigeria. Contributed methodological guidance for cross-cultural digital health design through two ACM publications.",
    tags: ["UX Research", "Prototyping", "mHealth"],
    metadata: [
      { label: "Role", value: "UX Designer & Researcher" },
      { label: "Timeline", value: "May – September 2023" },
      { label: "Context", value: "University of Bristol MSc Dissertation" }
    ],
    thumbnail: "/images/okuma-thumbnail.png",
    heroImage: "/images/okuma-thumbnail.png",
    sections: [
      {
        type: "text",
        category: "The Challenge",
        heading: "I couldn't talk to the people I was designing for, or access the context I was designing for.",
        body: [
          {
            type: "paragraph",
            content: "The tool needed to work for real people in Port Harcourt — a city with its own infrastructure constraints, cultural dynamics, and healthcare realities I hadn't experienced. But ethical restrictions prevented direct access to users there."
          },
          {
            type: "paragraph",
            content: "To navigate this, I built a close working relationship with the Nigerian PhD researcher leading the project, meeting regularly to sense-check my assumptions against his cultural knowledge and lived experience of the context. He was an essential collaborator, but he couldn't replace the end users, so every design decision also had to be grounded in existing research data and leave room for the co-design workshops to surface what I couldn't anticipate."
          }
        ]
      },
      {
        type: "text",
        category: "The Challenge",
        heading: "Diabetes care in Port Harcourt runs primarily on informal relationships, not formal systems.",
        body: [
          {
            type: "paragraph",
            content: "Patients rely on caregivers for daily support, and community pharmacists, who are often more accessible than doctors in Nigeria's strained public health system, serve as the primary clinical contact. These three groups already function as a care triad, but their coordination is informal and largely unsupported by any existing tool."
          },
          {
            type: "paragraph",
            content: "I needed to design a single product that served all three groups, formalised relationships that had never been digitised, and navigated a healthcare structure I had no prior experience of."
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "Existing solutions fell short.",
        body: [
          {
            type: "paragraph",
            content: "I conducted a scoping review of diabetes mHealth research in Africa and a competitive analysis of 8 existing apps. Existing interventions in Nigeria were generally considered useful by their audiences, but were hindered by poor UI design, a lack of inclusivity, and information that was difficult for users to understand. None had been designed for the patient-caregiver-pharmacist triad, and none facilitated collaborative care or peer support."
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "I used an Afrocentric approach to inform my design direction.",
        body: [
          {
            type: "paragraph",
            content: "Working with interview transcripts and survey data from Port Harcourt, I adopted an Afrocentric approach — rooting design decisions in the sociocultural contexts and lived experiences of the end users rather than in Western assumptions.",
          },
          {
            type: "paragraph",
            content: "Empathy mapping across all three groups surfaced shared needs for better Type 2 Diabetes education, culturally relevant nutritional guidance, and improved communication. Journey maps revealed where the informal, largely unregulated care relationships that already existed could be formalised and better supported through the app."
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
        heading: "I intentionally created a prototype that invited co-design.",
        body: [
          {
            type: "paragraph",
            content: "I designed a technology probe — an intentionally open-ended prototype built in Figma so the PhD researcher could easily and quickly modify it during workshops as participants gave feedback. The fidelity needed to be high enough for parcitipants to envision the product, but open enough for them to shape the design rather than just react to it."
          }
        ]
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "I built around what users in Port Harcourt actually had access to.",
        body: [
          {
            type: "paragraph",
            content: "Only 12.1% of Nigerians experience quality internet services, just 36% of urban Nigerians own a smartphone, and data costs are high. I initially designed for both desktop and mobile, but with over 83% of Nigeria's internet traffic coming from mobile devices, I instead focused on a mobile prototype. Android accounts for over 86% of smartphone users in Nigeria, so I used Material Design 3 guidelines so the interface would feel familiar."
          },
          {
            type: "paragraph",
            content: "I also had to design for Port Harcourt's infrastructure realities: low connectivity, high data costs, and limited device storage. That meant cutting video consultations, heavy media, and always-connected features entirely. The core features I did include were designed to work within these constraints — lightweight, data-efficient, and functional without a reliable connection."
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
          }
        ]
      },
      {
        type: "carousel",
        slides: [
          { src: "/images/okuma-health-tracker.png", alt: "Health Tracker feature" },
          { src: "/images/okuma-recipes.png", alt: "Recipes feature" },
          { src: "/images/okuma-network.png", alt: "Network feature" },
          { src: "/images/okuma-forum.png", alt: "Forum feature" },
          { src: "/images/okuma-education.png", alt: "Education feature" }
        ]
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "Proxy testing helped catch usability issues before the probes reached Port Harcourt.",
        body: [
          {
            type: "paragraph",
            content: "Since I couldn't access participants in Port Harcourt, I ran usability testing with four proxy users before handoff. They couldn't validate cultural fit, but they surfaced problems with terminology, iconography, and visual differentiation between user types that I was able to fix before the probes reached Port Harcourt."
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
            content: "My technology probe was used in 13 co-design workshops with 19 participants — patients, caregivers, and pharmacists from diverse ethnic groups in Port Harcourt. Participants shaped the features, named the app \"Okuma\" through consensus, and identified where the design aligned with local cultural norms and where it fell short across sociocultural boundaries within the same city."
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
    intro: "Fast-casual restaurants lose around $179,000 per store annually from inventory mismanagement, a problem that existing tools flag but don't fix. Operating on tight margins and lean teams, these restaurants need more than alerts. They need action. As Lead Designer on a team of five, I designed and built the end-to-end interface for an agentic AI system that forecasts demand, ranks suppliers, and places orders, pausing for human-in-the-loop approval before executing. The financial model projected $46,000 in annual savings per store.",
    summary: "Built the end-to-end interface for an agentic AI inventory system for fast-casual restaurants with human-in-the-loop oversight, making the agent's automation visible, trustworthy, and controllable. Financial model projected $46,000 in annual savings per store.",
    tags: ["AI Design", "Product Design", "Agentic Systems"],
    thumbnail: "/images/case-studies/mise-ai-thumbnail.mp4",
    heroImage: "/images/case-studies/mise-ai-thumbnail.mp4",
    metadata: [
      { label: "Role", value: "Lead Product Designer" },
      { label: "Timeline", value: "2 weeks (Fall 2025)" },
      { label: "Team", value: "Aditi Agni, Leo Li, Ram Kaushik Ramalingan, Devisha Tayal" },
      { label: "Context", value: "Design of AI Products & Services, CMU" }
    ],
    sections: [
      {
        type: "text",
        category: "What I did",
        heading: "",
        body: [
          {
            type: "bullets",
            items: [
              "Designed and vibecoded the full interactive prototype in React using Figma Make and Claude, translating design decisions directly into a working demo",
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
        category: "The System",
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
        heading: "",
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
            content: "Before committing to the concept, I led the team through consequence scanning to anticipate risks and design mitigations from the outset. We mapped intended and unintended consequences across both positive and negative outcomes. Key risks included over/under-stocking, good suppliers being incorrectly flagged, and over-reliance on certain suppliers due to algorithm dependency."
          },
          {
            type: "paragraph",
            content: "The mitigations I designed for included human-in-the-loop approval for every order, transparent rationale for AI recommendations, manager overrides on supplier selection, and prominent error handling when orders fail."
          }
        ]
      },
      {
        type: "image",
        src: "/images/mise-ai-consequence-scanning.png",
        alt: "Consequence scanning workshop output",
        caption: "Key risks identified from the consequence scanning exercise"
      },
      {
        type: "text",
        category: "Key Design Decisions",
        heading: "I decided early on that the agent should never act without manager approval.",
        body: [
          {
            type: "paragraph",
            content: "The agent could have been designed to place orders automatically, but in a high-stakes operational context where a wrong order affects customers, staff, and supplier relationships, automation without oversight felt like the wrong trade-off. Every consequential action requires manager approval. While the agent recommends, it's the manager who decides."
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
        heading: "Managers have visibility at every stage.",
        body: [
          {
            type: "paragraph",
            content: "Before approval, every order includes a rationale card explaining the agent's reasoning. After approval, the confirmation screen shows outreach status in real time."
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
            content: "I'd originally designed the ordering flow to show the agent contacting all suppliers by phone — it felt like the most direct approach. But during a design critique, a peer pointed out that suppliers have their own communication preferences and that a phone call from an AI agent might not be welcome for all of them. I redesigned the flow to show the agent using a multimodal approach, contacting each supplier through their preferred method — whether phone, email, or portal."
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
    intro: "LuteaSense is a multimodal biosensor patch that continuously monitors hormone levels and predicts Premenstrual Dysphoric Disorder (PMDD) symptoms 24-48 hours in advance — giving users the time and information they need to manage what's coming. At Demo Day for CMU's Medical Device Innovation and Realization (MDIR) course, LuteaSense was voted 1st place overall by a panel of industry expert judges. We are now pursuing LuteaSense as a startup through CMU's Swartz Center for Entrepreneurship.",
    summary: "Led product and design for a wearable biosensor and companion app that predict PMDD symptoms 24-48 hours in advance for women and AFAB individuals. Awarded 1st place at CMU MDIR Demo Day 2026, now pursuing as a Swartz Center startup.",
    tags: ["Product Design", "0->1", "Wearable Tech"],
    thumbnail: "/images/luteasense-thumbnail.png",
    heroImage: "/images/luteasense-thumbnail.png",
    metadata: [
      { label: "Role", value: "Chief Product Officer" },
      { label: "Timeline", value: "January - May 2026" },
      { label: "Team", value: "Hanlin Cao, Aashna Jiju, Yunwei Li, Rujuta Thombre" },
      { label: "Context", value: "Medical Device Innovation & Realization, CMU" }
    ],
    sections: [
      {
        type: "text",
        category: "What I did",
        heading: "",
        body: [
          {
            type: "bullets",
            items: [
              "Led product strategy, UX design, feature definition, and IP/regulatory planning as Chief Product Officer",
              "Vibecoded the full React Native frontend prototype",
              "Led Demo Day pitch preparation and presentation strategy"
            ]
          }
        ]
      },
      {
        type: "image",
        src: "/images/luteasense-team.png",
        alt: "LuteaSense team at CMU MDIR Demo Day 2026",
        caption: "LuteaSense team at MDIR Demo Day 2026"
      },
      {
        type: "text",
        category: "Context",
        heading: "PMDD affects millions of women and AFAB individuals, but current management lacks personalized, real-time prediction.",
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
          },
          {
            type: "paragraph",
            content: "Before making any product decisions, I mapped the stakeholder landscape and clinical care cycle to build a foundation for the work ahead."
          }
        ]
      },
      {
        type: "image",
        src: "/images/luteasense-stakeholder-map.png",
        alt: "Stakeholder map showing the relationships between patients, providers, and caregivers",
        caption: "Stakeholder map showing the relationships between patients, providers, and caregivers"
      },
      {
        type: "image",
        src: "/images/luteasense-care-cycle.png",
        alt: "Cycle of care for PMDD management, from symptom onset through treatment",
        caption: "Cycle of care for PMDD management, from symptom onset through treatment"
      },
      {
        type: "text",
        category: "Product",
        heading: "The app gives users advance warning and the strategies to act on it.",
        body: [
          {
            type: "paragraph",
            content: "Using Windsurf, I vibecoded the full React Native frontend from my own designs, then worked with a teammate on backend integration for the final functional prototype."
          },
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
            content: "The decision to pair predictions with actionable strategies rather than notifications alone was grounded in existing PMDD coping research, which shows that structured self-care and coping strategies during the premenstrual phase meaningfully reduce symptom impact."
          }
        ]
      },
      {
        type: "image",
        src: "/images/luteasense-app-screens.png",
        alt: "LuteaSense companion app prototype screens",
        caption: "Companion app prototype screens"
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
        type: "image",
        src: "/images/luteasense-demo-setup.png",
        alt: "LuteaSense demo setup at MDIR Demo Day 2026",
        caption: "LuteaSense demo setup at MDIR Demo Day 2026"
      },
      {
        type: "text",
        category: "What's Next",
        heading: "We're exploring what's next for LuteaSense.",
        body: [
          {
            type: "paragraph",
            content: "We are pursuing LuteaSense further through CMU's Swartz Center for Entrepreneurship. More details will be shared as the project develops — if you're interested in what we're building, feel free to get in touch."
          }
        ]
      }
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
