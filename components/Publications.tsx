import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="px-[var(--space-4)] pb-[var(--space-10)] sm:px-[var(--space-6)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-width-content)]">
        <h2 id="publications-heading" className="text-[var(--text-3xl)]">
          Publications
        </h2>

        <ul className="mt-[var(--space-8)] divide-y divide-border-subtle">
          {publications.map((item) => (
            <li key={item.href} className="publication-item py-[var(--space-5)]">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link block text-xl font-medium leading-[var(--leading-snug)] sm:text-2xl"
              >
                {item.title}
              </a>
              <p className="mt-[var(--space-2)] text-sm text-muted sm:text-base">
                {item.publication}
                <span aria-hidden="true"> · </span>
                <span>{item.year}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
