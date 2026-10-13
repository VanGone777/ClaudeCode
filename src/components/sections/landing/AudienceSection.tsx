import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Primary and secondary audience, see brief. */
const audience = [
  "Eigentümer einer oder mehrerer Wohnungen in Wien, die kurzfristig vermieten möchten",
  "Eigentümer, die bereits über Airbnb oder Booking.com vermieten und das Operative abgeben wollen",
  "Eigentümer, denen die Zeit für Gästekommunikation, Reinigung und Abrechnung fehlt",
  "Eigentümer, die bei den Wiener Regeln zur Kurzzeitvermietung unsicher sind",
  "Internationale Eigentümer, die eine verlässliche Ansprechperson vor Ort benötigen",
  "Immobilieninvestoren und Eigentümer mehrerer Apartments",
  "Bauträger sowie Relocation- und Corporate-Housing-Kunden",
  "Eigentümer, die Kurzzeitvermietung, Mid-Term und Serviced Apartment vergleichen möchten",
];

/** "Für wen" – two-column hairline list, no cards. */
export function AudienceSection() {
  return (
    <section id="fuer-wen" className="section-y bg-ivory-deep">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeader
              eyebrow="Für wen"
              title="Für Eigentümer, die Verantwortung abgeben möchten."
              lead="Die Ausgangslagen unterscheiden sich, die Erwartung ist meist dieselbe: eine Wohnung in professionellen Händen, ohne den Überblick zu verlieren."
            />
            <Figure image="entrance" aspect="4/3" className="mt-10 max-lg:hidden" sizes="(min-width: 1024px) 35vw, 100vw" />
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid border-t border-line md:grid-cols-2 md:gap-x-10">
              {audience.map((item) => (
                <li key={item} className="flex gap-4 border-b border-line py-5 font-serif text-subtitle text-ink md:py-6">
                  <span aria-hidden="true" className="mt-[0.8em] h-px w-5 shrink-0 bg-bronze" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
