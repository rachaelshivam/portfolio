import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-16 px-[var(--space-4)] pb-[var(--space-10)] sm:px-[var(--space-6)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-width-content)]">
        <h2 id="work-heading" className="text-[var(--text-3xl)]">
          Selected work
        </h2>

        <div className="mt-[var(--space-8)] grid grid-cols-1 gap-x-[var(--space-6)] gap-y-[var(--space-9)] md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
