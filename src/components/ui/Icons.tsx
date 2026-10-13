import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-[1.05em] shrink-0", className)}
    >
      <path d="M3.5 10h13M11 4.5l5.5 5.5-5.5 5.5" />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-[1.05em] shrink-0", className)}
    >
      <path d="M5.5 14.5l9-9M7 5.5h7.5V13" />
    </svg>
  );
}

export function Plus({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      className={cn("size-5 shrink-0", className)}
    >
      <path d="M10 3.5v13M3.5 10h13" />
    </svg>
  );
}

export function Check({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5 shrink-0", className)}
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export function Menu({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      className={cn("size-6", className)}
    >
      <path d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  );
}

export function Close({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      className={cn("size-6", className)}
    >
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}
