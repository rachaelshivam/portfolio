import Image from "next/image";
import FadeUp from "./FadeUp";
import type {
  CaseStudySection,
  TextBodyBullets,
  TextBodyParagraph,
  TextBodyTwoColumn,
  TwoColumnTextSection,
  WhatIDidSection,
  MetricsSection,
  ThreeColumnSection,
  ImageComparisonSection,
  PullQuoteSection,
} from "@/data/caseStudies";

function TextBodyContent({
  body,
}: {
  body: Array<TextBodyParagraph | TextBodyBullets | TextBodyTwoColumn>;
}) {
  return (
    <div className="case-study-body mt-[var(--space-5)] space-y-[var(--space-5)]">
      {body.map((block, index) => {
        if (block.type === "paragraph") {
          const insightMatch = block.content.match(/^(Insight \d+:)/);
          if (insightMatch) {
            const [label, rest] = block.content.split(/: /);
            const firstSentenceEnd = rest.indexOf('. ');
            const firstSentence = firstSentenceEnd !== -1 ? rest.substring(0, firstSentenceEnd + 1) : rest;
            const remainingText = firstSentenceEnd !== -1 ? rest.substring(firstSentenceEnd + 1) : '';
            return (
              <p
                key={index}
                className="text-[1rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]"
              >
                <span className="font-semibold">{label}</span> <span className="font-semibold">{firstSentence}</span>{remainingText}
              </p>
            );
          }
          return (
            <p
              key={index}
              className="text-[1rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]"
            >
              {block.content}
            </p>
          );
        }

        if (block.type === "bullets") {
          return (
            <div key={index}>
              {block.intro && (
                <p className="mb-[var(--space-3)] text-[1rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]">
                  {block.intro}
                </p>
              )}
              <ul className="list-disc space-y-[var(--space-2)] text-[1rem] text-[#404040] pl-[var(--space-4)]">
                {block.items.map((item) => (
                  <li key={item} className="text-[1rem] leading-[var(--leading-relaxed)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="grid gap-[var(--space-6)] md:grid-cols-2"
          >
            {block.columns.map((column) => (
              <div key={column.heading}>
                <p className="case-study-label">{column.heading}</p>
                <ul className="case-study-list mt-[var(--space-3)] space-y-[var(--space-2)] text-[1rem] text-[#404040]">
                  {column.items.map((item) => (
                    <li key={item} className="text-[1rem] leading-[var(--leading-relaxed)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function CaseStudySectionBlock({ section, showCategory, previousSectionIsHeadingOnly }: { section: CaseStudySection; showCategory: boolean; previousSectionIsHeadingOnly: boolean }) {
  switch (section.type) {
    case "text":
      return (
        <FadeUp>
          <section className={`case-study-section ${previousSectionIsHeadingOnly ? '-mt-[var(--space-8)]' : ''}`}>
            {showCategory && (
              section.category?.toLowerCase().replace(/[.,!?;:]*$/, '') === "what i did" ? (
                <h2 className="font-bold text-[1.375rem] text-[#212121]">
                  {section.category}
                </h2>
              ) : (
                <p className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-[#3D3D3D]">
                  {section.category}
                </p>
              )
            )}
            <h2 className="mt-[var(--space-3)] font-bold text-[1.375rem] text-[#212121]">
              {section.heading}
            </h2>
            <TextBodyContent body={section.body} />
          </section>
        </FadeUp>
      );

    case "image":
      return (
        <FadeUp>
          <section className="case-study-section case-study-section--full">
            <figure>
              <div className="w-full overflow-hidden rounded-xl bg-[var(--color-border)]">
                <Image
                  src={section.src}
                  alt={section.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <figcaption className="mt-[var(--space-3)] text-sm text-[var(--color-text-muted)]">
                {section.caption}
              </figcaption>
            </figure>
          </section>
        </FadeUp>
      );

    case "deliverables":
      return (
        <FadeUp>
          <section className="case-study-section">
            <h2 className="font-bold text-[1.375rem] text-[#212121]">
              {section.heading ?? "Deliverables"}
            </h2>
            <ul className="case-study-deliverables mt-[var(--space-5)]">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </FadeUp>
      );

    case "two-column-text":
      return (
        <FadeUp>
          <section className="case-study-section">
            {showCategory && section.category && (
              section.category.toLowerCase().replace(/[.,!?;:]*$/, '') === "what i did" ? (
                <h2 className="font-bold text-[1.375rem] text-[#212121]">
                  {section.category}
                </h2>
              ) : (
                <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[#3D3D3D]">
                  {section.category}
                </p>
              )
            )}
            {section.heading && (
              <h2 className="mt-[var(--space-3)] font-bold text-[1.375rem] text-[#212121]">
                {section.heading}
              </h2>
            )}
            <div className="mt-[var(--space-5)] grid gap-[var(--space-6)] md:grid-cols-2">
              <div>
                {section.left.heading && (
                  <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[#3D3D3D]">
                    {section.left.heading}
                  </p>
                )}
                <p className="mt-[var(--space-3)] text-[1rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]">
                  {section.left.body}
                </p>
              </div>
              <div>
                {section.right.heading && (
                  <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[#3D3D3D]">
                    {section.right.heading}
                  </p>
                )}
                <p className="mt-[var(--space-3)] text-[1rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]">
                  {section.right.body}
                </p>
              </div>
            </div>
          </section>
        </FadeUp>
      );

    case "what-i-did":
      return (
        <FadeUp>
          <section className="case-study-section">
            <h2 className="font-bold text-[1.375rem] text-[#212121]">
              What I Did
            </h2>
            <ul className="case-study-deliverables mt-[var(--space-5)]">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </FadeUp>
      );

    case "metrics":
      return (
        <FadeUp>
          <section className="case-study-section">
            <div className="grid gap-[var(--space-6)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {section.metrics.map((metric, index) => (
                <div key={index}>
                  <p className="font-bold text-[var(--color-text-primary)] text-[2rem] leading-[var(--leading-tight)]">
                    {metric.value}
                  </p>
                  <p className="mt-[var(--space-2)] text-[var(--color-text-muted)] text-[1rem]">
                    {metric.label}
                  </p>
                  {metric.comparison && (
                    <p className="mt-[var(--space-1)] text-[var(--color-text-muted)] text-[0.875rem]">
                      {metric.comparison}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </FadeUp>
      );

    case "three-column":
      return (
        <FadeUp>
          <section className="case-study-section">
            <div className="grid gap-[var(--space-6)] md:grid-cols-3">
              {section.columns.map((column, index) => (
                <div key={index}>
                  {column.heading && (
                    <p className="text-[2rem] font-bold uppercase tracking-[0.08em] text-[#212121]">
                      {column.heading}
                    </p>
                  )}
                  <p className="mt-[var(--space-3)] text-[1rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]">
                    {column.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>
      );

    case "image-comparison":
      const comparisonSection = section as ImageComparisonSection;
      return (
        <FadeUp>
          <section className="case-study-section">
            <div className="grid gap-[var(--space-6)] md:grid-cols-2">
              <div>
                <p className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-[#3D3D3D]">Before</p>
                <div className="mt-[var(--space-3)] w-full overflow-hidden rounded-xl">
                  <Image
                    src={comparisonSection.left.src}
                    alt={comparisonSection.left.alt}
                    width={0}
                    height={0}
                    sizes="50vw"
                    className="w-full h-auto"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <p className="mt-[var(--space-3)] text-[0.875rem] leading-[var(--leading-relaxed)] font-normal text-[var(--color-text-muted)]">
                  {comparisonSection.left.caption}
                </p>
              </div>
              <div>
                <p className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-[#3D3D3D]">After</p>
                <div className="mt-[var(--space-3)] w-full overflow-hidden rounded-xl">
                  <Image
                    src={comparisonSection.right.src}
                    alt={comparisonSection.right.alt}
                    width={0}
                    height={0}
                    sizes="50vw"
                    className="w-full h-auto"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <p className="mt-[var(--space-3)] text-[0.875rem] leading-[var(--leading-relaxed)] font-normal text-[var(--color-text-muted)]">
                  {comparisonSection.right.caption}
                </p>
              </div>
            </div>
          </section>
        </FadeUp>
      );

    case "pullquote":
      const pullquoteSection = section as PullQuoteSection;
      return (
        <FadeUp>
          <section className="case-study-section my-[var(--space-12)]">
            <div className="relative">
              <span className="absolute -top-4 -left-2 text-[6rem] italic text-[#E5E5E5] leading-none select-none" style={{ fontFamily: 'var(--font-serif)' }}>
                "
              </span>
              <blockquote className="relative z-10 pl-8">
                <p className="text-[1.625rem] italic font-bold leading-[var(--leading-relaxed)] text-[#212121]" style={{ fontFamily: 'var(--font-serif)' }}>
                  {pullquoteSection.quote}
                </p>
                <footer className="mt-4 text-[1rem] font-normal text-[var(--color-text-muted)]">
                  — {pullquoteSection.attribution}
                </footer>
              </blockquote>
            </div>
          </section>
        </FadeUp>
      );
  }
}

export default function CaseStudySections({
  sections,
}: {
  sections: CaseStudySection[];
}) {
  return (
    <div className="case-study-sections">
      {sections.map((section, index) => {
        // Find the last text section before the current section
        let previousCategory: string | null = null;
        let previousSectionIsHeadingOnly = false;
        for (let i = index - 1; i >= 0; i--) {
          if (sections[i].type === "text") {
            previousCategory = (sections[i] as Extract<CaseStudySection, { type: "text" }>).category;
            previousSectionIsHeadingOnly = (sections[i] as Extract<CaseStudySection, { type: "text" }>).body.length === 0;
            break;
          }
        }
        
        const currentCategory = section.type === "text" ? (section as Extract<CaseStudySection, { type: "text" }>).category : null;
        const showCategory = currentCategory !== null && currentCategory !== previousCategory;
        
        return (
          <CaseStudySectionBlock key={index} section={section} showCategory={showCategory} previousSectionIsHeadingOnly={previousSectionIsHeadingOnly} />
        );
      })}
    </div>
  );
}
