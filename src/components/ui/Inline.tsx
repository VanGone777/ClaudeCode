import Link from "next/link";
import { parseInline } from "@/lib/utils";

/** Renders a string with **bold** and [label](href) inline markup. */
export function Inline({ text }: { text: string }) {
  const nodes = parseInline(text);
  return (
    <>
      {nodes.map((node, i) => {
        if (node.kind === "strong") return <strong key={i}>{node.text}</strong>;
        if (node.kind === "link") {
          const external = /^https?:\/\//.test(node.href);
          return external ? (
            <a key={i} href={node.href} target="_blank" rel="noopener noreferrer">
              {node.text}
            </a>
          ) : (
            <Link key={i} href={node.href}>
              {node.text}
            </Link>
          );
        }
        return <span key={i}>{node.text}</span>;
      })}
    </>
  );
}
