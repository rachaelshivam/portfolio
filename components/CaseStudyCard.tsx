"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type CaseStudyCardProps = {
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  thumbnail: string;
  slug: string;
};

export default function CaseStudyCard({
  title,
  subtitle,
  summary,
  tags,
  thumbnail,
  slug,
}: CaseStudyCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/work/${slug}`} className="case-study-card group block">
      <div className="grid gap-6 lg:gap-[60px] lg:grid-cols-[2fr_3fr]">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-[var(--color-border)] order-1 lg:order-2 max-w-[60%] mx-auto lg:max-w-none lg:mx-0">
          {!imageError && (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 45vw"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div className="flex flex-col justify-center order-2 lg:order-1 py-4">
          <h3 className="text-[1.5rem] leading-[var(--leading-tight)] text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 550 }}>
            {title}
          </h3>
          <p className="mt-2 text-[1rem] text-[var(--color-text-muted)]">
            {subtitle}
          </p>
          <p className="mt-3 text-[1rem] leading-[var(--leading-normal)] text-[var(--color-text-body)]">
            {summary}
          </p>
          {tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className="px-3 py-1 text-sm border border-[#212121] bg-transparent text-[#212121] rounded-full">
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Link>
  );
}
