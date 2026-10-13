import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import type { FaqItem } from "@/content/types";
import { faqSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

type Props = {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  lead?: string;
  /** Emit FAQPage structured data (once per page). */
  schema?: boolean;
  more?: { label: string; href: string };
  tone?: "ivory" | "ivory-deep";
  id?: string;
  note?: string;
};

export function FAQ({
  items,
  eyebrow = "Häufige Fragen",
  title = "Was Eigentümer uns am häufigsten fragen.",
  lead,
  schema = true,
  more,
  tone = "ivory",
  id = "faq",
  note = "Rechtliche Antworten sind bewusst kurz gehalten. Ob und wie sie auf Ihre Wohnung zutreffen, klären wir im Einzelfall.",
}: Props) {
  return (
    <section id={id} className={cn("section-y", tone === "ivory" ? "bg-ivory" : "bg-ivory-deep")}>
      {schema && <JsonLd data={faqSchema(items)} />}
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />
            {note && <p className="mt-8 max-w-md text-small text-stone">{note}</p>}
            {more && (
              <div className="mt-8">
                <ButtonLink href={more.href} variant="link" arrow>
                  {more.label}
                </ButtonLink>
              </div>
            )}
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
