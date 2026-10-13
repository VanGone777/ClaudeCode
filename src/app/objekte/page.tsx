import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Blocks } from "@/components/ui/Blocks";
import { PageHero } from "@/components/sections/PageHero";
import { ObjectSegments } from "@/components/sections/ObjectSegments";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zinshäuser, Pensionen und Hotels in Wien professionell betreuen",
  description:
    "Goldnest betreut Apartments, ganze Zinshäuser, Pensionen und Hotels in Wien: mit Prüfung der rechtlichen Ausgangslage, klarem Betriebskonzept und transparentem Reporting.",
  path: "/objekte",
});

export default function ObjektePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: "Objekte: Zinshäuser, Pensionen, Hotels", description: "Objektarten, die Goldnest in Wien betreut.", path: "/objekte" })} />
      <JsonLd
        data={serviceSchema({
          name: "Betreuung von Zinshäusern, Pensionen und Hotels in Wien",
          serviceType: "Apartment- und Beherbergungsbetriebe-Management",
          description: "Nutzungskonzept, Betrieb, Pricing und Reporting für Apartments, Zinshäuser, Pensionen und Hotels in Wien.",
          path: "/objekte",
        })}
      />
      <PageHero
        breadcrumbs={[{ name: "Objekte", path: "/objekte" }]}
        eyebrow="Objekte"
        title="Zinshäuser, Pensionen und Hotels: Betrieb mit klarer Rechtslage."
        lead="Goldnest betreut nicht nur einzelne Apartments. Wir erarbeiten Nutzungskonzepte für ganze Häuser und unterstützen Pensionen und Hotels im laufenden Betrieb. Am Anfang steht immer die Prüfung, was rechtlich möglich und wirtschaftlich sinnvoll ist."
        image="zinshaus"
        imageAspect="4/5"
      />

      <ObjectSegments tone="ivory-deep" />

      <section className="section-y bg-ivory">
        <Container>
          <Reveal className="max-w-3xl">
            <SectionHeader
              eyebrow="Was jeweils geprüft wird"
              title="Der Prüfumfang wächst mit dem Objekt."
              lead="Die Zusammenstellung zeigt, worauf wir zuerst achten. Sie ersetzt keine Rechtsberatung, sondern hilft Ihnen, die richtigen Fragen zu stellen."
            />
          </Reveal>
          <Reveal className="mt-12">
            <Blocks
              blocks={[
                {
                  type: "table",
                  head: ["Objekt", "Prüfeinheit", "Typische Punkte"],
                  rows: [
                    ["Apartment", "die Wohnung", "Wohnzone, Ausnahmebewilligung, Zustimmung aller Eigentümer, Wohnungseigentumsvertrag oder Mietvertrag"],
                    ["Zinshaus", "das Gebäude", "Anteil der Nutzungseinheiten, Bettenzahl im Gebäude, Wohnzone, Förderungen, bestehende Mietverhältnisse"],
                    ["Pension", "der Betrieb", "Gewerbe, Gästeverzeichnis, Ortstaxe über VIETour, Brandschutz, baurechtliche Zulässigkeit"],
                    ["Hotel", "der Betrieb mit Team", "Betriebsform und Berechtigung, Brandschutz, Meldewesen, Zuständigkeiten, Kennzahlen"],
                  ],
                },
              ]}
            />
          </Reveal>
          <Reveal className="mt-10 max-w-3xl">
            <Disclaimer variant="goldnest" />
          </Reveal>
        </Container>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
}
