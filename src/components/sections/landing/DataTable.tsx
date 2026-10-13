import { Inline } from "@/components/ui/Inline";
import { cn } from "@/lib/utils";

type Props = {
  head: string[];
  rows: string[][];
  caption?: string;
  className?: string;
};

/** Plain hairline table for legal facts. Cells support [label](href) and **bold**. */
export function DataTable({ head, rows, caption, className }: Props) {
  return (
    <div className={cn("-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0", className)}>
      <table className="w-full min-w-[30rem] border-collapse text-small">
        {caption && <caption className="mb-3 text-left font-sans text-caption text-stone">{caption}</caption>}
        <thead>
          <tr className="border-b border-ink/60 text-left">
            {head.map((cell) => (
              <th key={cell} scope="col" className="py-3 pr-6 font-sans text-eyebrow font-semibold uppercase text-stone">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-line align-top">
              {row.map((cell, c) => (
                <td key={c} className={cn("py-4 pr-6 text-ink-soft", c === 0 && "font-serif text-subtitle text-ink")}>
                  <Inline text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
