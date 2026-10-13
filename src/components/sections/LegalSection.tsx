import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { legalProcess, legalTopics } from "@/content/home";

export function LegalSection() {
  return (
    <section id="recht" className="section-y bg-moss text-ivory">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeader
              tone="dark"
              eyebrow="Rechtliche Orientierung"
              title="Kurzzeitvermietung in Wien ist kein Selbstläufer."
              lead="Die Wiener Vorschriften für touristische Kurzzeitvermietung haben sich deutlich verändert. Ob und in welchem Umfang eine Wohnung kurzfristig vermietet werden darf, hängt vom konkreten Objekt und der Nutzung ab."
            />
            <Disclaimer variant="goldnest" tone="dark" className="mt-10 max-w-lg" />
            <div className="mt-10">
              <ButtonLink href="/kurzzeitvermietung-wien" variant="inverted" arrow>
                Kurzzeitvermietung in Wien verstehen
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-sans text-eyebrow font-semibold uppercase text-ivory/65">So prüfen wir eine Immobilie</p>
            <ol className="mt-6 border-t border-moss-line">
              {legalProcess.map((item) => (
                <li key={item.step} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-moss-line py-5">
                  <span className="font-serif text-subtitle leading-none text-bronze-light">{item.step}</span>
                  <div>
                    <p className="font-serif text-subtitle text-ivory">{item.title}</p>
                    <p className="mt-1 text-small text-ivory/70">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal className="mt-20 border-t border-moss-line pt-10 lg:mt-24">
          <p className="font-sans text-eyebrow font-semibold uppercase text-ivory/65">Wichtige Themen</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {legalTopics.map((topic) => (
              <li key={topic.href}>
                <Link
                  href={topic.href}
                  className="inline-flex h-11 items-center rounded-xs border border-ivory/25 px-4 font-sans text-small text-ivory/85 transition-colors duration-300 hover:border-bronze-light hover:text-bronze-light"
                >
                  {topic.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
