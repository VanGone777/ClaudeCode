import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Blocks } from "@/components/ui/Blocks";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowUpRight } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { LegalMeta } from "@/components/sections/LegalMeta";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { GuideSidebar } from "@/components/sections/GuideSidebar";
import { GuideCard } from "@/components/sections/GuideCard";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGuide, getRelatedGuides, guides } from "@/content/guides";
import { articleSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/ratgeber/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: `/ratgeber/${guide.slug}`,
    type: "article",
    publishedTime: guide.published,
    modifiedTime: guide.updated,
  });
}

export default async function GuidePage({ params }: PageProps<"/ratgeber/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const related = getRelatedGuides(guide, 3);
  const path = `/ratgeber/${guide.slug}`;

  return (
    <article>
      <JsonLd data={articleSchema({ title: guide.title, description: guide.description, path, published: guide.published, modified: guide.updated })} />
      {guide.faq.length > 0 && <JsonLd data={faqSchema(guide.faq)} />}

      <PageHero
        layout="editorial"
        breadcrumbs={[
          { name: "Ratgeber", path: "/ratgeber" },
          { name: guide.title, path },
        ]}
        eyebrow={`${guide.category} · ${guide.readingMinutes} Min. Lesezeit`}
        title={guide.title}
        lead={guide.intro}
      />

      <div className="bg-ivory pb-20 md:pb-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
            <div className="min-w-0 max-w-3xl">
              <LegalMeta stand={guide.stand} legalBasis={guide.legalBasis} authority={guide.authority} reviewed={guide.reviewed} />

              {guide.keyFacts.length > 0 && (
                <section aria-labelledby="kurzfassung" className="mt-12">
                  <h2 id="kurzfassung" className="font-sans text-eyebrow font-semibold uppercase text-bronze">
                    Das Wichtigste in Kürze
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {guide.keyFacts.map((fact) => (
                      <li key={fact} className="flex gap-4 font-serif text-subtitle text-ink">
                        <span aria-hidden="true" className="mt-[0.9em] h-px w-5 shrink-0 bg-bronze" />
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <Figure image={guide.image} aspect="16/9" className="mt-12" sizes="(min-width: 1024px) 60vw, 100vw" />

              <Blocks blocks={guide.body} className="mt-12" />

              {guide.faq.length > 0 && (
                <section aria-labelledby="faq-heading" className="mt-16">
                  <h2 id="faq-heading" className="text-title text-ink">
                    Häufige Fragen dazu
                  </h2>
                  <Accordion items={guide.faq} className="mt-6" defaultOpen={null} />
                </section>
              )}

              {guide.sources.length > 0 && (
                <section aria-labelledby="quellen" className="mt-16">
                  <h2 id="quellen" className="font-sans text-eyebrow font-semibold uppercase text-stone">
                    Quellen
                  </h2>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {guide.sources.map((source) => (
                      <li key={source.href} className="py-3 font-sans text-small">
                        <a href={source.href} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-start gap-1.5 text-ink-soft hover:text-bronze">
                          <span>{source.label}</span>
                          <ArrowUpRight className="mt-1 size-3.5" />
                        </a>
                        {source.date && <span className="ml-2 text-caption text-stone">{source.date}</span>}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <Disclaimer className="mt-12" />
            </div>

            <GuideSidebar guide={guide} related={related} />
          </div>
        </Container>
      </div>

      <section className="section-y-sm border-t border-line bg-ivory-deep">
        <Container>
          <h2 className="text-title text-ink">Weitere Ratgeber</h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {related.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection tone="ivory" />
    </article>
  );
}
