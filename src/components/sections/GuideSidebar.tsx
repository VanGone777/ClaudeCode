import Link from "next/link";
import type { Guide } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { cta } from "@/content/site";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function GuideSidebar({ guide, related }: { guide: Guide; related: Guide[] }) {
  const headings = guide.body.filter((b): b is Extract<Guide["body"][number], { type: "h2" }> => b.type === "h2");
  return (
    <aside className="space-y-10 lg:sticky lg:top-28">
      {headings.length > 2 && (
        <nav aria-label="Inhalt dieses Ratgebers">
          <p className="font-sans text-eyebrow font-semibold uppercase text-stone">Inhalt</p>
          <ol className="mt-4 space-y-2.5 border-l border-line">
            {headings.map((h) => (
              <li key={h.text}>
                <a href={`#${h.id ?? slugify(h.text)}`} className="-ml-px block border-l border-transparent pl-4 font-sans text-small text-ink-soft transition-colors hover:border-bronze hover:text-ink">
                  {h.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="bg-ivory-deep p-6">
        <p className="font-serif text-subtitle text-ink">Gilt das für Ihre Wohnung?</p>
        <p className="mt-3 text-small text-ink-soft">Wir sehen uns Lage, Nutzung und Eigentumssituation an und sagen Ihnen, welches Vermietungsmodell in Frage kommt.</p>
        <ButtonLink href={cta.primary.href} variant="primary" className="mt-5 w-full" arrow>
          {cta.primary.label}
        </ButtonLink>
      </div>

      {related.length > 0 && (
        <div>
          <p className="font-sans text-eyebrow font-semibold uppercase text-stone">Weiterlesen</p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {related.map((g) => (
              <li key={g.slug}>
                <Link href={`/ratgeber/${g.slug}`} className="block py-3 font-serif text-[1.125rem] leading-snug text-ink transition-colors hover:text-bronze">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
