"use client";

import { useEffect, useRef, useState } from "react";

const NUM_PIECES = 18;
const BLOB_COLOR = "#E8A0BE";
const BLOB_SHADOW = `0 0 40px ${BLOB_COLOR}`;

interface PieceConfig {
  size: number;
  offsetX: number;
  offsetY: number;
  moveDelay: number;
  moveDuration: number;
}

interface HeroBlobProps {
  trigger?: number;
}

export default function HeroBlob({ trigger = 0 }: HeroBlobProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [pieces] = useState<PieceConfig[]>(() => {
    const configs: PieceConfig[] = [];
    for (let i = 0; i < NUM_PIECES; i++) {
      const isCenter = i < 6;
      const spread = isCenter ? 80 : 160;
      configs.push({
        size: isCenter ? 160 + Math.random() * 60 : 100 + Math.random() * 60,
        offsetX: -spread + Math.random() * spread * 2,
        offsetY: -spread + Math.random() * spread * 2,
        moveDelay: i === 0 ? 0 : 0.5 + Math.random() * 2.5,
        moveDuration: 2.5 + Math.random() * 2,
      });
    }
    return configs;
  });

  // Inject wobble keyframes
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent =
      pieces
        .map(
          (p, i) => `
        @keyframes hero-blob-wobble-${i} {
          0% { transform: translate(0, 0); }
          50% { transform: translate(${p.offsetX}px, ${p.offsetY}px); }
          100% { transform: translate(0, 0); }
        }`
        )
        .join("\n") +
      `
      @keyframes hero-blob-pulse {
        0% { transform: translate(-50%, -50%) scale(1); }
        40% { transform: translate(-50%, -50%) scale(1.06); }
        100% { transform: translate(-50%, -50%) scale(1); }
      }
    `;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, [pieces]);

  // Pulse on trigger
  useEffect(() => {
    if (trigger === 0 || !wrapperRef.current) return;
    const el = wrapperRef.current;
    el.style.animation = "none";
    // Force reflow
    void el.offsetHeight;
    el.style.animation = "hero-blob-pulse 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards";
  }, [trigger]);

  return (
    <div className="absolute inset-0 overflow-visible" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id="hero-goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="24"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7"
              result="goo"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={wrapperRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ filter: "url(#hero-goo)" }}
      >
        {pieces.map((piece, i) => (
          <div
            key={i}
            style={{
              width: piece.size,
              height: piece.size,
              backgroundColor: BLOB_COLOR,
              borderRadius: "50%",
              position: "absolute",
              boxShadow: BLOB_SHADOW,
              animation: `hero-blob-wobble-${i} ${piece.moveDuration}s ease-in-out infinite`,
              animationDelay: `${piece.moveDelay}s`,
              left: 0,
              top: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}