"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Close, Menu } from "@/components/ui/Icons";

type Props = {
  items: NavItem[];
  cta: { label: string; href: string };
};

export function NavClient({ items, cta }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation (state reset during render, no effect needed).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Scroll lock, Escape, focus management while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const opener = openButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500",
        scrolled || open ? "border-b border-line bg-ivory/90 backdrop-blur-md supports-[backdrop-filter]:bg-ivory/80" : "border-b border-transparent bg-ivory",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative py-2 font-sans text-[0.9375rem] text-ink-soft transition-colors duration-300 hover:text-ink",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-bronze after:transition-transform after:duration-300 hover:after:scale-x-100",
                    isActive(item.href) && "text-ink after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href={isEnglish ? "/" : "/en"}
            hrefLang={isEnglish ? "de" : "en"}
            lang={isEnglish ? "de" : "en"}
            className="font-sans text-eyebrow font-semibold uppercase text-stone transition-colors hover:text-ink"
            aria-label={isEnglish ? "Deutsche Version" : "English version"}
          >
            {isEnglish ? "DE" : "EN"}
          </Link>
          <ButtonLink href={cta.href} variant="primary" size="md">
            {cta.label}
          </ButtonLink>
        </div>

        <button
          ref={openButtonRef}
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Menü öffnen"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ivory transition-[opacity,visibility] duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        inert={!open}
      >
        <div className="container-x flex h-16 items-center justify-between">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center text-ink"
            aria-label="Menü schließen"
            onClick={() => setOpen(false)}
          >
            <Close />
          </button>
        </div>
        <nav aria-label="Mobile Navigation" className="container-x flex flex-1 flex-col overflow-y-auto pt-6 pb-10">
          <ul className="divide-y divide-line border-y border-line">
            {items.map((item, index) => (
              <li
                key={item.href}
                className={cn("transition-[opacity,transform] duration-500 ease-out", open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0")}
                style={{ transitionDelay: open ? `${80 + index * 40}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn("flex items-center justify-between py-4 font-serif text-[1.625rem] text-ink", isActive(item.href) && "text-bronze")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4">
            <ButtonLink href={cta.href} variant="primary" size="lg" className="w-full">
              {cta.label}
            </ButtonLink>
            <Link
              href={isEnglish ? "/" : "/en"}
              hrefLang={isEnglish ? "de" : "en"}
              lang={isEnglish ? "de" : "en"}
              className="self-start py-2 font-sans text-eyebrow font-semibold uppercase text-stone"
            >
              {isEnglish ? "Deutsche Version" : "English version"}
            </Link>
          </div>
          <p className="mt-auto pt-10 font-sans text-caption text-stone">Goldnest GmbH · Wien</p>
        </nav>
      </div>
    </header>
  );
}
