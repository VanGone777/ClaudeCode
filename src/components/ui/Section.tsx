import { cn } from "@/lib/utils";

export type SectionTone = "ivory" | "ivory-deep" | "sand" | "moss" | "warm-black";

const toneClass: Record<SectionTone, string> = {
  ivory: "bg-ivory text-ink",
  "ivory-deep": "bg-ivory-deep text-ink",
  sand: "bg-sand text-ink",
  moss: "bg-moss text-ivory",
  "warm-black": "bg-warm-black text-ivory",
};

type Props = React.ComponentPropsWithoutRef<"section"> & {
  tone?: SectionTone;
  size?: "default" | "sm" | "none";
  /** Adds a top hairline (useful between two ivory sections). */
  hairline?: boolean;
};

/** Full-width page section with consistent vertical rhythm. Use <Container> inside. */
export function Section({ tone = "ivory", size = "default", hairline = false, className, ...rest }: Props) {
  return (
    <section
      className={cn(
        "relative",
        toneClass[tone],
        size === "default" && "section-y",
        size === "sm" && "section-y-sm",
        hairline && "hairline",
        className,
      )}
      {...rest}
    />
  );
}
