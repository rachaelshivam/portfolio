"use client";

import { useRef, useState, useCallback } from "react";
import { GraduationCap, RefreshCw } from "lucide-react";
import HeroLiquid from "@/components/HeroLiquid";
import RippleText from "@/components/RippleText";
import FallingTags from "@/components/FallingTags";
import HashLink from "@/components/HashLink";

interface HeroProps {
  firstCardRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Hero({ firstCardRef }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptors = ["Product Designer and Strategist", "Systems Thinker", "Mixed-Methods Researcher"];
  const [descriptorIndex, setDescriptorIndex] = useState(0);
  const [rippleTrigger, setRippleTrigger] = useState(0);
  const [tagsAreFalling, setTagsAreFalling] = useState(false);
  const handleRemix = useCallback(() => {
    setDescriptorIndex((prev) => (prev + 1) % descriptors.length);
    setRippleTrigger((prev) => prev + 1);
  }, []);

  return (
    <>
      <style>{`
        @keyframes nudge {
          0%, 85% { transform: rotate(0deg); }
          90% { transform: rotate(15deg); }
          95% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
      <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative flex flex-col min-h-[65vh] pt-[12vh] pb-[6vh] px-[var(--space-4)] sm:px-[var(--space-6)]"
    >
      <HeroLiquid trigger={rippleTrigger} sectionRef={sectionRef} />
      <div className="relative z-10 mx-auto w-full max-w-[var(--max-width-content)] flex flex-col items-center">
        <div className="text-center w-full">
          <p className="text-[1.5rem] font-semibold leading-[var(--leading-relaxed)] text-[var(--color-text-primary)]">
            Hey, I'm Rachael, a
          </p>
          <div ref={headingRef} className="mt-[var(--space-3)] flex items-end justify-center gap-[var(--space-3)] min-w-fit">
            <RippleText
              lines={["Dentist-turned-", descriptors[descriptorIndex]]}
              trigger={rippleTrigger}
              highlight
              className="font-bold text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[var(--leading-tight)] tracking-tight text-[#212121]"
              style={{ fontFamily: 'var(--font-serif)' }}
            />
            <button
              onClick={handleRemix}
              aria-label="Show next descriptor"
              className="flex-shrink-0 cursor-pointer transition-transform hover:rotate-180 duration-500 animate-[nudge_4s_ease-in-out_3s_infinite]"
              style={{ color: '#D83775' }}
            >
              <RefreshCw size="clamp(2.5rem,6.5vw,4.5rem)" strokeWidth={2.5} />
            </button>
          </div>
          <p className="mt-[var(--space-3)] text-[1.5rem] font-semibold leading-[var(--leading-relaxed)] text-[var(--color-text-primary)]">
            with 3+ years experience across healthcare, finance, AI, and Enterprise SaaS.
          </p>
          <div className="mt-[var(--space-4)] flex items-center justify-center gap-2 text-[1rem] text-[var(--color-text-muted)]">
            <GraduationCap size={24} />
            <span>Recently completed my <span className="font-semibold">Master of Human-Computer Interaction</span> at <span className="font-semibold">Carnegie Mellon University</span>.</span>
          </div>
        </div>
      </div>
      <FallingTags descriptorIndex={descriptorIndex} trigger={rippleTrigger} headingRef={headingRef} targetRef={firstCardRef} onFalling={setTagsAreFalling} />
    </section>
    </>
  );
}
