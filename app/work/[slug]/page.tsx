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

  const metadataItems = [
    { label: "Role", value: study.role },
    { label: "Timeline", value: study.timeline },
    { label: "Tools", value: study.tools.join(", ") },
    { label: "Context", value: study.context },
  ];

  return (
    <>
      <article className="px-[var(--space-4)] sm:px-[var(--space-6)]">
        <header className="mx-auto w-full max-w-[800px] pt-[var(--space-8)]">
          <div>
            <h1 className="font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[var(--leading-tight)] text-[#212121]">
              {study.title}
            </h1>
            <p className="mt-[var(--space-4)] text-[1.125rem] leading-[var(--leading-relaxed)] font-normal text-[#737272]">
              {study.subtitle}
            </p>
            <p className="mt-[var(--space-5)] text-[1rem] leading-[1.7] font-normal text-[#404040]">
              {study.intro}
            </p>
          </div>

          <FadeUp>
            <dl className="case-study-meta mt-[var(--space-8)] grid gap-[var(--space-5)] sm:grid-cols-2 lg:grid-cols-4">
              {metadataItems.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-[0.7rem] font-medium uppercase tracking-[0.08em] text-[#737272]">{label}</dt>
                  <dd className="mt-[var(--space-2)] font-medium text-[#212121]">{value}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>

          <div className="mt-[var(--space-9)] relative aspect-[16/9] w-full max-h-[500px] overflow-hidden rounded-2xl">
            <Image
              src={study.heroImage}
              alt={study.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
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
