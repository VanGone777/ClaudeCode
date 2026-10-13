import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { GuideCard } from "@/components/sections/GuideCard";
import { CTASection } from "@/components/sections/CTASection";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { Reveal } from "@/components/ui/Reveal";
import { guides } from "@/content/guides";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ratgeber Kurzzeitvermietung Wien: Recht, Ortstaxe, Steuern",
  description:
    "Ratgeber für Eigentümer in Wien: 90-Tage-Regel, Ausnahmebewilligung, Wohnzonen, Ortstaxe, VIETour, Steuern und Gewerbe. Verständlich erklärt, mit Quellen und Stand Oktober 2026.",
  path: "/ratgeber",
});

const categories = ["Recht", "Abgaben & Steuern", "Pflichten", "Praxis", "Markt"] as const;

export default function RatgeberPage() {
  const [feature] = guides;
  return (
    <>
      <PageHero
        layout="editorial"
        breadcrumbs={[{ name: "Ratgeber", path: "/ratgeber" }]}
        eyebrow="Ratgeber"
        title="Kurzzeitvermietung in Wien verstehen."
        lead="Was in Wien erlaubt ist, welche Bewilligungen und Abgaben es gibt und welche Pflichten Eigentümer erfüllen müssen. Jeder Beitrag nennt Rechtsgrundlage, zuständige Stelle und Stand der Informationen."
      />

      <section className="bg-ivory pb-20 md:pb-28">
        <Container>
          <Reveal className="grid gap-10 border-t border-line pt-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <GuideCard guide={feature} index={0} size="feature" />
            <div className="lg:pt-6">
              <p className="font-sans text-eyebrow font-semibold uppercase text-stone">Nach Thema</p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {categories
                  .map((category) => ({ category, items: guides.filter((g) => g.category === category) }))
                  .filter(({ items }) => items.length > 0)
                  .map(({ category, items }) => (
                    <li key={category} className="flex items-baseline justify-between gap-6 py-4">
                      <a href={`#${category.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="font-serif text-subtitle text-ink transition-colors hover:text-bronze">
                        {category}
                      </a>
                      <span className="font-sans text-caption text-stone">{items.length} Beiträge</span>
                    </li>
                  ))}
              </ul>
              <p className="mt-8 font-sans text-caption text-stone">Stand der Informationen: {site.contentStand}. Jeder Beitrag enthält Quellen und den Hinweis auf die fachliche Prüfung.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {categories
        .map((category) => ({ category, items: guides.filter((g) => g.category === category) }))
        .filter(({ items }) => items.length > 0)
        .map(({ category, items }, i) => (
          <section key={category} id={category.toLowerCase().replace(/[^a-z]+/g, "-")} className={i % 2 === 0 ? "section-y-sm scroll-mt-20 bg-ivory-deep" : "section-y-sm scroll-mt-20 bg-ivory"}>
            <Container>
              <Reveal className="flex items-baseline justify-between gap-6 border-b border-line pb-5">
                <h2 className="text-title text-ink">{category}</h2>
                <span className="font-sans text-caption text-stone">{items.length} Beiträge</span>
              </Reveal>
              <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {items.map((guide, index) => (
                  <Reveal key={guide.slug} delay={Math.min(index, 3) * 80}>
                    <GuideCard guide={guide} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        ))}

      <section className="bg-ivory py-10">
        <Container>
          <Disclaimer className="max-w-3xl" />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
