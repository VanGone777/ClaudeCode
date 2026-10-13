type Props = { data: Record<string, unknown> | Array<Record<string, unknown>> };

/** Renders structured data. `<` is escaped to avoid breaking out of the script tag. */
export function JsonLd({ data }: Props) {
  const payload = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: payload }} />;
}
