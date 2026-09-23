import CaseStudyCard from "./CaseStudyCard";
import FadeUp from "./FadeUp";
import { caseStudies } from "@/data/caseStudies";

interface WorkProps {
  firstCardRef?: React.RefObject<HTMLElement | null>;
}

export default function Work({ firstCardRef }: WorkProps) {
  return (
    <section
      id="work"
      className="scroll-mt-16 px-10 pb-[var(--space-10)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-width-content)]">
        <div className="mt-[var(--space-8)] flex flex-col gap-20">
          {caseStudies.map((study, index) => (
            <FadeUp key={study.slug} immediate={index === 0}>
              <div ref={index === 0 ? (firstCardRef as any) : undefined}>
                <CaseStudyCard {...study} />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
