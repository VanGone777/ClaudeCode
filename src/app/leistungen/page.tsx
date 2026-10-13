import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/content/services";
import { pillars } from "@/content/home";
import { serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Leistungen: Apartment Management und Airbnb Verwaltung in Wien",
  description:
    "Alle Leistungen von Goldnest im Überblick: Airbnb Verwaltung, Co-Hosting, Inserat und Positionierung, Pricing, Gästekommunikation, Check-in, Reinigung, Einrichtung, Reporting und mittelfristige Vermietung in Wien.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Apartment Management Wien",
          serviceType: "Apartmentverwaltung und Kurzzeitvermietungsverwaltung",
          description: "Verwaltung, Co-Hosting, Pricing, Gästebetreuung, Reinigung, Einrichtung, Reporting und mittelfristige Vermietung für Apartments in Wien.",
          path: "/leistungen",
        })}
      />
      <PageHero
        breadcrumbs={[{ name: "Leistungen", path: "/leistungen" }]}
        eyebrow="Leistungen"
        title="Alles, was eine professionell vermietete Wohnung braucht."
        lead="Goldnest übernimmt die Bereiche, die im laufenden Betrieb über Qualität, Auslastung und Ruhe entscheiden. Sie wählen, ob wir alles verantworten oder nur bestimmte Aufgaben."
        image="bedroom"
        imageAspect="4/5"
      />

      <section className="section-y border-t border-line bg-ivory">
        <Container>
          <ol className="grid gap-x-10 border-t border-line md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} as="li" delay={Math.min(index, 5) * 50} className="border-b border-line">
                <Link href={service.href} className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-7 transition-colors hover:text-bronze">
                  <span className="font-serif text-base text-stone">{service.index}</span>
                  <span>
                    <span className="block font-serif text-title text-ink transition-colors group-hover:text-bronze">{service.title}</span>
                    <span className="mt-2 block max-w-md text-small text-ink-soft">{service.short}</span>
                  </span>
                  <ArrowRight className="relative top-1 size-5 text-bronze transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-y bg-moss text-ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeader
                tone="dark"
                eyebrow="Arbeitsweise"
                title="Drei Grundsätze, an denen sich jede Leistung messen lässt."
                lead="Ob vollständige Verwaltung oder einzelne Aufgaben: Wir arbeiten rechtlich durchdacht, wirtschaftlich transparent und mit persönlicher Verantwortung für jedes Apartment."
              />
            </Reveal>
            <Reveal delay={100}>
              <ol className="border-t border-moss-line">
                {pillars.map((pillar) => (
                  <li key={pillar.index} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-moss-line py-7">
                    <span className="font-serif text-headline leading-none text-bronze-light">{pillar.index}</span>
                    <div>
                      <h3 className="text-subtitle text-ivory">{pillar.title}</h3>
                      <p className="mt-2 text-small text-ivory/70">{pillar.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-y bg-ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <Figure image="furnishing" aspect="4/3" sizes="(min-width: 1024px) 50vw, 100vw" />
            </Reveal>
            <Reveal delay={100} className="lg:pt-6">
              <SectionHeader
                eyebrow="Vollständige Verwaltung oder Co-Hosting"
                title="Sie entscheiden, wie viel Sie abgeben."
                lead="Manche Eigentümer möchten nur die Gästekommunikation loswerden, andere den gesamten Betrieb. Beides ist möglich, beides wird vor Beginn klar abgegrenzt und schriftlich festgehalten."
              />
              <ul className="mt-8 divide-y divide-line border-y border-line">
                <li className="py-4">
                  <Link href="/airbnb-verwaltung-wien" className="group flex items-center justify-between gap-4">
                    <span className="font-serif text-subtitle text-ink group-hover:text-bronze">Vollständige Airbnb Verwaltung</span>
                    <ArrowRight className="size-5 text-bronze transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
                <li className="py-4">
                  <Link href="/leistungen/co-hosting-wien" className="group flex items-center justify-between gap-4">
                    <span className="font-serif text-subtitle text-ink group-hover:text-bronze">Co-Hosting in Wien</span>
                    <ArrowRight className="size-5 text-bronze transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
                <li className="py-4">
                  <Link href="/leistungen/mittelfristige-vermietung" className="group flex items-center justify-between gap-4">
                    <span className="font-serif text-subtitle text-ink group-hover:text-bronze">Mittelfristige Vermietung</span>
                    <ArrowRight className="size-5 text-bronze transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
}
