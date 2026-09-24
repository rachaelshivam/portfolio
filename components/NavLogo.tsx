"use client";

import Link from "next/link";
import { useRef } from "react";

interface NavLogoProps {
  onClick?: () => void;
}

export default function NavLogo({ onClick }: NavLogoProps) {
  const logoRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (!logoRef.current) return;
    
    const chars = logoRef.current.querySelectorAll('[data-logo-char]') as NodeListOf<HTMLElement>;
    chars.forEach((char, index) => {
      char.style.animation = "none";
      void char.offsetHeight;
      char.style.animation = `letter-ripple 0.6s ease ${index * 0.05}s forwards`;
    });
  };

  return (
    <>
      <style>{`
        @keyframes letter-ripple {
          0% { transform: translateY(0) scaleY(1) skewX(0deg); }
          20% { transform: translateY(-5px) scaleY(1.08) skewX(-2deg); }
          40% { transform: translateY(0) scaleY(0.95) skewX(1deg); }
          60% { transform: translateY(3px) scaleY(1.03) skewX(-0.5deg); }
          80% { transform: translateY(-1px) scaleY(1); }
          100% { transform: translateY(0) scaleY(1) skewX(0deg); }
        }
      `}</style>
      <Link
        href="/"
        className="nav-logo text-[1.625rem] tracking-tight sm:text-[1.875rem]"
        style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
        onMouseEnter={handleMouseEnter}
        onClick={onClick}
      >
        <span ref={logoRef}>
          <span data-logo-char style={{ display: 'inline-block', transformOrigin: 'center bottom' }}>R</span>
          <span data-logo-char style={{ display: 'inline-block', transformOrigin: 'center bottom' }}>S</span>
          <span data-logo-char style={{ display: 'inline-block', transformOrigin: 'center bottom', color: '#D83775' }}>.</span>
        </span>
      </Link>
    </>
  );
}
