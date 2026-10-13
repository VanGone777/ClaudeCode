import { disclaimer } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = { variant?: "legal" | "goldnest" | "market" | "calculator"; className?: string; tone?: "light" | "dark" };

export function Disclaimer({ variant = "legal", className, tone = "light" }: Props) {
  return (
    <p className={cn("border-l border-bronze/60 pl-4 font-sans text-caption", tone === "dark" ? "text-ivory/70" : "text-stone", className)}>
      {disclaimer[variant]}
    </p>
  );
}
