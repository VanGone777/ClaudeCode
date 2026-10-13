import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"div"> & { as?: "div" | "section" | "header" | "footer" | "nav" };

export function Container({ as: Tag = "div", className, ...rest }: Props) {
  return <Tag className={cn("container-x", className)} {...rest} />;
}
