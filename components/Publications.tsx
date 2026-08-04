import FadeUp from "./FadeUp";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="px-[var(--space-4)] pb-[var(--space-10)] sm:px-[var(--space-6)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-width-content)]">
        <h2 id="publications-heading" className="font-semibold text-[1.5rem] sm:text-[2rem]">
          Publications
        </h2>

        <FadeUp>
          <ul className="mt-[var(--space-8)] divide-y divide-[var(--color-border)]">
            {publications.map((item) => (
              <li key={item.href} className="publication-item py-[var(--space-5)]">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link block text-[1.25rem] font-semibold leading-[var(--leading-snug)]"
                >
                  {item.title}
                  <span className="ml-1 text-[0.875rem] text-[var(--color-text-muted)]">↗</span>
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
