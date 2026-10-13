import type { ImageKey } from "@/content/images";

/**
 * Lightweight content blocks for editorial pages (guides, services).
 * Inline text supports **bold** and [label](href).
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "lead"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title?: string; text: string; tone?: "note" | "caution" }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "steps"; items: Array<{ title: string; text: string }> }
  | { type: "definitions"; items: Array<{ term: string; text: string }> };

export type Source = { label: string; href: string; date?: string };

export type FaqItem = { q: string; a: string };

export type GuideCategory = "Recht" | "Abgaben & Steuern" | "Pflichten" | "Praxis" | "Markt";

export interface Guide {
  slug: string;
  /** H1 */
  title: string;
  /** <title> without suffix */
  seoTitle: string;
  /** Meta description and card teaser (max ~160 chars) */
  description: string;
  category: GuideCategory;
  readingMinutes: number;
  /** ISO dates */
  published: string;
  updated: string;
  /** Visible "Stand" label, e.g. "Oktober 2026" */
  stand: string;
  legalBasis: string[];
  authority: string;
  /** VERIFY: set to the date of the last professional review once done. */
  reviewed: string;
  intro: string;
  keyFacts: string[];
  body: Block[];
  faq: FaqItem[];
  sources: Source[];
  related: string[];
  image: ImageKey;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  /** What the service covers, as short statements */
  includes: Array<{ title: string; text: string }>;
  /** Who it is for */
  forWhom: string[];
  body: Block[];
  faq: FaqItem[];
  image: ImageKey;
  related: string[];
}
