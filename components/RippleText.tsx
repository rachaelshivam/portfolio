"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface RippleTextProps {
  lines: string[];
  trigger: number;
  /** Mouse entry X position (px relative to viewport) for directional wave */
  entryX?: number;
  entryY?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Apply highlight effect to all lines */
  highlight?: boolean;
  /** Indices of characters to italicize (flat across all lines) */
  italicIndices?: number[];
}

export default function RippleText({
  lines,
  trigger,
  entryX,
  entryY,
  className,
  style,
  highlight,
  italicIndices,
}: RippleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineWidths, setLineWidths] = useState<number[]>([]);
  const [globalCharIndex, setGlobalCharIndex] = useState(0);
  
  const measureLine = useCallback((index: number) => (el: HTMLSpanElement | null) => {
    if (el && highlight) {
      const rect = el.getBoundingClientRect();
      setLineWidths(prev => {
        // Only update if width has changed significantly (avoid infinite loop)
        if (Math.abs(prev[index] - rect.width) > 1) {
          const newWidths = [...prev];
          newWidths[index] = rect.width;
          return newWidths;
        }
        return prev;
      });
    }
  }, [highlight]);

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

  let charCounter = 0;
  return (
    <div ref={containerRef} className={className} style={{ ...style, cursor: "default", userSelect: "none", wordWrap: "break-word", overflowWrap: "break-word", maxWidth: "100%" }}>
      {lines.map((line, lineIdx) => (
        <span 
          key={lineIdx} 
          ref={measureLine(lineIdx)}
          style={{ display: "block", position: "relative" }}
        >
          {highlight && lineWidths[lineIdx] && (
            <svg
              width={lineWidths[lineIdx] + 20}
              height="100%"
              viewBox={`0 0 ${lineWidths[lineIdx] + 20} 100`}
              preserveAspectRatio="none"
              style={{ position: "absolute", top: "10%", left: -10, height: "80%", zIndex: -1, overflow: "visible" }}
            >
              <path
                d={`M 0,20 
                   C ${(lineWidths[lineIdx] + 20) * 0.05},15 ${(lineWidths[lineIdx] + 20) * 0.09},25 ${(lineWidths[lineIdx] + 20) * 0.13},18
                   S ${(lineWidths[lineIdx] + 20) * 0.2},12 ${(lineWidths[lineIdx] + 20) * 0.25},18
                   S ${(lineWidths[lineIdx] + 20) * 0.35},14 ${(lineWidths[lineIdx] + 20) * 0.4},20
                   S ${(lineWidths[lineIdx] + 20) * 0.5},12 ${(lineWidths[lineIdx] + 20) * 0.55},18
                   S ${(lineWidths[lineIdx] + 20) * 0.7},15 ${(lineWidths[lineIdx] + 20) * 0.75},18
                   S ${(lineWidths[lineIdx] + 20) * 0.85},15 ${(lineWidths[lineIdx] + 20) * 0.9},18
                   L ${lineWidths[lineIdx] + 20},22
                   L ${lineWidths[lineIdx] + 20},78
                   C ${(lineWidths[lineIdx] + 20) * 0.9},83 ${(lineWidths[lineIdx] + 20) * 0.85},73 ${(lineWidths[lineIdx] + 20) * 0.8},78
                   S ${(lineWidths[lineIdx] + 20) * 0.65},84 ${(lineWidths[lineIdx] + 20) * 0.6},78
                   S ${(lineWidths[lineIdx] + 20) * 0.45},82 ${(lineWidths[lineIdx] + 20) * 0.4},76
                   S ${(lineWidths[lineIdx] + 20) * 0.25},84 ${(lineWidths[lineIdx] + 20) * 0.2},78
                   S ${(lineWidths[lineIdx] + 20) * 0.09},82 ${(lineWidths[lineIdx] + 20) * 0.05},78
                   L 0,76
                   Z`}
                fill="rgba(255, 220, 100, 0.4)"
              />
            </svg>
          )}
          {line.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              {word.split("").map((char, i) => {
                const isItalic = italicIndices?.includes(charCounter);
                charCounter++;
                return (
                  <span
                    key={i}
                    data-ripple-char
                    style={{
                      display: "inline-block",
                      transformOrigin: "center bottom",
                      fontStyle: isItalic ? 'italic' : 'normal',
                    }}
                  >
                    {char}
                  </span>
                );
              })}
              {wordIdx < line.split(" ").length - 1 && (
                <span
                  data-ripple-char
                  style={{ display: "inline-block", width: "0.3em" }}
                >
                  &nbsp;
                </span>
              )}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}