import FadeInLeft from "./FadeInLeft";
import FadeUp from "./FadeUp";
import { ArrowUpRight } from "lucide-react";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="px-[var(--space-4)] pb-[var(--space-10)] sm:px-[var(--space-6)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-width-content)]">
        <FadeInLeft>
          <h2 id="publications-heading" className="border-l-[3px] border-[#D83775] py-[var(--space-3)] pl-[calc(var(--space-4)+var(--space-2))] text-[0.9375rem] font-semibold uppercase tracking-[0.08em] text-[#3D3D3D] sm:pl-[calc(var(--space-6)+var(--space-2))]">
            Publications
          </h2>
        </FadeInLeft>

        <FadeUp>
          <ul className="mt-[var(--space-8)] flex flex-col gap-[var(--space-8)]">
            {publications.map((item) => (
              <li key={item.href} className="publication-item">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link block text-[1.5rem] font-normal leading-[var(--leading-snug)] hover:opacity-70 transition-opacity duration-200"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 550 }}
                >
                  {item.title}
                  <ArrowUpRight className="ml-1 inline-block" style={{ width: '1.5rem', height: '1.5rem', strokeWidth: 2.5 }} />
                </a>
                <p className="mt-[var(--space-2)] text-[1rem] text-[var(--color-text-muted)]">
                  {item.publication}
                  <span aria-hidden="true"> · </span>
                  <span>{item.year}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{item.authorRole}</span>
                </p>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
