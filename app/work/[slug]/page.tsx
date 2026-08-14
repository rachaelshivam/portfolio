import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CaseStudySections from "@/components/CaseStudySections";
import FadeUp from "@/components/FadeUp";
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

  return (
    <>
      <article className="px-[var(--space-4)] sm:px-[var(--space-6)]">
        <header className="mx-auto w-full max-w-[800px] pt-[var(--space-8)]">
          <div>
            <h1 className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[var(--leading-tight)] text-[#212121]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 575 }}>
              {study.title}
            </h1>
            <p className="mt-[var(--space-4)] text-[1.125rem] leading-[var(--leading-relaxed)] font-normal text-[var(--color-text-muted)]">
              {study.subtitle}
            </p>
            <p className="mt-[var(--space-5)] text-[1rem] leading-[1.7] font-normal text-[#404040]">
              {study.intro}
            </p>
          </div>

          <FadeUp>
            <dl className="mt-[var(--space-8)] grid" style={{ gridTemplateColumns: `repeat(${study.metadata.length}, 1fr)` }}>
              {study.metadata.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">{label}</dt>
                  <dd className="mt-[var(--space-2)] text-[1rem] font-normal text-[#404040]">{value}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>

          <div className="mt-[var(--space-9)] w-full overflow-hidden rounded-xl">
            <Image
              src={study.heroImage}
              alt={study.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </header>

        <div className="mx-auto w-full max-w-[800px] pb-[var(--space-10)] pt-[var(--space-9)]">
          <CaseStudySections sections={study.sections} />
        </div>
      </article>

      <Footer />
    </>
  );
}
