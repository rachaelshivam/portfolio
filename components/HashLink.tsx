"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type HashLinkProps = ComponentPropsWithoutRef<"a">;

function parseHashHref(href: string) {
  if (href.startsWith("#")) {
    return { path: "", hash: href };
  }

  if (href.includes("#")) {
    const [linkPath, linkHash] = href.split("#");
    return { path: linkPath || "/", hash: `#${linkHash}` };
  }

  return null;
}

export function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({ behavior: "smooth" });
  window.history.pushState(null, "", `#${id}`);
  return true;
}

export default function HashLink({
  href,
  onClick,
  children,
  ...props
}: HashLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || !href) return;

    const parsed = parseHashHref(href);
    if (!parsed) return;

    const { path, hash } = parsed;
    const targetPath = path || pathname;

    if (pathname === targetPath) {
      if (!scrollToHash(hash)) return;
      event.preventDefault();
      return;
    }

    event.preventDefault();
    router.push(`${targetPath}${hash}`);
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
