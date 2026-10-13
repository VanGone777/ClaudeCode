import { cn } from "@/lib/utils";

type Props = {
  stand: string;
  legalBasis?: string[];
  authority?: string;
  reviewed?: string;
  className?: string;
};

/** Visible "Stand / Rechtsgrundlage / Behörde / Prüfung" box for legal content. */
export function LegalMeta({ stand, legalBasis = [], authority, reviewed, className }: Props) {
  const rows: Array<{ label: string; value: React.ReactNode }> = [
    { label: "Stand der Informationen", value: stand },
  ];
  if (legalBasis.length) rows.push({ label: "Rechtsgrundlage", value: legalBasis.join(" · ") });
  if (authority) rows.push({ label: "Zuständige Stelle", value: authority });
  // VERIFY: set `reviewed` to the date and name of the reviewing professional once done.
  rows.push({ label: "Letzte fachliche Prüfung", value: reviewed || "Fachliche Prüfung ausstehend" });

  return (
    <dl className={cn("divide-y divide-line border-y border-line font-sans text-small", className)}>
      {rows.map((row) => (
        <div key={row.label} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
          <dt className="text-eyebrow font-semibold uppercase text-stone">{row.label}</dt>
          <dd className="text-ink-soft">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
