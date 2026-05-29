"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type HashLinkProps = ComponentPropsWithoutRef<"a">;

export default function HashLink({
  href,
  onClick,
  children,
  ...props
}: HashLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || !href?.startsWith("#")) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
