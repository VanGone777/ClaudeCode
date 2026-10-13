import { cn } from "@/lib/utils";

type Props = {
  value: string;
  label: string;
  note?: string;
  tone?: "light" | "dark";
  size?: "md" | "sm";
  className?: string;
};

export function Stat({ value, label, note, tone = "light", size = "md", className }: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("border-t py-5", dark ? "border-moss-line" : "border-line", className)}>
      <p className={cn("font-serif leading-none whitespace-nowrap", size === "md" ? "text-headline" : "text-title", dark ? "text-ivory" : "text-ink")}>{value}</p>
      <p className={cn("mt-3 font-sans text-small", dark ? "text-ivory/70" : "text-ink-soft")}>{label}</p>
      {note && <p className={cn("mt-1 font-sans text-caption", dark ? "text-ivory/65" : "text-stone")}>{note}</p>}
    </div>
  );
}
