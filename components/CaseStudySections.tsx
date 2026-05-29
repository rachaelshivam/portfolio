import Image from "next/image";
import type {
  CaseStudySection,
  TextBodyComparison,
  TextBodyList,
  TextBodyParagraph,
} from "@/data/caseStudies";

function TextBodyContent({
  body,
}: {
  body: Array<TextBodyParagraph | TextBodyList | TextBodyComparison>;
}) {
  return (
    <div className="case-study-body mt-[var(--space-5)] space-y-[var(--space-5)]">
      {body.map((block, index) => {
        if (block.kind === "paragraph") {
          return (
            <p
              key={index}
              className="text-muted leading-[var(--leading-relaxed)]"
            >
              {block.content}
            </p>
          );
        }

        if (block.kind === "list") {
          return (
            <ul
              key={index}
              className="case-study-list list-disc space-y-[var(--space-2)] pl-[var(--space-5)] text-muted"
            >
              {block.items.map((item) => (
                <li key={item} className="leading-[var(--leading-relaxed)]">
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <div
            key={index}
            className="grid gap-[var(--space-6)] md:grid-cols-2"
          >
            <div>
              <p className="case-study-label">Included</p>
              <ul className="case-study-list mt-[var(--space-3)] space-y-[var(--space-2)] text-muted">
                {block.included.map((item) => (
                  <li key={item} className="leading-[var(--leading-relaxed)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="case-study-label">Excluded</p>
              <ul className="case-study-list mt-[var(--space-3)] space-y-[var(--space-2)] text-muted">
                {block.excluded.map((item) => (
                  <li key={item} className="leading-[var(--leading-relaxed)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CaseStudySectionBlock({ section }: { section: CaseStudySection }) {
  switch (section.type) {
    case "overview":
      return (
        <section className="case-study-section">
          <div className="grid gap-[var(--space-8)] md:grid-cols-2">
            <div>
              <p className="case-study-label">Problem</p>
              <p className="mt-[var(--space-3)] leading-[var(--leading-relaxed)] text-muted">
                {section.problem}
              </p>
            </div>
            <div>
              <p className="case-study-label">Solution</p>
              <p className="mt-[var(--space-3)] leading-[var(--leading-relaxed)] text-muted">
                {section.solution}
              </p>
            </div>
          </div>
        </section>
      );

    case "text":
      return (
        <section className="case-study-section">
          <p className="case-study-label">{section.category}</p>
          <h2 className="mt-[var(--space-3)] text-[var(--text-2xl)] sm:text-[var(--text-3xl)]">
            {section.heading}
          </h2>
          <TextBodyContent body={section.body} />
        </section>
      );

    case "image":
      return (
        <section className="case-study-section case-study-section--full">
          <figure>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg-subtle)]">
              <Image
                src={section.src}
                alt={section.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <figcaption className="mt-[var(--space-3)] text-sm text-[var(--color-text-subtle)]">
              {section.caption}
            </figcaption>
          </figure>
        </section>
      );

    case "deliverables":
      return (
        <section className="case-study-section">
          <h2 className="text-[var(--text-2xl)]">
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
