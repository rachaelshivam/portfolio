import CaseStudyCard from "./CaseStudyCard";
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
        <h2 id="work-heading" className="font-semibold text-[1.5rem] sm:text-[2rem]">
          Selected work
        </h2>

        <div className="mt-[var(--space-8)] flex flex-col gap-20">
          {caseStudies.map((study, index) => (
            <FadeUp key={study.slug}>
              <div>
                <CaseStudyCard {...study} />
                {index < caseStudies.length - 1 && (
                  <hr className="mt-20 border-[var(--color-border)]" />
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
