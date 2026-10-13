import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { propertyTypes } from "@/content/home";
import { cn } from "@/lib/utils";

export function PropertyTypes() {
  const [first, second, ...rest] = propertyTypes;
  const featured = [first, second];
  return (
    <section id="immobilien" className="section-y bg-ivory">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Für welche Immobilien"
            title="Nicht jede Wohnung braucht dasselbe Modell."
            lead="Gästesegment, Aufenthaltsdauer und Ausstattung entscheiden darüber, wie ein Apartment positioniert und betrieben wird. Wir ordnen Ihre Immobilie dort ein, wo sie wirtschaftlich und rechtlich am besten arbeitet."
          />
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-20">
          {featured.map((type, index) => (
            <Reveal key={type.title} as="article" delay={index * 100}>
              <Figure image={type.image} aspect="3/2" zoom showMotif={false} sizes="(min-width: 768px) 50vw, 100vw" />
              <p className="mt-6 font-sans text-eyebrow font-semibold uppercase text-bronze">{type.audience}</p>
              <h3 className="mt-3 text-title text-ink">{type.title}</h3>
              <p className="mt-3 max-w-lg text-small text-ink-soft">{type.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {rest.map((type, index) => (
            <Reveal key={type.title} as="article" delay={index * 100} className={cn(index === 2 && "md:col-span-1")}>
              <Figure image={type.image} aspect="4/5" zoom showMotif={false} sizes="(min-width: 768px) 33vw, 100vw" className="max-md:aspect-[3/2]" />
              <p className="mt-6 font-sans text-eyebrow font-semibold uppercase text-bronze">{type.audience}</p>
              <h3 className="mt-3 text-subtitle text-ink">{type.title}</h3>
              <p className="mt-3 text-small text-ink-soft">{type.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
