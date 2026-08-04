import Image from "next/image";
import FadeUp from "./FadeUp";
import type {
  CaseStudySection,
  TextBodyBullets,
  TextBodyParagraph,
  TextBodyTwoColumn,
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
              <ul className="case-study-list space-y-[var(--space-2)] text-[1rem] text-[#404040]">
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

function CaseStudySectionBlock({ section }: { section: CaseStudySection }) {
  switch (section.type) {
    case "text":
      return (
        <FadeUp>
          <section className="case-study-section">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[#737272]">
              {section.category}
            </p>
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
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[var(--color-border)]">
                <Image
                  src={section.src}
                  alt={section.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
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
  }
}

export default function CaseStudySections({
  sections,
}: {
  sections: CaseStudySection[];
}) {
  return (
    <div className="case-study-sections">
      {sections.map((section, index) => (
        <CaseStudySectionBlock key={index} section={section} />
      ))}
    </div>
  );
}
