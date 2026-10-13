import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/content/site";

const facts = [
  { label: "Seit", value: "1. Juli 2024", text: "gelten in Wien strengere Voraussetzungen für touristische Kurzzeitvermietungen." },
  {
    label: "Ausnahme",
    value: "höchstens 90 Tage",
    text: "pro Kalenderjahr für eine vorübergehende kurzfristige Vermietung, im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes.",
  },
  {
    label: "Darüber hinaus",
    value: "Ausnahmebewilligung",
    text: "nach § 129 Abs. 1a Wiener Bauordnung kann grundsätzlich erforderlich sein. Sie wird für maximal fünf Jahre erteilt und ist an Voraussetzungen gebunden.",
  },
];

export function NinetyDaysSection() {
  return (
    <section id="90-tage-regel" className="section-y bg-ivory">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeader eyebrow="Wissen" title="Was bedeutet die 90-Tage-Regel in Wien?" />
            <div className="mt-8 max-w-xl space-y-5 text-body text-ink-soft">
              <p>Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für touristische Kurzzeitvermietungen.</p>
              <p>
                Eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr ist nicht mit der dauerhaften touristischen Nutzung
                einer Investmentwohnung gleichzusetzen. Die Stadt Wien beschreibt diese Ausnahme im Zusammenhang mit dem eigenen Wohnsitz.
              </p>
              <p>Bei darüber hinausgehender touristischer Nutzung kann grundsätzlich eine entsprechende Ausnahmebewilligung erforderlich sein.</p>
            </div>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <ButtonLink href="/ratgeber/90-tage-regel-wien" variant="secondary" arrow>
                90-Tage-Regel verständlich erklärt
              </ButtonLink>
            </div>
            <p className="mt-8 font-sans text-caption text-stone">Stand der Informationen: {site.contentStand}</p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="border-t border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="border-b border-line py-7">
                  <dt className="font-sans text-eyebrow font-semibold uppercase text-bronze">{fact.label}</dt>
                  <dd className="mt-3">
                    <span className="font-serif text-title text-ink">{fact.value}</span>
                    <span className="mt-2 block max-w-md text-small text-ink-soft">{fact.text}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
