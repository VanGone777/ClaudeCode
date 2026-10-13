import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScenarioCalculator } from "@/components/sections/ScenarioCalculator";
import { cta } from "@/content/site";

export function PotentialSection() {
  return (
    <section id="potenzial" className="section-y bg-ivory-deep">
      <Container>
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Rendite und Potenzial"
            title="Was kann Ihre Wohnung leisten?"
            lead="Rechnen Sie ein Szenario mit Ihren eigenen Annahmen durch. Für eine belastbare Einschätzung sehen wir uns Lage, Wohnungstyp, Ausstattung und die rechtliche Nutzbarkeit Ihrer Immobilie an."
          />
          <ButtonLink href={cta.assess.href} variant="primary" arrow className="shrink-0">
            {cta.assess.label}
          </ButtonLink>
        </Reveal>
        <Reveal delay={100} className="mt-14 lg:mt-20">
          <ScenarioCalculator />
        </Reveal>
      </Container>
    </section>
  );
}
