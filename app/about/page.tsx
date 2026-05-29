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
          <div>
            <h1
              id="about-heading"
              className="text-[clamp(2rem,4vw,var(--text-4xl))] leading-[var(--leading-tight)]"
            >
              About
            </h1>
            <div className="mt-[var(--space-6)] space-y-[var(--space-5)] text-muted leading-[var(--leading-relaxed)]">
              <p>
                I&apos;m a UX designer studying human-computer interaction at
                Carnegie Mellon, with a background in research-driven product
                design.
              </p>
              <p>
                I care about clarity, accessibility, and the small details that
                help people feel confident using complex tools. My work spans
                healthcare, fintech, and design systems — always grounded in
                understanding real user needs.
              </p>
              <p>
                Outside of design, you&apos;ll find me drawing, exploring
                museums, and collecting reference books on typography and visual
                culture.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-bg-subtle)]">
            <Image
              src="https://picsum.photos/seed/about-portrait/800/1000"
              alt="Portrait of Rachael Shivam"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="journey-heading"
        className="px-[var(--space-4)] pb-[var(--space-10)] sm:px-[var(--space-6)]"
      >
        <div className="mx-auto w-full max-w-[var(--max-width-content)]">
          <h2 id="journey-heading" className="text-[var(--text-3xl)]">
            Experience
          </h2>

          <ol className="timeline mt-[var(--space-8)]">
            {experience.map((item) => (
              <li key={`${item.organisation}-${item.year}`} className="timeline-item">
                <p className="font-serif text-lg font-medium leading-[var(--leading-snug)]">
                  {item.role}
                  {item.current && (
                    <span className="ml-[var(--space-2)] text-sm font-sans font-normal text-accent">
                      Current
                    </span>
                  )}
                </p>
                <p className="mt-[var(--space-1)] text-muted">{item.organisation}</p>
                <p className="mt-[var(--space-1)] text-sm text-[var(--color-text-subtle)]">
                  {item.year}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="creative-heading"
        className="px-[var(--space-4)] pb-[var(--space-10)] sm:px-[var(--space-6)]"
      >
        <div className="mx-auto w-full max-w-[var(--max-width-content)]">
          <h2 id="creative-heading" className="text-[var(--text-3xl)]">
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
