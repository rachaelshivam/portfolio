import Image from "next/image";
import FadeUp from "./FadeUp";
import Carousel from "./Carousel";
import type {
  CaseStudy,
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
  CarouselSection,
} from "@/data/caseStudies";

function CaseStudyMetadataItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="text-[0.875rem] font-semibold uppercase tracking-[0.08em] text-[#3D3D3D]">
        {label}
      </dt>
      <dd className="mt-[var(--space-2)] text-[1rem] font-normal text-[#404040]">
        {value}
      </dd>
    </div>
  );
}

export function CaseStudyMetadata({
  metadata,
}: {
  metadata: CaseStudy["metadata"];
}) {
  if (metadata.length === 4) {
    const [fourth] = metadata.slice(3);

    return (
      <dl className="mt-[var(--space-8)] flex w-full items-start gap-[var(--space-6)]">
        <div className="grid min-w-0 flex-1 grid-cols-3 gap-[var(--space-6)]">
          {metadata.slice(0, 3).map(({ label, value }) => (
            <CaseStudyMetadataItem key={label} label={label} value={value} />
          ))}
        </div>
        <div className="min-w-0 max-w-[12rem]">
          <CaseStudyMetadataItem label={fourth.label} value={fourth.value} />
        </div>
      </dl>
    );
  }

  return (
    <dl
      className="mt-[var(--space-8)] grid"
      style={{ gridTemplateColumns: `repeat(${metadata.length}, 1fr)` }}
    >
      {metadata.map(({ label, value }) => (
        <CaseStudyMetadataItem key={label} label={label} value={value} />
      ))}
    </dl>
  );
}

function normalizeCategory(category: string) {
  return category.toLowerCase().replace(/[.,!?;:]*$/, "");
}

function isWhatIDidCategory(category: string) {
  return normalizeCategory(category) === "what i did";
}

function isStickySectionCategory(category: string) {
  return !isWhatIDidCategory(category);
}

function getTextSectionCategory(section: CaseStudySection): string | null {
  if (section.type === "text") {
    return section.category;
  }
  if (section.type === "two-column-text") {
    return section.category ?? null;
  }
  return null;
}

// Helper to convert category names to valid HTML IDs
export function categoryId(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

function getShowCategory(sections: CaseStudySection[], index: number): boolean {
  const currentCategory = getTextSectionCategory(sections[index]);
  if (currentCategory === null) {
    return false;
  }

  let previousCategory: string | null = null;
  for (let i = index - 1; i >= 0; i--) {
    if (sections[i].type === "text") {
      previousCategory = (sections[i] as Extract<CaseStudySection, { type: "text" }>).category;
      break;
    }
  }

  return currentCategory !== previousCategory;
}

function getPreviousSectionIsHeadingOnly(
  sections: CaseStudySection[],
  index: number,
): boolean {
  for (let i = index - 1; i >= 0; i--) {
    if (sections[i].type === "text") {
      return (sections[i] as Extract<CaseStudySection, { type: "text" }>).body.length === 0;
    }
  }
  return false;
}

function stickyRegionEndIndex(
  sections: CaseStudySection[],
  startIndex: number,
): number {
  for (let i = startIndex + 1; i < sections.length; i++) {
    const category = getTextSectionCategory(sections[i]);
    if (
      category &&
      getShowCategory(sections, i) &&
      isStickySectionCategory(category)
    ) {
      return i;
    }
  }
  return sections.length;
}

type RenderChunk =
  | { kind: "sticky-region"; category: string; start: number; end: number }
  | { kind: "section"; index: number };

function buildRenderChunks(sections: CaseStudySection[]): RenderChunk[] {
  const chunks: RenderChunk[] = [];
  let index = 0;

  while (index < sections.length) {
    const section = sections[index];
    const category = getTextSectionCategory(section);
    const showCategory = getShowCategory(sections, index);

    if (
      showCategory &&
      category &&
      isStickySectionCategory(category) &&
      (section.type === "text" || section.type === "two-column-text")
    ) {
      const end = stickyRegionEndIndex(sections, index);
      chunks.push({ kind: "sticky-region", category, start: index, end });
      index = end;
    } else {
      chunks.push({ kind: "section", index });
      index += 1;
    }
  }

  return chunks;
}

function CaseStudyStickySectionTitle({ label }: { label: string }) {
  return (
    <div className="case-study-sticky-title relative -mx-[var(--space-4)] px-[var(--space-4)] sm:-mx-[var(--space-6)] sm:px-[var(--space-6)] mt-[var(--space-12)]">
      <div className="flex items-center gap-2">
        <div className="w-[2px] h-[0.875rem] bg-[#D83775]"></div>
        <p className="text-[0.875rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
          {label}
        </p>
      </div>
    </div>
  );
}

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
            const [label, rest] = block.content.split(/:/);
            const trimmedRest = rest.trimStart();
            const firstSentenceEnd = trimmedRest.indexOf('. ');
            const firstSentence = firstSentenceEnd !== -1 ? trimmedRest.substring(0, firstSentenceEnd + 1) : trimmedRest;
            const remainingText = firstSentenceEnd !== -1 ? trimmedRest.substring(firstSentenceEnd + 1) : '';
            return (
              <p
                key={index}
                className="text-[0.9375rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]"
              >
                <span className="font-semibold">{label}:</span> <span className="font-semibold">{firstSentence}</span>{remainingText}
              </p>
            );
          }
          return (
            <p
              key={index}
              className="text-[0.9375rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]"
            >
              {block.content}
            </p>
          );
        }

        if (block.type === "bullets") {
          return (
            <div key={index}>
              {block.intro && (
                <p className="mb-[var(--space-3)] text-[0.9375rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]">
                  {block.intro}
                </p>
              )}
              <ul className="list-disc space-y-[var(--space-2)] text-[0.9375rem] text-[#404040] pl-[var(--space-4)]">
                {block.items.map((item) => (
                  <li key={item} className="text-[0.9375rem] leading-[var(--leading-relaxed)]">
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
                <ul className="case-study-list mt-[var(--space-3)] space-y-[var(--space-2)] text-[0.9375rem] text-[#404040]">
                  {column.items.map((item) => (
                    <li key={item} className="text-[0.9375rem] leading-[var(--leading-relaxed)]">
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

function CaseStudySectionBlock({ section, showCategory, addTocAttributes, previousSectionIsHeadingOnly }: { section: CaseStudySection; showCategory: boolean; addTocAttributes: boolean; previousSectionIsHeadingOnly: boolean }) {
  switch (section.type) {
    case "text":
      return (
        <FadeUp>
          <section 
            className={`case-study-section ${previousSectionIsHeadingOnly ? '-mt-[var(--space-8)]' : ''} ${showCategory ? 'mt-[var(--space-12)]' : ''}`}
            id={showCategory || addTocAttributes ? (section.category ? categoryId(section.category) : undefined) : undefined}
            data-toc-section={showCategory || addTocAttributes ? (section.category ? categoryId(section.category) : undefined) : undefined}
          >
            {showCategory && (
              <div className="flex items-center gap-2 mb-[var(--space-3)]">
                <div className="w-[2px] h-[0.875rem] bg-[#D83775]"></div>
                <p className="text-[0.875rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  {section.category}
                </p>
              </div>
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
              <div className="w-full overflow-hidden rounded-xl bg-[var(--color-border)] border border-[#E5E5E5]">
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
          <section 
            className={`case-study-section ${previousSectionIsHeadingOnly ? '-mt-[var(--space-8)]' : ''} ${showCategory ? 'mt-[var(--space-12)]' : ''}`}
            id={showCategory || addTocAttributes ? (section.category ? categoryId(section.category) : undefined) : undefined}
            data-toc-section={showCategory || addTocAttributes ? (section.category ? categoryId(section.category) : undefined) : undefined}
          >
            {showCategory && section.category && (
              <div className="flex items-center gap-2 mb-[var(--space-3)]">
                <div className="w-[2px] h-[0.875rem] bg-[#D83775]"></div>
                <p className="text-[0.875rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  {section.category}
                </p>
              </div>
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
                <p className="mt-[var(--space-3)] text-[0.9375rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]">
                  {section.left.body.includes('\n') ? (
                    <>
                      <span className="font-semibold">{section.left.body.split('\n')[0]}</span>
                      <br />
                      {section.left.body.split('\n')[1]}
                    </>
                  ) : (
                    section.left.body
                  )}
                </p>
              </div>
              <div>
                {section.right.heading && (
                  <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[#3D3D3D]">
                    {section.right.heading}
                  </p>
                )}
                <p className="mt-[var(--space-3)] text-[0.9375rem] leading-[var(--leading-relaxed)] font-normal text-[#404040]">
                  {section.right.body.includes('\n') ? (
                    <>
                      <span className="font-semibold">{section.right.body.split('\n')[0]}</span>
                      <br />
                      {section.right.body.split('\n')[1]}
                    </>
                  ) : (
                    section.right.body
                  )}
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
          <section className="case-study-section -my-[calc(var(--space-9)-1.5rem)] py-0">
            <div className="my-[1.5rem] grid gap-[var(--space-6)] md:grid-cols-3">
              {section.columns.map((column, index) => (
                <div key={index}>
                  {column.heading && (
                    <p className="text-[2rem] font-[500] uppercase tracking-[0.08em] text-[#212121]">
                      {column.heading}
                    </p>
                  )}
                  <p className="mt-[var(--space-3)] text-[0.9375rem] leading-[var(--leading-relaxed)] font-[600] text-[#404040]">
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
                <div className="mt-[var(--space-3)] w-full overflow-hidden rounded-xl border border-[#E5E5E5]">
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
                <div className="mt-[var(--space-3)] w-full overflow-hidden rounded-xl border border-[#E5E5E5]">
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
            <div className="text-center">
              <blockquote>
                <p className="text-[1.625rem] font-bold leading-[var(--leading-relaxed)] text-[#212121]" style={{ fontFamily: 'var(--font-serif)' }}>
                  &quot;{pullquoteSection.quote}&quot;
                </p>
                <footer className="mt-4 text-[1rem] font-normal text-[var(--color-text-muted)]">
                  — {pullquoteSection.attribution}
                </footer>
              </blockquote>
            </div>
          </section>
        </FadeUp>
      );

    case "carousel":
      const carouselSection = section as CarouselSection;
      return (
        <FadeUp>
          <section className="case-study-section">
            <Carousel slides={carouselSection.slides} />
          </section>
        </FadeUp>
      );
  }
}

function renderSectionBlock(
  sections: CaseStudySection[],
  index: number,
  showCategory: boolean,
  addTocAttributes: boolean = false,
) {
  return (
    <CaseStudySectionBlock
      key={index}
      section={sections[index]}
      showCategory={showCategory}
      addTocAttributes={addTocAttributes}
      previousSectionIsHeadingOnly={getPreviousSectionIsHeadingOnly(sections, index)}
    />
  );
}

export default function CaseStudySections({
  sections,
}: {
  sections: CaseStudySection[];
}) {
  const chunks = buildRenderChunks(sections);

  return (
    <div className="case-study-sections">
      {chunks.map((chunk) => {
        if (chunk.kind === "sticky-region") {
          return (
            <div key={`region-${chunk.start}`} className="case-study-category-region">
              <CaseStudyStickySectionTitle label={chunk.category} />
              <div className="mt-[var(--space-6)] flex flex-col gap-[var(--space-9)] [&_.case-study-section:first-child>h2]:mt-0">
                {Array.from({ length: chunk.end - chunk.start }, (_, offset) => {
                  const index = chunk.start + offset;
                  const isFirstInSection = offset === 0;
                  return renderSectionBlock(sections, index, false, isFirstInSection);
                })}
              </div>
            </div>
          );
        }

        const index = chunk.index;
        return renderSectionBlock(
          sections,
          index,
          getShowCategory(sections, index),
          false,
        );
      })}
    </div>
  );
}
