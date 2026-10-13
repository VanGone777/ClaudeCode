import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { caseStudies } from "@/content/home";

/**
 * Case study layout. Content comes from content/home.ts and is a verified-data
 * placeholder until Goldnest provides real owner-approved cases (VERIFY).
 */
export function CaseStudies() {
  return (
    <section id="fallstudien" className="section-y bg-sand">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Aus der Praxis"
            title="Wie eine Wohnung zum Apartment wird."
            lead="Jede Immobilie hat eine eigene Ausgangslage. Hier zeigen wir, wie wir ein Objekt vorbereiten, positionieren und bewirtschaften – nachvollziehbar und ohne geschönte Zahlen."
          />
        </Reveal>

        {caseStudies.map((study) => (
          <Reveal key={study.title} as="article" className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <Figure image={study.image} aspect="4/5" sizes="(min-width: 1024px) 40vw, 100vw" className="max-lg:aspect-[16/10]" />
              <p className="mt-5 font-sans text-eyebrow font-semibold uppercase text-bronze">{study.type}</p>
              <h3 className="mt-2 text-title text-ink">{study.title}</h3>
            </div>
            <dl className="border-t border-ink/20">
              {study.sections.map((s) => (
                <div key={s.label} className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <dt className="font-sans text-eyebrow font-semibold uppercase text-stone">{s.label}</dt>
                  <dd className="text-body text-ink-soft">{s.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
