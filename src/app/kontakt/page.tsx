import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { processSteps } from "@/content/home";
import { site } from "@/content/site";
import { webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const description =
  "Lassen Sie Ihre Wohnung in Wien unverbindlich prüfen: Goldnest sieht sich Lage, Nutzung und rechtliche Ausgangslage an und gibt eine erste Einschätzung zur Kurzzeit- oder mittelfristigen Vermietung.";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt: Immobilie prüfen lassen",
  description,
  path: "/kontakt",
});

/** The first two steps come from the shared process; the third summarises what the owner receives. */
const nextSteps = [
  { step: "01", title: processSteps[0].title, text: processSteps[0].text },
  { step: "02", title: processSteps[1].title, text: processSteps[1].text },
  {
    step: "03",
    title: "Einschätzung",
    text: "Sie erhalten eine erste Einordnung, welches Vermietungsmodell für Ihre Wohnung in Frage kommt und welche Punkte vorab zu klären sind.",
  },
];

export default function Page() {
  const hasAddress = Boolean(site.contact.streetAddress && site.contact.postalCode);
  return (
    <>
      <JsonLd
        data={{
          ...webPageSchema({ name: "Kontakt: Immobilie prüfen lassen", description, path: "/kontakt" }),
          "@type": "ContactPage",
        }}
      />
      <PageHero
        layout="editorial"
        breadcrumbs={[{ name: "Kontakt", path: "/kontakt" }]}
        eyebrow="Kontakt"
        title="Lassen Sie uns Ihre Immobilie gemeinsam ansehen."
        lead="Unverbindlich und ohne Verpflichtung. Wir sehen uns zuerst Ihre Situation an: Lage, Ausstattung, Nutzung und rechtliche Ausgangslage. Erst danach besprechen wir, ob und in welcher Form eine Zusammenarbeit sinnvoll ist."
      />

      <section className="section-y-sm border-t border-line bg-ivory">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
            <Reveal>
              <h2 className="sr-only">Anfrage senden</h2>
              <ContactForm />
            </Reveal>

            <Reveal delay={100} as="div" className="lg:sticky lg:top-28 lg:self-start">
              <aside aria-labelledby="next-steps-heading" className="grid gap-14">
                <div>
                  <Eyebrow className="mb-5">Ablauf</Eyebrow>
                  <h2 id="next-steps-heading" className="text-title text-ink">
                    So geht es weiter
                  </h2>
                  <ol className="mt-6 border-t border-line">
                    {nextSteps.map((step) => (
                      <li key={step.step} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-6">
                        <span className="font-serif text-title leading-none text-bronze">{step.step}</span>
                        <div>
                          <h3 className="text-subtitle text-ink">{step.title}</h3>
                          <p className="mt-2 text-small text-ink-soft">{step.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <Eyebrow className="mb-5">Direkter Kontakt</Eyebrow>
                  <h2 className="text-title text-ink">Oder schreiben Sie uns direkt.</h2>
                  <address className="mt-6 border-t border-line not-italic">
                    <div className="border-b border-line py-5">
                      <span className="block font-sans text-eyebrow font-semibold uppercase text-stone">E-Mail</span>
                      <a href={`mailto:${site.contact.email}`} className="link-underline mt-2 inline-block font-serif text-subtitle text-ink hover:text-bronze">
                        {site.contact.email}
                      </a>
                    </div>
                    {site.contact.phone && (
                      <div className="border-b border-line py-5">
                        <span className="block font-sans text-eyebrow font-semibold uppercase text-stone">Telefon</span>
                        <a href={`tel:${site.contact.phone}`} className="link-underline mt-2 inline-block font-serif text-subtitle text-ink hover:text-bronze">
                          {site.contact.phoneDisplay || site.contact.phone}
                        </a>
                      </div>
                    )}
                    <div className="border-b border-line py-5">
                      <span className="block font-sans text-eyebrow font-semibold uppercase text-stone">Standort</span>
                      <p className="mt-2 font-serif text-subtitle text-ink">
                        {site.legalName}
                        <br />
                        {/* VERIFY: street address of Goldnest GmbH (src/content/site.ts) – until then only the city is shown. */}
                        {hasAddress ? (
                          <>
                            {site.contact.streetAddress}
                            <br />
                            {site.contact.postalCode} {site.contact.city}
                          </>
                        ) : (
                          site.contact.city
                        )}
                      </p>
                    </div>
                  </address>
                  <p className="mt-5 font-sans text-caption text-stone">Wir antworten auf Deutsch und auf Englisch. We are happy to reply in English.</p>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-y bg-ivory">
        <Container>
          <Reveal>
            <Figure image="contact" aspect="21/9" sizes="(min-width: 1344px) 1344px, 100vw" className="max-md:aspect-[4/3]" />
          </Reveal>
          <Reveal delay={100}>
            <Disclaimer variant="goldnest" className="mt-10 max-w-2xl" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
