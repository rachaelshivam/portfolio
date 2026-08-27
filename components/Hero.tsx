"use client";

import HashLink from "@/components/HashLink";
import { MapPin, GraduationCap, Search } from "lucide-react";

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
          <p className="text-[1rem] leading-[var(--leading-relaxed)] text-[var(--color-text-primary)]">
            Hey, I'm Rachael,
          </p>
          <h1
            className="mt-[var(--space-3)] font-bold text-[clamp(1.5rem,3vw,2rem)] leading-[var(--leading-tight)] tracking-tight text-[#212121]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            a Dentist-turned-Product Designer and Strategist
          </h1>
          <p className="mt-[var(--space-3)] text-[1rem] leading-[var(--leading-relaxed)] text-[var(--color-text-primary)]">
            with 3+ years experience across healthcare, finance, education, AI, and Enterprise SaaS.
          </p>
          <div className="mt-[var(--space-5)] space-y-[var(--space-3)]">
            <div className="flex items-center gap-2 text-[0.875rem] text-[var(--color-text-muted)]">
              <MapPin size={16} />
              <span>Pittsburgh, PA</span>
            </div>
            <div className="flex items-center gap-2 text-[0.875rem] text-[var(--color-text-muted)]">
              <GraduationCap size={16} />
              <span>Recently completed my Master of Human-Computer Interaction at Carnegie Mellon University.</span>
            </div>
            <div className="flex items-center gap-2 text-[0.875rem] text-[var(--color-text-muted)]">
              <Search size={16} />
              <span>Seeking opportunities from Fall '26; open to relocating.</span>
            </div>
          </div>
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
