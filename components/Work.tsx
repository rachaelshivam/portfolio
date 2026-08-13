import CaseStudyCard from "./CaseStudyCard";
import FadeInLeft from "./FadeInLeft";
import FadeUp from "./FadeUp";
import { caseStudies } from "@/data/caseStudies";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-16 px-[var(--space-4)] pb-[var(--space-10)] sm:px-[var(--space-6)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-width-content)]">
        <FadeInLeft>
          <h2 id="work-heading" className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            Selected work
          </h2>
        </FadeInLeft>

        <div className="mt-[var(--space-8)] flex flex-col gap-20">
          {caseStudies.map((study) => (
            <FadeUp key={study.slug}>
              <CaseStudyCard {...study} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
