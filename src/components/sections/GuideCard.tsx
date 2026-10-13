import Link from "next/link";
import type { Guide } from "@/content/types";
import { Figure } from "@/components/ui/Figure";
import { ArrowRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type Props = { guide: Guide; index?: number; size?: "default" | "feature" | "compact"; className?: string };

/** Editorial magazine card for a guide article. */
export function GuideCard({ guide, index, size = "default", className }: Props) {
  const href = `/ratgeber/${guide.slug}`;
  const number = index !== undefined ? String(index + 1).padStart(2, "0") : undefined;

  if (size === "compact") {
    return (
      <Link href={href} className={cn("group flex items-start justify-between gap-6 border-t border-line py-5 transition-colors hover:text-bronze", className)}>
        <span>
          <span className="block font-sans text-eyebrow font-semibold uppercase text-bronze">{guide.category}</span>
          <span className="mt-2 block font-serif text-subtitle text-ink group-hover:text-bronze">{guide.title}</span>
        </span>
        <ArrowRight className="mt-2 size-5 text-bronze transition-transform duration-300 group-hover:translate-x-0.5" />
      </Link>
    );
  }

  return (
    <article className={cn("group", className)}>
      <Link href={href} className="block">
        <Figure image={guide.image} aspect={size === "feature" ? "16/10" : "4/3"} zoom showMotif={false} sizes="(min-width: 1024px) 33vw, 100vw" />
        <div className="mt-6">
          <p className="flex items-center gap-3 font-sans text-eyebrow font-semibold uppercase text-bronze">
            {number && <span className="font-serif text-base font-normal tracking-normal text-stone normal-case">{number}</span>}
            <span>{guide.category}</span>
            <span aria-hidden="true" className="text-stone">·</span>
            <span className="font-normal tracking-[0.06em] text-stone normal-case">{guide.readingMinutes} Min.</span>
          </p>
          <h3 className={cn("mt-3 text-ink transition-colors duration-300 group-hover:text-bronze", size === "feature" ? "text-title" : "text-subtitle")}>{guide.title}</h3>
          <p className="mt-3 line-clamp-3 text-small text-ink-soft">{guide.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 font-sans text-small font-medium text-ink">
            Lesen
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
