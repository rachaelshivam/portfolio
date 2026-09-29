"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { CaseStudySection } from "@/data/caseStudies";
import { categoryId } from "@/components/CaseStudySections";

type TOCProps = {
  sections: CaseStudySection[];
};

export default function CaseStudyTOC({ sections }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("overview");
  const [navTop, setNavTop] = useState<number>(128); // Default fallback
  const previousActiveIdRef = useRef<string>("overview");

  // Extract unique categories from text sections, preserving order
  const categories = Array.from(
    new Map(
      sections
        .filter((section): section is Extract<CaseStudySection, { type: "text" }> =>
          section.type === "text"
        )
        .map((section) => [section.category, section.category])
    ).values()
  );

  // Calculate TOC position to align with intro paragraph first line (only on load and resize)
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const calculatePosition = () => {
      // Only calculate when at top of page to get correct baseline position
      if (window.scrollY === 0) {
        const introParagraph = document.getElementById('intro-paragraph');
        if (introParagraph) {
          const paragraphRect = introParagraph.getBoundingClientRect();
          const lineHeight = parseFloat(getComputedStyle(introParagraph).lineHeight);
          const fontSize = parseFloat(getComputedStyle(introParagraph).fontSize);
          
          // Align with first line: paragraph top + (lineHeight - fontSize) / 2
          const firstLineOffset = (lineHeight - fontSize) / 2;
          const targetTop = paragraphRect.top + firstLineOffset;
          
          setNavTop(targetTop);
        }
      }
    };

    // Calculate on mount with a delay to ensure DOM is ready
    const timeoutId = setTimeout(calculatePosition, 100);
    
    // Recalculate on window load (after fonts and images)
    const handleLoad = () => {
      calculatePosition();
    };
    
    const handleResize = () => {
      calculatePosition();
    };
    
    // Use ResizeObserver on header to detect layout changes
    const header = document.getElementById('overview');
    let resizeObserver: ResizeObserver | null = null;
    
    if (header) {
      resizeObserver = new ResizeObserver(() => {
        calculatePosition();
      });
      resizeObserver.observe(header);
    }
    
    window.addEventListener('load', handleLoad);
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleScroll = () => {
      const threshold = 140; // Just below top nav
      
      // Check if at bottom of page
      const isAtBottom = Math.abs((window.innerHeight + window.scrollY) - document.documentElement.scrollHeight) < 2;
      const isShortPage = document.documentElement.scrollHeight <= window.innerHeight;
      
      // Get all sections with data-toc-section at time of call
      const sections = document.querySelectorAll('[data-toc-section]');
      let lastActiveId = "overview";
      
      if (isAtBottom && !isShortPage && sections.length > 0) {
        // Use the last section's id
        lastActiveId = sections[sections.length - 1].id;
      } else {
        // Find the last section whose top has passed the threshold
        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= threshold) {
            lastActiveId = section.id;
          }
        }
      }
      
      // Only update state if value changed
      if (previousActiveIdRef.current !== lastActiveId) {
        previousActiveIdRef.current = lastActiveId;
        setActiveId(lastActiveId);
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (typeof document === 'undefined') return;
    
    if (id === "overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 96; // Account for fixed nav
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }
  };

  if (categories.length === 0) {
    return null;
  }

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <aside className="hidden 2xl:block">
      <nav 
        className="fixed left-8 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto"
        style={{ top: `${navTop}px` }}
      >
        <ul className="space-y-3">
          <li key="overview">
            <a
              href="#overview"
              onClick={(e) => handleClick(e, "overview")}
              className={`block text-xs transition-colors duration-200 ${
                activeId === "overview"
                  ? "text-[#D83775] font-medium pl-3 border-l-2 border-[#D83775]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              Overview
            </a>
          </li>
          {categories.map((category) => {
            const id = categoryId(category);
            return (
              <li key={category}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`block text-xs transition-colors duration-200 ${
                    activeId === id
                      ? "text-[#D83775] font-medium pl-3 border-l-2 border-[#D83775]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>,
    document.body
  );
}
