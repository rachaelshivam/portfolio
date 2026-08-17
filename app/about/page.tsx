import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import { creativeWork } from "@/data/creativeWork";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "About — Rachael Shivam",
  description: "Bio, experience, and creative work.",
};

export default function AboutPage() {
  return (
    <>
      <section
        aria-labelledby="about-heading"
        className="px-[var(--space-4)] py-[var(--space-10)] sm:px-[var(--space-6)]"
      >
        <div className="mx-auto grid w-full max-w-[var(--max-width-content)] gap-[var(--space-8)] md:grid-cols-2 md:items-center md:gap-[var(--space-9)]">
          <div className="md:self-start md:mt-[var(--space-8)]">
            <h1
              id="about-heading"
              className="text-[clamp(2rem,4vw,var(--text-4xl))] leading-[var(--leading-tight)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Hi, I'm Rachael :)
            </h1>
            <div className="mt-[var(--space-6)] space-y-[var(--space-5)] text-[#404040] leading-[var(--leading-relaxed)]">
              <p>
                I started my career as a practicing dentist, where I saw firsthand how poorly designed health tech made already complex work harder for both providers and patients. This made me curious about the decisions behind the technology we use, and how understanding people's needs could lead to better products and services.
              </p>
              <p>
                That curiosity led me to study Computer Science before completing my Master of Human-Computer Interaction at Carnegie Mellon University, where my work spanned healthcare, finance, education, and AI, through both academic and industry-sponsored projects.
              </p>
              <p>
                I'm drawn to complex systems and emerging technologies, and problems that sit at the intersection of research, design, and strategy.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full">
            <div className="absolute left-[0%] top-[5%] w-[55%] bg-white p-3 pb-12 shadow-[0_4px_12px_rgba(0,0,0,0.12)]" style={{ transform: 'rotate(-6deg)', zIndex: 1 }}>
              <div className="aspect-[4/3] bg-[var(--color-border)]"></div>
            </div>
            <div className="absolute left-[50%] top-[10%] w-[55%] bg-white p-3 pb-12 shadow-[0_4px_12px_rgba(0,0,0,0.12)]" style={{ transform: 'rotate(3deg)', zIndex: 2 }}>
              <div className="aspect-[4/3] bg-[var(--color-border)]"></div>
            </div>
            <div className="absolute left-[15%] top-[40%] w-[55%] bg-white p-3 pb-12 shadow-[0_4px_12px_rgba(0,0,0,0.12)]" style={{ transform: 'rotate(-2deg)', zIndex: 3 }}>
              <div className="aspect-[4/3] bg-[var(--color-border)]"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="journey-heading"
        className="px-[var(--space-4)] pb-[var(--space-10)] sm:px-[var(--space-6)]"
      >
        <div className="mx-auto w-full max-w-[var(--max-width-content)]">
          <h2 id="journey-heading" className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            Experience
          </h2>

          <div className="flex flex-wrap justify-between gap-[var(--space-6)] mt-[var(--space-8)]">
            {experience.map((item) => (
              <div
                key={`${item.organisation}-${item.period}`}
                className="relative group"
              >
                <div className="h-[96px] w-[96px] cursor-pointer rounded-xl bg-[var(--color-border)]"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-[var(--space-2)] w-max bg-white rounded-lg shadow-lg p-[var(--space-3)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <p className="text-[0.875rem] text-[#212121] font-medium">
                    {item.role}
                  </p>
                  <p className="mt-[var(--space-1)] text-[0.75rem] text-[var(--color-text-muted)]">
                    {item.organisation}
                    {item.context && <span> · {item.context}</span>}
                  </p>
                  <p className="mt-[var(--space-1)] text-[0.75rem] text-[var(--color-text-muted)]">
                    {item.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="creative-heading"
        className="px-[var(--space-4)] pb-[var(--space-10)] sm:px-[var(--space-6)]"
      >
        <div className="mx-auto w-full max-w-[var(--max-width-content)]">
          <h2 id="creative-heading" className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            Creative work
          </h2>
          <p className="mt-[var(--space-4)] max-w-xl text-muted">
            A selection of personal artwork and visual explorations.
          </p>

          <ul className="mt-[var(--space-8)] grid grid-cols-1 gap-[var(--space-4)] sm:grid-cols-2 lg:grid-cols-3">
            {creativeWork.map((item) => (
              <li key={item.imageSrc}>
                <div className="relative aspect-square overflow-hidden bg-[var(--color-bg-subtle)]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
