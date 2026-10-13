/** Joins class names, dropping falsy values. Kept dependency-free on purpose. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Formats a number with dots as thousands separators (1.234,5), as used in Austrian business writing. */
export function formatNumber(value: number, fractionDigits = 0): string {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

/** Minimal inline markup: **bold** and [label](href). Used by content blocks. */
export type InlineNode =
  | { kind: "text"; text: string }
  | { kind: "strong"; text: string }
  | { kind: "link"; text: string; href: string };

const INLINE_RE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function parseInline(input: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  let last = 0;
  for (const match of input.matchAll(INLINE_RE)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push({ kind: "text", text: input.slice(last, index) });
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push({ kind: "strong", text: token.slice(2, -2) });
    } else {
      const close = token.indexOf("](");
      nodes.push({ kind: "link", text: token.slice(1, close), href: token.slice(close + 2, -1) });
    }
    last = index + token.length;
  }
  if (last < input.length) nodes.push({ kind: "text", text: input.slice(last) });
  return nodes;
}
