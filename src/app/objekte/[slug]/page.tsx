import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Blocks } from "@/components/ui/Blocks";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getObject, objectDetails } from "@/content/objects";
import { services } from "@/content/services";
import { cta } from "@/content/site";
import { serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return objectDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/objekte/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getObject(slug);
  if (!service) return {};
  return buildMetadata({ title: service.seoTitle, description: service.description, path: `/objekte/${service.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/objekte/[slug]">) {
  const { slug } = await params;
  const service = getObject(slug);
  if (!service) notFound();
  const path = `/objekte/${service.slug}`;
  const related = services.filter((s) => service.related.includes(s.slug));

  return (
    <>
      <JsonLd data={serviceSchema({ name: service.title, description: service.description, path })} />

      <PageHero
        breadcrumbs={[
          { name: "Objekte", path: "/objekte" },
          { name: service.title, path },
        ]}
        eyebrow={service.eyebrow}
        title={service.title}
        lead={service.intro}
        image={service.image}
        imageAspect="4/5"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href={cta.primary.href} variant="primary" arrow>
            {cta.primary.label}
          </ButtonLink>
          <ButtonLink href="/objekte" variant="link">
            Alle Objektarten
          </ButtonLink>
        </div>
      </PageHero>

      {service.includes.length > 0 && (
        <section className="section-y border-t border-line bg-ivory-deep">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <Reveal>
                <SectionHeader eyebrow="Was wir übernehmen" title="Leistungen im Detail." />
                {service.forWhom.length > 0 && (
                  <div className="mt-10">
                    <p className="font-sans text-eyebrow font-semibold uppercase text-stone">Für wen</p>
                    <ul className="mt-4 space-y-2.5">
                      {service.forWhom.map((item) => (
                        <li key={item} className="flex gap-3 text-small text-ink-soft before:mt-[0.75em] before:h-px before:w-4 before:shrink-0 before:bg-bronze">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
              <Reveal delay={100}>
                <ol className="border-t border-line">
                  {service.includes.map((item, index) => (
                    <li key={item.title} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[3rem_1fr] sm:gap-6">
                      <span aria-hidden="true" className="font-serif text-base text-stone">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-serif text-subtitle text-ink">{item.title}</h3>
                        <p className="mt-2 max-w-xl text-small text-ink-soft">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      {service.body.length > 0 && (
        <section className="section-y bg-ivory">
          <Container>
            <Reveal className="max-w-3xl">
              <Blocks blocks={service.body} />
            </Reveal>
          </Container>
        </section>
      )}

      {service.faq.length > 0 && <FAQ items={service.faq} title="Fragen zu diesem Objekt." tone="ivory-deep" schema />}

      {related.length > 0 && (
        <section className="section-y-sm border-t border-line bg-ivory">
          <Container>
            <h2 className="text-title text-ink">Passende Leistungen</h2>
            <ul className="mt-8 grid gap-x-8 md:grid-cols-3">
              {related.map((s) => (
                <li key={s.slug} className="border-t border-line">
                  <Link href={s.href} className="group flex items-start justify-between gap-4 py-5 transition-colors hover:text-bronze">
                    <span>
                      <span className="block font-serif text-subtitle text-ink group-hover:text-bronze">{s.title}</span>
                      <span className="mt-1.5 block text-small text-ink-soft">{s.short}</span>
                    </span>
                    <ArrowRight className="mt-2 size-5 shrink-0 text-bronze transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
