import type { Guide } from "@/content/types";

/**
 * Ratgeber: Airbnb in Wien 2026 – Überblick.
 * Fakten ausschließlich aus docs/facts.md (§2, §5, §7, §8, §9, §11, §12), Stand Oktober 2026.
 * VERIFY: fachliche Prüfung durch Rechtsberatung ausstehend (siehe `reviewed`).
 */
export const airbnbWienErlaubt: Guide = {
  slug: "airbnb-wien-erlaubt",
  title: "Airbnb in Wien 2026: Was ist erlaubt?",
  seoTitle: "Airbnb Wien erlaubt: Regeln 2026 im Überblick",
  description:
    "Airbnb Wien erlaubt? Was seit 1. Juli 2024 gilt: Home Sharing, Ausnahmebewilligung, Wohnzonen, Eigentum und Miete, Ortstaxe und Meldepflichten im Überblick.",
  category: "Recht",
  readingMinutes: 9,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  legalBasis: [
    "Wiener Bauordnung (Fassung seit 1. Juli 2024)",
    "§ 129 Abs. 1a Wiener Bauordnung",
    "Verordnung (EU) 2024/1028",
  ],
  authority: "Baupolizei der Stadt Wien (MA 37) · Stadt Wien (Ortstaxe, VIETour)",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für die touristische Kurzzeitvermietung von Wohnungen. Ob eine Wohnung über Airbnb oder Booking.com angeboten werden darf, hängt von Lage, Widmung, Eigentumssituation und Umfang der Nutzung ab. Dieser Überblick ordnet die wichtigsten Regeln ein und verweist auf die vertiefenden Ratgeber.",
  keyFacts: [
    "Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für die touristische Kurzzeitvermietung von Wohnungen.",
    "Die Stadt Wien beschreibt die Ausnahme für höchstens 90 Tage pro Kalenderjahr im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes; juristische Personen können sich nicht darauf berufen.",
    "Für eine darüber hinausgehende Nutzung ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich, die für maximal fünf Jahre erteilt werden kann.",
    "In Wohnzonen wird keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt.",
    "Unabhängig vom Baurecht bestehen Pflichten zu Ortstaxe, VIETour-Registrierung und Gästeverzeichnis.",
  ],
  body: [
    { type: "h2", text: "Was sich seit 1. Juli 2024 geändert hat" },
    {
      type: "p",
      text: "Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für die touristische Kurzzeitvermietung von Wohnungen. Die Stadt unterscheidet dabei deutlich zwischen gelegentlichem Home Sharing und der dauerhaften touristischen Nutzung einer Wohnung, etwa einer Investmentwohnung, die ganzjährig an Gäste vermietet wird. Diese Unterscheidung ist der Ausgangspunkt für fast alle weiteren Fragen.",
    },
    {
      type: "p",
      text: "Die Frage „Ist Airbnb in Wien erlaubt?“ lässt sich deshalb nicht mit Ja oder Nein beantworten. Baurechtlich kommt eine kurzfristige Vermietung grundsätzlich in zwei Konstellationen in Betracht: entweder sie fällt unter die von der Stadt Wien beschriebene Ausnahme, oder es liegt eine Ausnahmebewilligung der Baupolizei vor. Davon getrennt zu prüfen sind die zivilrechtliche Seite, also Wohnungseigentum oder Mietvertrag, und die Pflichten, die für jede entgeltliche Beherbergung gelten: Ortstaxe, Registrierung in VIETour, Gästeverzeichnis und je nach Gesamtbild gewerbe- und steuerrechtliche Fragen.",
    },

    { type: "h2", text: "Home Sharing oder dauerhafte touristische Nutzung" },
    {
      type: "p",
      text: "Die Stadt Wien beschreibt die Ausnahme für eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr ausdrücklich im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes. Gemeint ist der Fall, dass jemand die eigene Wohnung zeitweise an Gäste überlässt, etwa während eines Urlaubs oder eines beruflichen Aufenthalts, und danach wieder dort wohnt.",
    },
    {
      type: "definitions",
      items: [
        {
          term: "Home Sharing",
          text: "Vorübergehende kurzfristige Vermietung der eigenen Wohnung bei Beibehaltung des eigenen Wohnsitzes. Die Stadt Wien beschreibt dafür eine Ausnahme von höchstens 90 Tagen pro Kalenderjahr.",
        },
        {
          term: "Dauerhafte touristische Nutzung",
          text: "Eine Wohnung wird nicht als Wohnsitz genutzt, sondern laufend an wechselnde Gäste vermietet. Dafür ist grundsätzlich eine Ausnahmebewilligung erforderlich.",
        },
        {
          term: "Ausnahmebewilligung",
          text: "Bewilligung der Baupolizei der Stadt Wien (MA 37) nach § 129 Abs. 1a Wiener Bauordnung, befristet auf höchstens fünf Jahre und an Voraussetzungen gebunden.",
        },
      ],
    },
    {
      type: "callout",
      tone: "caution",
      title: "Nicht pauschal auf 90 Tage verlassen",
      text: "Die Aussage „Jede Wohnung darf 90 Tage vermietet werden“ ist in dieser Form nicht richtig. Die Ausnahme knüpft an den eigenen Wohnsitz an. Juristische Personen, etwa eine GmbH als Eigentümerin, können sich nicht darauf berufen, da sie keinen Wohnsitz haben. Die Einzelheiten erläutert der Ratgeber zur [90-Tage-Regel in Wien](/ratgeber/90-tage-regel-wien).",
    },

    { type: "h2", text: "Die Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung" },
    {
      type: "p",
      text: "Soll eine Wohnung über die beschriebene Ausnahme hinaus touristisch genutzt werden, ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich. Zuständig ist die Baupolizei der Stadt Wien (MA 37); der Antrag wird über das Onlineverfahren der Stadt gestellt. Die Bewilligung kann für maximal fünf Jahre erteilt werden und ist nicht automatisch erhältlich. Die Stadt Wien nennt fünf Voraussetzungen:",
    },
    {
      type: "ol",
      items: [
        "Die Wohnung liegt nicht in einer Wohnzone.",
        "Die Wohnung liegt nicht in bestimmten geschützten Kleingartenwidmungen.",
        "Für die Errichtung wurden keine Wohnbaufördermittel in Anspruch genommen.",
        "Die Mehrheit der Wohnungen im Gebäude bleibt Wohnzwecken gewidmet.",
        "Höchstens 50 % der Nutzungseinheiten dienen der gewerblichen kurzfristigen Beherbergung.",
      ],
    },
    {
      type: "p",
      text: "Zusätzlich sind die Zustimmung sämtlicher Grundeigentümer beziehungsweise Miteigentümer, eine eindeutige Beschreibung der Wohnung, eine Aufstellung der Nutzungseinheiten im Gebäude und Angaben zu den touristisch genutzten Betten erforderlich. Die Gebührenübersicht der Stadt nennt eine Verwaltungsabgabe von 51 € je betroffener Wohnung; weitere Gebühren sowie Kosten für Pläne, technische Nachweise oder bauliche Anpassungen können hinzukommen. Den Ablauf im Detail beschreibt der Ratgeber zur [Ausnahmebewilligung für Kurzzeitvermietung in Wien](/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien).",
    },

    { type: "h2", text: "Wohnzonen: Wo keine Bewilligung erteilt wird" },
    {
      type: "p",
      text: "Liegt eine Wohnung in einer Wohnzone nach dem Flächenwidmungs- und Bebauungsplan der Stadt Wien, wird keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt. Für viele Eigentümer ist das der entscheidende Punkt, weil damit die dauerhafte touristische Nutzung baurechtlich ausscheidet. Ob eine konkrete Adresse in einer Wohnzone liegt, lässt sich nur anhand des Flächenwidmungs- und Bebauungsplans klären, nicht anhand von Bezirk oder Baujahr. Was das für Ihre Wohnung bedeutet und welche Alternativen bleiben, erläutert der Ratgeber zu [Kurzzeitvermietung in Wiener Wohnzonen](/ratgeber/wohnzonen-wien).",
    },

    { type: "h2", text: "Eigentumswohnung oder Mietwohnung: Die Rechtslage am Objekt" },
    {
      type: "p",
      text: "Das Baurecht ist nur eine Ebene. Bei einer Eigentumswohnung ist die touristische Vermietung nicht allein deshalb zulässig, weil Sie Eigentümer sind. Relevant sind die wohnungseigentumsrechtliche Widmung, der Wohnungseigentumsvertrag, bestehende Zustimmungen, die Rechte der anderen Wohnungseigentümer und die öffentlich-rechtlichen Genehmigungen. Diese Punkte sollten vor dem ersten Inserat geklärt sein. Mehr dazu im Ratgeber [Airbnb in der Eigentumswohnung in Wien](/ratgeber/airbnb-eigentumswohnung-wien).",
    },
    {
      type: "p",
      text: "Bei einer Mietwohnung entscheiden der Mietvertrag, ein allfälliges Untervermietungsverbot und die Anwendbarkeit des Mietrechtsgesetzes. Eine touristische Weitervermietung ohne entsprechende Berechtigung ist mit erheblichen Risiken verbunden. Auch mit Zustimmung des Vermieters ist sie nicht in jedem Fall zulässig, weil Bau- und Gewerberecht unabhängig davon zu beachten bleiben.",
    },

    { type: "h2", text: "Pflichten, die unabhängig vom Baurecht gelten" },
    {
      type: "p",
      text: "Wer in Wien entgeltlich Gäste beherbergt, hat Pflichten gegenüber der Stadt und nach dem Meldegesetz. Sie bestehen neben der baurechtlichen Frage und ersetzen sie nicht: Eine Registrierung in VIETour macht eine baurechtlich unzulässige Kurzzeitvermietung nicht legal.",
    },
    {
      type: "table",
      caption: "Pflichten bei entgeltlicher Beherbergung in Wien, Stand Oktober 2026.",
      head: ["Pflicht", "Was gilt", "Zuständig"],
      rows: [
        [
          "Ortstaxe",
          "Vom 1. Juli 2026 bis 30. Juni 2027 5 % der gesetzlichen Bemessungsgrundlage, ab 1. Juli 2027 8 %. Monatliche Berechnung und Zahlung bis zum 15. des Folgemonats sowie Jahressteuererklärung. Details im Ratgeber [Ortstaxe in Wien](/ratgeber/ortstaxe-wien).",
          "Stadt Wien",
        ],
        [
          "VIETour",
          "Registrierung in der Webanwendung „VIETour – Vienna Tourismus Statistik und Ortstaxe“, Ortstaxe-Abgabenkonto, Statistikmeldungen, Jahressteuererklärung. Details im Ratgeber [VIETour](/ratgeber/vietour).",
          "Stadt Wien",
        ],
        [
          "Gästeverzeichnis",
          "Anmeldung der Gäste unverzüglich, jedenfalls innerhalb von 24 Stunden nach Ankunft; elektronische Führung zulässig. Details im Ratgeber [Gästeverzeichnis und Meldepflicht](/ratgeber/gaesteverzeichnis-meldepflicht).",
          "Meldebehörde",
        ],
        [
          "Gewerbe und Steuern",
          "Nicht jede kurzfristige Vermietung ist ein Gewerbebetrieb; die Abgrenzung erfolgt nach dem Gesamtbild. Einnahmen können steuerpflichtig sein. Details in den Ratgebern [Gewerbe](/ratgeber/airbnb-gewerbe-oesterreich) und [Steuern](/ratgeber/airbnb-steuern-oesterreich).",
          "WKO, Finanzamt",
        ],
      ],
    },
    {
      type: "p",
      text: "Ein verbreiteter Irrtum lautet: „Wenn ich nur über Airbnb anbiete, weiß die Stadt nichts davon.“ Diese Annahme ist nicht belastbar. Plattformbetreiber müssen aufgrund landesrechtlicher Vorschriften bestimmte Identifikations- und Kontaktdaten von Unterkunftgebern sowie Unterkunftsadressen melden, neu registrierte Anbieter und Änderungen grundsätzlich bis zum 15. des Folgemonats.",
    },
    {
      type: "p",
      text: "Auch die Abfuhr der Ortstaxe sollten Sie nicht der Plattform überlassen, ohne das geprüft zu haben. Die Stadt Wien veröffentlicht eine Liste von Plattformen mit Vereinbarungen zur Einhebung und Abfuhr der Ortstaxe; Airbnb und Booking.com erscheinen dort nicht als Vertragspartner. Die Abwicklung ist daher je Plattform zu prüfen.",
    },

    { type: "h2", text: "Die EU-Verordnung 2024/1028 kurz eingeordnet" },
    {
      type: "p",
      text: "Seit 20. Mai 2026 gilt die Verordnung (EU) 2024/1028. Sie schafft einen europäischen Rahmen für Registrierung und Datenerhebung bei kurzfristigen Beherbergungsdienstleistungen: einheitlichere Anforderungen an Registrierungsverfahren, soweit nationale oder regionale Verfahren bestehen, die Überprüfung und Anzeige von Registrierungsnummern sowie die Übermittlung bestimmter Aktivitätsdaten durch Onlineplattformen. Daraus folgt nicht, dass jeder Gastgeber automatisch eine EU-Registrierungsnummer benötigt. Eine allfällige Registrierungsnummer ist zudem nicht mit einer baurechtlichen Ausnahmebewilligung gleichzusetzen. Wie die Verordnung in Österreich konkret umgesetzt wird, ist derzeit ein offener Punkt. Mehr dazu im Ratgeber zur [EU-Verordnung für Kurzzeitvermietung](/ratgeber/eu-verordnung-kurzzeitvermietung).",
    },

    { type: "h2", text: "Wie Sie vorgehen sollten" },
    {
      type: "p",
      text: "Die Reihenfolge der Prüfung ist nicht beliebig. Sinnvoll ist, zuerst die Fragen zu klären, an denen eine touristische Nutzung scheitern kann, und erst danach in Einrichtung und Vermarktung zu investieren.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Lage und Widmung prüfen",
          text: "Liegt die Wohnung in einer Wohnzone oder in einer geschützten Kleingartenwidmung? Wurden Wohnbaufördermittel für die Errichtung verwendet? Diese Punkte entscheiden, ob eine Ausnahmebewilligung überhaupt in Betracht kommt.",
        },
        {
          title: "Eigentums- oder Mietsituation klären",
          text: "Wohnungseigentumsvertrag, Widmung und Zustimmungen der Miteigentümer beziehungsweise Mietvertrag und Untervermietungsregelung.",
        },
        {
          title: "Nutzungsumfang festlegen",
          text: "Vorübergehendes Home Sharing bei eigenem Wohnsitz oder dauerhafte touristische Nutzung mit Ausnahmebewilligung? Davon hängt auch die Brandschutzfrage ab, bei der die Gesamtzahl der touristisch genutzten Betten im Gebäude eine Rolle spielen kann. Siehe [Brandschutz bei Kurzzeitvermietung](/ratgeber/brandschutz-kurzzeitvermietung-wien).",
        },
        {
          title: "Pflichten einrichten",
          text: "VIETour-Registrierung, Ortstaxe-Abgabenkonto, Gästeverzeichnis sowie die Klärung von Gewerbe, Einkommen- und Umsatzsteuer mit Ihrer Steuerberatung.",
        },
        {
          title: "Umsetzung",
          text: "Erst wenn die rechtliche Grundlage steht, lohnt sich die Arbeit an Positionierung, Pricing und Gästebetreuung.",
        },
      ],
    },
    {
      type: "p",
      text: "Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten. Einen Überblick über alle Themen finden Sie auf der Seite [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien); wenn Sie Ihre Wohnung konkret besprechen möchten, können Sie [ein Erstgespräch vereinbaren](/kontakt).",
    },
  ],
  faq: [
    {
      q: "Ist Airbnb in Wien 2026 grundsätzlich erlaubt?",
      a: "Ja, aber nicht in jeder Wohnung und nicht in jedem Umfang. Seit 1. Juli 2024 gelten strengere Voraussetzungen. Entscheidend sind Lage, Widmung, Eigentumssituation und die Frage, ob es sich um vorübergehendes Home Sharing oder um eine dauerhafte touristische Nutzung handelt.",
    },
    {
      q: "Brauche ich für jede Kurzzeitvermietung eine Ausnahmebewilligung?",
      a: "Nicht für jede. Die Stadt Wien beschreibt eine Ausnahme für höchstens 90 Tage pro Kalenderjahr bei Beibehaltung des eigenen Wohnsitzes. Für eine darüber hinausgehende Nutzung ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich.",
    },
    {
      q: "Reicht es, wenn ich mich in VIETour registriere?",
      a: "Nein. Die VIETour-Registrierung betrifft Ortstaxe und Tourismusstatistik. Sie macht eine baurechtlich unzulässige Kurzzeitvermietung nicht legal. Baurechtliche Zulässigkeit, Gästeverzeichnis und eine allfällige Gewerbeanmeldung sind getrennte Pflichten.",
    },
    {
      q: "Erfährt die Stadt Wien von meinem Airbnb-Inserat?",
      a: "Davon sollten Sie ausgehen. Plattformbetreiber müssen aufgrund landesrechtlicher Vorschriften bestimmte Daten von Unterkunftgebern und Unterkunftsadressen an die Stadt melden, neu registrierte Anbieter grundsätzlich bis zum 15. des Folgemonats.",
    },
    {
      q: "Was ändert die EU-Verordnung 2024/1028 für Gastgeber in Wien?",
      a: "Sie gilt seit 20. Mai 2026 und harmonisiert Anforderungen an bestehende Registrierungsverfahren sowie den Datenaustausch mit Plattformen. Sie verpflichtet nicht jeden Mitgliedstaat zu einem flächendeckenden Registrierungssystem. Wie die Verordnung in Österreich konkret umgesetzt wird, ist derzeit ein offener Punkt.",
    },
  ],
  sources: [
    {
      label: "Stadt Wien: Ausnahmebewilligung für Kurzzeitvermietung",
      href: "https://www.wien.gv.at/wohnen/ausnahmebewilligung-kurzzeitvermietung",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien: Ortstaxe",
      href: "https://www.wien.gv.at/amtswege/ortstaxe",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien: Ortstaxe und Online-Plattformen",
      href: "https://www.wien.gv.at/wirtschaft/ortstaxe-online-plattformen",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien: Tourismusdaten melden (VIETour)",
      href: "https://www.wien.gv.at/statistik/tourismus-daten-melden",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "oesterreich.gv.at: Gästeverzeichnis",
      href: "https://www.oesterreich.gv.at/de/lexicon/G/Seite.991691",
      date: "aktualisiert 1. Jänner 2026",
    },
    {
      label: "EUR-Lex: Verordnung (EU) 2024/1028",
      href: "https://eur-lex.europa.eu/eli/reg/2024/1028/oj",
    },
    {
      label: "WKO: Kurzzeitvermietung und Gewerbeanmeldung",
      href: "https://www.wko.at/steuern/kurzzeitvermietung-gewerbeanmeldung",
      date: "September 2026",
    },
  ],
  related: ["90-tage-regel-wien", "ausnahmebewilligung-kurzzeitvermietung-wien", "wohnzonen-wien"],
  image: "guideLaw",
};
