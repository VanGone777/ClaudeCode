import type { Guide } from "@/content/types";

/**
 * Ratgeber: Airbnb-Steuern in Österreich.
 * Fakten ausschließlich aus docs/facts.md, Abschnitte 10 (Gewerbe, Steuern, Sozialversicherung) und 7 (Ortstaxe).
 * VERIFY: fachliche Prüfung durch Steuerberatung ausstehend. Es werden bewusst keine Gesetzesparagraphen,
 * Erklärungsfristen oder Beitragssätze genannt, die nicht in docs/facts.md belegt sind.
 */
export const steuernOesterreich: Guide = {
  slug: "airbnb-steuern-oesterreich",
  title: "Airbnb-Steuern in Österreich",
  seoTitle: "Airbnb Steuern Österreich: Einkommen-, Umsatzsteuer, SVS",
  description:
    "Airbnb Steuern Österreich: Einkommensteuer, Umsatzsteuer mit Kleinunternehmergrenze 55.000 €, 10 % bei Beherbergung, Reverse Charge, SVS und Ortstaxe.",
  category: "Abgaben & Steuern",
  readingMinutes: 7,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  // VERIFY: genaue Gesetzesbezeichnungen und Paragraphen (Einkommensteuer, Umsatzsteuer, Sozialversicherung) durch Steuerberatung bestätigen.
  legalBasis: [
    "Einkommensteuer: Einkünfte aus Vermietung und Verpachtung oder betriebliche Einkünfte",
    "Umsatzsteuer: Kleinunternehmerregelung (Grenze 55.000 € seit 2025), ermäßigter Satz für Beherbergung, Reverse Charge",
    "Sozialversicherung der Selbständigen (SVS)",
  ],
  authority: "Finanzamt; Sozialversicherung der Selbständigen (SVS); Information: WKO",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Einnahmen aus der Vermietung über Airbnb oder andere Plattformen können in Österreich steuerpflichtig sein. Wie sie einzuordnen sind, entscheidet die tatsächliche Tätigkeit und nicht die Plattform. Dieser Ratgeber ordnet Einkommensteuer, Umsatzsteuer, Sozialversicherung und Ortstaxe ein und zeigt, welche Fragen Sie mit Ihrer Steuerberatung klären sollten.",
  keyFacts: [
    "Einnahmen aus kurzfristiger Vermietung können einkommensteuerpflichtig sein; ob Einkünfte aus Vermietung und Verpachtung oder betriebliche Einkünfte vorliegen, hängt von der tatsächlichen Tätigkeit ab.",
    "Seit 2025 liegt die Kleinunternehmergrenze bei der Umsatzsteuer bei 55.000 Euro, bezogen auf die Umsätze des laufenden und des vorangegangenen Kalenderjahres.",
    "Kleinunternehmer verrechnen grundsätzlich keine Umsatzsteuer und haben keinen Vorsteuerabzug; bei steuerpflichtigen Beherbergungsleistungen gilt grundsätzlich der ermäßigte Satz von 10 Prozent.",
    "Auch Kleinunternehmer können durch grenzüberschreitende Plattformgebühren umsatzsteuerliche Pflichten haben (Reverse Charge).",
    "Eine SVS-Pflicht entsteht nicht automatisch, sondern nur bei einer gewerblichen oder versicherungspflichtigen selbstständigen Tätigkeit; die Ortstaxe ist davon getrennt eine Abgabe der Stadt Wien.",
  ],
  body: [
    {
      type: "lead",
      text: "Kaum ein Thema wird unter Vermietern so häufig weitergereicht und so selten geprüft wie die Steuerfrage. Dabei ist die Ausgangslage klar umrissen: Einnahmen aus kurzfristiger Vermietung können steuerpflichtig sein, und wie sie behandelt werden, richtet sich nach dem, was Sie tatsächlich tun. Dieser Ratgeber sortiert die vier Ebenen, die in Österreich eine Rolle spielen, und benennt die Punkte, die in ein Gespräch mit der Steuerberatung gehören.",
    },
    { type: "h2", text: "Vier Ebenen, die auseinanderzuhalten sind" },
    {
      type: "p",
      text: "Wer über Airbnb, Booking.com oder direkt vermietet, hat es in Österreich mit mehreren, voneinander unabhängigen Abgaben zu tun. Sie folgen unterschiedlichen Regeln, werden bei unterschiedlichen Stellen abgewickelt und greifen unabhängig voneinander. Die Plattform, über die eine Buchung zustande kommt, ändert an dieser Einordnung nichts.",
    },
    {
      type: "table",
      caption: "Abgaben bei kurzfristiger Vermietung in Wien im Überblick",
      head: ["Abgabe", "Kernfrage", "Anlaufstelle"],
      rows: [
        ["Einkommensteuer", "Sind die Einnahmen steuerpflichtig, und welcher Einkunftsart gehören sie an?", "Finanzamt, Steuerberatung"],
        ["Umsatzsteuer", "Greift die Kleinunternehmerregelung, oder ist Umsatzsteuer zu verrechnen?", "Finanzamt, Steuerberatung"],
        ["Sozialversicherung", "Liegt eine versicherungspflichtige selbstständige Tätigkeit vor?", "Sozialversicherung der Selbständigen (SVS)"],
        ["Ortstaxe", "Welche Beträge sind monatlich an die Stadt Wien abzuführen?", "Stadt Wien, Abgabenstelle / VIETour"],
      ],
    },
    {
      type: "p",
      text: "Die ersten drei Ebenen betreffen Steuer- und Sozialversicherungsrecht auf Bundesebene; die Ortstaxe ist eine Abgabe der Stadt Wien. Diese Unterscheidung ist mehr als eine Formalie: Wer die Ortstaxe ordnungsgemäß abführt, hat damit noch nichts über seine Einkommensteuer gesagt, und umgekehrt.",
    },
    { type: "h2", text: "Einkommensteuer: Vermietung und Verpachtung oder betriebliche Einkünfte" },
    {
      type: "p",
      text: "Einnahmen aus der kurzfristigen Vermietung können einkommensteuerpflichtig sein. Die eigentliche Frage ist nicht, ob sie zu erklären sind, sondern wie: als Einkünfte aus Vermietung und Verpachtung oder als betriebliche Einkünfte. Diese Einordnung hängt von der tatsächlichen Tätigkeit ab, nicht von der Bezeichnung des Inserats und nicht davon, wie das Angebot nach außen genannt wird.",
    },
    {
      type: "definitions",
      items: [
        {
          term: "Vermietung und Verpachtung",
          text: "Einkunftsart für die Überlassung von Wohnraum gegen Entgelt. Ob sie bei kurzfristiger Vermietung vorliegt, hängt davon ab, welche Leistungen über die reine Nutzungsüberlassung hinaus erbracht werden.",
        },
        {
          term: "Betriebliche Einkünfte",
          text: "Einkünfte aus einer Tätigkeit, die nach ihrem Gesamtbild über die bloße Vermietung hinausgeht, etwa weil Leistungen rund um den Aufenthalt organisiert und nach außen angeboten werden.",
        },
        {
          term: "Gesamtbild",
          text: "Der Maßstab, an dem sich die Abgrenzung orientiert: Anzahl der Einheiten und Betten, Reinigungsleistungen, Wäscheservice, Verpflegung sowie Organisation und Außenauftritt.",
        },
      ],
    },
    {
      type: "p",
      text: "Für die Praxis heißt das: Beschreiben Sie Ihrer Steuerberatung die Tätigkeit so, wie sie tatsächlich abläuft. Wie viele Wohnungen und Betten bieten Sie an, wer reinigt zwischen den Aufenthalten, gibt es Wäscheservice oder Verpflegung, wie treten Sie nach außen auf? Dieselben Kriterien entscheiden auch über die gewerberechtliche Einordnung, die der Ratgeber [Gewerbe oder private Vermietung?](/ratgeber/airbnb-gewerbe-oesterreich) behandelt. Die steuerliche Einordnung bleibt in jedem Fall eine Frage des Einzelfalls.",
    },
    { type: "h2", text: "Umsatzsteuer: Kleinunternehmergrenze, ermäßigter Satz und Reverse Charge" },
    {
      type: "p",
      text: "Bei der Umsatzsteuer stellt sich zunächst die Frage, ob die Kleinunternehmerregelung greift. Seit 2025 liegt die Grenze bei 55.000 Euro. Maßgeblich sind die Umsätze des laufenden und des vorangegangenen Kalenderjahres. Wer darunter bleibt, verrechnet grundsätzlich keine Umsatzsteuer, hat im Gegenzug aber auch keinen Vorsteuerabzug.",
    },
    {
      type: "table",
      caption: "Umsatzsteuer bei kurzfristiger Vermietung (Stand Oktober 2026)",
      head: ["Regel", "Inhalt"],
      rows: [
        ["Kleinunternehmergrenze", "55.000 Euro seit 2025, bezogen auf die Umsätze des laufenden und des vorangegangenen Kalenderjahres"],
        ["Folge für Kleinunternehmer", "Grundsätzlich keine Umsatzsteuer in Rechnung gestellt, dafür kein Vorsteuerabzug"],
        ["Steuerpflichtige Beherbergungsleistungen", "Grundsätzlich ermäßigter Satz von 10 Prozent"],
        ["Grenzüberschreitende Plattformgebühren", "Umsatzsteuerliche Pflichten (Reverse Charge) auch für Kleinunternehmer möglich"],
      ],
    },
    {
      type: "p",
      text: "Der fehlende Vorsteuerabzug ist für Vermieter nicht nebensächlich. Wer ein Apartment einrichtet oder renoviert, zahlt auf diese Ausgaben Umsatzsteuer, die ein Kleinunternehmer nicht zurückholen kann. Ob die Kleinunternehmerregelung in Ihrer Situation günstig ist, gehört deshalb zu den Fragen für die Steuerberatung, und zwar bevor größere Investitionen anstehen.",
    },
    {
      type: "p",
      text: "Liegen steuerpflichtige Beherbergungsleistungen vor, kommt grundsätzlich der ermäßigte Satz von 10 Prozent zur Anwendung. Welche Bestandteile einer Buchung als Beherbergungsleistung gelten und wie Nebenleistungen zu behandeln sind, sollte vor der ersten Rechnung geklärt sein.",
    },
    {
      type: "callout",
      tone: "caution",
      title: "Kleinunternehmer heißt nicht ohne Umsatzsteuerpflichten",
      text: "Auch wer unter der Kleinunternehmergrenze bleibt, kann durch grenzüberschreitende Plattformgebühren umsatzsteuerliche Pflichten haben. Beim Reverse-Charge-Verfahren geht die Steuerschuld für bestimmte Leistungen ausländischer Unternehmen auf den Leistungsempfänger über. Ob und wie das für die Gebühren Ihrer Plattform gilt, welche Meldungen anfallen und ob Sie dafür eine UID-Nummer benötigen, klären Sie mit Ihrer Steuerberatung.",
    },
    { type: "h2", text: "Sozialversicherung: Wann die SVS ins Spiel kommt" },
    {
      type: "p",
      text: "Eine Pflichtversicherung bei der Sozialversicherung der Selbständigen entsteht nicht dadurch, dass Einnahmen fließen. Sie hängt davon ab, ob eine gewerbliche oder eine andere versicherungspflichtige selbstständige Tätigkeit vorliegt. Nicht jede private Vermietung löst eine SVS-Pflicht aus.",
    },
    {
      type: "p",
      text: "Weil die Frage an der Einordnung der Tätigkeit hängt, lässt sie sich nicht losgelöst von der Gewerbe- und der Einkommensteuerfrage beantworten. Wer seine Tätigkeit gewerblich anmeldet, sollte die Sozialversicherung von Anfang an mitdenken; wer privat vermietet, sollte die Einordnung erneut prüfen, sobald der Umfang wächst. Eine pauschale Beitragsberechnung ist ohne Kenntnis der konkreten Tätigkeit nicht möglich und wird hier bewusst nicht angeboten.",
    },
    { type: "h2", text: "Ortstaxe: Keine Bundessteuer, sondern eine Abgabe der Stadt Wien" },
    {
      type: "p",
      text: "Die Ortstaxe wird oft in einem Atemzug mit den Steuern genannt, gehört aber in eine andere Kategorie. Sie ist eine Abgabe der Stadt Wien auf entgeltliche Aufenthalte, für deren Abwicklung die Unterkunftgeber verantwortlich sind. Sie wird monatlich berechnet und bis zum 15. des Folgemonats bezahlt; dazu kommt eine Jahressteuererklärung.",
    },
    {
      type: "p",
      text: "Vom 1. Juli 2026 bis 30. Juni 2027 beträgt die Ortstaxe 5 Prozent, ab 1. Juli 2027 8 Prozent, jeweils bezogen auf die gesetzliche Bemessungsgrundlage und nicht auf den gesamten Buchungsbetrag. Sätze, Bemessungsgrundlage und die Frage, wie einzelne Plattformen die Ortstaxe behandeln, erklärt der Ratgeber [Ortstaxe Wien 2026 und 2027](/ratgeber/ortstaxe-wien); die Abwicklung über die Webanwendung der Stadt beschreibt der Ratgeber [VIETour: Registrierung und Meldungen](/ratgeber/vietour).",
    },
    { type: "h2", text: "Was Sie mit Ihrer Steuerberatung klären sollten" },
    {
      type: "p",
      text: "Die folgenden Punkte bilden eine Gesprächsgrundlage, keine Checkliste, die Beratung ersetzt. Je präziser Sie Ihre Tätigkeit beschreiben, desto belastbarer wird die Einordnung.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Tätigkeit beschreiben",
          text: "Anzahl der Einheiten und Betten, Reinigung, Wäsche, Verpflegung, Organisation und Außenauftritt: Das Gesamtbild entscheidet über die Einordnung.",
        },
        {
          title: "Einkunftsart klären",
          text: "Vermietung und Verpachtung oder betriebliche Einkünfte, mit den jeweiligen Folgen für Ihre Einkommensteuer.",
        },
        {
          title: "Umsätze zweier Jahre erheben",
          text: "Für die Kleinunternehmergrenze von 55.000 Euro zählen das laufende und das vorangegangene Kalenderjahr.",
        },
        {
          title: "Plattformgebühren prüfen",
          text: "Grenzüberschreitende Gebühren können Reverse-Charge-Pflichten auslösen, auch unterhalb der Kleinunternehmergrenze.",
        },
        {
          title: "Sozialversicherung einordnen",
          text: "Ob eine versicherungspflichtige selbstständige Tätigkeit vorliegt, hängt von der Einordnung der Tätigkeit ab und ist nicht pauschal zu beantworten.",
        },
        {
          title: "Ortstaxe getrennt organisieren",
          text: "Monatliche Berechnung, Zahlung bis zum 15. des Folgemonats und Jahressteuererklärung bei der Stadt Wien, unabhängig von den Bundessteuern.",
        },
      ],
    },
    {
      type: "p",
      text: "Steuern sind nur eine von mehreren Ebenen, die vor einer Vermietung geklärt sein sollten. Ob eine Wohnung überhaupt touristisch genutzt werden darf, welche Bewilligungen nötig sind und welche Meldepflichten bestehen, fasst die Übersicht [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien) zusammen. Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten; im [Erstgespräch](/kontakt) besprechen wir, wie das für Ihre Immobilie aussieht.",
    },
  ],
  faq: [
    {
      q: "Muss ich Einnahmen aus Airbnb in Österreich versteuern?",
      a: "Einnahmen aus kurzfristiger Vermietung können einkommensteuerpflichtig sein. Ob sie als Einkünfte aus Vermietung und Verpachtung oder als betriebliche Einkünfte gelten, hängt von der tatsächlichen Tätigkeit ab und sollte im Einzelfall mit der Steuerberatung geklärt werden.",
    },
    {
      q: "Ab wann muss ich als Vermieter Umsatzsteuer verrechnen?",
      a: "Seit 2025 gilt eine Kleinunternehmergrenze von 55.000 Euro, bezogen auf die Umsätze des laufenden und des vorangegangenen Kalenderjahres. Darunter wird grundsätzlich keine Umsatzsteuer verrechnet, es besteht aber auch kein Vorsteuerabzug. Bei steuerpflichtigen Beherbergungsleistungen kommt grundsätzlich der ermäßigte Satz von 10 Prozent in Betracht.",
    },
    {
      q: "Was bedeutet Reverse Charge bei Plattformgebühren?",
      a: "Grenzüberschreitende Plattformgebühren können umsatzsteuerliche Pflichten auslösen, bei denen die Steuerschuld auf den Leistungsempfänger übergeht. Das kann auch Kleinunternehmer betreffen. Wie das für Ihre Plattform konkret zu handhaben ist, klären Sie mit Ihrer Steuerberatung.",
    },
    {
      q: "Bin ich als Airbnb-Vermieter bei der SVS pflichtversichert?",
      a: "Nicht automatisch. Eine SVS-Pflicht hängt davon ab, ob eine gewerbliche oder versicherungspflichtige selbstständige Tätigkeit vorliegt. Nicht jede private Vermietung löst sie aus, und eine pauschale Beitragsberechnung ist ohne Kenntnis der konkreten Tätigkeit nicht möglich.",
    },
    {
      q: "Ist die Ortstaxe eine Steuer des Finanzamts?",
      a: "Nein. Die Ortstaxe ist eine Abgabe der Stadt Wien auf entgeltliche Aufenthalte. Sie wird monatlich berechnet und bis zum 15. des Folgemonats bezahlt; vom 1. Juli 2026 bis 30. Juni 2027 beträgt sie 5 Prozent, ab 1. Juli 2027 8 Prozent der gesetzlichen Bemessungsgrundlage.",
    },
  ],
  sources: [
    {
      label: "WKO – Kurzzeitvermietung und Gewerbeanmeldung",
      href: "https://www.wko.at/steuern/kurzzeitvermietung-gewerbeanmeldung",
      date: "September 2026",
    },
    {
      label: "WKO – Kleinunternehmerregelung in der Umsatzsteuer",
      href: "https://www.wko.at/steuern/kleinunternehmerregelung-umsatzsteuer",
      date: "Stand 1. Juni 2026",
    },
    {
      label: "WKO – Kleinunternehmer und UID-Nummer",
      href: "https://www.wko.at/sbg/news/kleinunternehmer-uid-nummer",
      date: "24. September 2026",
    },
    {
      label: "Stadt Wien – Ortstaxe (Amtsweg)",
      href: "https://www.wien.gv.at/amtswege/ortstaxe",
      date: "abgerufen 10. Oktober 2026",
    },
  ],
  related: ["airbnb-gewerbe-oesterreich", "ortstaxe-wien", "vietour"],
  image: "guideTax",
};
