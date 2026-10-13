import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/ui/Icons";

export type ButtonVariant = "primary" | "secondary" | "inverted" | "outline-inverted" | "link" | "link-inverted";
export type ButtonSize = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-xs font-sans font-medium tracking-[0.01em] transition-[background-color,border-color,color,transform] duration-300 ease-out select-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-ivory hover:bg-moss",
  secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.03]",
  inverted: "bg-ivory text-ink hover:bg-white",
  "outline-inverted": "border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory/[0.06]",
  link: "h-auto! px-0! text-ink hover:text-bronze",
  "link-inverted": "h-auto! px-0! text-ivory hover:text-bronze-light",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-12 px-6 text-[0.9375rem]",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & { href: string } & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({ href, variant = "primary", size = "md", arrow = false, className, children, ...rest }: LinkProps) {
  const isLink = variant === "link" || variant === "link-inverted";
  return (
    <Link href={href} className={cn(base, variants[variant], !isLink && sizes[size], className)} {...rest}>
      <span className={cn(isLink && "link-underline")}>{children}</span>
      {arrow && <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />}
    </Link>
  );
}

type NativeButtonProps = CommonProps & React.ComponentPropsWithoutRef<"button">;

export function Button({ variant = "primary", size = "md", arrow = false, className, children, type = "button", ...rest }: NativeButtonProps) {
  const isLink = variant === "link" || variant === "link-inverted";
  return (
    <button
      type={type}
      className={cn(base, variants[variant], !isLink && sizes[size], "disabled:cursor-not-allowed disabled:opacity-60", className)}
      {...rest}
    >
      <span className={cn(isLink && "link-underline")}>{children}</span>
      {arrow && <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />}
    </button>
  );
}
