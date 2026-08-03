"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseStudySection } from "@/data/caseStudies";

type TOCProps = {
  sections: CaseStudySection[];
};

export default function CaseStudyTOC({ sections }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Extract unique categories from text sections
  const categories = Array.from(
    new Set(
      sections
        .filter((section): section is Extract<CaseStudySection, { type: "text" }> =>
          section.type === "text"
        )
        .map((section) => section.category)
    )
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    observerRef.current = observer;

    // Observe all text sections
    const textSections = document.querySelectorAll('[data-toc-section]');
    textSections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, category: string) => {
    e.preventDefault();
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (categories.length === 0) {
    return null;
  }

  return (
    <aside className="hidden xl:block">
      <nav className="sticky top-1/2 -translate-y-1/2 left-0 w-48">
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <a
                href={`#${category}`}
                onClick={(e) => handleClick(e, category)}
                className={`block text-sm transition-colors duration-200 ${
                  activeId === category
                    ? "text-[var(--color-text-primary)] font-medium pl-3 border-l-2 border-[var(--color-text-primary)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
