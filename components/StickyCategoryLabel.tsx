"use client";

import { useEffect, useRef, useState } from "react";

type StickyCategoryLabelProps = {
  categories: string[];
};

export default function StickyCategoryLabel({ categories }: StickyCategoryLabelProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || "");
  const [isAnimating, setIsAnimating] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.getAttribute("data-category");
            if (category && category !== activeCategory) {
              setIsAnimating(true);
              setActiveCategory(category);
              setTimeout(() => setIsAnimating(false), 150);
            }
          }
        });
      },
      {
        rootMargin: "-10% 0px -60% 0px",
        threshold: 0,
      }
    );

    observerRef.current = observer;

    const categoryGroups = document.querySelectorAll('[data-category-group]');
    categoryGroups.forEach((group) => observer.observe(group));

    return () => {
      observer.disconnect();
    };
  }, [categories, activeCategory]);

  if (!activeCategory) {
    return null;
  }

  return (
    <div
      className={`sticky top-0 z-10 bg-[var(--color-bg)] py-4 transition-all duration-150 ease-out ${
        isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[#737272]">
        {activeCategory}
      </p>
    </div>
  );
}
