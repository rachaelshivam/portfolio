import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudySections, { CaseStudyMetadata } from "@/components/CaseStudySections";
import FadeUp from "@/components/FadeUp";
import Footer from "@/components/Footer";
import HeroMedia from "@/components/HeroMedia";
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
      <article>
        <header className="mx-auto w-full max-w-[800px] px-[var(--space-4)] sm:px-[var(--space-6)] pt-[var(--space-8)]">
          <div className="text-center">
            <h1 className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[var(--leading-tight)] text-[#212121]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 575 }}>
              {study.title}
            </h1>
            <p className="mt-[var(--space-4)] text-[1.25rem] leading-[var(--leading-relaxed)] text-[#5D5D5D]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 450 }}>
              {study.subtitle}
            </p>
          </div>
          <p className="mt-[var(--space-5)] text-[1rem] leading-[1.7] font-normal text-[#404040]">
            {study.intro}
          </p>

          <FadeUp>
            <CaseStudyMetadata metadata={study.metadata} />
          </FadeUp>

          <div className="mt-[var(--space-9)]">
            <HeroMedia src={study.heroImage} alt={study.title} />
          </div>
        </header>

        <div className="mx-auto w-full max-w-[800px] px-[var(--space-4)] sm:px-[var(--space-6)] pb-[var(--space-10)] pt-[var(--space-9)]">
          <CaseStudySections sections={study.sections} />
        </div>
      </article>

      <Footer />
    </>
  );
}
