"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

interface TextShuffleProps {
  texts: string[];
  currentIndex: number;
  /** Milliseconds each character spends scrambling before resolving */
  charDuration?: number;
  /** Milliseconds between each character resolving (left to right) */
  charStagger?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TextShuffle({
  texts,
  currentIndex,
  charDuration = 400,
  charStagger = 30,
  className,
  style,
}: TextShuffleProps) {
  const [display, setDisplay] = useState(texts[0]);
  const prevIndexRef = useRef(currentIndex);
  const rafRef = useRef<number>(0);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Skip on initial mount
    if (prevIndexRef.current === currentIndex && display === texts[currentIndex]) {
      return;
    }
    prevIndexRef.current = currentIndex;

    const target = texts[currentIndex];
    const maxLen = Math.max(display.length, target.length);
    const resolved = new Array(maxLen).fill(false);
    const startTime = Date.now();

    // Clear any existing timeouts
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];

    // Schedule each character to resolve left-to-right
    for (let i = 0; i < maxLen; i++) {
      const timeout = setTimeout(() => {
        resolved[i] = true;
      }, i * charStagger);
      timeoutRefs.current.push(timeout);
    }

    const scramble = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      let allResolved = true;
      let result = "";

      for (let i = 0; i < maxLen; i++) {
        if (resolved[i] && elapsed > i * charStagger + charDuration) {
          // This character has finished — show final
          result += i < target.length ? target[i] : "";
        } else if (i < target.length) {
          allResolved = false;
          // Preserve spaces, scramble letters
          if (target[i] === " ") {
            result += " ";
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
      }

      setDisplay(result);

      if (allResolved) {
        setDisplay(target);
        return;
      }

      rafRef.current = requestAnimationFrame(scramble);
    };

    rafRef.current = requestAnimationFrame(scramble);

    return () => {
      cancelAnimationFrame(rafRef.current);
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, [currentIndex, texts, charDuration, charStagger]);

  return (
    <span className={className} style={style}>
      {display}
    </span>
  );
}
