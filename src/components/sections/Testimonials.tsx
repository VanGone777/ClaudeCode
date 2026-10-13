import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/content/home";

/**
 * Owner voices. Content is a neutral placeholder until real, consented quotes exist (VERIFY).
 * The layout is final; only content/home.ts needs to change.
 */
export function Testimonials() {
  return (
    <section id="eigentuemerstimmen" className="section-y bg-ivory">
      <Container>
        <Reveal>
          <SectionHeader eyebrow="Eigentümerstimmen" title="Was Eigentümer über die Zusammenarbeit sagen." align="center" />
        </Reveal>
        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20">
          {testimonials.map((t, index) => (
            <Reveal key={index} as="li" delay={index * 100} className="border-t border-line pt-8">
              <span aria-hidden="true" className="font-serif text-[3rem] leading-none text-bronze">
                „
              </span>
              <blockquote className="mt-2 font-serif text-subtitle text-ink">{t.quote}</blockquote>
              <footer className="mt-6 font-sans text-caption text-stone">
                <span className="block text-ink-soft">{t.name}</span>
                <span>{t.context}</span>
              </footer>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
