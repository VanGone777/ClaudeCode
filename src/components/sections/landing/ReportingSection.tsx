import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Contents of the monthly owner statement. No sample figures. */
const contents = [
  { term: "Einnahmen", text: "Alle Buchungen des Monats je Plattform, mit Aufenthaltsdaten und Nettobeträgen nach Plattformgebühren." },
  { term: "Kosten mit Belegen", text: "Reinigung, Wäsche, Verbrauchsmaterial, kleinere Reparaturen und die Vergütung von Goldnest, jeweils mit Beleg zuordenbar." },
  { term: "Auslastung", text: "Belegte Nächte im Verhältnis zu den verfügbaren Nächten, inklusive gesperrter Zeiten und Eigennutzung." },
  { term: "Tagespreis", text: "Der im Monat erzielte durchschnittliche Preis pro Nacht und seine Entwicklung gegenüber den Vormonaten." },
  { term: "Reinigungen", text: "Anzahl und Datum der durchgeführten Reinigungen sowie dokumentierte Auffälligkeiten." },
  { term: "Offene Punkte", text: "Gemeldete Schäden, anstehende Instandhaltungen, Gästefeedback und Entscheidungen, die wir von Ihnen benötigen." },
];

/** Eigentümer-Reporting detail (anchor target #reporting-detail). */
export function ReportingSection() {
  return (
    <section id="reporting-detail" className="section-y scroll-mt-20 bg-ivory">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Eigentümer-Reporting"
              title="Eine Abrechnung, die Sie ohne Rückfragen verstehen."
              lead="Transparenz ist kein Zusatz, sondern Grundlage der Zusammenarbeit. Jeden Monat erhalten Sie eine Aufstellung, aus der hervorgeht, was Ihr Apartment geleistet und was es gekostet hat."
            />
            <Figure image="guideTax" aspect="3/2" className="mt-10" sizes="(min-width: 1024px) 45vw, 100vw" />
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans text-eyebrow font-semibold uppercase text-stone">Was die monatliche Abrechnung enthält</p>
            <ol className="mt-6 border-t border-line">
              {contents.map((item, index) => (
                <li key={item.term} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span aria-hidden="true" className="font-serif text-base text-stone">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-subtitle text-ink">{item.term}</h3>
                    <p className="mt-2 max-w-xl text-small text-ink-soft">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-xl text-small text-stone">
              Welche Positionen im Einzelnen enthalten sind und in welchem Rhythmus abgerechnet wird, legen wir vor Beginn der Zusammenarbeit
              schriftlich fest.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
