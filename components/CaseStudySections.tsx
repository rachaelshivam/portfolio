import Image from "next/image";
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
              className="text-[1rem] leading-[var(--leading-relaxed)] text-muted"
            >
              {block.content}
            </p>
          );
        }

        if (block.type === "bullets") {
          return (
            <div key={index}>
              {block.intro && (
                <p className="mb-[var(--space-3)] text-[1rem] leading-[var(--leading-relaxed)] text-muted">
                  {block.intro}
                </p>
              )}
              <ul className="case-study-list space-y-[var(--space-2)] text-[1rem] text-muted">
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
                <ul className="case-study-list mt-[var(--space-3)] space-y-[var(--space-2)] text-[1rem] text-muted">
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
        <section className="case-study-section">
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-muted">
            {section.category}
          </p>
          <h2 className="mt-[var(--space-3)] font-semibold text-[1.25rem] sm:text-[1.5rem]">
            {section.heading}
          </h2>
          <TextBodyContent body={section.body} />
        </section>
      );

    case "image":
      return (
        <section className="case-study-section case-study-section--full">
          <figure>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-border)]">
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
      );

    case "deliverables":
      return (
        <section className="case-study-section">
          <h2 className="font-semibold text-[1.25rem] sm:text-[1.5rem]">
            {section.heading ?? "Deliverables"}
          </h2>
          <ul className="case-study-deliverables mt-[var(--space-5)]">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
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
