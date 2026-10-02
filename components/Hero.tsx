"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { GraduationCap, RefreshCw } from "lucide-react";
import RippleText from "@/components/RippleText";

interface HeroProps {
  firstCardRef?: React.RefObject<HTMLDivElement | null>;
}

const descriptorDisplay = [
  { text: "product designer and strategist", italic: [2, 6, 11, 14, 24, 27], twoLine: true },
  { text: "systems thinker", italic: [2, 6, 10, 13], twoLine: true },
  { text: "mixed-methods researcher", italic: [2, 7, 12, 15, 18, 21], twoLine: true }
];

const dentistTurnedItalic = [3, 5, 11];
const dentistTurnedText = "dentist-turned-";

export default function Hero({ firstCardRef }: HeroProps) {
  const headingRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const nudgeRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const descriptors = ["product designer and strategist", "systems thinker", "mixed-methods researcher"];
  const [descriptorIndex, setDescriptorIndex] = useState(0);
  const [rippleTrigger, setRippleTrigger] = useState(0);
  const [fontSize, setFontSize] = useState(48);
  const [isHovered, setIsHovered] = useState(false);
  const handleRemix = useCallback(() => {
    setDescriptorIndex((prev) => (prev + 1) % descriptors.length);
    setRippleTrigger((prev) => prev + 1);
  }, []);
  const currentDescriptor = descriptorDisplay[descriptorIndex];

  const getDescriptorLines = (descriptor: typeof currentDescriptor) => {
    if (descriptor.twoLine) {
      const splitIndex = descriptor.text.indexOf('and') !== -1 ? descriptor.text.indexOf('and') : descriptor.text.indexOf(' ');
      const firstLine = descriptor.text.substring(0, splitIndex);
      const secondLine = descriptor.text.substring(splitIndex);
      return [firstLine, secondLine];
    }
    return [descriptor.text];
  };

  const descriptorLines = getDescriptorLines(currentDescriptor);

  const getItalicIndicesForLine = (descriptor: typeof currentDescriptor, lineIndex: number) => {
    if (!descriptor.twoLine) {
      return descriptor.italic;
    }
    const splitIndex = descriptor.text.indexOf('and') !== -1 ? descriptor.text.indexOf('and') : descriptor.text.indexOf(' ');
    if (lineIndex === 0) {
      return descriptor.italic.filter(idx => idx < splitIndex);
    } else {
      return descriptor.italic.filter(idx => idx >= splitIndex).map(idx => idx - splitIndex);
    }
  };

  const firstLineItalic = getItalicIndicesForLine(currentDescriptor, 0);
  const secondLineItalic = getItalicIndicesForLine(currentDescriptor, 1);

  useEffect(() => {
    const calculateFontSize = () => {
      if (!headingRef.current) return;

      const containerWidth = headingRef.current.offsetWidth;
      if (containerWidth === 0) return;

      // Create a temporary element to measure the widest line
      const tempEl = document.createElement('div');
      tempEl.style.position = 'absolute';
      tempEl.style.visibility = 'hidden';
      tempEl.style.whiteSpace = 'nowrap';
      tempEl.style.fontFamily = 'var(--font-fraunces)';
      tempEl.style.fontWeight = '700';
      tempEl.style.fontSize = '48px';
      tempEl.style.letterSpacing = '-0.02em';
      document.body.appendChild(tempEl);

      let maxTextWidth = 0;
      descriptorDisplay.forEach(descriptor => {
        const splitIndex = descriptor.text.indexOf('and') !== -1 ? descriptor.text.indexOf('and') : descriptor.text.indexOf(' ');
        const firstLine = descriptor.text.substring(0, splitIndex);
        const secondLine = descriptor.text.substring(splitIndex);
        tempEl.textContent = firstLine;
        const width1 = tempEl.scrollWidth;
        tempEl.textContent = secondLine;
        const width2 = tempEl.scrollWidth;
        const maxWidth = Math.max(width1, width2);
        if (maxWidth > maxTextWidth) {
          maxTextWidth = maxWidth;
        }
      });

      document.body.removeChild(tempEl);

      if (maxTextWidth === 0) return;

      const iconWidth = 48;
      const totalWidth = maxTextWidth + iconWidth + 12;
      const targetRatio = containerWidth / totalWidth;
      const newFontSize = 48 * targetRatio * 0.95;

      const minSize = 36;
      const maxSize = 80;
      const clampedSize = Math.max(minSize, Math.min(maxSize, newFontSize));

      setFontSize(clampedSize);
    };

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(calculateFontSize);
    });

    if (headingRef.current) {
      resizeObserver.observe(headingRef.current);
    }

    document.fonts.ready.then(() => {
      setTimeout(calculateFontSize, 50);
    });

    const timeoutId = setTimeout(calculateFontSize, 100);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!nudgeRef.current) return;

    const animation = nudgeRef.current.animate(
      [
        { transform: 'rotate(0deg)', offset: 0 },
        { transform: 'rotate(0deg)', offset: 0.7 },
        { transform: 'rotate(30deg)', offset: 0.73 },
        { transform: 'rotate(-10deg)', offset: 0.76 },
        { transform: 'rotate(0deg)', offset: 0.8 },
        { transform: 'rotate(0deg)', offset: 0.82 },
        { transform: 'rotate(30deg)', offset: 0.85 },
        { transform: 'rotate(-10deg)', offset: 0.88 },
        { transform: 'rotate(0deg)', offset: 0.92 },
        { transform: 'rotate(0deg)', offset: 1 }
      ],
      {
        duration: 5000,
        iterations: Infinity,
        easing: 'ease-in-out'
      }
    );

    return () => animation.cancel();
  }, []);

  useEffect(() => {
    if (!nudgeRef.current) return;
    nudgeRef.current.getAnimations().forEach(anim => {
      anim.playbackRate = isHovered ? 0 : 1;
    });
  }, [isHovered]);

  return (
    <>
      <section
      aria-labelledby="hero-heading"
      className="relative flex flex-col pt-[12vh] pb-[4rem] px-[var(--space-4)] sm:px-[var(--space-6)]"
    >
      <div
        className="absolute left-1/2 top-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 0, width: '530px', height: '530px', maxWidth: '90vw', maxHeight: '90vw' }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: 'rgba(216, 55, 117, 0.07)'
          }}
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[var(--max-width-content)] flex flex-col items-center">
        <div className="w-full text-center">
          <p className="text-[clamp(1.125rem,1.75vw,1.5rem)] font-semibold leading-[var(--leading-relaxed)] text-[var(--color-text-primary)]">
            Hello! I'm Rachael Shivam, a
          </p>
          <div className="mt-[var(--space-2)]">
            <p
              className="font-display font-bold leading-[var(--leading-tight)] tracking-tight text-[#212121]"
              style={{ fontSize: `${fontSize}px`, fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              <span className="relative inline-block">
                <svg
                  className="absolute pointer-events-none hidden sm:block"
                  style={{ left: '-35px', top: '50%', transform: 'translateY(-50%)', width: '56px', height: '57px' }}
                  viewBox="0 0 70 72"
                  aria-hidden="true"
                >
                  <line x1="39" y1="15" x2="26" y2="2" stroke="#F5C518" strokeWidth="8" strokeLinecap="round" />
                  <line x1="30" y1="38" x2="10" y2="42" stroke="#F5C518" strokeWidth="8" strokeLinecap="round" />
                  <line x1="37" y1="55" x2="23" y2="67" stroke="#F5C518" strokeWidth="8" strokeLinecap="round" />
                </svg>
                {dentistTurnedText.split('').map((char, index) => {
                  const isItalic = dentistTurnedItalic.includes(index);
                  return (
                    <span key={index} style={{ fontStyle: isItalic ? 'italic' : 'normal' }}>
                      {char}
                    </span>
                  );
                })}
              </span>
            </p>
          </div>
          <div ref={headingRef} className="mt-0" style={{ minHeight: `${fontSize * 2.6}px` }}>
            <div ref={textContainerRef} style={{ fontSize: `${fontSize}px`, lineHeight: '1.1' }}>
              <div style={{ height: `${fontSize * 1.1}px` }}>
                <RippleText
                  lines={[descriptorLines[0]]}
                  trigger={rippleTrigger}
                  highlight
                  italicIndices={firstLineItalic}
                  className="font-display font-bold leading-[var(--leading-tight)] tracking-tight text-[#212121]"
                  style={{ fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '1.1' }}
                />
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', height: `${fontSize * 1.1}px` }}>
                <RippleText
                  lines={[descriptorLines[1]]}
                  trigger={rippleTrigger}
                  highlight
                  italicIndices={secondLineItalic}
                  className="font-display font-bold leading-[var(--leading-tight)] tracking-tight text-[#212121]"
                  style={{ fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '1.1' }}
                />
                <span className="ml-3 cursor-pointer flex-shrink-0 inline-flex items-center" style={{ color: '#D83775', fontSize: `${fontSize}px`, lineHeight: '1.1' }} onClick={handleRemix} role="button" tabIndex={0} aria-label="Show next descriptor" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <div ref={nudgeRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div ref={iconRef} className="transition-transform hover:rotate-180 duration-500" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <RefreshCw style={{ width: `${fontSize}px`, height: `${fontSize}px` }} strokeWidth={2.5} />
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <p className="mt-[var(--space-2)] text-[clamp(1.125rem,1.75vw,1.5rem)] font-semibold leading-[var(--leading-relaxed)] text-[var(--color-text-primary)]">
            creating tools for healthcare, education, and workforce development.
          </p>
          <div className="mt-[var(--space-4)] flex items-center justify-center gap-2 text-[1rem] text-[var(--color-text-muted)]">
            <GraduationCap size={24} className="text-[var(--color-text-primary)]" />
            <span>Recently completed my Master's in <a href="https://hcii.cmu.edu/academics/mhci" target="_blank" rel="noopener noreferrer" className="transition-opacity duration-200 ease hover:opacity-70" style={{ textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '2px', textDecorationColor: 'currentColor', color: 'inherit', fontWeight: 'inherit' }}>HCI at Carnegie Mellon University</a>.</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
