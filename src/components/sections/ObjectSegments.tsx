import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { objectSegments } from "@/content/objects";

type Props = {
  tone?: "ivory" | "ivory-deep";
  title?: string;
  lead?: string;
  eyebrow?: string;
  id?: string;
};

/** From a single flat to a whole operation: four object types as a hairline list with a feature image. */
export function ObjectSegments({
  tone = "ivory",
  eyebrow = "Objekte",
  title = "Von der einzelnen Wohnung bis zum ganzen Haus.",
  lead = "Je größer das Objekt, desto wichtiger die Prüfung vorab. Bei einer Wohnung zählt die Wohnung, bei einem Zinshaus das Gebäude, bei Pension und Hotel der Betrieb.",
  id = "objekte",
}: Props) {
  return (
    <section id={id} className={tone === "ivory" ? "section-y bg-ivory" : "section-y bg-ivory-deep"}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />
            <Figure image="zinshaus" aspect="4/5" className="mt-10 max-lg:hidden" sizes="(min-width: 1024px) 40vw, 100vw" />
          </Reveal>
          <ol className="border-t border-line">
            {objectSegments.map((seg, index) => (
              <Reveal key={seg.title} as="li" delay={index * 70} className="border-b border-line">
                <Link href={seg.href} className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 py-8 md:grid-cols-[3.5rem_1fr_auto] md:py-10">
                  <span className="font-serif text-base text-stone">{seg.index}</span>
                  <span>
                    <span className="block font-serif text-title text-ink transition-colors duration-300 group-hover:text-bronze">{seg.title}</span>
                    <span className="mt-3 block max-w-lg text-small text-ink-soft">{seg.text}</span>
                  </span>
                  <ArrowRight className="mt-2 size-5 text-bronze transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
