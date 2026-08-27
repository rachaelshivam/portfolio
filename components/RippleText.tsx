"use client";

import { useEffect, useRef } from "react";

interface RippleTextProps {
  lines: string[];
  trigger: number;
  /** Mouse entry X position (px relative to viewport) for directional wave */
  entryX?: number;
  entryY?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function RippleText({
  lines,
  trigger,
  entryX,
  entryY,
  className,
  style,
}: RippleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Inject the ripple keyframe once
  useEffect(() => {
    const id = "ripple-text-keyframes";
    if (document.getElementById(id)) return;
    const styleEl = document.createElement("style");
    styleEl.id = id;
    styleEl.textContent = `
      @keyframes letter-ripple {
        0% { transform: translateY(0) scaleY(1) skewX(0deg); }
        20% { transform: translateY(-5px) scaleY(1.08) skewX(-2deg); }
        40% { transform: translateY(0) scaleY(0.95) skewX(1deg); }
        60% { transform: translateY(3px) scaleY(1.03) skewX(-0.5deg); }
        80% { transform: translateY(-1px) scaleY(1); }
        100% { transform: translateY(0) scaleY(1) skewX(0deg); }
      }
    `;
    document.head.appendChild(styleEl);
  }, []);

  // Replay animation on trigger — wave originates from cursor entry point
  useEffect(() => {
    if (trigger === 0 || !containerRef.current) return;

    const spans = containerRef.current.querySelectorAll<HTMLSpanElement>(
      "[data-ripple-char]"
    );

    // Get each character's center position (2D)
    const containerRect = containerRef.current.getBoundingClientRect();
    const charPositions: { el: HTMLSpanElement; centerX: number; centerY: number }[] = [];
    spans.forEach((span) => {
      const rect = span.getBoundingClientRect();
      charPositions.push({
        el: span,
        centerX: rect.left + rect.width / 2 - containerRect.left,
        centerY: rect.top + rect.height / 2 - containerRect.top,
      });
    });

    // Sort by 2D distance from entry point for directional wave
    const originX = entryX !== undefined ? entryX - containerRect.left : 0;
    const originY = entryY !== undefined ? entryY - containerRect.top : 0;

    const sorted = [...charPositions].sort((a, b) => {
      const distA = Math.sqrt((a.centerX - originX) ** 2 + (a.centerY - originY) ** 2);
      const distB = Math.sqrt((b.centerX - originX) ** 2 + (b.centerY - originY) ** 2);
      return distA - distB;
    });

    // Reset all animations
    spans.forEach((span) => {
      span.style.animation = "none";
      void span.offsetHeight;
    });

    // Apply staggered delays based on distance from entry
    const DELAY_PER_RANK = 15;
    requestAnimationFrame(() => {
      sorted.forEach((item, rank) => {
        item.el.style.animation = `letter-ripple 0.6s ease ${rank * DELAY_PER_RANK}ms forwards`;
      });
    });
  }, [trigger, entryX, entryY]);

  return (
    <div ref={containerRef} className={className} style={{ ...style, cursor: "default", userSelect: "none" }}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} style={{ display: "block" }}>
          {line.split("").map((char, i) => {
            if (char === " ") {
              return (
                <span
                  key={i}
                  data-ripple-char
                  style={{ display: "inline-block", width: "0.3em" }}
                >
                  &nbsp;
                </span>
              );
            }
            return (
              <span
                key={i}
                data-ripple-char
                style={{
                  display: "inline-block",
                  transformOrigin: "center bottom",
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
}