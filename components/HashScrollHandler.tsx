"use client";

import { scrollToHash } from "@/components/HashLink";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    requestAnimationFrame(() => {
      scrollToHash(hash);
    });
  }, [pathname]);

  return null;
}
