"use client";

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
      className="relative flex min-h-screen flex-col pt-[20vh] px-[var(--space-4)] sm:px-[var(--space-6)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-width-content)]">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[var(--leading-tight)] tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            <span className="whitespace-nowrap">Human-Centered Designer</span><br />and Strategist.* 
          </h1>

          <p
            className="mt-[0.75rem] text-[2rem] leading-[var(--leading-relaxed)] opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="font-bold">*</span> also a <span className="font-semibold">qualified dentist</span>
          </p>

          <p
            className="mt-[1.5rem] max-w-[720px] text-[1rem] leading-[var(--leading-relaxed)] sm:text-[1.125rem] opacity-0 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            Years of working with poorly designed health technology in clinical settings led me to HCI. Now I design technology in a way that actually works
            for the people using it.
          </p>

          <p
            className="mt-[1.5rem] max-w-[640px] text-[0.875rem] leading-[var(--leading-relaxed)] opacity-0 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            Currently completing my{" "}
            <a
              href="https://www.hcii.cmu.edu/academics/mhci"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 ease hover:text-[var(--color-text-primary)]"
            >
              Master of Human-Computer Interaction
            </a>{" "}
            at Carnegie Mellon University.
          </p>
        </div>
      </div>

      <HashLink
        href="#work"
        className="hero-scroll-link hero-scroll-indicator absolute bottom-20 left-1/2 -translate-x-1/2"
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
