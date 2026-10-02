import CaseStudyCard from "./CaseStudyCard";
import FadeInLeft from "./FadeInLeft";
import FadeUp from "./FadeUp";
import { caseStudies } from "@/data/caseStudies";

interface WorkProps {
  firstCardRef?: React.RefObject<HTMLElement | null>;
}

export default function Work({ firstCardRef }: WorkProps) {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-16 pt-[var(--space-8)] px-[var(--space-4)] pb-[var(--space-10)] sm:px-[var(--space-6)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-width-content)]">
        <FadeInLeft>
          <h2 id="work-heading" className="py-[var(--space-3)] text-[0.9375rem] font-semibold uppercase tracking-[0.08em] text-[#3D3D3D]">
            Selected Work
          </h2>
        </FadeInLeft>
        <div className="mt-[var(--space-6)] flex flex-col gap-20">
          {caseStudies.map((study, index) => (
            <FadeUp key={study.slug} immediate={index === 0}>
              <div ref={index === 0 ? (firstCardRef as any) : undefined}>
                <div className="border border-[var(--color-text-muted)] rounded-2xl p-6 shadow-md motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-lg">
                  <CaseStudyCard {...study} />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
