import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { LegalMeta } from "@/components/sections/LegalMeta";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { Guides } from "@/components/sections/Guides";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { LegalStepsSection } from "@/components/sections/landing/LegalStepsSection";
import { DutiesSection } from "@/components/sections/landing/DutiesSection";
import { RulesOverviewSection } from "@/components/sections/landing/RulesOverviewSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqGroups } from "@/content/faq";
import { site } from "@/content/site";
import { webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/kurzzeitvermietung-wien";
const TITLE = "Kurzzeitvermietung Wien 2026: Regeln, Bewilligung, Ortstaxe";
const DESCRIPTION =
  "Ist Airbnb in Wien erlaubt? Kurzzeitvermietung in Wien 2026 verständlich erklärt: 90-Tage-Regel, Ausnahmebewilligung, Ortstaxe, VIETour und Meldepflicht.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const recht = faqGroups.find((g) => g.id === "recht")?.items.slice(0, 5) ?? [];
const abgaben = faqGroups.find((g) => g.id === "abgaben")?.items.slice(0, 3) ?? [];
const faqItems = [...recht, ...abgaben];

export default function Page() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: `${TITLE} – Goldnest`, description: DESCRIPTION, path: PATH })} />

      <PageHero
        layout="editorial"
        breadcrumbs={[{ name: "Kurzzeitvermietung Wien", path: PATH }]}
        eyebrow="Wissen für Eigentümer"
        title="Kurzzeitvermietung in Wien: Was erlaubt ist und was Eigentümer beachten müssen."
        lead="Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für die touristische Vermietung von Wohnungen. Diese Seite ordnet die wichtigsten Regeln ein, von der Bauordnung über die Ortstaxe bis zur Meldepflicht, und führt zu den ausführlichen Ratgebern."
      />

      <div className="bg-ivory pb-4">
        <Container>
          {/* VERIFY: "Finanzamt" as the tax authority and the exact Ortstaxe statute are not named in docs/facts.md. */}
          <LegalMeta
            className="max-w-3xl"
            stand={site.contentStand}
            legalBasis={["Wiener Bauordnung (§ 129 Abs. 1a)", "Wiener Ortstaxe-Vorschriften", "Meldegesetz", "Verordnung (EU) 2024/1028"]}
            authority="Stadt Wien (MA 37, Ortstaxe), WKO, Finanzamt"
          />
        </Container>
      </div>

      <LegalStepsSection />
      <DutiesSection />
      <RulesOverviewSection />
      <Guides featured={3} tone="ivory-deep" title="Alle Ratgeber zur Kurzzeitvermietung in Wien." />
      <FAQ items={faqItems} title="Häufige Fragen zur Kurzzeitvermietung in Wien." schema more={{ label: "Alle Fragen und Antworten", href: "/faq" }} />

      <div className="bg-ivory pb-16 md:pb-20">
        <Container>
          <Disclaimer className="max-w-3xl" />
        </Container>
      </div>

      <CTASection />
    </>
  );
}
