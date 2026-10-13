import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cta } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "ivory" | "ivory-deep" | "moss";
  id?: string;
};

/** Calm closing section. No urgency, no countdown. */
export function CTASection({
  eyebrow = "Erstgespräch",
  title = "Lassen Sie uns Ihre Immobilie gemeinsam ansehen.",
  text = "Sie überlegen, Ihre Wohnung professionell vermieten zu lassen? Wir sehen uns Ihre Ausgangslage an und besprechen, welches Modell für Ihre Immobilie sinnvoll sein könnte.",
  primary = cta.primary,
  secondary = cta.talk,
  tone = "ivory-deep",
  id,
}: Props) {
  const dark = tone === "moss";
  return (
    <section id={id} className={cn("section-y", tone === "ivory" && "bg-ivory", tone === "ivory-deep" && "bg-ivory-deep", dark && "bg-moss text-ivory")}>
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone={dark ? "ivory" : "bronze"} rule={false} className="justify-center">
            {eyebrow}
          </Eyebrow>
          <h2 className={cn("mt-6 text-display", dark ? "text-ivory" : "text-ink")}>{title}</h2>
          <p className={cn("mx-auto mt-7 max-w-2xl text-lead", dark ? "text-ivory/75" : "text-ink-soft")}>{text}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={primary.href} variant={dark ? "inverted" : "primary"} size="lg" arrow>
              {primary.label}
            </ButtonLink>
            {secondary && secondary.href !== primary.href && (
              <ButtonLink href={secondary.href} variant={dark ? "outline-inverted" : "secondary"} size="lg">
                {secondary.label}
              </ButtonLink>
            )}
            {secondary && secondary.href === primary.href && secondary.label !== primary.label && (
              <ButtonLink href={secondary.href} variant={dark ? "link-inverted" : "link"}>
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
