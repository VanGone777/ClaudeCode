import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { concerns } from "@/content/home";

const principles = [
  "klare Verantwortlichkeiten",
  "strukturierte Abläufe",
  "transparente Eigentümerabrechnung",
  "persönliche Ansprechpartner",
  "dokumentierte Kosten",
  "laufende Kontrolle",
  "professionelle Gästekommunikation",
  "koordinierte Reinigung",
  "strategisches Pricing",
];

export function WhyGoldnest() {
  return (
    <section id="warum-goldnest" className="section-y bg-ivory-deep">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Warum Goldnest"
            title="Professionelle Verwaltung bedeutet Kontrolle, nicht Kontrollverlust."
            lead="Eigentümer geben uns keine Wohnung, sondern Verantwortung. Deshalb beantworten wir die Fragen, die vor jeder Zusammenarbeit im Raum stehen, bevor sie gestellt werden."
          />
        </Reveal>

        <div className="mt-14 lg:mt-20">
          <div className="hidden grid-cols-2 gap-10 border-b border-ink/60 pb-3 font-sans text-eyebrow font-semibold uppercase text-stone md:grid">
            <span>Die Sorge</span>
            <span>Bei Goldnest</span>
          </div>
          <dl>
            {concerns.map((item, index) => (
              <Reveal key={item.concern} delay={Math.min(index, 4) * 60} className="grid gap-3 border-b border-line py-6 md:grid-cols-2 md:gap-10 md:py-7">
                <dt className="font-serif text-subtitle text-ink">{item.concern}</dt>
                <dd className="text-small text-ink-soft md:pt-1">{item.answer}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal className="mt-14 flex flex-wrap gap-x-8 gap-y-3 font-sans text-small text-ink-soft">
          {principles.map((p) => (
            <span key={p} className="flex items-center gap-3 before:size-1 before:rounded-full before:bg-bronze">
              {p}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
