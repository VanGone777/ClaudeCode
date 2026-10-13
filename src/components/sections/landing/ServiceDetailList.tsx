import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "@/components/ui/Icons";
import { services } from "@/content/services";

const LANDING_PATH = "/airbnb-verwaltung-wien";

/** Element ids referenced from other pages (#inserat, #reporting). */
const anchorIds: Record<string, string> = {
  "inserat-positionierung": "inserat",
  reporting: "reporting",
};

/** Detailed explanations for the landing page; the short summaries live in content/services.ts. */
const details: Record<string, string> = {
  "airbnb-verwaltung":
    "Wir verantworten den gesamten Betrieb Ihres Apartments: Buchungen, Gäste, Reinigung, Preise, kleinere Instandhaltungen und die monatliche Abrechnung. Sie behalten Eigentum, Entscheidungen und Einblick, geben aber das Operative ab. Voraussetzung ist immer, dass das Vermietungsmodell für Ihre Wohnung rechtlich möglich ist.",
  "co-hosting-wien":
    "Beim Co-Hosting übernehmen wir definierte Teilbereiche, etwa die Gästekommunikation, das Pricing oder die Koordination der Reinigung. Andere Aufgaben behalten Sie selbst. Welche Bereiche wir verantworten, wird vor Beginn schriftlich festgelegt.",
  "inserat-positionierung":
    "Ein Inserat entscheidet darüber, welche Gäste eine Wohnung anspricht und zu welchem Preis sie gebucht wird. Wir erarbeiten Positionierung, Texte, Bildauswahl und Ausstattungsangaben für Airbnb, Booking.com und weitere relevante Plattformen. Inserate werden laufend gepflegt, nicht einmal angelegt und dann sich selbst überlassen.",
  pricing:
    "Übernachtungspreise werden nach Nachfrage, Saison, Veranstaltungen, Buchungsvorlauf und den Eigenschaften des Objekts gesteuert. Ziel ist eine wirtschaftlich sinnvolle Auslastung, nicht der höchstmögliche Preis um jeden Preis. Mindestaufenthalte, Rabatte und Sperrzeiten werden mit Ihnen abgestimmt.",
  gaestekommunikation:
    "Anfragen, Buchungsbestätigungen, Anreiseinformationen, Fragen während des Aufenthalts und die Nachbetreuung laufen über ein festes Team mit klaren Verantwortlichkeiten. Gäste erhalten verlässliche Antworten, Sie erhalten Ruhe. Wie viel Sie davon mitlesen möchten, entscheiden Sie.",
  "check-in":
    "Wir organisieren den Zutritt möglichst automatisiert, etwa über ein elektronisches Schloss mit zeitlich begrenzten Codes oder eine kontrollierte Schlüsselübergabe. Im Wiener Altbau betrachten wir Hauseingang und Wohnungstür getrennt. Welche Lösung passt, hängt von Tür, Haus und Hausordnung ab.",
  reinigung:
    "Reinigung und Wäsche werden zwischen den Aufenthalten koordiniert und kontrolliert, inklusive Verbrauchsmaterial und Dokumentation des Zustands. Schäden und Mängel werden erfasst und gemeldet. Die Kosten erscheinen nachvollziehbar in der Abrechnung.",
  "apartment-einrichtung":
    "Wir beraten bei der vermietungsorientierten Ausstattung: robuste Materialien, klare Raumaufteilung und die Details, die Gäste in Bewertungen erwähnen. Auf Wunsch begleiten wir Einrichtung und Vorbereitung bis zur Bezugsfertigkeit. Das Ziel ist ein Apartment, das im laufenden Betrieb wenig Aufwand verursacht.",
  reporting:
    "Sie erhalten monatlich eine nachvollziehbare Aufstellung von Einnahmen, Kosten mit Belegen und Kennzahlen wie Auslastung und Tagespreis. Jede Position ist Ihrem Apartment und dem jeweiligen Monat zuordenbar. Was die Abrechnung im Detail enthält, beschreiben wir weiter unten auf dieser Seite.",
  "mittelfristige-vermietung":
    "Wenn touristische Kurzzeitvermietung rechtlich nicht möglich oder wirtschaftlich nicht sinnvoll ist, kann die möblierte Vermietung für Wochen- oder Monatsaufenthalte eine Alternative sein. Wir prüfen beide Modelle und sagen Ihnen, welches zu Ihrer Wohnung passt. Auch hier bleiben Mietrecht und Steuern zu beachten.",
};

/** Link shown under an entry: sub-page, or the reporting detail on this page. */
function entryLink(slug: string, href: string): { label: string; href: string } | null {
  if (slug === "reporting") return { label: "Was die Abrechnung enthält", href: "#reporting-detail" };
  if (href.startsWith(LANDING_PATH)) return null;
  return { label: "Mehr zu dieser Leistung", href };
}

/** The ten services as a numbered hairline list with detailed explanations. */
export function ServiceDetailList() {
  return (
    <section id="leistungen" className="section-y scroll-mt-20 border-t border-line bg-ivory">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Leistungsumfang"
            title="Was die Verwaltung umfasst."
            lead="Zehn Bereiche, die im Betrieb eines Apartments über Qualität, Auslastung und Ruhe entscheiden. Ob wir alle verantworten oder nur einzelne, legen wir vor Beginn gemeinsam fest."
          />
        </Reveal>

        <ol className="mt-14 border-t border-line lg:mt-20">
          {services.map((service, index) => {
            const link = entryLink(service.slug, service.href);
            return (
              <Reveal
                key={service.slug}
                as="li"
                delay={Math.min(index, 4) * 60}
                className="scroll-mt-28 border-b border-line py-8 md:py-10"
              >
                <div id={anchorIds[service.slug]} className="grid gap-4 md:grid-cols-[5rem_1fr] md:gap-8 lg:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-12">
                  <span aria-hidden="true" className="font-serif text-headline leading-none text-bronze">
                    {service.index}
                  </span>
                  <h3 className="text-title text-ink">{service.title}</h3>
                  <div>
                    <p className="max-w-xl text-body text-ink-soft">{details[service.slug] ?? service.short}</p>
                    {link && (
                      <Link
                        href={link.href}
                        className="group mt-4 inline-flex items-center gap-2 font-sans text-small font-medium text-ink transition-colors hover:text-bronze"
                      >
                        <span className="link-underline">{link.label}</span>
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
