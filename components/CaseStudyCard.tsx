"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type CaseStudyCardProps = {
  title: string;
  summary: string;
  tags: string[];
  thumbnail: string;
  slug: string;
};

export default function CaseStudyCard({
  title,
  summary,
  tags,
  thumbnail,
  slug,
}: CaseStudyCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/work/${slug}`} className="case-study-card group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[var(--color-bg-subtle)]">
        {!imageError && (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <div className="mt-[var(--space-4)]">
        <h3 className="font-serif text-xl font-bold leading-[var(--leading-snug)] sm:text-2xl">
          {title}
        </h3>
        <p className="mt-[var(--space-2)] truncate text-sm text-muted sm:text-base">
          {summary}
        </p>
        {tags.length > 0 && (
          <ul className="mt-[var(--space-3)] flex flex-wrap gap-[var(--space-2)]">
            {tags.map((tag) => (
              <li key={tag} className="case-study-tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
