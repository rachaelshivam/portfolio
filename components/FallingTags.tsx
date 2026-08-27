"use client";

import { useEffect, useState, useRef } from "react";

interface FallingTagsProps {
  descriptorIndex: number;
  trigger: number;
  /** Ref to the heading container to constrain tag width */
  headingRef?: React.RefObject<HTMLElement | null>;
  /** Called with true when tags start falling, false when they fade out */
  onFalling?: (falling: boolean) => void;
}

const TAGS_BY_DESCRIPTOR: Record<number, string[]> = {
  0: ["product strategy", "prototyping", "design systems", "wireframing", "user research"],
  1: ["service design", "journey mapping", "stakeholder mapping", "information architecture"],
  2: ["usability testing", "interviews", "surveys", "affinity mapping", "thematic analysis"],
};

interface FallingTag {
  id: string;
  label: string;
  leftPx: number;
  delay: number;
  rotation: number;
  duration: number;
  bottomPx: number; // vertical offset from ground for stacking
  zIndex: number;
}

// Estimate pill width in px based on character count
function estimateWidth(label: string): number {
  return label.length * 8.5 + 40; // avg char width + padding
}

// Lay out tags so they don't overlap, some flat, some tilted/leaning
function layoutTags(
  labels: string[],
  containerWidth: number,
  containerLeft: number,
  trigger: number
): FallingTag[] {
  const tags: FallingTag[] = [];

  // Shuffle order for variety each click
  const shuffled = [...labels].sort(() => Math.random() - 0.5);

  // Divide container into equal slots, centre each tag in its slot
  const slotWidth = containerWidth / shuffled.length;

  shuffled.forEach((label, i) => {
    const w = estimateWidth(label);
    const isFlat = i % 3 === 0;
    const leanDirection = i % 2 === 0 ? 1 : -1;

    let rotation: number;
    let bottomPx: number;

    if (isFlat) {
      rotation = -2 + Math.random() * 4;
      bottomPx = 0;
    } else {
      rotation = leanDirection * (12 + Math.random() * 18);
      bottomPx = 4 + Math.random() * 10;
    }

    // Centre tag within its slot, with slight random jitter
    const slotCenter = containerLeft + slotWidth * i + slotWidth / 2;
    const jitter = (Math.random() - 0.5) * slotWidth * 0.2;

    tags.push({
      id: `${trigger}-${i}`,
      label,
      leftPx: slotCenter - w / 2 + jitter,
      delay: i * 100 + Math.random() * 80,
      rotation,
      duration: 1200 + Math.random() * 500,
      bottomPx,
      zIndex: isFlat ? 1 : 2,
    });
  });

  return tags;
}

export default function FallingTags({ descriptorIndex, trigger, headingRef, onFalling }: FallingTagsProps) {
  const [tags, setTags] = useState<FallingTag[]>([]);
  const [visible, setVisible] = useState(false);
  const [landingTop, setLandingTop] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (trigger === 0) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const tagLabels = TAGS_BY_DESCRIPTOR[descriptorIndex] || TAGS_BY_DESCRIPTOR[0];

    // Measure heading width and position for constraining tags
    let containerWidth = 600;
    let containerLeft = 0;

    if (headingRef?.current) {
      const rect = headingRef.current.getBoundingClientRect();
      containerWidth = rect.width;
      containerLeft = rect.left;
    } else {
      // Fallback: center within viewport
      containerWidth = Math.min(700, window.innerWidth * 0.6);
      containerLeft = (window.innerWidth - containerWidth) / 2;
    }

    // Land tags at the bottom of the viewport
    let landingTop = window.innerHeight - 60;

    const newTags = layoutTags(tagLabels, containerWidth, containerLeft, trigger);

    setTags(newTags);
    setLandingTop(landingTop);
    setVisible(true);
    onFalling?.(true);

    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      onFalling?.(false);
      timeoutRef.current = setTimeout(() => {
        setTags([]);
      }, 600);
    }, 2500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [trigger, descriptorIndex, headingRef]);

  if (tags.length === 0) return null;

  return (
    <>
      <style>{`
        @keyframes tag-fall {
          0% {
            transform: translateY(-30vh) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          68% {
            transform: translateY(0) rotate(var(--land-rotation)) scale(1);
          }
          80% {
            transform: translateY(-12px) rotate(var(--land-rotation)) scale(1);
          }
          90% {
            transform: translateY(0) rotate(var(--land-rotation)) scale(1);
          }
          96% {
            transform: translateY(-3px) rotate(var(--land-rotation)) scale(1);
          }
          100% {
            transform: translateY(0) rotate(var(--land-rotation)) scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 50,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="absolute"
            style={{
              left: tag.leftPx,
              top: landingTop - tag.bottomPx - 40,
              zIndex: tag.zIndex,
              ["--land-rotation" as string]: `${tag.rotation}deg`,
              animation: `tag-fall ${tag.duration}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
              animationDelay: `${tag.delay}ms`,
              opacity: 0,
              transformOrigin: "center bottom",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#212121",
                borderRadius: "999px",
                fontSize: "0.95rem",
                color: "#FDFDFD",
                fontWeight: 600,
                whiteSpace: "nowrap",
                fontFamily: "var(--font-sans)",
              }}
            >
              {tag.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}