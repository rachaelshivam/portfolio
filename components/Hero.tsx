import HashLink from "@/components/HashLink";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-1 items-center px-[var(--space-4)] py-[var(--space-10)] sm:px-[var(--space-6)] sm:py-[var(--space-10)] lg:py-[var(--space-10)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-width-content)]">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="text-[clamp(2.25rem,5vw,var(--text-5xl))] leading-[var(--leading-tight)] tracking-tight"
          >
            Designing experiences people trust.
          </h1>

          <p className="mt-[var(--space-6)] max-w-xl text-lg leading-[var(--leading-relaxed)] text-muted sm:mt-[var(--space-7)] sm:text-xl">
            I&apos;m a UX designer who turns complex problems into clear,
            intuitive products.
          </p>

          <div className="mt-[var(--space-8)] sm:mt-[var(--space-9)]">
            <HashLink href="#work" className="hero-cta">
              View case studies
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
}
