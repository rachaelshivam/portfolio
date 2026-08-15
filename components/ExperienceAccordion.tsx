"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Experience } from "@/data/experience";

export default function ExperienceAccordion({ 
  items 
}: { 
  items: Experience[] 
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mt-[var(--space-8)]">
      {items.map((item, index) => (
        <div
          key={`${item.organisation}-${item.period}`}
          className={`border-t border-[var(--color-border)] ${index === items.length - 1 ? 'border-b' : ''}`}
        >
          <div
            className="flex cursor-pointer items-center py-[var(--space-5)]"
            onClick={() => toggleExpanded(index)}
          >
            <div className="h-[52px] w-[52px] flex-shrink-0 rounded-lg bg-[var(--color-border)]"></div>
            <div className="ml-4 flex-1">
              <p
                className="text-[1.125rem] text-[#212121]"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                {item.role}
              </p>
              <p className="mt-[var(--space-1)] text-[0.95rem] text-[var(--color-text-muted)]">
                {item.organisation}
                {item.context && <span> · {item.context}</span>}
                <span> · {item.period}</span>
              </p>
            </div>
            <div className="text-[var(--color-text-muted)]">
              {expandedIndex === index ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </div>
          </div>
          {expandedIndex === index && (
            <p className="pl-[64px] pb-[var(--space-5)] text-[#404040] text-[0.95rem] leading-[var(--leading-relaxed)]">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
