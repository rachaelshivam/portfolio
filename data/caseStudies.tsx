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

export type CaseStudySection =
  | TextSection
  | ImageSection
  | DeliverablesSection
  | TwoColumnTextSection
  | WhatIDidSection
  | MetricsSection
  | ThreeColumnSection
  | ImageComparisonSection;

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
    intro: "RoboticsCareer.org is the ARM Institute's national platform for connecting people to careers in advanced manufacturing and robotics. The platform serves a broad audience, but low engagement and no outcome data means the ARM Institute can't prove its impact. As Product Manager for a multidisciplinary team of 5, I led research and strategy to identify the highest-impact design opportunities and translate them into a product direction that could increase engagement and close the data gap.",
    summary: "Led research and product strategy for a national robotics career platform to increase engagement and give a federally funded organization the outcome data it needs to prove impact. 100% of perception measures outperformed the existing tool and mechanism trust exceeded 2x in design validation.",
    tags: ["Product Management", "UX Research", "Product Strategy"],
    metadata: [
      { label: "Role", value: "Product Manager" },
      { label: "Timeline", value: "January - July 2026" },
      { label: "Team", value: "Stephen Chen, Caelan Moglovkin, Rachael Shivam (me), Kayla Windust, Tian Zhou" }
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
              "Led product strategy and stakeholder alignment across our team, ARM, and Fivestar (ARM's external development partner)",
              "Drove key scoping decisions including targeting Gen Z/Gen Alpha based on market sizing and a broader environmental analysis",
              "Defined research strategy; wrote protocols and facilitated sessions including high school workshops",
              "Designed UX improvement screens addressing critical-severity issues identified through heuristic evaluation and usability testing",
              "Framed the value case for ARM, including defining metrics for measuring solution impact"
            ]
          }
        ]
      },
      {
        type: "text",
        category: "Context",
        heading: "",
        body: [
          {
            type: "paragraph",
            content: "The ARM Institute is a federally funded national consortium working to accelerate robotics, automation, and AI adoption across US manufacturing. RoboticsCareer.org is ARM's platform for that mission, connecting people to vetted robotics jobs and training programs, developed in collaboration with Fivestar, a Pittsburgh-based development firm."
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
            content: "RoboticsCareer.org is good at getting people through the door, but doesn't give them much reason to stay. The moment someone clicks on a job or training program, they're sent to an external listing, and ARM loses sight of whether they pursued training, applied, or got hired. That's a problem for a federally funded organization that needs to demonstrate impact."
          },
          {
            type: "paragraph",
            content: "So, ARM came to us with three core challenges for RoboticsCareer.org:"
          }
        ]
      },
      {
        type: "three-column",
        columns: [
          {
            heading: "01",
            body: "Help them understand their current and future users"
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
            content: "Across 7 methods and 190 participants, we spoke to high schoolers and college students directly, but also to the people who influence their decisions: parents, teachers, and robotics program leaders. We wanted to understand how these groups shape perceptions of the field and engage younger audiences, and to surface barriers and motivators across the full journey, not just at the point of platform interaction."
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
        heading: "",
        body: [
          {
            type: "paragraph",
            content: "\"This is the most valuable research I've seen come out of one of these capstone projects.\" — Livia Rice, Senior Director of Communications, ARM Institute"
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "In a workshop with ARM, we made the call together.",
        body: [
          {
            type: "paragraph",
            content: "Rather than chase the biggest problem — convincing a generation to care about manufacturing — we would focus on making the platform as good as it can be for everyone who already lands on it, and give ARM a way to see outcomes."
          },
          {
            type: "paragraph",
            content: "These two insights, combined with ARM's need to track outcomes, became our two guiding questions. How might we turn someone's interest into a real path? And: How might we make that path trackable, so ARM can finally see it?"
          }
        ]
      },
      {
        type: "text",
        category: "Solution",
        heading: "We designed three integrated solutions, each addressing a different stage of the career discovery journey and feeding into the next.",
        body: []
      },
      {
        type: "two-column-text",
        category: "Solution",
        heading: "01 Career Interest Quiz: Connecting interests to roles",
        left: {
          heading: "What it does",
          body: "A scenario-based quiz using day-in-the-life questions to help younger users connect the field to their existing interests. Results show multiple ranked roles — each with actionable next steps and a visible path upward from entry-level positions — rather than a single verdict."
        },
        right: {
          heading: "Design rationale",
          body: "We chose a narrative format over a traditional questionnaire after testing both — participants found it more engaging, personal, and trustworthy. Quiz length was deliberate: users trusted results more when they felt the quiz had gathered enough information to earn them. Results are transparent about how each answer mapped to the match, something users explicitly asked for."
        }
      },
      {
        type: "image",
        src: "/images/roboticscareer-quiz.jpg",
        alt: "Career Interest Quiz screens",
        caption: "Career Interest Quiz screens"
      },
      {
        type: "two-column-text",
        category: "Solution",
        heading: "02 Career Journey Map: Showing the path forward",
        left: {
          heading: "What it does",
          body: "Once a user sets a target role from their quiz results, the journey map shows them the full route — milestones from training through certification, first job, and beyond."
        },
        right: {
          heading: "Design rationale",
          body: "Our research showed users don't experience careers as linear. A map that ends at the first job felt incomplete — it answered 'how do I get in?' but not 'what does a career here actually look like?' Continuing the loop past employment gives users a reason to stay engaged with the platform long after their first hire."
        }
      },
      {
        type: "image",
        src: "/images/roboticscareer-journeymap.jpg",
        alt: "Career Journey Map screens",
        caption: "Career Journey Map screens"
      },
      {
        type: "two-column-text",
        category: "Solution",
        heading: "03 Career Dashboard: Tracking progress and closing ARM's data gap",
        left: {
          heading: "What it does",
          body: "A customizable, widget-based home where users track applications, saved jobs, and training in one place. Users can rearrange, resize, and add widgets to match their priorities. A one-tap self-reporting nudge appears when users return to the platform after taking an action — asking them to log what they did, closing ARM's data gap on applications, training enrolment, completions, and hires for the first time."
        },
        right: {
          heading: "Design rationale",
          body: "Customizability reflects a core research finding: users at different career stages need fundamentally different views. The nudge is timed to the moment of return because testing showed users are most likely to self-report immediately after taking an action — not when prompted later. That timing is what makes the data reliable enough for ARM to use."
        }
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
            value: "7.00/7",
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
            content: "ARM and Fivestar were enthusiastic following our final presentation. We've handed over all deliverables, implementation guidelines, and documentation, and are now waiting for deployment, after which we'll have the real-world metrics to back up what our testing showed."
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
            content: "This was my first time working as a Product Manager on a team. The hardest adjustment was knowing when to direct and make a call on scope or strategy, and when to step back and let the designers own the decision."
          },
          {
            type: "paragraph",
            content: "Translating our research and design into something ARM could act on, in language that connected to their funding pressures and organisational goals, required a different kind of thinking than I'd practiced before. Part of that was defining the right metrics for measuring impact, because without deployed solutions, the case for our work had to be built on evidence we could generate ourselves."
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
    intro: "Existing Type 2 Diabetes apps aren't designed for the realities of Nigeria — its infrastructure, its culture, or the collaborative nature of diabetes care there. I designed a culturally grounded mobile prototype that was co-designed through 13 workshops with 19 participants in Port Harcourt, then evaluated by 30 additional users through think-aloud sessions and interviews. The work produced two publications at ACM DIS 2025 and ACM AfriCHI 2025, contributing methodological guidance for designing digital health tools that are locally relevant and regionally adaptable across diverse African communities.",
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
            content: "University restrictions prevented direct access to Port Harcourt users, so every decision had to be grounded in existing research data and validated through close collaboration with the Nigerian PhD researcher leading the project. I was designing for a cultural context I hadn't experienced, infrastructure realities I'd never designed around, and three distinct user groups — patients, caregivers, and community pharmacists — each with different needs that the app had to address while enabling them to work together."
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
            content: "Only 12.1% of Nigerians experience quality internet services, just 36% of urban Nigerians own a smartphone, and data costs are high. Most existing solutions had been built on assumptions that simply don't hold in Port Harcourt — connectivity, device access, and data affordability that couldn't be taken for granted."
          }
        ]
      },
      {
        type: "text",
        category: "Research",
        heading: "T2D care in Nigeria is collaborative by necessity, but largely invisible.",
        body: [
          {
            type: "paragraph",
            content: "In Nigeria, diabetes care doesn't happen in isolation. Patients rely on caregivers for daily support, and community pharmacists — more accessible than doctors — often serve as the primary point of clinical contact. This care triad is real but largely informal, held together by community relationships rather than formal systems."
          },
          {
            type: "paragraph",
            content: "Working with interview transcripts and survey data from Port Harcourt, I adopted an Afrocentric approach — rooting design decisions in the sociocultural contexts and lived experiences of the end users rather than importing Western assumptions. Empathy mapping across all three groups surfaced shared needs — for better T2D education, culturally relevant nutritional guidance, and improved communication. Journey maps revealed where the informal, largely unregulated care relationships that already existed could be formalised and better supported through the app."
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
            content: "Android was the clear platform choice, as it accounts for over 86% of smartphone users in Nigeria. But I also had to design for Port Harcourt's infrastructure realities: low connectivity, high data costs, and limited device storage. That meant cutting video consultations, heavy media, and always-connected features entirely. The core features I did include were designed to work within these constraints — lightweight, data-efficient, and functional without a reliable connection."
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
    subtitle: "Designing trust into autonomous AI",
    intro: "Fast-casual restaurants lose around $179,000 per store annually from inventory mismanagement — a problem that existing tools flag but don't fix. As Lead Designer on a team of five, I designed and built the end-to-end interface for an agentic AI system that forecasts demand, ranks suppliers, and places orders — pausing for human approval before executing. The financial model projected $46,000 in annual savings per store, and the prototype was praised by faculty for its completeness and human-in-the-loop design decisions.",
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
              "Designed and built the end-to-end interface for an agentic AI inventory management system",
              "Led consequence scanning to identify and mitigate risks including unfair supplier ranking",
              "Applied FATE principles (fairness, accountability, transparency, explainability) to every design decision, drawing on Microsoft's Responsible AI framework",
              "Vibecoded the full interactive prototype in React, translating design decisions directly into a working demo",
              "Prototyped and simulated a live supplier call using GPT voice mode to stress-test the ordering module",
              "Presented at the CMU Design of AI Products and Services class pitch day"
            ]
          }
        ]
      },
      {
        type: "text",
        category: "Context",
        heading: "The tools that exist for this problem solve the wrong part of it.",
        body: [
          {
            type: "paragraph",
            content: "Fast-casual restaurants operate on tight margins and lean teams. Existing inventory tools tell managers what's running low, but leave everything else — forecasting demand, choosing suppliers, placing orders, and tracking outcomes — to them. Mise.AI was designed to handle that entire chain: predicting what's needed, recommending who to order from, contacting suppliers directly, and surfacing the result for manager approval."
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
            content: "Before committing to the concept, I led the team through consequence scanning to anticipate risks — including unfair supplier ranking and good suppliers being incorrectly flagged. It was important to me that we designed mitigations in from the outset rather than treating them as edge cases."
          }
        ]
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
            content: "The financial model projected $46,000 in annual savings per store, with break-even at approximately 450 stores. The prototype covered the full flow from demand forecasting through supplier selection, manager approval, and order confirmation, including error handling for failed supplier contact. Faculty praised the prototype at the class pitch day for its completeness and the clarity of its human-in-the-loop design decisions."
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
