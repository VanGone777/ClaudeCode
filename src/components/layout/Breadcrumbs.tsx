import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

type Props = { items: Crumb[]; tone?: "light" | "dark"; className?: string };

/** Visible breadcrumb trail plus BreadcrumbList schema. Always starts at the homepage. */
export function Breadcrumbs({ items, tone = "light", className }: Props) {
  const trail: Crumb[] = [{ name: "Startseite", path: "/" }, ...items];
  const dark = tone === "dark";
  return (
    <nav aria-label="Brotkrumen" className={cn("font-sans text-caption", dark ? "text-ivory/60" : "text-stone", className)}>
      <JsonLd data={breadcrumbSchema(trail)} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((crumb, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true" className="opacity-60">/</span>}
              {last ? (
                <span aria-current="page" className={dark ? "text-ivory/85" : "text-ink-soft"}>
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="link-underline hover:text-bronze">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
