"use client";

import HashLink from "@/components/HashLink";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
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
      className={`site-nav sticky top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color] duration-300 ${
        showFrost
          ? "border-b border-border-subtle bg-[rgba(249,248,246,0.8)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[var(--max-width-content)] items-center justify-between px-[var(--space-4)] sm:px-[var(--space-6)]">
        <Link
          href="/"
          className="nav-logo text-lg tracking-tight sm:text-xl"
          onClick={() => setMenuOpen(false)}
        >
          Rachael Shivam
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-[var(--space-6)] md:flex"
        >
          {navLinks.map(({ label, href }) =>
            href.startsWith("#") ? (
              <HashLink key={href} href={href} className="nav-link text-sm">
                {label}
              </HashLink>
            ) : (
              <Link key={href} href={href} className="nav-link text-sm">
                {label}
              </Link>
            ),
          )}
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

      <nav
        id="mobile-nav"
        aria-label="Mobile primary"
        className={`overflow-hidden border-t border-transparent transition-[max-height,opacity,border-color] duration-300 md:hidden ${
          menuOpen
            ? "max-h-64 border-border-subtle opacity-100"
            : "max-h-0 opacity-0"
        } ${showFrost ? "bg-[rgba(249,248,246,0.8)] backdrop-blur-md" : "bg-transparent"}`}
      >
        <ul className="mx-auto flex max-w-[var(--max-width-content)] flex-col px-[var(--space-4)] py-[var(--space-3)] sm:px-[var(--space-6)]">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              {href.startsWith("#") ? (
                <HashLink
                  href={href}
                  className="nav-link block py-[var(--space-3)] text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </HashLink>
              ) : (
                <Link
                  href={href}
                  className="nav-link block py-[var(--space-3)] text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
