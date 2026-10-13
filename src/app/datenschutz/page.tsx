import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/datenschutz";
const DESCRIPTION =
  "Datenschutzerklärung der Goldnest GmbH, Wien: Informationen zur Verarbeitung personenbezogener Daten auf dieser Website gemäß DSGVO und Datenschutzgesetz (DSG).";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description: DESCRIPTION,
  path: PATH,
});

// VERIFY: all placeholders ("[… wird ergänzt]") must be completed by Goldnest before go-live.
const PENDING_ADDRESS = "[Anschrift wird ergänzt]"; // VERIFY
const PENDING_HOSTING = "[Hosting-Anbieter wird ergänzt]"; // VERIFY: name, legal seat and server location of the hosting provider
const PENDING_MAIL_PROVIDER = "[E-Mail-Dienstleister wird ergänzt]"; // VERIFY: service used to deliver contact form inquiries (see src/lib/inquiry.ts)

export default function Page() {
  const { contact } = site;
  // VERIFY: street address and postal code are empty in site.ts until confirmed.
  const addressLine =
    contact.streetAddress && contact.postalCode ? `${contact.streetAddress}, ${contact.postalCode} ${contact.city}, Österreich` : PENDING_ADDRESS;

  return (
    <>
      <JsonLd data={webPageSchema({ name: "Datenschutzerklärung", description: DESCRIPTION, path: PATH })} />

      <PageHero
        layout="editorial"
        breadcrumbs={[{ name: "Datenschutz", path: PATH }]}
        eyebrow="Rechtliches"
        title="Datenschutzerklärung."
        lead="Wie wir mit personenbezogenen Daten umgehen, die beim Besuch dieser Website und bei einer Kontaktaufnahme anfallen."
      />

      <div className="border-t border-line bg-ivory pt-12 pb-20 md:pt-16 md:pb-28">
        <Container>
          <div className="prose-editorial max-w-3xl text-body text-ink-soft">
            <p className="font-sans text-caption text-stone">Stand: {site.contentStand}</p>

            <h2 id="verantwortlicher" className="text-ink">
              1. Verantwortlicher
            </h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
            <p>
              {site.legalName}
              <br />
              {addressLine}
              <br />
              E-Mail:{" "}
              {contact.email ? (
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              ) : (
                "[E-Mail wird ergänzt]" // VERIFY
              )}
              {contact.phone && (
                <>
                  <br />
                  Telefon: {contact.phoneDisplay || contact.phone}
                </>
              )}
            </p>
            {/* VERIFY: whether a Datenschutzbeauftragter must be appointed; if not, this sentence can stay. */}
            <p>Ein Datenschutzbeauftragter ist nach derzeitigem Stand nicht zu bestellen. Anfragen zum Datenschutz richten Sie bitte an die oben angeführte E-Mail-Adresse.</p>

            <h2 id="allgemeines" className="text-ink">
              2. Allgemeines
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb dieser Website, die Beantwortung Ihrer Anfragen und die Erfüllung gesetzlicher Pflichten erforderlich ist. Rechtsgrundlagen sind die DSGVO, das österreichische Datenschutzgesetz (DSG) und das Telekommunikationsgesetz 2021 (TKG 2021). Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.
            </p>
            <p>Wir geben Daten nicht an Dritte weiter, außer dies ist in dieser Erklärung beschrieben, gesetzlich vorgeschrieben oder Sie haben eingewilligt.</p>

            <h2 id="hosting" className="text-ink">
              3. Hosting und Server-Logfiles
            </h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet: {PENDING_HOSTING}. Beim Aufruf der Website verarbeitet der Hosting-Anbieter technisch notwendige Daten in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt:
            </p>
            <ul>
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite beziehungsweise Datei und übertragene Datenmenge</li>
              <li>Browsertyp und -version, Betriebssystem</li>
              <li>zuvor besuchte Seite (Referrer), sofern vom Browser übermittelt</li>
            </ul>
            <p>
              Die Verarbeitung erfolgt zur Bereitstellung der Website, zur Gewährleistung der Sicherheit und Stabilität sowie zur Fehleranalyse. Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und funktionierenden Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO). Logfiles werden nach kurzer Zeit gelöscht, soweit sie nicht zur Aufklärung eines Sicherheitsvorfalls benötigt werden.
              {/* VERIFY: retention period of server logs according to the hosting provider's contract (Auftragsverarbeitungsvertrag). */}
            </p>
            <p>Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO. [Serverstandort wird ergänzt]</p>

            <h2 id="kontaktformular" className="text-ink">
              4. Kontaktformular
            </h2>
            <p>Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir die von Ihnen eingegebenen Angaben:</p>
            <ul>
              <li>Name und E-Mail-Adresse</li>
              <li>Telefonnummer (freiwillig)</li>
              <li>Angaben zur Immobilie: Adresse oder Bezirk, Wohnfläche, Anzahl der Zimmer, aktuelle Nutzung</li>
              <li>Ihr Interesse an bestimmten Leistungen</li>
              <li>Ihre Nachricht im Freitextfeld</li>
              <li>Zeitpunkt der Übermittlung</li>
            </ul>
            <p>
              Zweck der Verarbeitung ist die Bearbeitung Ihrer Anfrage, die Einschätzung Ihrer Immobilie und die Vorbereitung eines Erstgesprächs. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
            <p>
              Die Daten werden bis zur Erledigung Ihrer Anfrage gespeichert und danach gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Kommt es zu einer Zusammenarbeit, werden die Daten im Rahmen des Vertragsverhältnisses weiterverarbeitet.
              {/* VERIFY: concrete retention period for inquiries without subsequent contract. */}
            </p>
            <p>
              Für die Zustellung der Anfrage an unser Postfach setzen wir einen E-Mail-Dienstleister ein: {PENDING_MAIL_PROVIDER}. Mit diesem besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
              {/* VERIFY: provider, seat, and whether a transfer to a third country takes place (Art. 44 ff. DSGVO). */}
            </p>
            <p>Das Formular enthält ein für Besucher unsichtbares Feld zur Abwehr automatisierter Eingaben. Dabei werden keine zusätzlichen personenbezogenen Daten verarbeitet.</p>

            <h2 id="e-mail" className="text-ink">
              5. Kontakt per E-Mail oder Telefon
            </h2>
            <p>
              Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten wir die dabei übermittelten Daten (Name, Kontaktdaten, Inhalt der Nachricht) zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf einen Vertragsabschluss gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine Aufbewahrungspflichten bestehen.
            </p>

            <h2 id="cookies" className="text-ink">
              6. Cookies und Analyse
            </h2>
            <p>
              Diese Website setzt derzeit keine Analyse- oder Marketing-Cookies ein. Es werden keine Nutzungsprofile erstellt und keine Daten an Werbenetzwerke übermittelt.
              {/* VERIFY: this statement must be updated before any analytics, tag manager, embedded map or video is added. */}
            </p>
            <p>
              Technisch notwendige Cookies oder vergleichbare Speichertechniken können zum Einsatz kommen, soweit sie für die Funktion der Website erforderlich sind, etwa zur Absicherung des Kontaktformulars. Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO) in Verbindung mit den Bestimmungen des TKG 2021.
              {/* VERIFY: exact TKG 2021 provision for technically necessary storage to be confirmed by legal counsel. */}
            </p>

            <h2 id="schriftarten" className="text-ink">
              7. Schriftarten
            </h2>
            <p>
              Die auf dieser Website verwendeten Schriftarten werden auf unserem eigenen Server bereitgestellt (Self-Hosting). Beim Aufruf der Seite werden keine Anfragen an Server von Google oder anderen Schriftanbietern gesendet und keine Daten an diese übermittelt.
            </p>

            <h2 id="links" className="text-ink">
              8. Links zu anderen Websites
            </h2>
            <p>
              Diese Website enthält Links zu externen Websites, etwa zu Behörden, Institutionen und Datenquellen. Beim Aufruf eines Links verlassen Sie unsere Website; für die Datenverarbeitung auf den verlinkten Seiten gelten die Datenschutzhinweise des jeweiligen Betreibers.
            </p>

            <h2 id="rechte" className="text-ink">
              9. Ihre Rechte
            </h2>
            <p>Ihnen stehen in Bezug auf Ihre personenbezogenen Daten grundsätzlich folgende Rechte zu:</p>
            <ul>
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen eine Verarbeitung, die auf Art. 6 Abs. 1 lit. f DSGVO beruht (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an die oben angeführten Kontaktdaten. Wir können im Einzelfall Nachweise Ihrer Identität verlangen, um Ihre Daten zu schützen.</p>

            <h2 id="beschwerde" className="text-ink">
              10. Beschwerderecht
            </h2>
            <p>
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien,{" "}
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
                dsb.gv.at
              </a>
              .
            </p>

            <h2 id="aenderungen" className="text-ink">
              11. Änderungen dieser Erklärung
            </h2>
            <p>
              Wir passen diese Datenschutzerklärung an, wenn sich die Rechtslage, unsere Leistungen oder die eingesetzten Dienste ändern. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung. Stand: {site.contentStand}.
            </p>

            <p className="font-sans text-caption text-stone">
              Unternehmensangaben finden Sie im{" "}
              <Link href="/impressum">Impressum</Link>.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
