"use client";

import { useRef } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import Work from "@/components/Work";

export default function Home() {
  const firstCardRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero firstCardRef={firstCardRef} />
      <Work firstCardRef={firstCardRef} />
      <Publications />
      <Footer />
    </>
  );
}
