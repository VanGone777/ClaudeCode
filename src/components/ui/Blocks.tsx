import type { Block } from "@/content/types";
import { Inline } from "@/components/ui/Inline";
import { cn } from "@/lib/utils";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Renders editorial content blocks (guides, service pages). */
export function Blocks({ blocks, className }: { blocks: Block[]; className?: string }) {
  return (
    <div className={cn("prose-editorial text-body text-ink-soft", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "lead":
            return (
              <p key={index} className="text-lead text-ink">
                <Inline text={block.text} />
              </p>
            );
          case "p":
            return (
              <p key={index}>
                <Inline text={block.text} />
              </p>
            );
          case "h2":
            return (
              <h2 key={index} id={block.id ?? slugify(block.text)} className="scroll-mt-28 text-ink">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="text-ink">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={index}>
                {block.items.map((item, i) => (
                  <li key={i}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index}>
                {block.items.map((item, i) => (
                  <li key={i}>
                    <Inline text={item} />
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={index}
                className={cn(
                  "my-8! border-l-2 py-1 pl-6",
                  block.tone === "caution" ? "border-bronze" : "border-line-strong",
                )}
              >
                {block.title && <p className="mb-1.5 font-sans text-small font-semibold text-ink">{block.title}</p>}
                <p className="text-small text-ink-soft">
                  <Inline text={block.text} />
                </p>
              </aside>
            );
          case "quote":
            return (
              <figure key={index} className="my-10! border-y border-line py-8">
                <blockquote className="font-serif text-subtitle text-ink">
                  <Inline text={block.text} />
                </blockquote>
                {block.cite && <figcaption className="mt-4 text-caption text-stone">{block.cite}</figcaption>}
              </figure>
            );
          case "table":
            return (
              <div key={index} className="my-8! -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
                <table className="w-full min-w-[32rem] border-collapse text-small">
                  {block.caption && <caption className="mb-3 text-left font-sans text-caption text-stone">{block.caption}</caption>}
                  <thead>
                    <tr className="border-b border-ink/60 text-left">
                      {block.head.map((cell, i) => (
                        <th key={i} scope="col" className="py-3 pr-6 font-sans text-eyebrow font-semibold uppercase text-stone">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-b border-line align-top">
                        {row.map((cell, c) => (
                          <td key={c} className={cn("py-3 pr-6", c === 0 && "font-medium text-ink")}>
                            <Inline text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "steps":
            return (
              <ol key={index} className="my-8! list-none! space-y-6 p-0!">
                {block.items.map((item, i) => (
                  <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-4">
                    <span className="font-serif text-title leading-none text-bronze">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-sans font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-small">
                        <Inline text={item.text} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            );
          case "definitions":
            return (
              <dl key={index} className="my-8! divide-y divide-line border-y border-line">
                {block.items.map((item, i) => (
                  <div key={i} className="grid gap-2 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                    <dt className="font-sans font-semibold text-ink">{item.term}</dt>
                    <dd className="text-small">
                      <Inline text={item.text} />
                    </dd>
                  </div>
                ))}
              </dl>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
