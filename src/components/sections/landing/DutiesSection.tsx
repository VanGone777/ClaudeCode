import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DataTable } from "@/components/sections/landing/DataTable";

/** Four separate obligations – see docs/facts.md §8. */
const duties: string[][] = [
  ["VIETour-Registrierung", "Ortstaxe und Tourismusstatistik bei der Stadt Wien", "[VIETour erklärt](/ratgeber/vietour)"],
  ["Ausnahmebewilligung MA 37", "Baurechtliche Zulässigkeit der touristischen Nutzung", "[Ausnahmebewilligung](/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien)"],
  ["Gästeverzeichnis", "Meldepflicht der Gäste nach dem Meldegesetz", "[Gästeverzeichnis und Meldepflicht](/ratgeber/gaesteverzeichnis-meldepflicht)"],
  ["Gewerbeanmeldung", "Falls die Tätigkeit nach dem Gesamtbild ein Gewerbe darstellt", "[Gewerbe bei Airbnb](/ratgeber/airbnb-gewerbe-oesterreich)"],
];

export function DutiesSection() {
  return (
    <section id="pflichten" className="section-y scroll-mt-20 border-t border-line bg-ivory-deep">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Pflichten"
            title="Vier Pflichten, die oft verwechselt werden."
            lead="Registrierung, Bewilligung, Meldung und Gewerbe sind vier getrennte Fragen mit unterschiedlichen Zuständigkeiten. Keine davon ersetzt eine andere."
          />
        </Reveal>
        <Reveal delay={100} className="mt-12 lg:mt-16">
          <DataTable head={["Pflicht", "Zweck", "Ratgeber"]} rows={duties} />
          <p className="mt-8 max-w-2xl font-serif text-subtitle text-ink">
            Eine VIETour-Registrierung macht eine baurechtlich unzulässige Kurzzeitvermietung nicht legal.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
