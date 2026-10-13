import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure, type Aspect } from "@/components/ui/Figure";
import type { ImageKey } from "@/content/images";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs?: Crumb[];
  image?: ImageKey;
  imageAspect?: Aspect;
  tone?: "ivory" | "ivory-deep" | "moss";
  children?: React.ReactNode;
  /** Narrow editorial layout (guides) */
  layout?: "split" | "editorial";
};

/** Sub-page hero: breadcrumbs, eyebrow, the page's single H1, lead and optional image. */
export function PageHero({ eyebrow, title, lead, breadcrumbs, image, imageAspect = "4/3", tone = "ivory", children, layout = "split" }: Props) {
  const dark = tone === "moss";
  return (
    <section className={cn("relative", tone === "ivory" && "bg-ivory", tone === "ivory-deep" && "bg-ivory-deep", dark && "bg-moss text-ivory")}>
      <div className={cn("container-x pt-8 pb-14 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24", layout === "editorial" && "pb-10 md:pb-12 lg:pb-14")}>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone={dark ? "dark" : "light"} className="mb-8 md:mb-12" />}
        <div className={cn("grid items-end gap-10", layout === "split" && image && "lg:grid-cols-[1.1fr_0.9fr] lg:gap-16")}>
          <div className={cn(layout === "editorial" && "max-w-3xl")}>
            {eyebrow && (
              <Eyebrow tone={dark ? "ivory" : "bronze"} className="mb-6">
                {eyebrow}
              </Eyebrow>
            )}
            <h1 className={cn("text-display", dark ? "text-ivory" : "text-ink")}>{title}</h1>
            {lead && <p className={cn("mt-7 max-w-2xl text-lead", dark ? "text-ivory/75" : "text-ink-soft")}>{lead}</p>}
            {children && <div className="mt-9">{children}</div>}
          </div>
          {layout === "split" && image && (
            <Figure image={image} aspect={imageAspect} priority sizes="(min-width: 1024px) 45vw, 100vw" />
          )}
        </div>
      </div>
    </section>
  );
}
