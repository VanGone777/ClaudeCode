import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { pillars } from "@/content/home";

export function IntroStatement() {
  return (
    <section className="section-y bg-ivory">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow className="mb-6">Goldnest in einem Satz</Eyebrow>
            <h2 className="text-display text-ink">Mehr als Airbnb-Verwaltung.</h2>
          </Reveal>
          <Reveal delay={120} className="lg:pt-14">
            <p className="text-lead text-ink-soft">
              Eine erfolgreiche Vermietung besteht nicht nur aus einem Inserat. Rechtliche Rahmenbedingungen, Positionierung, Preise, Gästekommunikation,
              Reinigung, Instandhaltung und laufende Kontrolle müssen zusammenspielen.
            </p>
            <p className="mt-6 text-body text-ink-soft">Goldnest begleitet Eigentümer von der ersten Einschätzung bis zum laufenden Betrieb.</p>
          </Reveal>
        </div>

        <ol className="mt-20 grid gap-10 border-t border-line pt-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line lg:mt-28">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.index} as="li" delay={index * 120} className="md:px-10 md:first:pl-0 md:last:pr-0">
              <span className="font-serif text-headline leading-none text-bronze">{pillar.index}</span>
              <h3 className="mt-6 text-title text-ink">{pillar.title}</h3>
              <p className="mt-4 text-small text-ink-soft">{pillar.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
