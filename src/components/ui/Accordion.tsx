"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { Plus } from "@/components/ui/Icons";
import { Inline } from "@/components/ui/Inline";

export type AccordionItem = { q: string; a: string };

type Props = {
  items: AccordionItem[];
  /** Index of the item open on load, or null for all closed. */
  defaultOpen?: number | null;
  /** Heading level used for the question (semantic, not visual). */
  headingLevel?: "h3" | "h4";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Accessible accordion: button with aria-expanded/aria-controls, panel as region.
 * Closed panels stay in the DOM (SEO) but are inert and aria-hidden.
 */
export function Accordion({ items, defaultOpen = 0, headingLevel = "h3", tone = "light", className }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  const Heading = headingLevel;
  const dark = tone === "dark";

  return (
    <div className={cn("divide-y", dark ? "divide-moss-line border-y border-moss-line" : "divide-line border-y border-line", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.q}>
            <Heading className="m-0 font-sans text-base font-normal">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className={cn(
                  "group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-300 md:py-6",
                  dark ? "text-ivory hover:text-bronze-light" : "text-ink hover:text-bronze",
                )}
              >
                <span className="font-serif text-[1.25rem] leading-snug font-normal md:text-[1.375rem]">{item.q}</span>
                <Plus
                  className={cn(
                    "mt-1 transition-transform duration-400 ease-out",
                    dark ? "text-bronze-light" : "text-bronze",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className="accordion-panel"
              data-open={isOpen}
            >
              <div inert={!isOpen}>
                <p className={cn("max-w-[62ch] pb-6 text-body md:pb-8", dark ? "text-ivory/75" : "text-ink-soft")}>
                  <Inline text={item.a} />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
