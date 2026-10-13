import type { Guide } from "@/content/types";

/**
 * Ratgeber: VIETour – Registrierung und Meldungen.
 * Fakten ausschließlich aus docs/facts.md, Abschnitte 8 (VIETour) und 7 (Ortstaxe).
 * VERIFY: Die aktuellen Eingabemasken der Webanwendung sind vor Veröffentlichung zu dokumentieren
 * (Screenshots oder Feldliste), damit die Schrittbeschreibung dem tatsächlichen Stand entspricht.
 */
export const vietour: Guide = {
  slug: "vietour",
  title: "VIETour: Registrierung und Meldungen",
  seoTitle: "VIETour Anmeldung: Registrierung, Ortstaxe, Statistik",
  description:
    "VIETour Anmeldung Schritt für Schritt: Registrierung bei der Stadt Wien, Ortstaxe-Abgabenkonto, Unterkunft erfassen, Statistik melden, Ortstaxe abführen.",
  category: "Pflichten",
  readingMinutes: 6,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  // VERIFY: genaue Rechtsgrundlagen der Ortstaxe und der Tourismusstatistik-Meldung bestätigen.
  legalBasis: ["Wiener Ortstaxe nach Landesrecht", "Meldung der Tourismusstatistik an die Stadt Wien"],
  authority: "Stadt Wien, Abgabenstelle / VIETour – Vienna Tourismus Statistik und Ortstaxe",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "VIETour – Vienna Tourismus Statistik und Ortstaxe ist die Webanwendung der Stadt Wien, über die Unterkunftgeber die Ortstaxe abrechnen und ihre Tourismusstatistik melden. Wer in Wien entgeltlich beherbergt, wickelt diese Pflichten grundsätzlich über diese Anwendung ab. Dieser Ratgeber erklärt den Ablauf in acht Schritten und grenzt VIETour von anderen Pflichten ab.",
  keyFacts: [
    "VIETour steht für „Vienna Tourismus Statistik und Ortstaxe“ und ist eine Webanwendung der Stadt Wien, nicht zu verwechseln mit WienTourismus.",
    "Der Ablauf umfasst acht Schritte, von der Benutzerregistrierung bei der Stadt Wien bis zur elektronischen Jahressteuererklärung.",
    "Die Ortstaxe wird monatlich berechnet und bis zum 15. des Folgemonats bezahlt.",
    "VIETour-Registrierung, Ausnahmebewilligung der MA 37, Gästeverzeichnis und Gewerbeanmeldung sind vier verschiedene Pflichten, die einander nicht ersetzen.",
    "Eine VIETour-Registrierung macht eine baurechtlich unzulässige Kurzzeitvermietung nicht legal.",
  ],
  body: [
    {
      type: "lead",
      text: "Wer zum ersten Mal in Wien vermietet, stößt bald auf den Begriff VIETour. Dahinter steht kein Tourismusverband und keine Plattform, sondern ein Verwaltungswerkzeug: die Anwendung, mit der die Stadt Wien Ortstaxe und Tourismusstatistik von Unterkunftgebern erfasst. Die Registrierung ist Pflicht, aber sie ist nur ein Baustein unter mehreren.",
    },
    { type: "h2", text: "Was VIETour ist und was nicht" },
    {
      type: "p",
      text: "Der vollständige Name lautet „VIETour – Vienna Tourismus Statistik und Ortstaxe“. Es handelt sich um eine Webanwendung der Stadt Wien, die zwei Aufgaben bündelt: die Abwicklung der Ortstaxe und die Meldung statistischer Daten zu Ankünften und Nächtigungen. Beide Aufgaben betreffen Unterkunftgeber, also auch Eigentümer, die eine einzelne Wohnung touristisch vermieten.",
    },
    {
      type: "p",
      text: "Häufig wird VIETour mit WienTourismus verwechselt. WienTourismus ist die Organisation für das Destinationsmarketing der Stadt und veröffentlicht zum Beispiel die jährlichen Nächtigungszahlen. Mit der Abgabenabwicklung einzelner Vermieter hat sie nichts zu tun. Für Ihre Ortstaxe und Ihre Statistikmeldung ist allein die Anwendung der Stadt Wien der richtige Ort.",
    },
    {
      type: "definitions",
      items: [
        {
          term: "VIETour",
          text: "Webanwendung der Stadt Wien für Tourismusstatistik und Ortstaxe. Hier registrieren sich Unterkunftgeber, erfassen ihre Unterkunft und geben laufende Meldungen ab.",
        },
        {
          term: "WienTourismus",
          text: "Organisation für das Destinationsmarketing der Stadt Wien. Keine Behörde für Ortstaxe oder Meldepflichten einzelner Vermieter.",
        },
        {
          term: "Ortstaxe-Abgabenkonto",
          text: "Das Konto, über das die Ortstaxe eines Unterkunftgebers bei der Stadt Wien geführt wird. Es wird im Zuge der Registrierung beantragt.",
        },
        {
          term: "Tourismusstatistik",
          text: "Die laufende Meldung von Daten zu Ankünften und Nächtigungen an die Stadt Wien, die ebenfalls über die Anwendung erfolgt.",
        },
      ],
    },
    { type: "h2", text: "Registrierung in acht Schritten" },
    {
      type: "p",
      text: "Die Stadt Wien beschreibt den Ablauf von der ersten Anmeldung bis zur Jahressteuererklärung in acht Schritten. Die ersten fünf Schritte fallen in der Regel einmalig an, die übrigen drei gehören zum laufenden Betrieb.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Benutzerregistrierung bei der Stadt Wien",
          text: "Zunächst benötigen Sie ein Benutzerkonto bei der Stadt Wien. Mit diesem Zugang melden Sie sich später in der Anwendung an.",
        },
        {
          title: "VIETour öffnen",
          text: "Mit dem Benutzerkonto rufen Sie die Anwendung „VIETour – Vienna Tourismus Statistik und Ortstaxe“ auf.",
        },
        {
          title: "Erstregistrierung",
          text: "Bei der ersten Nutzung registrieren Sie sich als Unterkunftgeber. Halten Sie Ihre Identifikations- und Kontaktdaten bereit.",
        },
        {
          title: "Ortstaxe-Abgabenkonto beantragen",
          text: "Für die Abwicklung der Ortstaxe wird ein eigenes Abgabenkonto bei der Stadt Wien beantragt.",
        },
        {
          title: "Unterkunft oder Betrieb erfassen",
          text: "Sie legen die Unterkunft an, die Sie vermieten. Welche Angaben die aktuelle Eingabemaske verlangt, sollte vor der Registrierung anhand der Anwendung selbst geprüft werden.",
        },
        {
          title: "Tourismusstatistik melden",
          text: "Laufend melden Sie die statistischen Daten zu Ihrer Unterkunft an die Stadt Wien.",
        },
        {
          title: "Ortstaxe berechnen und abführen",
          text: "Die Ortstaxe wird monatlich berechnet und bis zum 15. des Folgemonats bezahlt. Die Sätze und die Bemessungsgrundlage erklärt der Ratgeber [Ortstaxe Wien 2026 und 2027](/ratgeber/ortstaxe-wien).",
        },
        {
          title: "Jahressteuererklärung elektronisch einreichen",
          text: "Zusätzlich zur monatlichen Abwicklung ist eine Jahressteuererklärung elektronisch einzureichen. Die Frist dafür ist gesondert zu bestätigen.",
        },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Eingabemasken ändern sich",
      text: "Die konkreten Felder und Bezeichnungen in der Anwendung können sich ändern. Dokumentieren Sie bei der Registrierung, welche Angaben Sie wo gemacht haben, damit spätere Meldungen und Rückfragen nachvollziehbar bleiben.",
    },
    { type: "h2", text: "Laufende Pflichten nach der Registrierung" },
    {
      type: "p",
      text: "Mit der Registrierung ist die Arbeit nicht erledigt. Ab dem ersten vermieteten Monat gehören drei Dinge zum Betrieb: die monatliche Berechnung und Zahlung der Ortstaxe bis zum 15. des Folgemonats, die Meldung der Tourismusstatistik und einmal im Jahr die elektronische Jahressteuererklärung.",
    },
    {
      type: "p",
      text: "Wer die Ortstaxe aus der Buchungssumme ableitet, rechnet in der Regel falsch. Die Prozentsätze beziehen sich auf die gesetzliche Bemessungsgrundlage, und die Stadt Wien stellt dafür einen Ortstaxerechner bereit. Ebenso wenig sollten Sie annehmen, dass Airbnb oder Booking.com die Wiener Ortstaxe automatisch abführen; beide erscheinen in der Plattformliste der Stadt nicht als Vertragspartner. Die Abwicklung ist für jede Plattform gesondert zu prüfen.",
    },
    { type: "h2", text: "Vier Pflichten, vier Stellen" },
    {
      type: "p",
      text: "Die Registrierung in VIETour wird oft für „die Anmeldung“ gehalten, die eine Kurzzeitvermietung in Wien legal macht. Tatsächlich bestehen mehrere, voneinander unabhängige Pflichten, die bei unterschiedlichen Stellen erfüllt werden.",
    },
    // VERIFY: Bezeichnung der zuständigen Stellen für Gästeverzeichnis und Gewerbeanmeldung bestätigen.
    {
      type: "table",
      caption: "Pflichten bei der Kurzzeitvermietung in Wien im Vergleich",
      head: ["Pflicht", "Zweck", "Zuständig"],
      rows: [
        ["VIETour-Registrierung", "Ortstaxe und Tourismusstatistik", "Stadt Wien, Abgabenstelle"],
        ["[Ausnahmebewilligung](/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien)", "Baurechtliche Zulässigkeit der touristischen Nutzung", "Baupolizei der Stadt Wien (MA 37)"],
        ["[Gästeverzeichnis](/ratgeber/gaesteverzeichnis-meldepflicht)", "Meldepflicht für beherbergte Gäste", "Meldebehörde"],
        ["[Gewerbeanmeldung](/ratgeber/airbnb-gewerbe-oesterreich)", "Gewerberechtliche Einordnung, falls erforderlich", "Gewerbebehörde (Magistrat der Stadt Wien)"],
      ],
    },
    {
      type: "p",
      text: "Jede dieser Pflichten steht für sich. Eine erteilte Ausnahmebewilligung entbindet nicht von der Ortstaxe, und ein ordentlich geführtes Gästeverzeichnis ersetzt keine Gewerbeanmeldung, wenn eine solche erforderlich ist.",
    },
    { type: "h2", text: "Warum die Registrierung keine Bewilligung ersetzt" },
    {
      type: "callout",
      tone: "caution",
      title: "Registrierung ist keine Erlaubnis",
      text: "Eine VIETour-Registrierung macht eine baurechtlich unzulässige Kurzzeitvermietung nicht legal. Die Anwendung erfasst Abgaben und Statistik; sie prüft nicht, ob die Wohnung überhaupt touristisch genutzt werden darf.",
    },
    {
      type: "p",
      text: "Ob eine Wohnung kurzfristig vermietet werden darf, richtet sich nach der Wiener Bauordnung. Seit 1. Juli 2024 gelten strengere Voraussetzungen; für eine Nutzung über die beschriebene Ausnahme hinaus ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich. Diese Frage sollte geklärt sein, bevor Sie sich registrieren und Gäste empfangen. Einen Einstieg bietet der Ratgeber [Airbnb in Wien: Was erlaubt ist](/ratgeber/airbnb-wien-erlaubt).",
    },
    { type: "h2", text: "Praktische Hinweise für die Registrierung" },
    {
      type: "ul",
      items: [
        "Klären Sie die baurechtliche Zulässigkeit und die Zustimmung der Miteigentümer, bevor Sie die Unterkunft erfassen.",
        "Halten Sie Identifikations- und Kontaktdaten sowie die genaue Adresse der Unterkunft bereit.",
        "Richten Sie einen festen Termin zu Monatsbeginn ein, um Statistik und Ortstaxe für den Vormonat zu erledigen.",
        "Bewahren Sie Meldungen, Berechnungen und Zahlungsnachweise so auf, dass sie für die Jahressteuererklärung verfügbar sind.",
        "Prüfen Sie je Plattform, ob und wie die Ortstaxe eingehoben wird, und verlassen Sie sich nicht auf eine automatische Abfuhr.",
      ],
    },
    {
      type: "p",
      text: "Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten. Welche Pflichten insgesamt zur touristischen Vermietung gehören, fasst die Seite [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien) zusammen. Wenn Sie die laufenden Meldungen nicht selbst übernehmen möchten, können Sie das im [Erstgespräch](/kontakt) ansprechen.",
    },
  ],
  faq: [
    {
      q: "Ist VIETour dasselbe wie WienTourismus?",
      a: "Nein. VIETour ist die Webanwendung der Stadt Wien für Tourismusstatistik und Ortstaxe. WienTourismus ist die Organisation für das Destinationsmarketing und nicht für die Abgabenabwicklung einzelner Vermieter zuständig.",
    },
    {
      q: "Muss ich mich auch für eine einzelne Wohnung in VIETour registrieren?",
      a: "Die Ortstaxe betrifft entgeltliche Aufenthalte, soweit keine gesetzliche Ausnahme greift, und Unterkunftgeber sind für die Abwicklung verantwortlich. Wer eine Wohnung entgeltlich an Gäste vermietet, wickelt Ortstaxe und Statistik grundsätzlich über diese Anwendung ab.",
    },
    {
      q: "Darf ich nach der VIETour-Registrierung vermieten?",
      a: "Die Registrierung regelt nur Ortstaxe und Statistik. Ob die Wohnung touristisch genutzt werden darf, entscheidet sich nach der Wiener Bauordnung und gegebenenfalls über eine Ausnahmebewilligung der MA 37. Eine Registrierung macht eine unzulässige Vermietung nicht legal.",
    },
    {
      q: "Welche Fristen gelten in VIETour?",
      a: "Die Ortstaxe wird monatlich berechnet und bis zum 15. des Folgemonats bezahlt. Die Jahressteuererklärung wird elektronisch eingereicht; ihre Frist ist gesondert zu bestätigen.",
    },
  ],
  sources: [
    {
      label: "Stadt Wien – Tourismusdaten melden (VIETour)",
      href: "https://www.wien.gv.at/statistik/tourismus-daten-melden",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien – Ortstaxe (Amtsweg)",
      href: "https://www.wien.gv.at/amtswege/ortstaxe",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien – Ortstaxe und Online-Plattformen",
      href: "https://www.wien.gv.at/wirtschaft/ortstaxe-online-plattformen",
      date: "abgerufen 10. Oktober 2026",
    },
  ],
  related: ["ortstaxe-wien", "gaesteverzeichnis-meldepflicht", "ausnahmebewilligung-kurzzeitvermietung-wien"],
  image: "pricing",
};
