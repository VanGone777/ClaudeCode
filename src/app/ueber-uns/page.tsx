import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { pillars } from "@/content/home";
import { cta, disclaimer, site } from "@/content/site";
import { webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/ueber-uns";
const DESCRIPTION =
  "Goldnest GmbH ist eine Wiener Verwaltung für Apartments und Kurzzeitvermietung. Wir prüfen, welche Vermietungsstrategie für Ihre Immobilie rechtlich möglich und wirtschaftlich sinnvoll ist, und übernehmen die Umsetzung.";

export const metadata: Metadata = buildMetadata({
  title: "Über Goldnest: Apartment Management aus Wien",
  description: DESCRIPTION,
  path: PATH,
});

/** Arbeitsweise – five hairline paragraphs. */
const workingMethod: Array<{ title: string; text: string }> = [
  {
    title: "Erstgespräch",
    text: "Am Anfang steht ein Gespräch über Ihre Immobilie, Ihre Ziele und Ihre Ausgangssituation. Wir hören zu, stellen Fragen und sagen offen, wenn wir ein Vorhaben für nicht sinnvoll halten.",
  },
  {
    title: "Prüfung",
    text: "Bevor wir über Preise oder Inserate sprechen, sehen wir uns an, welches Vermietungsmodell für die Wohnung überhaupt in Betracht kommt: Lage, Widmung, Eigentumssituation, Hausordnung und operative Anforderungen. Wir ersetzen keine Rechts- oder Steuerberatung, zeigen aber auf, welche Punkte vorher geklärt werden sollten.",
  },
  {
    title: "Vorbereitung",
    text: "Einrichtung, Präsentation, Inserate, Pricing, Check-in und die laufenden Abläufe werden so vorbereitet, dass der Betrieb von Beginn an ruhig läuft. Was Sie selbst übernehmen möchten, grenzen wir vorher schriftlich ab.",
  },
  {
    title: "Betrieb",
    text: "Gäste, Reinigung, Qualität, Preise und Instandhaltung laufen über feste Abläufe und persönliche Ansprechpartner. Bei Störungen oder dringenden Fällen gibt es klare Zuständigkeiten statt einer anonymen Hotline.",
  },
  {
    title: "Reporting",
    text: "Sie erhalten eine nachvollziehbare Aufstellung von Einnahmen, Kosten und Kennzahlen Ihres Apartments. Welche Positionen enthalten sind und in welchem Rhythmus abgerechnet wird, legen wir vor Beginn der Zusammenarbeit fest.",
  },
];

/**
 * Team by roles, not names.
 * VERIFY: names, photos and personal responsibilities are to be added by Goldnest.
 * Until then, only the roles are shown; no invented names.
 */
const teamRoles: Array<{ role: string; text: string }> = [
  {
    role: "Eigentümerbetreuung",
    text: "Ihre persönliche Ansprechperson für Erstgespräch, Vereinbarung, Abrechnung und alle Fragen während der Zusammenarbeit.",
  },
  {
    role: "Gästebetreuung",
    text: "Kommunikation vor, während und nach dem Aufenthalt, Check-in und Zutritt sowie die Betreuung bei Rückfragen und Störungen.",
  },
  {
    role: "Reinigung & Qualität",
    text: "Koordination und Kontrolle der Reinigung, Vorbereitung zwischen den Aufenthalten und Dokumentation des Zustands der Wohnung.",
  },
  {
    role: "Pricing & Vertrieb",
    text: "Preisgestaltung nach Nachfrage, Saison und Objekt, Positionierung der Inserate und Abstimmung der Plattformen.",
  },
  {
    role: "Einrichtung",
    text: "Vermietungsgerechte Ausstattung, Materialauswahl und Vorbereitung der Wohnung für eine stimmige Präsentation.",
  },
];

const transparencyItems: Array<{ title: string; text: string }> = [
  {
    title: "Einnahmen",
    text: "Buchungserlöse werden je Aufenthalt und Plattform dokumentiert, damit nachvollziehbar bleibt, woher jeder Betrag stammt.",
  },
  {
    title: "Ausgaben",
    text: "Reinigung, Verbrauchsmaterial, Plattformgebühren und Instandhaltung werden einzeln ausgewiesen. Keine Sammelposition ohne Erläuterung.",
  },
  {
    title: "Leistungen",
    text: "Welche Aufgaben Goldnest übernimmt und worauf sich die Vergütung bezieht, wird vor Beginn schriftlich festgehalten und in der Abrechnung sichtbar.",
  },
  {
    title: "Kennzahlen",
    text: "Auslastung, Preisniveau und Entwicklung des Apartments werden regelmäßig berichtet. Marktdaten ordnen wir als Orientierung ein, nicht als Versprechen.",
  },
];

export default function Page() {
  // VERIFY: the portfolio figure is only shown once site.portfolioClaim.verified is true (same logic as TrustBar).
  const portfolio = site.portfolioClaim.verified ? site.portfolioClaim.label : site.portfolioClaim.neutralLabel;

  return (
    <>
      <JsonLd
        data={{
          ...webPageSchema({ name: "Über Goldnest", description: DESCRIPTION, path: PATH }),
          "@type": "AboutPage",
        }}
      />

      <PageHero
        breadcrumbs={[{ name: "Über Goldnest", path: PATH }]}
        eyebrow="Über Goldnest"
        title="Eine Immobilie in gute Hände geben."
        lead="Goldnest ist eine Wiener Verwaltung für Apartments und Kurzzeitvermietung. Wir prüfen, welche Vermietungsstrategie für Ihre Immobilie rechtlich möglich und wirtschaftlich sinnvoll ist, und übernehmen anschließend die professionelle Umsetzung."
        image="aboutTeam"
        imageAspect="4/5"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href={cta.primary.href} variant="primary" arrow>
            {cta.primary.label}
          </ButtonLink>
          <ButtonLink href="/leistungen" variant="link">
            Alle Leistungen
          </ButtonLink>
        </div>
      </PageHero>

      {/* (a) Werte */}
      <section className="section-y border-t border-line bg-ivory">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Haltung"
              title="Was uns von einer Airbnb-Agentur unterscheidet."
              lead="Eine Wohnung in Wien kurzfristig zu vermieten ist zuerst eine rechtliche und wirtschaftliche Frage, dann eine Frage der Vermarktung. In dieser Reihenfolge arbeiten wir."
            />
          </Reveal>
          <ol className="mt-14 grid gap-x-10 border-t border-line lg:mt-20 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.index} as="li" delay={index * 80} className="border-b border-line py-10 lg:border-b-0 lg:border-r lg:py-12 lg:pr-10 lg:last:border-r-0">
                <span className="font-serif text-headline leading-none text-bronze">{pillar.index}</span>
                <h3 className="mt-8 text-title text-ink">{pillar.title}</h3>
                <p className="mt-4 max-w-md text-body text-ink-soft">{pillar.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* (b) Arbeitsweise */}
      <section className="section-y bg-ivory-deep">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeader
                eyebrow="Arbeitsweise"
                title="Wie wir arbeiten."
                lead="Fünf Schritte, die bei jeder Immobilie gleich bleiben, unabhängig davon, ob wir den gesamten Betrieb verantworten oder nur einzelne Aufgaben übernehmen."
              />
              <p className="mt-8 max-w-md text-small text-stone">{disclaimer.goldnest}</p>
            </Reveal>
            <Reveal delay={100}>
              <ol className="border-t border-line">
                {workingMethod.map((item, index) => (
                  <li key={item.title} className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-line py-8 md:grid-cols-[5rem_1fr] md:py-10">
                    <span className="font-serif text-headline leading-none text-bronze">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-title text-ink">{item.title}</h3>
                      <p className="mt-3 max-w-lg text-body text-ink-soft">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* (c) Team */}
      <section className="section-y bg-ivory">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Das Team"
              title="Feste Verantwortlichkeiten statt anonymer Hotline."
              lead="Jedes Apartment hat bei Goldnest eine persönliche Ansprechperson. Dahinter stehen klar verteilte Aufgaben, damit Fragen dort landen, wo sie beantwortet werden können."
            />
          </Reveal>
          {/* VERIFY: add names and photos of the team members here. Only roles are shown until confirmed. */}
          <dl className="mt-14 border-t border-line lg:mt-20">
            {teamRoles.map((member, index) => (
              <Reveal key={member.role} delay={index * 60} className="grid gap-3 border-b border-line py-7 md:grid-cols-[16rem_1fr] md:gap-10 md:py-8 lg:grid-cols-[20rem_1fr]">
                <dt className="font-serif text-subtitle text-ink">{member.role}</dt>
                <dd className="max-w-2xl text-body text-ink-soft">{member.text}</dd>
              </Reveal>
            ))}
          </dl>
          <p className="mt-8 font-sans text-caption text-stone">Ansprechpersonen und Fotos des Teams werden ergänzt.</p>
        </Container>
      </section>

      {/* (d) Transparenz */}
      <section className="section-y bg-moss text-ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <SectionHeader
                tone="dark"
                eyebrow="Transparenz"
                title="Was Ihr Apartment leistet und was es kostet, soll nachvollziehbar sein."
                lead="Eine professionelle Verwaltung bedeutet Kontrolle, nicht Kontrollverlust. Deshalb dokumentieren wir Einnahmen, Ausgaben und Leistungen so, dass Sie die Abrechnung auch ohne Rückfragen verstehen."
              />
            </Reveal>
            <Reveal delay={100}>
              <dl className="border-t border-moss-line">
                {transparencyItems.map((item) => (
                  <div key={item.title} className="grid gap-2 border-b border-moss-line py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
                    <dt className="font-serif text-subtitle text-ivory">{item.title}</dt>
                    <dd className="max-w-xl text-small text-ivory/70">{item.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 max-w-xl text-caption text-ivory/60">
                Vergütung, enthaltene Leistungen und Nebenkosten werden vor Beginn der Zusammenarbeit schriftlich festgelegt. Welche Vergütungsmodelle in Betracht kommen, besprechen wir im Erstgespräch.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* (e) Wien */}
      <section className="section-y bg-ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <Figure image="aboutVienna" aspect="4/3" sizes="(min-width: 1024px) 50vw, 100vw" />
            </Reveal>
            <Reveal delay={100} className="lg:pt-6">
              <SectionHeader eyebrow="Wien" title="Wir kennen die Stadt, in der Ihre Wohnung steht." />
              <div className="mt-8 max-w-xl space-y-5 text-body text-ink-soft">
                <p>
                  Wien ist eine Stadt der Bezirke, und jeder von ihnen hat seinen eigenen Charakter: die Gassen der Inneren Stadt, die Gründerzeitviertel von Neubau bis Josefstadt, die ruhigen Lagen jenseits des Gürtels. Welche Gäste eine Wohnung anspricht und welches Vermietungsmodell zu ihr passt, hängt auch davon ab.
                </p>
                <p>
                  Wir arbeiten täglich mit Wiener Altbauten: mit Kastenfenstern, Stiegenhäusern, getrennten Haus- und Wohnungstüren, mit Hausordnungen und Hausverwaltungen. Diese Dinge entscheiden im Alltag darüber, ob ein Check-in reibungslos läuft und ob sich Nachbarn und Gäste gut vertragen.
                </p>
                <p>
                  Und wir kennen die Regeln, die in Wien für die Kurzzeitvermietung gelten. Nicht als Hürde, sondern als Grundlage für eine Vermietung, die sich auch in einigen Jahren noch halten lässt. Einen Überblick geben wir auf der Seite{" "}
                  <Link href="/kurzzeitvermietung-wien" className="link-underline text-ink hover:text-bronze">
                    Kurzzeitvermietung in Wien
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* (f) Zahlen – only the portfolio claim, no other company figures */}
      <section className="section-y-sm border-t border-line bg-ivory-deep" aria-label="Portfolio">
        <Container>
          <Reveal className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
            <div>
              <p className="font-sans text-eyebrow font-semibold uppercase text-bronze">Portfolio</p>
              <p className="mt-5 font-serif text-headline text-ink">{portfolio}</p>
            </div>
            <p className="max-w-md text-small text-ink-soft">
              Wir betreuen Apartments in verschiedenen Wiener Bezirken, vom City Apartment bis zur möblierten Wohnung für mittelfristige Aufenthalte. Referenzen stellen wir auf Anfrage und mit Zustimmung der Eigentümer zur Verfügung.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
