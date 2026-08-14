"use client";

import HashLink from "@/components/HashLink";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "#resume" }
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const showFrost = scrolled || menuOpen;

  return (
    <header
      className={`site-nav sticky top-0 z-50 w-full transition-[background-color,backdrop-filter] duration-300 ${
        showFrost
          ? "bg-[rgba(253,253,253,0.8)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="px-[var(--space-4)] sm:px-[var(--space-5)]">
        <div className="mx-auto flex h-16 w-full max-w-[72rem] items-center justify-between">
          <Link
            href="/"
            className="nav-logo text-[1.15rem] tracking-tight sm:text-xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
            onClick={() => setMenuOpen(false)}
          >
            Rachael Shivam
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-[var(--space-6)] md:flex"
          >
            {navLinks.map(({ label, href }) =>
              href.includes("#") ? (
                <HashLink key={href} href={href} className="nav-link text-[0.95rem]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
                  {label}
                </HashLink>
              ) : (
                <Link key={href} href={href} className="nav-link text-[0.95rem]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
                  {label}
                </Link>
              ),
            )}
            <Link href="mailto:rachael@example.com" className="nav-link" aria-label="Email">
              <Mail size={18} />
            </Link>
            <Link href="https://linkedin.com/in/rachaelshivam" className="nav-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </Link>
          </nav>

          <button
            type="button"
            className="nav-link relative flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="flex w-5 flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile primary"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0"
        } ${showFrost ? "bg-[rgba(253,253,253,0.8)] backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="px-[var(--space-4)] sm:px-[var(--space-5)]">
          <ul className="mx-auto flex w-full max-w-[72rem] flex-col py-[var(--space-3)]">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              {href.includes("#") ? (
                <HashLink
                  href={href}
                  className="nav-link block py-[var(--space-3)] text-[0.95rem]"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </HashLink>
              ) : (
                <Link
                  href={href}
                  className="nav-link block py-[var(--space-3)] text-[0.95rem]"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
          <div className="flex gap-4 py-[var(--space-3)]">
            <Link href="mailto:rachael@example.com" className="nav-link" aria-label="Email">
              <Mail size={18} />
            </Link>
            <Link href="https://linkedin.com/in/rachaelshivam" className="nav-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </Link>
          </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}
