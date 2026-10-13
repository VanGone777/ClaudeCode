import type { Guide } from "@/content/types";

/**
 * Ratgeber: Neue EU-Regeln für Kurzzeitvermietung (Verordnung (EU) 2024/1028).
 * Fakten ausschließlich aus docs/facts.md, Abschnitte 2 (EU-Verordnung), 1 (EU-Markt, Eurostat), 5 (Bauordnung), 7 (Ortstaxe)
 * und 12 (Datenweitergabe durch Plattformen).
 * VERIFY: Die konkrete österreichische Umsetzung der Verordnung (zuständige Stelle, Registrierungsverfahren, technische Anbindung)
 * ist vor Veröffentlichung bei den Behörden zu prüfen; im Text als offener Punkt gekennzeichnet.
 */
export const euVerordnung: Guide = {
  slug: "eu-verordnung-kurzzeitvermietung",
  title: "Neue EU-Regeln für Kurzzeitvermietung",
  seoTitle: "EU-Verordnung 2024/1028: Kurzzeitvermietung seit Mai 2026",
  description:
    "EU-Verordnung 2024/1028 zur Kurzzeitvermietung gilt seit 20. Mai 2026: Registrierung, Datenaustausch, Plattformpflichten und Folgen für Vermieter in Wien.",
  category: "Recht",
  readingMinutes: 6,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  legalBasis: [
    "Verordnung (EU) 2024/1028, gilt seit 20. Mai 2026 (Art. 19)",
    "§ 129 Abs. 1a Wiener Bauordnung (Ausnahmebewilligung)",
    "Wiener Ortstaxe nach Landesrecht",
  ],
  // VERIFY: zuständige Stelle für die österreichische Umsetzung der Verordnung bestätigen.
  authority: "Europäische Union (Verordnung); österreichische Umsetzung: zuständige Stelle zu bestätigen; in Wien: Baupolizei (MA 37) und Abgabenstelle / VIETour",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Seit 20. Mai 2026 gilt die Verordnung (EU) 2024/1028 für kurzfristige Beherbergungsdienstleistungen. Sie schafft einen europäischen Rahmen für Registrierungsverfahren und für die Datenübermittlung durch Plattformen. Was das für Vermieter in Wien bedeutet und was es gerade nicht bedeutet, ordnet dieser Ratgeber ein.",
  keyFacts: [
    "Die Verordnung (EU) 2024/1028 gilt seit dem 20. Mai 2026 (Art. 19).",
    "Sie schafft einen europäischen Rahmen für Registrierung und Datenerhebung bei kurzfristigen Beherbergungsdienstleistungen und vereinheitlicht die Anforderungen an Registrierungsverfahren, soweit nationale oder regionale Verfahren bestehen.",
    "Die Verordnung verpflichtet nicht jeden Mitgliedstaat zu einem flächendeckenden Registrierungssystem; nicht jeder Gastgeber benötigt automatisch eine EU-Registrierungsnummer.",
    "Eine allfällige Registrierungsnummer ist nicht mit einer baurechtlichen Ausnahmebewilligung gleichzusetzen, und eine Wiener Ortstaxe-Kontonummer ist nicht automatisch eine EU-Registrierungsnummer.",
    "Die konkrete österreichische Umsetzung und die technische Anbindung sind bei den Behörden zu prüfen.",
  ],
  body: [
    {
      type: "lead",
      text: "Kurzzeitvermietung ist längst kein Nischenphänomen mehr, und die Europäische Union hat darauf mit einer eigenen Verordnung reagiert. Seit 20. Mai 2026 gilt die Verordnung (EU) 2024/1028. Für Vermieter in Wien hat sich damit nicht über Nacht etwas Spürbares geändert, und genau das führt zu Missverständnissen, die dieser Ratgeber ausräumen möchte.",
    },
    { type: "h2", text: "Warum die EU einen gemeinsamen Rahmen schafft" },
    {
      type: "p",
      text: "Der Hintergrund ist das Wachstum des Marktes. Nach Zahlen von Eurostat wurden 2025 in der EU 951,6 Millionen Übernachtungen über große Buchungsplattformen gezählt, ein Plus von 11,4 Prozent gegenüber 2024 und von 32,4 Prozent gegenüber 2023. Im ersten Quartal 2026 waren es 144,3 Millionen Plattformübernachtungen, im zweiten Quartal 258,8 Millionen; das Wachstum hat sich dabei von 9,7 auf 5,3 Prozent gegenüber dem jeweiligen Vorjahresquartal verlangsamt.",
    },
    {
      type: "table",
      caption: "Übernachtungen über große Buchungsplattformen in der EU (Eurostat)",
      head: ["Zeitraum", "Plattformübernachtungen", "Veränderung"],
      rows: [
        ["2025", "951,6 Mio.", "+11,4 % gegenüber 2024"],
        ["Q1 2026", "144,3 Mio.", "+9,7 % gegenüber Q1 2025"],
        ["Q2 2026", "258,8 Mio.", "+5,3 % gegenüber Q2 2025"],
      ],
    },
    {
      type: "p",
      text: "Diese Zahlen beschreiben den europäischen Markt insgesamt, nicht die Nachfrage nach einer einzelnen Wohnung in Wien. Für die Verordnung sind sie insofern von Bedeutung, als der gemeinsame Rahmen darauf zielt, die Datenlage der Behörden zu verbessern und die Registrierungsverfahren der Mitgliedstaaten einander anzunähern.",
    },
    { type: "h2", text: "Was die Verordnung regelt" },
    {
      type: "p",
      text: "Die Verordnung schafft einen europäischen Rahmen für Registrierung und Datenerhebung bei kurzfristigen Beherbergungsdienstleistungen. Im Kern geht es um fünf Bereiche.",
    },
    {
      type: "ul",
      items: [
        "**Registrierungsverfahren:** einheitlichere Anforderungen an die Verfahren, mit denen Unterkunftseinheiten registriert werden.",
        "**Registrierung von Unterkunftseinheiten:** soweit nationale oder regionale Registrierungsverfahren bestehen.",
        "**Registrierungsnummern:** Überprüfung und Anzeige von Registrierungsnummern.",
        "**Aktivitätsdaten:** Übermittlung bestimmter Aktivitätsdaten durch Onlineplattformen.",
        "**Datenaustausch:** Austausch der erhobenen Daten mit Behörden.",
      ],
    },
    {
      type: "definitions",
      items: [
        {
          term: "Registrierungsverfahren",
          text: "Das Verfahren, mit dem ein Mitgliedstaat oder eine Region Unterkunftseinheiten erfasst. Die Verordnung vereinheitlicht die Anforderungen an solche Verfahren, soweit sie bestehen.",
        },
        {
          term: "Registrierungsnummer",
          text: "Die Kennung, die ein Registrierungsverfahren vergibt. Sie dient der Überprüfung und Anzeige; sie ist keine Bewilligung.",
        },
        {
          term: "Aktivitätsdaten",
          text: "Bestimmte Daten zur Vermietungstätigkeit, die Onlineplattformen nach der Verordnung übermitteln.",
        },
        {
          term: "Unterkunftseinheit",
          text: "Die konkrete Unterkunft, etwa eine Wohnung, die über ein Registrierungsverfahren erfasst wird.",
        },
      ],
    },
    { type: "h2", text: "Was die Verordnung nicht bedeutet" },
    {
      type: "callout",
      tone: "caution",
      title: "Nicht pauschal: „Jeder Gastgeber braucht jetzt eine EU-Registrierungsnummer“",
      text: "Die Verordnung verpflichtet nicht jeden Mitgliedstaat zu einem flächendeckenden Registrierungssystem. Sie harmonisiert die Anforderungen an bestehende Systeme. Ob und wo in Österreich ein Registrierungsverfahren besteht und welche Nummer dabei vergeben wird, ist eine Frage der nationalen Umsetzung.",
    },
    {
      type: "p",
      text: "Daraus folgt eine zweite Klarstellung: Eine allfällige Registrierungsnummer ist nicht mit einer baurechtlichen Ausnahmebewilligung gleichzusetzen. Wer eine Nummer hat, hat damit nicht die Erlaubnis, eine Wohnung in Wien touristisch zu nutzen. Und drittens: Aus der Verordnung folgt nicht, dass eine Wiener Ortstaxe-Kontonummer automatisch als EU-Registrierungsnummer verwendet werden darf.",
    },
    {
      type: "table",
      caption: "Drei Kennungen, drei Bedeutungen",
      head: ["Kennung", "Was sie belegt", "Was sie nicht belegt"],
      rows: [
        [
          "EU-Registrierungsnummer (soweit ein Verfahren besteht)",
          "Erfassung der Unterkunft in einem Registrierungsverfahren nach der Verordnung",
          "Baurechtliche Zulässigkeit der touristischen Nutzung",
        ],
        [
          "[Ausnahmebewilligung der MA 37](/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien)",
          "Baurechtliche Zulässigkeit nach § 129 Abs. 1a Wiener Bauordnung, befristet auf höchstens fünf Jahre",
          "Erfüllung von Ortstaxe-, Melde- oder Registrierungspflichten",
        ],
        [
          "Ortstaxe-Abgabenkonto ([VIETour](/ratgeber/vietour))",
          "Konto für Ortstaxe und Tourismusstatistik bei der Stadt Wien",
          "Eine EU-Registrierungsnummer oder eine Bewilligung",
        ],
      ],
    },
    { type: "h2", text: "Die Wiener Ebene bleibt bestehen" },
    {
      type: "p",
      text: "Die Verordnung tritt neben die bestehenden Regeln, sie ersetzt sie nicht. Für Wien bedeutet das: Die strengeren Voraussetzungen der Wiener Bauordnung, die seit 1. Juli 2024 gelten, bleiben unberührt. Die Ausnahme für eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr beschreibt die Stadt Wien weiterhin im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes; für eine darüber hinausgehende Nutzung ist grundsätzlich eine Ausnahmebewilligung erforderlich, die für maximal fünf Jahre erteilt werden kann und nicht automatisch erhältlich ist.",
    },
    {
      type: "p",
      text: "Auch die Ortstaxe bleibt eine Wiener Angelegenheit: 5 Prozent vom 1. Juli 2026 bis 30. Juni 2027, 8 Prozent ab 1. Juli 2027, jeweils bezogen auf die gesetzliche Bemessungsgrundlage. Unabhängig von der EU-Verordnung müssen Plattformbetreiber zudem aufgrund landesrechtlicher Vorschriften bestimmte Identifikations- und Kontaktdaten von Unterkunftgebern sowie Unterkunftsadressen an die Stadt Wien melden, neu registrierte Anbieter und Änderungen grundsätzlich bis zum 15. des Folgemonats. Einen Überblick über alle Ebenen gibt der Ratgeber [Airbnb in Wien 2026: Was ist erlaubt?](/ratgeber/airbnb-wien-erlaubt).",
    },
    { type: "h2", text: "Offener Punkt: Die Umsetzung in Österreich" },
    // VERIFY: österreichische Umsetzung der Verordnung (zuständige Stelle, Verfahren, technische Anbindung) vor Veröffentlichung prüfen.
    {
      type: "callout",
      tone: "caution",
      title: "Umsetzung bei den Behörden prüfen",
      text: "Wie Österreich die Verordnung konkret umsetzt, welche Stelle ein allfälliges Registrierungsverfahren führt und wie die technische Anbindung der Plattformen erfolgt, ist zum Stand dieses Ratgebers bei den zuständigen Behörden zu prüfen. Dieser Punkt ist bewusst als offen gekennzeichnet.",
    },
    {
      type: "p",
      text: "Für Sie als Vermieter heißt das: Verlassen Sie sich weder auf die Annahme, es gebe keine Registrierungspflicht, noch auf den Hinweis einer Plattform, die eine bestimmte Nummer verlangt oder akzeptiert. Fragen Sie bei der Stadt Wien beziehungsweise den zuständigen Behörden nach, ob ein Verfahren besteht, und bewahren Sie die Antwort zu Ihren Unterlagen.",
    },
    { type: "h2", text: "Praktische Empfehlung: Konsistente Daten" },
    {
      type: "p",
      text: "Ein Grundgedanke der Verordnung ist der Datenaustausch zwischen Plattformen und Behörden. Für Vermieter folgt daraus eine einfache, aber wirksame Regel: Die Angaben, die Sie gegenüber Plattformen machen, sollten mit den Angaben übereinstimmen, die Sie gegenüber der Stadt Wien machen.",
    },
    {
      type: "ul",
      items: [
        "Dieselbe Schreibweise der Adresse, inklusive Stiege und Türnummer, in Inseraten, in VIETour und in einem Antrag bei der MA 37.",
        "Derselbe Unterkunftgeber: Wer als Gastgeber auf der Plattform auftritt, sollte auch bei Ortstaxe und Meldungen als Unterkunftgeber erfasst sein.",
        "Dieselbe Bettenzahl: Die Angaben zu touristisch genutzten Betten im Antrag auf Ausnahmebewilligung und im Inserat sollten zusammenpassen; dieselbe Zahl ist auch für die Brandschutzanforderungen im Gebäude maßgeblich.",
        "Nachvollziehbare Ablage: Registrierungen, Bescheide und Meldungen so aufbewahren, dass Rückfragen einer Behörde ohne Suchen beantwortet werden können.",
      ],
    },
    {
      type: "p",
      text: "Wer über eine Verwaltung oder einen Co-Host vermietet, sollte festlegen, wer diese Daten pflegt und wer bei Änderungen die Behörden informiert. Welche Pflichten insgesamt zur touristischen Vermietung in Wien gehören, zeigt die Übersicht [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien). Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten; wenn Sie Ihre Ausgangslage besprechen möchten, ist das [Erstgespräch](/kontakt) der richtige Ort dafür.",
    },
  ],
  faq: [
    {
      q: "Seit wann gilt die EU-Verordnung 2024/1028?",
      a: "Die Verordnung (EU) 2024/1028 gilt seit dem 20. Mai 2026 (Art. 19).",
    },
    {
      q: "Brauche ich als Airbnb-Gastgeber in Wien jetzt eine EU-Registrierungsnummer?",
      a: "Nicht automatisch. Die Verordnung verpflichtet nicht jeden Mitgliedstaat zu einem flächendeckenden Registrierungssystem, sondern harmonisiert die Anforderungen an bestehende Verfahren. Ob und wo in Österreich ein Registrierungsverfahren besteht, ist bei den zuständigen Behörden zu prüfen.",
    },
    {
      q: "Ersetzt eine EU-Registrierungsnummer die Ausnahmebewilligung der MA 37?",
      a: "Nein. Eine allfällige Registrierungsnummer ist nicht mit einer baurechtlichen Ausnahmebewilligung gleichzusetzen. Ob eine Wohnung in Wien touristisch genutzt werden darf, richtet sich weiterhin nach der Wiener Bauordnung.",
    },
    {
      q: "Kann ich meine Ortstaxe-Kontonummer als EU-Registrierungsnummer verwenden?",
      a: "Aus der Verordnung folgt das nicht. Das Ortstaxe-Abgabenkonto dient der Abwicklung von Ortstaxe und Tourismusstatistik bei der Stadt Wien. Ob und welche Nummer in Österreich als Registrierungsnummer gilt, ist eine Frage der nationalen Umsetzung.",
    },
    {
      q: "Was ändert sich für die Plattformen?",
      a: "Die Verordnung sieht die Überprüfung und Anzeige von Registrierungsnummern, die Übermittlung bestimmter Aktivitätsdaten durch Onlineplattformen und den Datenaustausch mit Behörden vor. Für Vermieter bedeutet das, dass Angaben gegenüber Plattformen und Behörden übereinstimmen sollten.",
    },
  ],
  sources: [
    {
      label: "EUR-Lex – Verordnung (EU) 2024/1028",
      href: "https://eur-lex.europa.eu/eli/reg/2024/1028/oj",
    },
    {
      label: "Eurostat – Plattformübernachtungen in der EU 2025",
      href: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260401-1",
      date: "1. April 2026",
    },
    {
      label: "Eurostat – Plattformübernachtungen Q1 2026",
      href: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20260702-1",
      date: "2. Juli 2026",
    },
    {
      label: "Eurostat – Plattformübernachtungen Q2 2026",
      href: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20261002-1",
      date: "2. Oktober 2026",
    },
    {
      label: "Stadt Wien – Ausnahmebewilligung für Kurzzeitvermietung",
      href: "https://www.wien.gv.at/wohnen/ausnahmebewilligung-kurzzeitvermietung",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien – Ortstaxe und Online-Plattformen (Datenmeldung)",
      href: "https://www.wien.gv.at/wirtschaft/ortstaxe-online-plattformen",
      date: "abgerufen 10. Oktober 2026",
    },
  ],
  related: ["airbnb-wien-erlaubt", "ausnahmebewilligung-kurzzeitvermietung-wien", "vietour"],
  image: "guideDefault",
};
