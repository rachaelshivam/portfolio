import HashLink from "@/components/HashLink";

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen px-[var(--space-4)] sm:px-[var(--space-6)]"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-[var(--max-width-content)] items-center">
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
        </div>
      </div>

      <HashLink
        href="#work"
        className="hero-scroll-link hero-scroll-indicator"
        aria-label="Scroll to work section"
      >
        <span className="text-sm text-muted">scroll to see my work</span>
        <span className="hero-scroll-chevron">
          <ChevronDownIcon />
        </span>
      </HashLink>
    </section>
  );
}
