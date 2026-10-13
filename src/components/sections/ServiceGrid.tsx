import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/content/services";

export function ServiceGrid() {
  return (
    <section id="leistungen" className="section-y bg-ivory-deep">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Leistungen"
            title="Alles, was eine professionell vermietete Wohnung braucht."
            lead="Von der Positionierung bis zur Abrechnung: Goldnest deckt die Bereiche ab, die im laufenden Betrieb über Qualität, Auslastung und Ruhe entscheiden."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Figure image="kitchen" aspect="4/5" sizes="(min-width: 1024px) 35vw, 100vw" className="max-lg:aspect-[16/10]" />
            <div className="mt-8">
              <ButtonLink href="/leistungen" variant="primary" arrow>
                Alle Leistungen ansehen
              </ButtonLink>
            </div>
          </Reveal>

          <ol className="border-t border-line">
            {services.map((service, index) => (
              <Reveal key={service.slug} as="li" delay={Math.min(index, 5) * 60} className="border-b border-line">
                <Link
                  href={service.href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-6 transition-colors duration-300 hover:text-bronze md:grid-cols-[3.5rem_1fr_auto] md:py-7"
                >
                  <span className="font-serif text-base text-stone">{service.index}</span>
                  <span>
                    <span className="block font-serif text-subtitle text-ink transition-colors duration-300 group-hover:text-bronze">{service.title}</span>
                    <span className="mt-1.5 block max-w-xl text-small text-ink-soft">{service.short}</span>
                  </span>
                  <ArrowRight className="relative top-1 size-5 text-bronze opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
