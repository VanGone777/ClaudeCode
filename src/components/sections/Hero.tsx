import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { cta } from "@/content/site";

export function Hero() {
  return (
    <section className="relative bg-ivory">
      <div className="container-x grid items-end gap-10 pt-8 pb-14 md:pt-12 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-16 lg:pb-24">
        <div className="max-w-2xl">
          <Eyebrow className="anim-fade-up mb-7" as="p">
            Airbnb Verwaltung Wien
          </Eyebrow>
          <h1 className="anim-fade-up text-display text-ink" style={{ "--delay": "80ms" } as React.CSSProperties}>
            Airbnb Verwaltung in Wien. Professionell, persönlich und vollständig betreut.
          </h1>
          <p className="anim-fade-up mt-8 max-w-xl text-lead text-ink-soft" style={{ "--delay": "160ms" } as React.CSSProperties}>
            Goldnest übernimmt die professionelle Vermietung und Betreuung hochwertiger Apartments in Wien – von Strategie und Positionierung über
            Gästebetreuung und Pricing bis zur laufenden Verwaltung.
          </p>
          <p
            className="anim-fade-up mt-6 max-w-xl border-l border-bronze pl-4 font-sans text-small text-ink-soft"
            style={{ "--delay": "240ms" } as React.CSSProperties}
          >
            Wir prüfen zuerst, welches Vermietungsmodell für Ihre Immobilie rechtlich möglich und wirtschaftlich sinnvoll ist.
          </p>
          <div className="anim-fade-up mt-10 flex flex-col gap-4 sm:flex-row sm:items-center" style={{ "--delay": "320ms" } as React.CSSProperties}>
            <ButtonLink href={cta.primary.href} variant="primary" size="lg" arrow>
              {cta.primary.label}
            </ButtonLink>
            <ButtonLink href={cta.secondary.href} variant="link">
              {cta.secondary.label}
            </ButtonLink>
          </div>
        </div>
        <div className="anim-settle overflow-hidden">
          <Figure image="heroLiving" aspect="4/5" priority sizes="(min-width: 1024px) 48vw, 100vw" className="max-lg:aspect-[3/2]" />
        </div>
      </div>
    </section>
  );
}
