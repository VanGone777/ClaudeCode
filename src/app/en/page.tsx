import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/en";
const DESCRIPTION =
  "Goldnest manages Airbnb and short-term rental apartments in Vienna for international owners: legal assessment first, then listing, pricing, guest communication, cleaning and transparent owner reporting.";

export const metadata: Metadata = buildMetadata({
  title: "Airbnb Property Management Vienna – Goldnest",
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
  locale: "en_US",
  alternates: {
    de: `${site.url}/`,
    en: `${site.url}${PATH}`,
  },
});

/** The ten services, translated from content/services.ts. Links point to the German pages. */
const servicesEn: Array<{ index: string; title: string; short: string; href: string }> = [
  { index: "01", title: "Airbnb and short-term rental management", short: "Complete operational management, from booking to statement.", href: "/airbnb-verwaltung-wien" },
  { index: "02", title: "Co-hosting", short: "For owners who prefer to keep parts of the management themselves.", href: "/leistungen/co-hosting-wien" },
  { index: "03", title: "Listing and positioning", short: "Professional presentation on the relevant platforms.", href: "/airbnb-verwaltung-wien#inserat" },
  { index: "04", title: "Pricing and revenue management", short: "Economically sound pricing based on demand, season and property.", href: "/leistungen/pricing" },
  { index: "05", title: "Guest communication", short: "Communication before, during and after each stay.", href: "/leistungen/reinigung-gaestebetreuung#gaeste" },
  { index: "06", title: "Check-in and access", short: "Professional and, where possible, automated processes.", href: "/leistungen/reinigung-gaestebetreuung#check-in" },
  { index: "07", title: "Cleaning and quality control", short: "Coordination, inspection and preparation between stays.", href: "/leistungen/reinigung-gaestebetreuung" },
  { index: "08", title: "Apartment furnishing", short: "Furnishing and styling suited to rental use.", href: "/leistungen/apartment-einrichtung" },
  { index: "09", title: "Owner reporting", short: "Transparent income, costs and performance figures.", href: "/airbnb-verwaltung-wien#reporting" },
  { index: "10", title: "Mid-term rentals", short: "An alternative where tourist short-term letting is not permitted or not sensible.", href: "/leistungen/mittelfristige-vermietung" },
];

/** Translated from content/home.ts processSteps. */
const processEn: Array<{ step: string; title: string; text: string }> = [
  { step: "01", title: "Initial conversation", text: "We get to know your property, your goals and your starting position." },
  { step: "02", title: "Property assessment", text: "We look at location, furnishing, permissible uses and operational requirements." },
  { step: "03", title: "Rental strategy", text: "Short-term letting, mid-term letting or a combination are assessed on their economic merits." },
  { step: "04", title: "Preparation", text: "Furnishing, presentation, listings, pricing, check-in and operational processes." },
  { step: "05", title: "Ongoing management", text: "Bookings, guests, cleaning, quality, pricing and owner reporting." },
];

/** Cautious summary of the Vienna rules. Facts: docs/facts.md §5, §7, §8, §9 (as of October 2026). */
const rulesEn: Array<{ title: string; text: string }> = [
  {
    title: "Stricter rules since 1 July 2024",
    text: "Since 1 July 2024, Vienna applies stricter conditions to the tourist short-term letting of apartments. Occasional home sharing is not the same as the permanent tourist use of an investment apartment. Whether and to what extent an apartment may be let depends on its location, zoning, ownership situation and use.",
  },
  {
    title: "The 90-day exception",
    text: "The City of Vienna describes an exception for temporary short-term letting of no more than 90 days per calendar year in connection with keeping one's own residence. It does not mean that any apartment may be let for 90 days, and legal entities cannot rely on it, as they have no residence.",
  },
  {
    title: "Permits for tourist use beyond that",
    text: "For use beyond the exception, a permit under § 129 (1a) of the Vienna Building Code (Wiener Bauordnung) is generally required. It is issued by the building authority (MA 37) for a maximum of five years, is subject to conditions and is not granted automatically. Apartments in designated residential zones are excluded.",
  },
  {
    title: "City tax (Ortstaxe)",
    text: "From 1 July 2026 to 30 June 2027, the Vienna city tax is 5 % and from 1 July 2027 it is 8 %, each calculated on the statutory assessment basis rather than on the full booking amount. Hosts are responsible for the monthly calculation and payment. Do not assume that a platform remits the tax automatically; this should be checked for each platform.",
  },
  {
    title: "Registration and guest register",
    text: "Hosts register with VIETour, the City of Vienna's web application for tourism statistics and city tax. In addition, a guest register must be kept and guests must be registered without delay and in any case within 24 hours of arrival. A VIETour registration does not make a letting lawful under building law.",
  },
];

const audienceEn: Array<{ title: string; text: string }> = [
  {
    title: "International owners",
    text: "You own an apartment in Vienna but live abroad and need a local partner who handles guests, cleaning, maintenance and the Viennese rules, and who reports to you in a way you can follow.",
  },
  {
    title: "Investors",
    text: "You are buying or have bought an apartment as an investment and want to know, before the first listing, which rental model is legally possible and economically sensible.",
  },
  {
    title: "Developers",
    text: "You are planning or completing a building with several units and want an operating concept for short-term or mid-term letting that holds up under Vienna's building regulations.",
  },
  {
    title: "Corporate housing and relocation",
    text: "You need furnished apartments for employees or clients staying in Vienna for weeks or months, with reliable service and clear invoicing.",
  },
];

export default function Page() {
  return (
    <div lang="en">
      <JsonLd
        data={{
          ...serviceSchema({
            name: "Airbnb Property Management Vienna",
            serviceType: "Short-term rental and apartment management",
            description: DESCRIPTION,
            path: PATH,
          }),
          inLanguage: "en",
        }}
      />

      <PageHero
        eyebrow="Goldnest · Vienna"
        title="Airbnb property management in Vienna. Professional, personal, fully managed."
        lead="Goldnest is a Vienna-based management company for apartments and short-term rentals. We first assess which rental strategy is legally possible and economically sensible for your property, and then take over its professional operation."
        image="heroLiving"
        imageAspect="4/5"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href="/kontakt" variant="primary" arrow>
            Have your property assessed
          </ButtonLink>
          <ButtonLink href="#how-we-work" variant="link">
            How we work
          </ButtonLink>
        </div>
      </PageHero>

      {/* What we do */}
      <section id="what-we-do" className="section-y border-t border-line bg-ivory">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="What we do"
              title="Everything a professionally let apartment needs."
              lead="We take over the areas that determine quality, occupancy and peace of mind in day-to-day operation. You decide whether we are responsible for everything or only for specific tasks."
            />
          </Reveal>
          <ol className="mt-14 grid gap-x-10 border-t border-line md:grid-cols-2 lg:mt-20">
            {servicesEn.map((service, index) => (
              <Reveal key={service.index} as="li" delay={Math.min(index, 5) * 50} className="border-b border-line">
                <Link href={service.href} className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-7 transition-colors hover:text-bronze">
                  <span className="font-serif text-base text-stone">{service.index}</span>
                  <span>
                    <span className="block font-serif text-title text-ink transition-colors group-hover:text-bronze">{service.title}</span>
                    <span className="mt-2 block max-w-md text-small text-ink-soft">{service.short}</span>
                  </span>
                  <ArrowRight className="relative top-1 size-5 text-bronze transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            ))}
          </ol>
          <p className="mt-6 font-sans text-caption text-stone">Service pages are in German.</p>
        </Container>
      </section>

      {/* Vienna's rules */}
      <section id="rules" className="section-y bg-moss text-ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeader
                tone="dark"
                eyebrow="Regulation"
                title="Vienna's rules come first."
                lead="Short-term letting in Vienna is first a legal and economic question and only then a marketing question. Before we take on an apartment, we look at what is permissible for it."
              />
              <p className="mt-8 max-w-md text-small text-ivory/60">
                Information as of October 2026. This summary is for general orientation only and does not replace individual legal or tax advice. Goldnest does not provide legal or tax advice; we consider the essential operational framework and point out which questions should be clarified before letting.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <dl className="border-t border-moss-line">
                {rulesEn.map((rule) => (
                  <div key={rule.title} className="border-b border-moss-line py-7">
                    <dt className="font-serif text-subtitle text-ivory">{rule.title}</dt>
                    <dd className="mt-3 max-w-xl text-small text-ivory/70">{rule.text}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section id="how-we-work" className="section-y scroll-mt-20 bg-ivory">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="How we work" title="From apartment to professionally managed rental." />
          </Reveal>
          <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal className="order-last lg:order-first lg:sticky lg:top-28 lg:self-start">
              <Figure image="processPlan" aspect="4/5" sizes="(min-width: 1024px) 40vw, 100vw" className="max-lg:aspect-[16/10]" />
            </Reveal>
            <ol className="border-t border-line">
              {processEn.map((step, index) => (
                <Reveal key={step.step} as="li" delay={index * 80} className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-line py-8 md:grid-cols-[5rem_1fr] md:py-10">
                  <span className="font-serif text-headline leading-none text-bronze">{step.step}</span>
                  <div>
                    <h3 className="text-title text-ink">{step.title}</h3>
                    <p className="mt-3 max-w-lg text-body text-ink-soft">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Who it is for */}
      <section id="who-it-is-for" className="section-y bg-ivory-deep">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <SectionHeader
                eyebrow="Who it is for"
                title="Owners who want control without the daily workload."
                lead="Our clients own apartments in Vienna and want them managed with legal care, transparent accounting and a personal point of contact."
              />
            </Reveal>
            <Reveal delay={100}>
              <dl className="border-t border-line">
                {audienceEn.map((item) => (
                  <div key={item.title} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                    <dt className="font-serif text-subtitle text-ink">{item.title}</dt>
                    <dd className="max-w-xl text-small text-ink-soft">{item.text}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Guides note */}
      <section className="section-y-sm border-t border-line bg-ivory">
        <Container>
          <Reveal className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
            <div>
              <p className="font-sans text-eyebrow font-semibold uppercase text-bronze">Guides</p>
              <h2 className="mt-5 text-headline text-ink">Our guides on short-term letting in Vienna are in German.</h2>
            </div>
            <div className="max-w-md">
              <p className="text-small text-ink-soft">
                They cover the 90-day rule, permits, city tax, VIETour, the guest register, taxes and home-ownership questions, each with the date of the information and the sources used. If you prefer, we summarise the points relevant to your property in English during the initial conversation.
              </p>
              <ButtonLink href="/kurzzeitvermietung-wien" variant="link" arrow className="mt-6">
                Short-term letting in Vienna (German)
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Initial conversation"
        title="Have your property assessed."
        text="You are considering letting your Vienna apartment professionally? We look at your starting position and discuss which model could make sense for your property. Our contact form is in German; you are welcome to write to us in English."
        primary={{ label: "Have your property assessed", href: "/kontakt" }}
        secondary={{ label: "Arrange an initial conversation", href: "/kontakt" }}
      />
    </div>
  );
}
