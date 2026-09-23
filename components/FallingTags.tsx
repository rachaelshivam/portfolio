"use client";

import { useEffect, useState, useRef } from "react";

interface FallingTagsProps {
  descriptorIndex: number;
  trigger: number;
  /** Ref to the heading container to constrain tag width */
  headingRef?: React.RefObject<HTMLElement | null>;
  /** Ref to the target element where tags should land (first case study card) */
  targetRef?: React.RefObject<HTMLElement | null>;
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
  landingTop: number; // individual landing position for each tag
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
  trigger: number,
  targetRef?: React.RefObject<HTMLElement | null>
): FallingTag[] {
  const tags: FallingTag[] = [];

  // Shuffle order for variety each click
  const shuffled = [...labels].sort(() => Math.random() - 0.5);

  // Divide container into equal slots, centre each tag in its slot
  const slotWidth = containerWidth / shuffled.length;

  // Get target element bounds for landing position calculation
  let targetRect: DOMRect | null = null;
  let imageRect: DOMRect | null = null;
  let textRect: DOMRect | null = null;
  
  if (targetRef?.current) {
    targetRect = targetRef.current.getBoundingClientRect();
    
    // Find the image and text elements within the card
    const cardElement = targetRef.current;
    const imageElement = cardElement.querySelector('img, video');
    const textElement = cardElement.querySelector('h3, p');
    
    if (imageElement) {
      imageRect = imageElement.getBoundingClientRect();
    }
    if (textElement) {
      textRect = textElement.getBoundingClientRect();
    }
  }

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
    const tagLeft = slotCenter - w / 2 + jitter;

    // Calculate landing position based on actual element positions
    let landingTop = window.innerHeight - 60; // Fallback
    if (targetRect) {
      const relativeX = tagLeft - targetRect.left;
      
      // Use actual element positions if available
      if (imageRect && textRect) {
        // Determine if tag is over image or text area based on horizontal position
        const imageLeft = imageRect.left - targetRect.left;
        
        if (relativeX > imageLeft) {
          // Over image area - land just above top of image
          landingTop = imageRect.top - 30 + Math.random() * 15;
        } else {
          // Over text area - land just above top of text
          landingTop = textRect.top - 30 + Math.random() * 15;
        }
        
        // Collision detection: check if tag overlaps with content
        const tagWidth = w;
        const tagHeight = 40; // Approximate tag height
        const tagLeftPos = tagLeft;
        const tagRight = tagLeftPos + tagWidth;
        const tagTop = landingTop - tagHeight;
        const tagBottom = landingTop;
        
        // Check collision with text area
        const textLeft = textRect.left;
        const textRight = textRect.right;
        const textTop = textRect.top;
        const textBottom = textRect.bottom;
        
        // Check collision with image area
        const imgLeft = imageRect.left;
        const imgRight = imageRect.right;
        const imgTop = imageRect.top;
        const imgBottom = imageRect.bottom;
        
        // Check if tag overlaps with text
        const overlapsText = (
          tagRight > textLeft &&
          tagLeftPos < textRight &&
          tagBottom > textTop &&
          tagTop < textBottom
        );
        
        // Check if tag overlaps with image
        const overlapsImage = (
          tagRight > imgLeft &&
          tagLeftPos < imgRight &&
          tagBottom > imgTop &&
          tagTop < imgBottom
        );
        
        // If overlapping, nudge upward
        if (overlapsText || overlapsImage) {
          // Move tag up to clear the content
          const contentTop = overlapsText ? textTop : imgTop;
          landingTop = contentTop - tagHeight - 10 - Math.random() * 10;
        }
      } else {
        // Fallback to estimated layout if elements not found
        const targetWidth = targetRect.width;
        const textAreaWidth = targetWidth * 0.4;
        if (relativeX < textAreaWidth) {
          landingTop = targetRect.top + 10 + Math.random() * 20;
        } else {
          landingTop = targetRect.top + 70 + Math.random() * 30;
        }
      }
    }

    tags.push({
      id: `${trigger}-${i}`,
      label,
      leftPx: tagLeft,
      delay: i * 100 + Math.random() * 80,
      rotation,
      duration: 1200 + Math.random() * 500,
      bottomPx,
      zIndex: isFlat ? 1 : 2,
      landingTop,
    });
  });

  return tags;
}

export default function FallingTags({ descriptorIndex, trigger, headingRef, targetRef, onFalling }: FallingTagsProps) {
  const [tags, setTags] = useState<FallingTag[]>([]);
  const [visible, setVisible] = useState(false);
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

    const newTags = layoutTags(tagLabels, containerWidth, containerLeft, trigger, targetRef);

    setTags(newTags);
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
  }, [trigger, descriptorIndex, headingRef, targetRef]);

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
              top: tag.landingTop - tag.bottomPx - 40,
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