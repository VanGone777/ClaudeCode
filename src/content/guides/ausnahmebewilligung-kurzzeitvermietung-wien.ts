import type { Guide } from "@/content/types";

/**
 * Ratgeber: Ausnahmebewilligung für Kurzzeitvermietung in Wien.
 * Fakten ausschließlich aus docs/facts.md (§5, §6), Stand Oktober 2026.
 * VERIFY: fachliche Prüfung durch Rechtsberatung ausstehend (siehe `reviewed`).
 * VERIFY: Bearbeitungsdauer bewusst nicht beziffert – es gibt keine belegte allgemeine Dauer.
 */
export const ausnahmebewilligung: Guide = {
  slug: "ausnahmebewilligung-kurzzeitvermietung-wien",
  title: "Ausnahmebewilligung für Kurzzeitvermietung in Wien",
  seoTitle: "Ausnahmebewilligung Kurzzeitvermietung Wien: Leitfaden",
  description:
    "Ausnahmebewilligung Kurzzeitvermietung Wien: fünf Voraussetzungen, Unterlagen, Onlineverfahren der MA 37, 51 € Verwaltungsabgabe, Befristung auf fünf Jahre.",
  category: "Recht",
  readingMinutes: 7,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  legalBasis: ["§ 129 Abs. 1a Wiener Bauordnung", "OIB-Richtlinie 2, Punkt 7.3 (Brandschutz)"],
  authority: "Baupolizei der Stadt Wien (MA 37)",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Wer eine Wohnung in Wien über das vorübergehende Home Sharing hinaus touristisch nutzen möchte, benötigt grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung. Dieser Ratgeber erklärt die Voraussetzungen, die erforderlichen Unterlagen, das Onlineverfahren bei der MA 37 und die Kosten, mit denen Sie rechnen sollten.",
  keyFacts: [
    "Die Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung wird bei der Baupolizei der Stadt Wien (MA 37) über das Onlineverfahren der Stadt beantragt.",
    "Sie kann für maximal fünf Jahre erteilt werden und ist nicht automatisch erhältlich.",
    "Die Stadt Wien nennt fünf Voraussetzungen, darunter: keine Wohnzone, keine Wohnbaufördermittel für die Errichtung und höchstens 50 % der Nutzungseinheiten für die gewerbliche kurzfristige Beherbergung.",
    "Die Gebührenübersicht der Stadt nennt 51 € je betroffener Wohnung als Verwaltungsabgabe; weitere Gebühren und Kosten können hinzukommen.",
    "Eine belegte allgemeine Bearbeitungsdauer gibt es nicht.",
  ],
  body: [
    { type: "h2", text: "Wann eine Ausnahmebewilligung erforderlich ist" },
    {
      type: "p",
      text: "Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für die touristische Kurzzeitvermietung von Wohnungen. Die Stadt Wien beschreibt eine Ausnahme für eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes. Für jede darüber hinausgehende Nutzung, also insbesondere für die dauerhafte touristische Nutzung einer Wohnung, ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich.",
    },
    {
      type: "p",
      text: "Juristische Personen können sich nicht auf die Ausnahme berufen, da sie keinen Wohnsitz haben. Für eine GmbH oder eine andere Gesellschaft als Eigentümerin führt der baurechtliche Weg daher grundsätzlich über die Bewilligung. Die Abgrenzung zwischen beiden Fällen erklärt der Ratgeber zur [90-Tage-Regel in Wien](/ratgeber/90-tage-regel-wien).",
    },
    {
      type: "callout",
      tone: "note",
      title: "Befristung",
      text: "Die Bewilligung kann für maximal fünf Jahre erteilt werden. Sie ist nicht automatisch erhältlich, auch wenn die Unterlagen vollständig sind. Planen Sie die Nutzung daher nicht so, als wäre die Bewilligung bereits eine Formsache.",
    },

    { type: "h2", text: "Die fünf Voraussetzungen der Stadt Wien" },
    {
      type: "p",
      text: "Die Stadt Wien nennt fünf Voraussetzungen, die erfüllt sein müssen, damit eine Ausnahmebewilligung in Betracht kommt:",
    },
    {
      type: "ol",
      items: [
        "**Keine Wohnzone.** Die Wohnung liegt nicht in einer Wohnzone nach dem Flächenwidmungs- und Bebauungsplan. In Wohnzonen wird keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt. Siehe [Kurzzeitvermietung in Wiener Wohnzonen](/ratgeber/wohnzonen-wien).",
        "**Keine geschützte Kleingartenwidmung.** Die Wohnung liegt nicht in bestimmten geschützten Kleingartenwidmungen.",
        "**Keine Wohnbaufördermittel.** Für die Errichtung wurden keine Wohnbaufördermittel in Anspruch genommen.",
        "**Mehrheit bleibt Wohnen.** Die Mehrheit der Wohnungen im Gebäude bleibt Wohnzwecken gewidmet.",
        "**Höchstens 50 % der Nutzungseinheiten.** Höchstens die Hälfte der Nutzungseinheiten im Gebäude dient der gewerblichen kurzfristigen Beherbergung.",
      ],
    },
    {
      type: "p",
      text: "Die Voraussetzungen vier und fünf betreffen nicht nur Ihre Wohnung, sondern das gesamte Gebäude. Ob sie erfüllt sind, hängt also auch davon ab, was andere Eigentümer im Haus bereits tun oder planen. Deshalb verlangt die Stadt eine Aufstellung der Nutzungseinheiten im Gebäude.",
    },

    { type: "h2", text: "Welche Unterlagen Sie benötigen" },
    {
      type: "p",
      text: "Neben dem Nachweis der Voraussetzungen sind nach Angaben der Stadt Wien folgende Unterlagen und Angaben erforderlich:",
    },
    {
      type: "ul",
      items: [
        "**Zustimmung sämtlicher Grundeigentümer beziehungsweise Miteigentümer.** Die Formulierung „sämtliche“ bedeutet: alle, nicht eine Mehrheit. In einer Wohnungseigentumsanlage betrifft das die Miteigentümer der Liegenschaft.",
        "**Eindeutige Beschreibung der Wohnung.** Die Wohnung muss klar bezeichnet sein, damit die Bewilligung einer konkreten Einheit zugeordnet werden kann.",
        "**Aufstellung der Nutzungseinheiten im Gebäude.** Sie dient dem Nachweis, dass die Mehrheit der Wohnungen Wohnzwecken gewidmet bleibt und höchstens 50 % der Nutzungseinheiten touristisch genutzt werden.",
        "**Angaben zu den touristisch genutzten Betten.** Diese Zahl ist auch für den Brandschutz maßgeblich.",
      ],
    },
    {
      type: "p",
      text: "Je nach Einzelfall können weitere Nachweise erforderlich sein, etwa Pläne oder technische Unterlagen. Welche im konkreten Fall verlangt werden, lässt sich nicht pauschal sagen.",
    },

    { type: "h2", text: "Brandschutz: Die Zahl der Betten im Gebäude" },
    {
      type: "p",
      text: "Die Angabe der touristisch genutzten Betten hat eine praktische Folge. Nach dem Merkblatt der MA 37 vom April 2025 gilt:",
    },
    {
      type: "table",
      caption: "Maßgeblich kann die Gesamtzahl der touristischen Betten im Gebäude sein, nicht nur in der eigenen Wohnung.",
      head: ["Touristisch genutzte Betten im Gebäude", "Anforderung laut Merkblatt"],
      rows: [
        ["Bis zu zehn", "Erklärung über die Installation unvernetzter Rauchwarnmelder vorzulegen"],
        [
          "Mehr als zehn",
          "Weitergehende brandschutztechnische Anforderungen nach OIB-Richtlinie 2, Punkt 7.3, können erforderlich sein; gegebenenfalls sind baubehördliche Genehmigungen nachzuweisen",
        ],
      ],
    },
    {
      type: "p",
      text: "Ob darüber hinaus Brandschutztüren, Anpassungen der Fluchtwege oder andere bauliche Maßnahmen nötig sind, ist eine Frage des Einzelfalls. Die Aussage, jede Airbnb-Wohnung brauche eine neue Brandschutztür, ist in dieser Allgemeinheit falsch. Ebenso ersetzt die Ausnahmebewilligung nicht automatisch andere bau- oder gewerberechtliche Genehmigungen; Fragen der Barrierefreiheit oder einer Nutzungsänderung sind gesondert zu prüfen. Ausführlich dazu: [Brandschutz bei Kurzzeitvermietung in Wien](/ratgeber/brandschutz-kurzzeitvermietung-wien).",
    },

    { type: "h2", text: "So läuft der Antrag bei der MA 37" },
    {
      type: "p",
      text: "Zuständig ist die Baupolizei der Stadt Wien (MA 37). Der Antrag wird über das Onlineverfahren der Stadt gestellt. Sinnvoll ist folgende Reihenfolge:",
    },
    {
      type: "steps",
      items: [
        {
          title: "Voraussetzungen vorab prüfen",
          text: "Klären Sie zuerst Wohnzone, Kleingartenwidmung und Wohnbauförderung. Scheitert einer dieser Punkte, erübrigt sich der Antrag.",
        },
        {
          title: "Gebäude erfassen",
          text: "Erstellen Sie die Aufstellung der Nutzungseinheiten im Gebäude und ermitteln Sie, wie viele Einheiten bereits touristisch genutzt werden und wie viele Betten das betrifft.",
        },
        {
          title: "Zustimmungen einholen",
          text: "Holen Sie die Zustimmung sämtlicher Grundeigentümer beziehungsweise Miteigentümer ein. Planen Sie dafür ausreichend Zeit ein.",
        },
        {
          title: "Unterlagen zusammenstellen",
          text: "Eindeutige Beschreibung der Wohnung, Angaben zu den Betten, Erklärung zu den Rauchwarnmeldern beziehungsweise weitergehende Brandschutznachweise, bei Bedarf Pläne und technische Unterlagen.",
        },
        {
          title: "Antrag online einreichen",
          text: "Reichen Sie den Antrag über das Onlineverfahren der Stadt Wien bei der MA 37 ein und beantworten Sie allfällige Rückfragen vollständig.",
        },
        {
          title: "Befristung beachten",
          text: "Die Bewilligung kann für maximal fünf Jahre erteilt werden. Notieren Sie das Ablaufdatum und klären Sie rechtzeitig, wie es danach weitergeht.",
        },
      ],
    },

    { type: "h2", text: "Kosten und Bearbeitungsdauer" },
    {
      type: "p",
      text: "Die Gebührenübersicht der Stadt Wien nennt eine Verwaltungsabgabe von 51 € je betroffener Wohnung. Das ist jedoch nur die behördliche Abgabe. Weitere Gebühren sowie Kosten für Pläne, technische Nachweise oder bauliche Anpassungen, etwa im Brandschutz, können hinzukommen und hängen vom Objekt ab.",
    },
    {
      type: "callout",
      tone: "caution",
      title: "Keine verlässliche Angabe zur Dauer",
      text: "Für die Bearbeitungsdauer gibt es keine belegte allgemeine Angabe. Aussagen wie „Bewilligung innerhalb weniger Wochen“ sind nicht belastbar. Planen Sie die touristische Nutzung nicht auf ein bestimmtes Datum hin, bevor die Bewilligung vorliegt.",
    },
    {
      type: "p",
      text: "Rechnen Sie außerdem mit den laufenden Pflichten, die mit der Bewilligung nicht erledigt sind: Registrierung in [VIETour](/ratgeber/vietour), Abfuhr der [Ortstaxe](/ratgeber/ortstaxe-wien), Führung des Gästeverzeichnisses sowie die Klärung, ob nach dem Gesamtbild der Tätigkeit eine Gewerbeanmeldung erforderlich ist.",
    },

    { type: "h2", text: "Einordnung und nächste Schritte" },
    {
      type: "p",
      text: "Die Ausnahmebewilligung ist kein Formular, das sich nebenbei ausfüllen lässt, sondern eine Prüfung des gesamten Gebäudes und der Eigentümerstruktur. Wer sie anstrebt, sollte den Antrag als Teil einer Vermietungsstrategie verstehen: Lohnt sich der Aufwand für eine Dauer von höchstens fünf Jahren, wie sicher sind die Zustimmungen der Miteigentümer, und welche Alternative bleibt, wenn die Voraussetzungen nicht erfüllt sind?",
    },
    {
      type: "p",
      text: "Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten. Einen Überblick finden Sie auf der Seite [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien); wenn Sie Ihre Wohnung konkret besprechen möchten, [vereinbaren Sie ein Erstgespräch](/kontakt).",
    },
  ],
  faq: [
    {
      q: "Wer erteilt die Ausnahmebewilligung für Kurzzeitvermietung in Wien?",
      a: "Die Baupolizei der Stadt Wien (MA 37). Der Antrag wird über das Onlineverfahren der Stadt gestellt.",
    },
    {
      q: "Wie lange gilt die Ausnahmebewilligung?",
      a: "Sie kann für maximal fünf Jahre erteilt werden. Sie ist nicht automatisch erhältlich und an die von der Stadt Wien genannten Voraussetzungen gebunden.",
    },
    {
      q: "Was kostet die Ausnahmebewilligung?",
      a: "Die Gebührenübersicht der Stadt Wien nennt 51 € je betroffener Wohnung als Verwaltungsabgabe. Weitere Gebühren sowie Kosten für Pläne, technische Nachweise oder bauliche Anpassungen können hinzukommen.",
    },
    {
      q: "Wie lange dauert die Bearbeitung?",
      a: "Dafür gibt es keine belegte allgemeine Angabe. Aussagen über feste Fristen sollten Sie mit Vorsicht behandeln und die Nutzung nicht auf ein bestimmtes Datum hin planen, bevor die Bewilligung vorliegt.",
    },
    {
      q: "Brauche ich die Zustimmung aller Miteigentümer?",
      a: "Ja. Die Stadt Wien verlangt die Zustimmung sämtlicher Grundeigentümer beziehungsweise Miteigentümer. Unabhängig davon kann auch das Wohnungseigentumsrecht Zustimmungen erfordern.",
    },
  ],
  sources: [
    {
      label: "Stadt Wien: Ausnahmebewilligung für Kurzzeitvermietung",
      href: "https://www.wien.gv.at/wohnen/ausnahmebewilligung-kurzzeitvermietung",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "Stadt Wien: Bauprojekte – Abgaben und Gebühren",
      href: "https://www.wien.gv.at/wohnen/bauprojekte-abgaben-gebuehren",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "MA 37: Merkblatt zur Verwendung von Wohnungen für Kurzzeitvermietung (PDF)",
      href: "https://www.wien.gv.at/pdf/ma37/merkblatt-verwendung-wohnungen-kurzzeitvermietung.pdf",
      date: "April 2025",
    },
  ],
  related: ["90-tage-regel-wien", "wohnzonen-wien", "brandschutz-kurzzeitvermietung-wien"],
  image: "entrance",
};
