import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { allFaq, faqGroups } from "@/content/faq";
import { site } from "@/content/site";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/faq";

export const metadata: Metadata = buildMetadata({
  title: "FAQ: Airbnb und Kurzzeitvermietung in Wien",
  description:
    "Antworten auf häufige Fragen zu Airbnb und Kurzzeitvermietung in Wien: 90-Tage-Regel, Ausnahmebewilligung, Ortstaxe, VIETour, Steuern, Zusammenarbeit mit Goldnest und Fragen aus der Praxis.",
  path: PATH,
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(allFaq)} />

      <PageHero
        layout="editorial"
        breadcrumbs={[{ name: "FAQ", path: PATH }]}
        eyebrow="Fragen und Antworten"
        title="Fragen und Antworten zur Kurzzeitvermietung in Wien."
        lead="Was Eigentümer uns zur Rechtslage, zu Abgaben, zur Zusammenarbeit und zum laufenden Betrieb fragen. Rechtliche Antworten sind bewusst kurz gehalten; ob und wie sie auf Ihre Wohnung zutreffen, klären wir im Einzelfall."
      />

      <div className="border-t border-line bg-ivory pt-12 pb-20 md:pt-16 md:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
            <nav aria-label="Themen" className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-sans text-eyebrow font-semibold uppercase text-stone">Themen</p>
              <ol className="mt-4 divide-y divide-line border-y border-line">
                {faqGroups.map((group, index) => (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="group flex items-baseline gap-4 py-3.5 font-sans text-small text-ink-soft transition-colors hover:text-bronze"
                    >
                      <span className="font-serif text-base text-stone">{String(index + 1).padStart(2, "0")}</span>
                      <span className="link-underline">{group.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-6 font-sans text-caption text-stone">Stand der Informationen: {site.contentStand}</p>
            </nav>

            <div className="min-w-0">
              {faqGroups.map((group, index) => (
                <Reveal key={group.id} delay={Math.min(index, 3) * 60} className={index > 0 ? "mt-16 md:mt-24" : undefined}>
                  <section id={group.id} className="scroll-mt-28">
                    <h2 className="text-headline text-ink">{group.title}</h2>
                    <Accordion items={group.items} defaultOpen={null} className="mt-8" />
                  </section>
                </Reveal>
              ))}

              <Disclaimer className="mt-16" />
            </div>
          </div>
        </Container>
      </div>

      <CTASection />
    </>
  );
}
