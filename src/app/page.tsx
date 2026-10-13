import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { IntroStatement } from "@/components/sections/IntroStatement";
import { ObjectSegments } from "@/components/sections/ObjectSegments";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { LegalSection } from "@/components/sections/LegalSection";
import { NinetyDaysSection } from "@/components/sections/NinetyDaysSection";
import { WhyGoldnest } from "@/components/sections/WhyGoldnest";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { MarketStats } from "@/components/sections/MarketStats";
import { PotentialSection } from "@/components/sections/PotentialSection";
import { PropertyTypes } from "@/components/sections/PropertyTypes";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Guides } from "@/components/sections/Guides";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeFaq } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Airbnb Verwaltung Wien | Apartments, Zinshäuser, Hotels – Goldnest",
  absoluteTitle: true,
  description:
    "Goldnest übernimmt die Verwaltung von Apartments, ganzen Zinshäusern, Pensionen und Hotels in Wien: rechtlich geprüft, wirtschaftlich transparent, persönlich betreut.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Airbnb Verwaltung Wien",
          serviceType: "Kurzzeitvermietungs- und Apartmentverwaltung",
          description:
            "Professionelle Verwaltung von Apartments und Kurzzeitvermietungen in Wien: Positionierung, Pricing, Gästekommunikation, Reinigung, Reporting.",
          path: "/airbnb-verwaltung-wien",
        })}
      />
      <Hero />
      <TrustBar />
      <IntroStatement />
      <ObjectSegments tone="ivory-deep" />
      <ServiceGrid />
      <LegalSection />
      <NinetyDaysSection />
      <WhyGoldnest />
      <ProcessSection />
      <MarketStats />
      <PotentialSection />
      <PropertyTypes />
      <CaseStudies />
      <Testimonials />
      <Guides />
      <FAQ items={homeFaq} more={{ label: "Alle Fragen und Antworten", href: "/faq" }} />
      <CTASection />
    </>
  );
}
