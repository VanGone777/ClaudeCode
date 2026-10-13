import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  /** Heading level – one H1 per page, so sections use h2 by default. */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  tone?: "light" | "dark";
  size?: "display" | "headline" | "title";
  className?: string;
  children?: React.ReactNode;
};

export function SectionHeader({ eyebrow, title, lead, as: Tag = "h2", align = "left", tone = "light", size = "headline", className, children }: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow tone={dark ? "ivory" : "bronze"} rule={align !== "center"} className={cn("mb-5", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <Tag
        className={cn(
          size === "display" && "text-display",
          size === "headline" && "text-headline",
          size === "title" && "text-title",
          dark ? "text-ivory" : "text-ink",
        )}
      >
        {title}
      </Tag>
      {lead && <p className={cn("mt-6 max-w-2xl text-lead", dark ? "text-ivory/75" : "text-ink-soft", align === "center" && "mx-auto")}>{lead}</p>}
      {children}
    </div>
  );
}
