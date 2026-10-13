import type { Guide } from "@/content/types";

/**
 * Ratgeber: Ortstaxe Wien 2026 und 2027.
 * Fakten ausschließlich aus docs/facts.md, Abschnitte 7 (Ortstaxe) und 12 (Datenweitergabe durch Plattformen).
 * VERIFY: fachliche Prüfung durch Steuerberatung bzw. Abgabenstelle der Stadt Wien ausstehend.
 */
export const ortstaxeWien: Guide = {
  slug: "ortstaxe-wien",
  title: "Ortstaxe Wien 2026 und 2027",
  seoTitle: "Ortstaxe Wien Airbnb 2026/2027: Sätze und Fristen",
  description:
    "Ortstaxe Wien für Airbnb und Kurzzeitvermietung: 5 % ab 1. Juli 2026, 8 % ab 1. Juli 2027, Bemessungsgrundlage, Zahlung bis 15. des Folgemonats, Plattformen.",
  category: "Abgaben & Steuern",
  readingMinutes: 7,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  // VERIFY: genaue Gesetzesbezeichnung der Wiener Ortstaxe-Regelung und der landesrechtlichen Plattform-Meldepflicht bestätigen.
  legalBasis: ["Wiener Ortstaxe nach Landesrecht", "Landesrechtliche Meldepflichten für Plattformbetreiber"],
  authority: "Stadt Wien, Abgabenstelle / VIETour",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Die Wiener Ortstaxe wird in zwei Schritten angehoben: auf 5 Prozent ab 1. Juli 2026 und auf 8 Prozent ab 1. Juli 2027. Für Unterkunftgeber, die über Airbnb oder andere Plattformen vermieten, bedeutet das monatliche Berechnung, fristgerechte Zahlung und eine jährliche Steuererklärung. Dieser Ratgeber ordnet Sätze, Bemessungsgrundlage und Plattformfragen ein.",
  keyFacts: [
    "Bis 30. Juni 2026 galt ein Satz von 3,2 Prozent nach der bisherigen Bemessungsregel; vom 1. Juli 2026 bis 30. Juni 2027 beträgt die Ortstaxe 5 Prozent, ab 1. Juli 2027 8 Prozent.",
    "Die Prozentwerte beziehen sich auf die gesetzliche Bemessungsgrundlage und dürfen nicht einfach mit dem gesamten Buchungsbetrag multipliziert werden.",
    "Unterkunftgeber berechnen die Ortstaxe monatlich und zahlen sie bis zum 15. des Folgemonats; dazu kommt eine Jahressteuererklärung.",
    "Airbnb und Booking.com erscheinen in der Plattformliste der Stadt Wien nicht als Vertragspartner für die Einhebung der Ortstaxe; die Abwicklung ist je Plattform zu prüfen.",
    "Plattformbetreiber müssen bestimmte Daten von Unterkunftgebern an die Stadt Wien melden, neu registrierte Anbieter grundsätzlich bis zum 15. des Folgemonats.",
  ],
  body: [
    {
      type: "lead",
      text: "Die Ortstaxe ist eine Abgabe der Stadt Wien auf entgeltliche Aufenthalte. Sie knüpft an den Aufenthalt des Gastes an, abgewickelt wird sie von den Unterkunftgebern. Wer eine Wohnung kurzfristig vermietet, ist für Berechnung, Meldung und Zahlung verantwortlich, unabhängig davon, über welche Plattform die Buchung zustande kommt.",
    },
    { type: "h2", text: "Was die Ortstaxe ist und wen sie betrifft" },
    {
      type: "p",
      text: "Die Ortstaxe betrifft entgeltliche Aufenthalte in Wien, soweit keine gesetzliche Ausnahme greift. Für Unterkunftgeber ist sie damit Teil des laufenden Betriebs: Jede bezahlte Übernachtung in einer touristisch vermieteten Wohnung fällt grundsätzlich in ihren Anwendungsbereich. Ausnahmen sind gesetzlich geregelt und sollten nicht aus eigener Einschätzung angenommen werden.",
    },
    {
      type: "p",
      text: "Verantwortlich für die Abwicklung sind die Unterkunftgeber, also die Personen oder Unternehmen, die die Unterkunft zur Verfügung stellen. Diese Verantwortung besteht auch dann, wenn eine Plattform die Zahlung des Gastes abwickelt. Welche weiteren Pflichten zur touristischen Vermietung in Wien gehören, zeigt die Übersicht [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien).",
    },
    { type: "h2", text: "Die Sätze 2026 und 2027 im Überblick" },
    {
      type: "p",
      text: "Die Stadt Wien hebt die Ortstaxe in zwei Stufen an. Für Vermieter bedeutet das, dass innerhalb von gut einem Jahr zwei Umstellungen anstehen, jeweils zum 1. Juli.",
    },
    {
      type: "table",
      caption: "Ortstaxe Wien nach Zeitraum (Stand Oktober 2026)",
      head: ["Zeitraum", "Ortstaxe"],
      rows: [
        ["Bis 30. Juni 2026", "3,2 % nach bisheriger Bemessungsregel"],
        ["1. Juli 2026 bis 30. Juni 2027", "5 %"],
        ["Ab 1. Juli 2027", "8 %"],
      ],
    },
    {
      type: "callout",
      tone: "caution",
      title: "Nicht mit dem Buchungsbetrag multiplizieren",
      text: "Die Prozentwerte beziehen sich auf die gesetzliche Bemessungsgrundlage, nicht auf den gesamten Betrag, den der Gast bezahlt. Wer 5 Prozent oder 8 Prozent einfach auf die Buchungssumme rechnet, kommt in der Regel zu einem falschen Ergebnis. Die Stadt Wien stellt dafür einen Ortstaxerechner bereit.",
    },
    { type: "h2", text: "Bemessungsgrundlage: Warum der Buchungsbetrag nicht die Basis ist" },
    {
      type: "p",
      text: "Der Unterschied zwischen Buchungsbetrag und Bemessungsgrundlage ist der häufigste Fehler bei der Ortstaxe. Der Gast zahlt einen Gesamtpreis, in dem verschiedene Bestandteile enthalten sein können. Welche davon in die Bemessungsgrundlage einfließen, ergibt sich aus dem Gesetz und nicht aus der Darstellung auf der Plattform.",
    },
    {
      type: "p",
      text: "Für die Praxis heißt das: Verwenden Sie den Ortstaxerechner der Stadt Wien, dokumentieren Sie die Eingaben je Monat und halten Sie fest, von welchem Wert Sie ausgegangen sind. Wenn Sie unsicher sind, wie ein bestimmter Preisbestandteil zu behandeln ist, klären Sie das mit Ihrer Steuerberatung oder direkt mit der Abgabenstelle, bevor Sie die erste Monatsmeldung abgeben.",
    },
    { type: "h2", text: "Fristen: Monatliche Zahlung und Jahressteuererklärung" },
    {
      type: "p",
      text: "Die Ortstaxe wird monatlich berechnet und bis zum 15. des Folgemonats bezahlt. Für den Vermietungsmonat Juli ist die Zahlung also bis 15. August fällig. Die Abwicklung läuft über das Ortstaxe-Abgabenkonto, das Sie im Zuge der Registrierung bei der Stadt Wien beantragen. Zusätzlich ist eine Jahressteuererklärung abzugeben. Deren Frist ist gesondert zu bestätigen; sie wird hier bewusst nicht genannt, bis sie verifiziert ist.",
    },
    {
      type: "table",
      caption: "Termine rund um die Ortstaxe",
      head: ["Pflicht", "Rhythmus", "Frist"],
      rows: [
        ["Berechnung und Zahlung der Ortstaxe", "monatlich", "bis zum 15. des Folgemonats"],
        ["Jahressteuererklärung", "jährlich", "Frist gesondert zu bestätigen"],
        ["Datenmeldung der Plattformen an die Stadt", "laufend", "neu registrierte Anbieter und Änderungen grundsätzlich bis zum 15. des Folgemonats"],
      ],
    },
    {
      type: "p",
      text: "Abgewickelt wird das Ganze über die Webanwendung der Stadt Wien. Wie Sie dort ein Abgabenkonto beantragen, Ihre Unterkunft erfassen und die Statistik melden, beschreibt der Ratgeber [VIETour: Registrierung und Meldungen](/ratgeber/vietour) Schritt für Schritt.",
    },
    { type: "h2", text: "Airbnb, Booking.com und andere Plattformen" },
    {
      type: "p",
      text: "Viele Vermieter gehen davon aus, dass die Plattform die Ortstaxe automatisch einhebt und an die Stadt überweist. Für Wien lässt sich das nicht pauschal sagen. Die Stadt Wien veröffentlicht eine Liste von Plattformen, mit denen Vereinbarungen zur Einhebung und Abfuhr der Ortstaxe bestehen. Darin sind unter anderem **EG Vacation Rentals Ireland Limited** und **misterb&b** genannt.",
    },
    {
      type: "p",
      text: "**Airbnb und Booking.com erscheinen in dieser Liste nicht als Vertragspartner.** Das bedeutet nicht zwingend, dass über diese Plattformen keine Ortstaxe abgewickelt wird, aber es bedeutet, dass Sie sich nicht darauf verlassen sollten. Prüfen Sie für jede Plattform, über die Sie vermieten, wie die Ortstaxe tatsächlich behandelt wird, und halten Sie das Ergebnis schriftlich fest. Im Zweifel fragen Sie bei der Abgabenstelle der Stadt Wien nach, ob für die betreffende Plattform eine Vereinbarung besteht, und bewahren Sie die Antwort zu Ihren Unterlagen.",
    },
    {
      type: "callout",
      tone: "caution",
      title: "Verantwortung bleibt beim Unterkunftgeber",
      text: "Selbst wenn eine Plattform Beträge einhebt, bleibt die Verantwortung für die korrekte Abwicklung bei Ihnen als Unterkunftgeber. Eine automatische Abfuhr durch Airbnb sollte in Wien nicht unterstellt werden.",
    },
    { type: "h2", text: "Datenmeldungen durch Plattformen" },
    {
      type: "p",
      text: "Unabhängig von der Ortstaxe-Abwicklung müssen Plattformbetreiber aufgrund landesrechtlicher Vorschriften bestimmte Identifikations- und Kontaktdaten von Unterkunftgebern sowie Unterkunftsadressen an die Stadt Wien melden. Neu registrierte Anbieter und Änderungen sind grundsätzlich bis zum 15. des Folgemonats zu melden.",
    },
    {
      type: "p",
      text: "Die Annahme, die Stadt erfahre nichts von einer Vermietung, solange sie nur über eine Plattform läuft, ist deshalb nicht belastbar. Die Ortstaxe ist zudem nur eine von mehreren Pflichten. Ob die Wohnung überhaupt touristisch genutzt werden darf, ist eine eigene Frage, die der Ratgeber [Airbnb in Wien: Was erlaubt ist](/ratgeber/airbnb-wien-erlaubt) behandelt.",
    },
    { type: "h2", text: "Ortstaxe im laufenden Vermietungsbetrieb" },
    {
      type: "p",
      text: "Im Alltag ist die Ortstaxe vor allem eine Frage der Routine. Bewährt hat sich ein fester Ablauf zu Monatsbeginn: Buchungen des Vormonats zusammenstellen, Bemessungsgrundlage mit dem Ortstaxerechner ermitteln, Betrag in der Webanwendung melden und bis zum 15. überweisen. Die Unterlagen sollten so abgelegt werden, dass sie für die Jahressteuererklärung und für allfällige Rückfragen nachvollziehbar sind.",
    },
    {
      type: "ul",
      items: [
        "Buchungsübersicht je Monat mit Aufenthaltszeitraum und bezahltem Entgelt",
        "Berechnung der Bemessungsgrundlage mit dem Ortstaxerechner der Stadt Wien",
        "Nachweis der Meldung und der Zahlung bis zum 15. des Folgemonats",
        "Dokumentation, wie jede genutzte Plattform die Ortstaxe behandelt",
      ],
    },
    {
      type: "p",
      text: "Beide Erhöhungen gehören außerdem in die Preiskalkulation. Wer Belegung und Preise für das kommende Jahr plant, sollte den Schritt auf 8 Prozent ab 1. Juli 2027 bereits berücksichtigen und prüfen, wie die jeweilige Plattform die Ortstaxe gegenüber dem Gast darstellt. So vermeiden Sie, dass die Abgabe erst bei der Monatsmeldung als unerwarteter Kostenpunkt auffällt.",
    },
    {
      type: "p",
      text: "Die Ortstaxe ist von der Umsatzsteuer und der Einkommensteuer zu unterscheiden; diese Themen behandelt der Ratgeber [Airbnb und Steuern in Österreich](/ratgeber/airbnb-steuern-oesterreich). Goldnest ersetzt keine Rechts- oder Steuerberatung. Wenn Sie die laufende Abwicklung nicht selbst übernehmen möchten, können Sie im [Erstgespräch](/kontakt) klären, welche operativen Aufgaben eine professionelle Verwaltung abdecken kann.",
    },
  ],
  faq: [
    {
      q: "Wie hoch ist die Ortstaxe in Wien ab Juli 2026?",
      a: "Vom 1. Juli 2026 bis 30. Juni 2027 beträgt die Ortstaxe 5 Prozent, ab 1. Juli 2027 8 Prozent. Bis 30. Juni 2026 galten 3,2 Prozent nach der bisherigen Bemessungsregel. Die Prozentwerte beziehen sich auf die gesetzliche Bemessungsgrundlage.",
    },
    {
      q: "Führt Airbnb die Wiener Ortstaxe für mich ab?",
      a: "Davon sollten Sie nicht ausgehen. In der Plattformliste der Stadt Wien erscheinen Airbnb und Booking.com nicht als Vertragspartner. Prüfen Sie die Abwicklung für jede Plattform einzeln; die Verantwortung bleibt in jedem Fall beim Unterkunftgeber.",
    },
    {
      q: "Bis wann muss die Ortstaxe bezahlt werden?",
      a: "Die Ortstaxe wird monatlich berechnet und ist bis zum 15. des Folgemonats zu zahlen. Zusätzlich ist eine Jahressteuererklärung abzugeben, deren Frist gesondert zu bestätigen ist.",
    },
    {
      q: "Darf ich die Ortstaxe einfach mit dem Buchungsbetrag berechnen?",
      a: "Nein. Die Prozentsätze beziehen sich auf die gesetzliche Bemessungsgrundlage und nicht auf den gesamten Buchungsbetrag. Die Stadt Wien stellt einen Ortstaxerechner bereit, der für die Berechnung verwendet werden sollte.",
    },
    {
      q: "Erfährt die Stadt Wien von meiner Vermietung über eine Plattform?",
      a: "Plattformbetreiber müssen bestimmte Identifikations- und Kontaktdaten von Unterkunftgebern sowie Unterkunftsadressen an die Stadt Wien melden. Die Annahme, eine Vermietung bleibe der Stadt verborgen, ist nicht belastbar.",
    },
  ],
  sources: [
    {
      label: "Stadt Wien – Ortstaxe (Amtsweg)",
      href: "https://www.wien.gv.at/amtswege/ortstaxe",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien – Privat vermieten für touristische Zwecke",
      href: "https://www.wien.gv.at/wirtschaft/privat-vermieten-touristische-zwecke",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien – Ortstaxe und Online-Plattformen (Plattformliste, Datenmeldung)",
      href: "https://www.wien.gv.at/wirtschaft/ortstaxe-online-plattformen",
      date: "abgerufen 10. Oktober 2026",
    },
  ],
  related: ["vietour", "airbnb-steuern-oesterreich", "gaesteverzeichnis-meldepflicht"],
  image: "guideTax",
};
