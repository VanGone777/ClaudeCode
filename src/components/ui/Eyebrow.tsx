import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Hairline before the label */
  rule?: boolean;
  tone?: "bronze" | "stone" | "ivory";
  as?: "p" | "span" | "div";
};

export function Eyebrow({ children, className, rule = true, tone = "bronze", as: Tag = "p" }: Props) {
  return (
    <Tag
      className={cn(
        "font-sans text-eyebrow font-semibold uppercase",
        tone === "bronze" && "text-bronze",
        tone === "stone" && "text-stone",
        tone === "ivory" && "text-ivory/70",
        rule && "flex items-center gap-3 before:h-px before:w-6 before:bg-current before:opacity-70",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
