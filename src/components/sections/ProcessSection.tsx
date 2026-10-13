import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/content/home";
import { cta } from "@/content/site";

export function ProcessSection() {
  return (
    <section id="ablauf" className="section-y scroll-mt-20 bg-ivory">
      <Container>
        <Reveal>
          <SectionHeader eyebrow="Ablauf der Zusammenarbeit" title="Von der Wohnung zum professionellen Vermietungsbetrieb." />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="order-last lg:order-first lg:sticky lg:top-28 lg:self-start">
            <Figure image="processPlan" aspect="4/5" sizes="(min-width: 1024px) 40vw, 100vw" className="max-lg:aspect-[16/10]" />
          </Reveal>

          <div>
            <ol className="border-t border-line">
              {processSteps.map((step, index) => (
                <Reveal key={step.step} as="li" delay={index * 80} className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-line py-8 md:grid-cols-[5rem_1fr] md:py-10">
                  <span className="font-serif text-headline leading-none text-bronze">{step.step}</span>
                  <div>
                    <h3 className="text-title text-ink">{step.title}</h3>
                    <p className="mt-3 max-w-lg text-body text-ink-soft">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-10">
              <ButtonLink href={cta.discuss.href} variant="primary" arrow>
                {cta.discuss.label}
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
