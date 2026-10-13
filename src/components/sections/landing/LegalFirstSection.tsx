import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { site } from "@/content/site";

const checks = [
  { label: "Eigentum und Nutzung", text: "Eigentum oder Miete, Widmung, Wohnungseigentumsvertrag, bestehende Zustimmungen." },
  { label: "Lage und Bauordnung", text: "Wohnzone, Voraussetzungen für eine Ausnahmebewilligung, Anzahl der touristisch genutzten Betten im Gebäude." },
  { label: "Abgaben und Meldungen", text: "Ortstaxe, VIETour, Gästeverzeichnis sowie die Frage, ob ein Gewerbe vorliegt." },
  { label: "Vermietungsmodell", text: "Kurzzeitvermietung, mittelfristige Vermietung oder eine Kombination, je nach rechtlichem Rahmen." },
];

/** Why Goldnest checks the legal situation before taking over an apartment. Facts: docs/facts.md §5. */
export function LegalFirstSection() {
  return (
    <section id="rechtlich-zuerst" className="section-y bg-moss text-ivory">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeader
              tone="dark"
              eyebrow="Rechtlich zuerst"
              title="Bevor wir eine Wohnung übernehmen, prüfen wir, ob sie vermietet werden darf."
            />
            <div className="mt-8 max-w-xl space-y-5 text-body text-ivory/80">
              <p>Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für die touristische Kurzzeitvermietung von Wohnungen.</p>
              <p>
                Die Stadt Wien beschreibt eine Ausnahme für eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr im
                Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes; für eine darüber hinausgehende Nutzung ist grundsätzlich eine
                Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich.
              </p>
              <p>
                Diese Bewilligung ist an Voraussetzungen gebunden, wird für maximal fünf Jahre erteilt und ist nicht automatisch erhältlich. Deshalb
                klären wir die rechtliche Ausgangslage, bevor wir über Inserate, Preise oder Einrichtung sprechen.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/kurzzeitvermietung-wien" variant="inverted" arrow>
                Kurzzeitvermietung in Wien verstehen
              </ButtonLink>
              <ButtonLink href="/ratgeber/90-tage-regel-wien" variant="link-inverted">
                Die 90-Tage-Regel im Detail
              </ButtonLink>
            </div>
            <p className="mt-8 font-sans text-caption text-ivory/60">Stand der Informationen: {site.contentStand}</p>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-sans text-eyebrow font-semibold uppercase text-ivory/65">Was wir vor der Übernahme klären</p>
            <dl className="mt-6 border-t border-moss-line">
              {checks.map((item) => (
                <div key={item.label} className="border-b border-moss-line py-6">
                  <dt className="font-serif text-subtitle text-ivory">{item.label}</dt>
                  <dd className="mt-2 max-w-md text-small text-ivory/70">{item.text}</dd>
                </div>
              ))}
            </dl>
            <Disclaimer variant="goldnest" tone="dark" className="mt-10 max-w-lg" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
