import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GuideCard } from "@/components/sections/GuideCard";
import { guides } from "@/content/guides";

type Props = { title?: string; lead?: string; featured?: number; tone?: "ivory" | "ivory-deep"; exclude?: string };

/** Magazine-style guide listing: featured cards plus a compact index of the rest. */
export function Guides({
  title = "Kurzzeitvermietung in Wien verstehen.",
  lead = "Rechtliche Grundlagen, Abgaben und Pflichten, verständlich erklärt und mit Quellen belegt. Für Eigentümer, die wissen möchten, worauf sie sich einlassen.",
  featured = 3,
  tone = "ivory-deep",
  exclude,
}: Props) {
  const list = guides.filter((g) => g.slug !== exclude);
  const top = list.slice(0, featured);
  const rest = list.slice(featured);
  return (
    <section id="ratgeber" className={tone === "ivory" ? "section-y bg-ivory" : "section-y bg-ivory-deep"}>
      <Container>
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Ratgeber" title={title} lead={lead} />
          <ButtonLink href="/ratgeber" variant="link" arrow className="shrink-0">
            Alle Ratgeber
          </ButtonLink>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3 lg:mt-20">
          {top.map((guide, index) => (
            <Reveal key={guide.slug} delay={index * 100}>
              <GuideCard guide={guide} index={index} />
            </Reveal>
          ))}
        </div>

        {rest.length > 0 && (
          <Reveal className="mt-16 grid gap-x-12 md:grid-cols-2 lg:mt-20">
            {rest.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} size="compact" />
            ))}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
