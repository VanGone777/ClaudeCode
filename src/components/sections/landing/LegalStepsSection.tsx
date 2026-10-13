import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { legalProcess } from "@/content/home";
import { cta } from "@/content/site";

/** The six-step legal check (content/home.ts) as a numbered hairline list. */
export function LegalStepsSection() {
  return (
    <section id="rechtslage-pruefen" className="section-y scroll-mt-20 bg-ivory">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Vorgehen"
              title="Die Rechtslage in sechs Schritten prüfen."
              lead="Ob eine Wohnung in Wien kurzfristig vermietet werden darf, lässt sich nicht pauschal beantworten. Die Reihenfolge der Prüfung ist dagegen immer dieselbe."
            />
            <Figure image="legalFacade" aspect="4/5" className="mt-10 max-lg:aspect-[16/10]" sizes="(min-width: 1024px) 40vw, 100vw" />
          </Reveal>
          <div>
            <ol className="border-t border-line">
              {legalProcess.map((item, index) => (
                <Reveal key={item.step} as="li" delay={index * 60} className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-line py-7 md:grid-cols-[5rem_1fr] md:py-9">
                  <span aria-hidden="true" className="font-serif text-headline leading-none text-bronze">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-title text-ink">{item.title}</h3>
                    <p className="mt-2 max-w-lg text-body text-ink-soft">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href={cta.primary.href} variant="primary" arrow>
                {cta.primary.label}
              </ButtonLink>
              <ButtonLink href="/airbnb-verwaltung-wien" variant="link">
                So arbeitet Goldnest
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
