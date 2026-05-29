import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CaseStudySections from "@/components/CaseStudySections";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case study not found" };
  }

  return {
    title: `${study.title} — Rachael Shivam`,
    description: study.intro,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const metadataItems = [
    { label: "Role", value: study.role },
    { label: "Timeline", value: study.timeline },
    { label: "Tools", value: study.tools.join(", ") },
    { label: "Context", value: study.context },
  ];

  return (
    <>
      <article>
        <header className="px-[var(--space-4)] pt-[var(--space-10)] sm:px-[var(--space-6)]">
          <div className="mx-auto w-full max-w-[var(--max-width-content)]">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-bg-subtle)]">
              <Image
                src={study.heroImage}
                alt={study.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            <div className="mt-[var(--space-8)] max-w-3xl">
              <h1 className="text-[clamp(2rem,4vw,var(--text-4xl))] leading-[var(--leading-tight)]">
                {study.title}
              </h1>
              <p className="mt-[var(--space-4)] text-lg leading-[var(--leading-relaxed)] text-muted sm:text-xl">
                {study.subtitle}
              </p>
              <p className="mt-[var(--space-5)] leading-[var(--leading-relaxed)] text-muted">
                {study.intro}
              </p>
            </div>

            <dl className="case-study-meta mt-[var(--space-8)] grid gap-[var(--space-5)] sm:grid-cols-2 lg:grid-cols-4">
              {metadataItems.map(({ label, value }) => (
                <div key={label}>
                  <dt className="case-study-label">{label}</dt>
                  <dd className="mt-[var(--space-2)] text-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="px-[var(--space-4)] pb-[var(--space-10)] pt-[var(--space-9)] sm:px-[var(--space-6)]">
          <div className="mx-auto w-full max-w-[var(--max-width-content)]">
            <CaseStudySections sections={study.sections} />
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
