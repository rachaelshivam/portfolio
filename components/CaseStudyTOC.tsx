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
      const switchLine = window.innerHeight * 0.3; // 30% of viewport height
      
      // Check if at bottom of page
      const isAtBottom = Math.abs((window.innerHeight + window.scrollY) - document.documentElement.scrollHeight) < 2;
      const isShortPage = document.documentElement.scrollHeight <= window.innerHeight;
      
      // Get all sections with data-toc-section at time of call
      const sections = document.querySelectorAll('[data-toc-section]');
      let lastActiveId = "overview";
      
      if (isAtBottom && !isShortPage && sections.length > 0) {
        // Use the last section's id
        lastActiveId = sections[sections.length - 1].id;
      } else if (sections.length > 0) {
        // Check if first category's first section is still below switch line → Overview is active
        const firstSection = sections[0];
        const firstSectionTop = firstSection.getBoundingClientRect().top;
        
        if (firstSectionTop > switchLine) {
          // First section hasn't reached the switch line yet → Overview is active
          lastActiveId = "overview";
        } else {
          // First section has passed switch line → use category start/end logic
          // Each category's start is the top of its first section
          // Each category's end is the top of the next category's first section
          // Last category's end is the bottom of the case study sections container
          
          const categoryStarts: { [key: string]: number } = {};
          const categoryEnds: { [key: string]: number } = {};
          
          // Get the case study sections container for the last category's end
          const sectionsContainer = document.querySelector('.case-study-sections');
          const containerBottom = sectionsContainer ? sectionsContainer.getBoundingClientRect().bottom : Infinity;
          
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const categoryId = section.id;
            const rect = section.getBoundingClientRect();
            const top = rect.top;
            
            // Store the start (top) of each category's first section
            if (categoryStarts[categoryId] === undefined) {
              categoryStarts[categoryId] = top;
            }
            
            // The end of this category is the start of the next category
            if (i < sections.length - 1) {
              const nextSection = sections[i + 1];
              const nextCategoryId = nextSection.id;
              const nextRect = nextSection.getBoundingClientRect();
              categoryEnds[categoryId] = nextRect.top;
            } else {
              // Last category's end is the container bottom
              categoryEnds[categoryId] = containerBottom;
            }
          }
          
          // Find the category whose start is at or above switch line and end is below it
          let foundActive = false;
          for (const category of categories) {
            const id = categoryId(category);
            const start = categoryStarts[id];
            const end = categoryEnds[id];
            
            if (start !== undefined && end !== undefined) {
              if (start <= switchLine && end > switchLine) {
                lastActiveId = id;
                foundActive = true;
                break;
              }
            }
          }
          
          // If no category matches, use the last category (past all others)
          if (!foundActive && sections.length > 0) {
            lastActiveId = sections[sections.length - 1].id;
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
  }, [categories]);

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
