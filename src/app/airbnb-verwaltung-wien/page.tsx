import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceDetailList } from "@/components/sections/landing/ServiceDetailList";
import { AudienceSection } from "@/components/sections/landing/AudienceSection";
import { LegalFirstSection } from "@/components/sections/landing/LegalFirstSection";
import { ReportingSection } from "@/components/sections/landing/ReportingSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqGroups } from "@/content/faq";
import { cta } from "@/content/site";
import { serviceSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/airbnb-verwaltung-wien";
const TITLE = "Airbnb Verwaltung Wien: Agentur für Apartment Management";
const DESCRIPTION =
  "Airbnb Verwaltung in Wien durch Goldnest: rechtlich geprüft, wirtschaftlich transparent, persönlich betreut. Inserat, Pricing, Gäste, Reinigung, Reporting.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const faqItems = faqGroups.find((g) => g.id === "zusammenarbeit")?.items ?? [];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Airbnb Verwaltung Wien",
            serviceType: "Airbnb- und Kurzzeitvermietungsverwaltung, Apartment Management",
            description:
              "Vollständige Verwaltung von Apartments und Kurzzeitvermietungen in Wien: Inserat und Positionierung, Pricing, Gästekommunikation, Check-in, Reinigung, Einrichtung, Eigentümer-Reporting und mittelfristige Vermietung.",
            path: PATH,
          }),
          webPageSchema({ name: `${TITLE} – Goldnest`, description: DESCRIPTION, path: PATH }),
        ]}
      />

      <PageHero
        breadcrumbs={[{ name: "Airbnb Verwaltung Wien", path: PATH }]}
        eyebrow="Airbnb Verwaltung Wien"
        title="Airbnb Verwaltung in Wien für Eigentümer, die Verantwortung abgeben, nicht Kontrolle."
        lead="Goldnest übernimmt als Airbnb Agentur in Wien den gesamten Betrieb Ihres Apartments: von der rechtlichen Einschätzung über Inserat, Pricing und Gästebetreuung bis zur monatlichen Abrechnung. Sie behalten Eigentum, Entscheidungen und Einblick."
        image="heroLiving"
        imageAspect="4/5"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href={cta.primary.href} variant="primary" size="lg" arrow>
            {cta.primary.label}
          </ButtonLink>
          <ButtonLink href="#ablauf" variant="link">
            So arbeiten wir
          </ButtonLink>
        </div>
      </PageHero>

      <TrustBar />
      <ServiceDetailList />
      <AudienceSection />
      <LegalFirstSection />
      <ReportingSection />
      <ProcessSection />
      <FAQ
        items={faqItems}
        title="Fragen zur Zusammenarbeit mit Goldnest."
        tone="ivory-deep"
        schema
        more={{ label: "Alle Fragen und Antworten", href: "/faq" }}
      />
      <CTASection tone="ivory" />
    </>
  );
}
