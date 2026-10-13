import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = { tone?: "light" | "dark"; className?: string; priority?: boolean };

/** Wordmark. A small bronze mark anchors the serif lettering. */
export function Logo({ tone = "light", className }: Props) {
  return (
    <Link
      href="/"
      aria-label="Goldnest – zur Startseite"
      className={cn("inline-flex items-center gap-2.5 font-serif text-[1.0625rem] font-medium tracking-[0.22em] uppercase", tone === "dark" ? "text-ivory" : "text-ink", className)}
    >
      <span aria-hidden="true" className="relative block size-[9px] rotate-45 border border-bronze">
        <span className="absolute inset-[2px] bg-bronze" />
      </span>
      Goldnest
    </Link>
  );
}
