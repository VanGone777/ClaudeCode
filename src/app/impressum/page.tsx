import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/impressum";
const DESCRIPTION = "Impressum der Goldnest GmbH, Wien: Angaben gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz (MedienG).";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: DESCRIPTION,
  path: PATH,
});

// VERIFY: every placeholder below ("[… wird ergänzt]") must be replaced with the official
// company data of Goldnest GmbH before go-live. Values are read from src/content/site.ts
// where available; empty strings fall back to the visible placeholder.
const PENDING_ADDRESS = "[Anschrift wird ergänzt]"; // VERIFY
const PENDING_FN = "[FN wird ergänzt]"; // VERIFY: Firmenbuchnummer
const PENDING_UID = "[UID wird ergänzt]"; // VERIFY: UID-Nummer
const PENDING_MANAGEMENT = "[wird ergänzt]"; // VERIFY: Geschäftsführung
const PENDING_TRADE = "[Gewerbeberechtigung wird ergänzt]"; // VERIFY: exact Gewerbeberechtigung(en)

type Row = { term: string; value: React.ReactNode };

function Entry({ rows }: { rows: Row[] }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {rows.map((row) => (
        <div key={row.term} className="grid gap-1.5 py-4 sm:grid-cols-[14rem_1fr] sm:gap-8">
          <dt className="font-sans text-eyebrow font-semibold uppercase text-stone">{row.term}</dt>
          <dd className="text-body text-ink-soft">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function Page() {
  const { contact, legal } = site;

  // VERIFY: street address and postal code are empty in site.ts until confirmed.
  const addressLine =
    contact.streetAddress && contact.postalCode
      ? `${contact.streetAddress}, ${contact.postalCode} ${contact.city}, Österreich`
      : PENDING_ADDRESS;

  const companyRows: Row[] = [
    { term: "Firma", value: site.legalName },
    { term: "Rechtsform", value: "Gesellschaft mit beschränkter Haftung (GmbH)" },
    { term: "Sitz", value: "Wien, Österreich" },
    { term: "Anschrift", value: addressLine },
    {
      term: "E-Mail",
      value: contact.email ? (
        <a href={`mailto:${contact.email}`} className="link-underline text-ink hover:text-bronze">
          {contact.email}
        </a>
      ) : (
        "[E-Mail wird ergänzt]" // VERIFY
      ),
    },
    // VERIFY: the phone line is only rendered once site.contact.phone is set.
    ...(contact.phone
      ? [
          {
            term: "Telefon",
            value: (
              <a href={`tel:${contact.phone}`} className="link-underline text-ink hover:text-bronze">
                {contact.phoneDisplay || contact.phone}
              </a>
            ),
          },
        ]
      : []),
  ];

  const registerRows: Row[] = [
    { term: "Firmenbuchnummer", value: legal.companyRegister || PENDING_FN },
    { term: "Firmenbuchgericht", value: legal.companyRegisterCourt },
    { term: "UID-Nummer", value: legal.vatId || PENDING_UID },
    { term: "Geschäftsführung", value: legal.managingDirectors || PENDING_MANAGEMENT },
    {
      term: "Unternehmensgegenstand",
      // VERIFY: wording of the Unternehmensgegenstand according to the Gesellschaftsvertrag.
      value: "Verwaltung und Vermittlung von Apartments und Kurzzeitvermietungen",
    },
  ];

  const tradeRows: Row[] = [
    // VERIFY: which Gewerbeberechtigung(en) Goldnest GmbH holds (e.g. Immobilientreuhänder, Gastgewerbe, Gewerbliche Vermögensberatung are NOT to be assumed).
    { term: "Gewerbeberechtigung", value: PENDING_TRADE },
    { term: "Gewerbebehörde", value: legal.tradeAuthority },
    { term: "Kammerzugehörigkeit", value: legal.chamber },
    {
      term: "Anwendbare Rechtsvorschriften",
      value: (
        <>
          Gewerbeordnung 1994 (GewO), abrufbar über das Rechtsinformationssystem des Bundes:{" "}
          <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="link-underline text-ink hover:text-bronze">
            ris.bka.gv.at
          </a>
        </>
      ),
    },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: "Impressum", description: DESCRIPTION, path: PATH })} />

      <PageHero
        layout="editorial"
        breadcrumbs={[{ name: "Impressum", path: PATH }]}
        eyebrow="Rechtliches"
        title="Impressum."
        lead="Angaben gemäß § 5 E-Commerce-Gesetz (ECG), § 25 Mediengesetz (MedienG) und § 14 Unternehmensgesetzbuch (UGB)."
      />

      <div className="border-t border-line bg-ivory pt-12 pb-20 md:pt-16 md:pb-28">
        <Container>
          <div className="max-w-3xl space-y-16">
            <section aria-labelledby="unternehmen">
              <h2 id="unternehmen" className="text-title text-ink">
                Medieninhaber und Diensteanbieter
              </h2>
              <div className="mt-6">
                <Entry rows={companyRows} />
              </div>
            </section>

            <section aria-labelledby="register">
              <h2 id="register" className="text-title text-ink">
                Firmenbuch und Vertretung
              </h2>
              <div className="mt-6">
                <Entry rows={registerRows} />
              </div>
            </section>

            <section aria-labelledby="gewerbe">
              <h2 id="gewerbe" className="text-title text-ink">
                Gewerbe und Aufsicht
              </h2>
              <div className="mt-6">
                <Entry rows={tradeRows} />
              </div>
            </section>

            <section aria-labelledby="blattlinie" className="space-y-4 text-body text-ink-soft">
              <h2 id="blattlinie" className="text-title text-ink">
                Offenlegung gemäß § 25 Mediengesetz
              </h2>
              <p>
                Medieninhaber und Herausgeber dieser Website ist die {site.legalName}, Wien. Grundlegende Richtung (Blattlinie): Information über die Leistungen der {site.legalName} im Bereich der Verwaltung von Apartments und Kurzzeitvermietungen in Wien sowie allgemeine Informationen zu den rechtlichen und wirtschaftlichen Rahmenbedingungen der Kurzzeitvermietung in Wien.
              </p>
              {/* VERIFY: § 25 MedienG also requires disclosure of shareholders with more than 25 % and of beneficial ownership structures where applicable. */}
              <p>Angaben zu den Beteiligungsverhältnissen: [werden ergänzt]</p>
            </section>

            <section aria-labelledby="haftung" className="space-y-4 text-body text-ink-soft">
              <h2 id="haftung" className="text-title text-ink">
                Haftung für Inhalte und Links
              </h2>
              <p>
                Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Sie dienen der allgemeinen Information und ersetzen keine individuelle Rechts-, Steuer- oder Fachberatung. Für Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann keine Gewähr übernommen werden. Rechtliche Angaben beziehen sich auf den jeweils angegebenen Stand und können sich ändern.
              </p>
              <p>
                Diese Website enthält Links zu Websites Dritter, etwa zu Behörden und Institutionen. Auf deren Inhalte haben wir keinen Einfluss; sie wurden zum Zeitpunkt der Verlinkung geprüft. Für die Inhalte verlinkter Seiten ist ausschließlich deren Betreiber verantwortlich. Sollten Sie auf rechtswidrige Inhalte stoßen, ersuchen wir um Mitteilung; betroffene Links werden umgehend entfernt.
              </p>
            </section>

            <section aria-labelledby="urheberrecht" className="space-y-4 text-body text-ink-soft">
              <h2 id="urheberrecht" className="text-title text-ink">
                Urheberrecht
              </h2>
              <p>
                Texte, Fotografien, Grafiken und die Gestaltung dieser Website sind urheberrechtlich geschützt. Jede Verwendung, Vervielfältigung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der {site.legalName}. Bildnachweise werden, soweit erforderlich, an der jeweiligen Stelle oder hier angeführt.
              </p>
              {/* VERIFY: add photo credits once final photography is licensed. */}
            </section>

            <section aria-labelledby="streitbeilegung" className="space-y-4 text-body text-ink-soft">
              <h2 id="streitbeilegung" className="text-title text-ink">
                Online-Streitbeilegung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="link-underline text-ink hover:text-bronze">
                  ec.europa.eu/consumers/odr
                </a>
                .
              </p>
              {/* VERIFY: statement on participation in consumer dispute resolution (AStG) to be confirmed by Goldnest. */}
              <p>Angabe zur Teilnahme an Verbraucherschlichtungsverfahren: [wird ergänzt]</p>
            </section>

            <p className="font-sans text-caption text-stone">
              Fragen zum Datenschutz beantwortet unsere{" "}
              <Link href="/datenschutz" className="link-underline hover:text-bronze">
                Datenschutzerklärung
              </Link>
              . Stand: {site.contentStand}.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
