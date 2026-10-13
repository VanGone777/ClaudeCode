import Link from "next/link";
import { footerNav, site } from "@/content/site";
import { Logo } from "@/components/layout/Logo";
import { ArrowUpRight } from "@/components/ui/Icons";

function FooterColumn({ title, items }: { title: string; items: ReadonlyArray<{ label: string; href: string }> }) {
  return (
    <div>
      <p className="font-sans text-eyebrow font-semibold uppercase text-ivory/65">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link href={item.href} className="font-sans text-small text-ivory/80 transition-colors duration-300 hover:text-ivory">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  // Static year derived from the content stand (avoids request-time values in the prerender).
  const year = new Date(site.contentStandIso).getFullYear();
  const social = [
    { label: "Instagram", href: site.social.instagram },
    { label: "LinkedIn", href: site.social.linkedin },
  ].filter((s) => s.href);

  return (
    <footer className="bg-moss text-ivory">
      <div className="container-x pt-16 pb-10 md:pt-24 md:pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-6 text-small text-ivory/70">
              Professionelle Apartment- und Kurzzeitvermietungsverwaltung in Wien. Rechtlich durchdacht, wirtschaftlich transparent, persönlich betreut.
            </p>
            <address className="mt-6 font-sans text-small not-italic text-ivory/70">
              {site.legalName}
              <br />
              {/* VERIFY: street address of Goldnest GmbH */}
              {site.contact.streetAddress ? (
                <>
                  {site.contact.streetAddress}
                  <br />
                  {site.contact.postalCode} {site.contact.city}
                </>
              ) : (
                <>{site.contact.city}, Österreich</>
              )}
              <br />
              <a href={`mailto:${site.contact.email}`} className="link-underline hover:text-ivory">
                {site.contact.email}
              </a>
              {site.contact.phone && (
                <>
                  <br />
                  <a href={`tel:${site.contact.phone}`} className="link-underline hover:text-ivory">
                    {site.contact.phoneDisplay || site.contact.phone}
                  </a>
                </>
              )}
            </address>
            {social.length > 0 && (
              <ul className="mt-6 flex gap-5">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-sans text-small text-ivory/70 hover:text-ivory"
                    >
                      {s.label}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <FooterColumn title="Leistungen" items={footerNav.leistungen} />
          <FooterColumn title="Wissen" items={footerNav.wissen} />
          <FooterColumn title="Unternehmen" items={footerNav.unternehmen} />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-moss-line pt-8 font-sans text-caption text-ivory/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <p className="max-w-xl">
            Inhalte zu Recht, Abgaben und Steuern dienen der allgemeinen Orientierung und ersetzen keine individuelle Beratung. Stand: {site.contentStand}.
          </p>
        </div>
      </div>
    </footer>
  );
}
