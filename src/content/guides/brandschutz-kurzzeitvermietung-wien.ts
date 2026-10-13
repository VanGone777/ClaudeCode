import type { Guide } from "@/content/types";

/**
 * Ratgeber: Brandschutz bei Kurzzeitvermietung.
 * Fakten ausschließlich aus docs/facts.md, Abschnitt 6 (Brandschutz, MA 37 Merkblatt April 2025) und 5 (Ausnahmebewilligung).
 * VERIFY: fachliche Prüfung durch Brandschutzplanung bzw. Rechtsberatung ausstehend.
 */
export const brandschutz: Guide = {
  slug: "brandschutz-kurzzeitvermietung-wien",
  title: "Brandschutz bei Kurzzeitvermietung",
  seoTitle: "Airbnb Brandschutz Wien: Rauchwarnmelder und Bettenzahl",
  description:
    "Airbnb Brandschutz Wien: bis zehn touristische Betten im Gebäude Erklärung über Rauchwarnmelder, bei mehr als zehn mögliche Anforderungen nach OIB-Richtlinie 2.",
  category: "Recht",
  readingMinutes: 7,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  legalBasis: [
    "§ 129 Abs. 1a Wiener Bauordnung",
    "OIB-Richtlinie 2, Punkt 7.3",
    "Merkblatt der MA 37 zur Verwendung von Wohnungen für Kurzzeitvermietung (April 2025)",
  ],
  authority: "Baupolizei der Stadt Wien (MA 37)",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Wie viel Brandschutz eine touristisch vermietete Wohnung braucht, hängt in Wien vor allem von der Zahl der touristisch genutzten Betten im gesamten Gebäude ab. Bis zu zehn Betten ist nach dem Merkblatt der MA 37 eine Erklärung über unvernetzte Rauchwarnmelder vorzulegen, darüber können weitergehende Anforderungen folgen. Pauschale Aussagen zu Brandschutztüren oder Fluchtwegen sind nicht möglich.",
  keyFacts: [
    "Bei bis zu zehn touristisch genutzten Betten im Gebäude ist laut Merkblatt der MA 37 eine Erklärung über die Installation unvernetzter Rauchwarnmelder vorzulegen.",
    "Bei mehr als zehn touristisch genutzten Betten im Gebäude können weitergehende brandschutztechnische Anforderungen nach OIB-Richtlinie 2, Punkt 7.3, erforderlich sein, gegebenenfalls samt baubehördlicher Genehmigungen.",
    "Entscheidend kann die Gesamtzahl der touristischen Betten im Gebäude sein, nicht nur die Zahl in der eigenen Wohnung.",
    "Ob Brandschutztüren oder Fluchtweg-Anpassungen nötig sind, ist eine Frage des Einzelfalls; eine pauschale Aussage wäre falsch.",
    "Die Ausnahmebewilligung ersetzt nicht automatisch andere bau- oder gewerberechtliche Genehmigungen.",
  ],
  body: [
    {
      type: "lead",
      text: "Brandschutz ist bei der Kurzzeitvermietung kein Zusatzthema, sondern Teil des Bewilligungsverfahrens. Wer bei der Baupolizei eine Ausnahmebewilligung beantragt, macht Angaben zu den touristisch genutzten Betten, und genau an dieser Zahl knüpfen die brandschutztechnischen Anforderungen an. Für Gebäude mit wenigen touristischen Betten ist die Anforderung klar umrissen. Die wichtige Einschränkung: Gezählt wird im Gebäude, nicht in der Wohnung.",
    },
    { type: "h2", text: "Warum Brandschutz Teil der Bewilligung ist" },
    {
      type: "p",
      text: "Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für die touristische Kurzzeitvermietung von Wohnungen. Für eine Nutzung über die beschriebene Ausnahme hinaus ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich. Zu den Antragsunterlagen gehören eine Aufstellung der Nutzungseinheiten im Gebäude und Angaben zu den touristisch genutzten Betten. Wie das Verfahren insgesamt abläuft, beschreibt der Ratgeber zur [Ausnahmebewilligung für Kurzzeitvermietung](/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien).",
    },
    {
      type: "p",
      text: "Die Baupolizei der Stadt Wien (MA 37) hat im April 2025 ein Merkblatt zur Verwendung von Wohnungen für die Kurzzeitvermietung veröffentlicht. Es verknüpft die Zahl der touristischen Betten mit abgestuften Anforderungen an den Brandschutz. Wer diese Logik versteht, kann früh einschätzen, ob der Weg zur Bewilligung mit einer einfachen Erklärung auskommt oder ob ein Fachplaner eingebunden werden sollte.",
    },
    { type: "h2", text: "Die Zehn-Betten-Schwelle" },
    {
      type: "p",
      text: "Das Merkblatt unterscheidet zwei Situationen, und die Grenze liegt bei zehn touristisch genutzten Betten im Gebäude.",
    },
    {
      type: "table",
      caption: "Brandschutzanforderungen nach Bettenzahl laut Merkblatt der MA 37 (April 2025)",
      head: ["Touristisch genutzte Betten im Gebäude", "Anforderung"],
      rows: [
        ["Bis zu zehn", "Erklärung über die Installation unvernetzter Rauchwarnmelder vorzulegen"],
        ["Mehr als zehn", "Weitergehende brandschutztechnische Anforderungen nach OIB-Richtlinie 2, Punkt 7.3, können erforderlich sein; gegebenenfalls baubehördliche Genehmigungen nachzuweisen"],
      ],
    },
    {
      type: "callout",
      tone: "caution",
      title: "Gezählt wird im Gebäude",
      text: "Entscheidend kann die Gesamtzahl der touristischen Betten im Gebäude sein, nicht nur in der eigenen Wohnung. Wer vier Betten anbietet, aber in einem Haus mit weiteren touristisch genutzten Einheiten, kann die Schwelle gemeinsam mit den anderen überschreiten. Vor dem Antrag sollte deshalb geklärt werden, wie viele Betten im Haus bereits touristisch genutzt werden.",
    },
    { type: "h2", text: "Bis zu zehn Betten: Erklärung über Rauchwarnmelder" },
    {
      type: "p",
      text: "Liegt die Gesamtzahl der touristischen Betten im Gebäude bei höchstens zehn, ist eine Erklärung über die Installation unvernetzter Rauchwarnmelder vorzulegen. Unvernetzt bedeutet, dass die einzelnen Melder eigenständig arbeiten und nicht miteinander verbunden sind. Das ist die niedrigste Stufe der Anforderungen und für eine einzelne Wohnung in einem sonst zu Wohnzwecken genutzten Haus der häufige Fall.",
    },
    {
      type: "p",
      text: "Welche Räume auszustatten sind und welche Geräte in Frage kommen, sollten Sie anhand des Merkblatts und gegebenenfalls mit einer Fachfirma klären. Dokumentieren Sie die Installation mit Datum, Standort der Melder und Produktangaben; die Erklärung gegenüber der Baupolizei sollte sich auf nachvollziehbare Unterlagen stützen. Planen Sie außerdem ein, die Melder im laufenden Betrieb regelmäßig zu prüfen; wechselnde Gäste bemerken eine leere Batterie nicht.",
    },
    { type: "h2", text: "Mehr als zehn Betten: OIB-Richtlinie 2, Punkt 7.3" },
    {
      type: "p",
      text: "Übersteigt die Zahl der touristisch genutzten Betten im Gebäude zehn, können weitergehende brandschutztechnische Anforderungen nach OIB-Richtlinie 2, Punkt 7.3, erforderlich sein. Gegebenenfalls sind dann baubehördliche Genehmigungen nachzuweisen. Was das konkret bedeutet, lässt sich nicht allgemein sagen, weil die Anforderungen von Gebäude, Lage der Wohnung und bestehender Ausstattung abhängen.",
    },
    {
      type: "p",
      text: "In dieser Situation ist es sinnvoll, früh einen Brandschutzplaner oder eine Ziviltechnikerin einzubinden. Die Kosten für technische Nachweise, Pläne oder bauliche Anpassungen können zu den Verfahrenskosten hinzukommen und sollten in die wirtschaftliche Einschätzung einfließen, bevor Sie sich für ein Vermietungsmodell entscheiden.",
    },
    {
      type: "definitions",
      items: [
        {
          term: "OIB-Richtlinie 2",
          text: "Technische Richtlinie zum Brandschutz, auf die das Merkblatt der MA 37 für Gebäude mit mehr als zehn touristisch genutzten Betten verweist (Punkt 7.3).",
        },
        {
          term: "Unvernetzte Rauchwarnmelder",
          text: "Einzeln arbeitende Melder ohne Verbindung untereinander. Für bis zu zehn touristische Betten im Gebäude ist eine Erklärung über deren Installation vorzulegen.",
        },
        {
          term: "Touristisch genutztes Bett",
          text: "Die Bezugsgröße des Merkblatts. Maßgeblich kann die Summe aller touristisch genutzten Betten im Gebäude sein, nicht nur die Zahl in der eigenen Wohnung.",
        },
        {
          term: "Baubehördliche Genehmigung",
          text: "Eine eigene Genehmigung der Baubehörde, die bei weitergehenden Anforderungen nachzuweisen sein kann und von der Ausnahmebewilligung zu unterscheiden ist.",
        },
      ],
    },
    { type: "h2", text: "Brandschutztüren, Fluchtwege, Barrierefreiheit: Einzelfall" },
    {
      type: "p",
      text: "Im Internet kursieren Listen, nach denen jede Airbnb-Wohnung eine neue Brandschutztür, zusätzliche Fluchtwege oder einen barrierefreien Zugang brauche. Das Merkblatt der MA 37 gibt eine solche Pauschalaussage nicht her. Ob Brandschutztüren, Fluchtweg-Anpassungen oder andere bauliche Maßnahmen nötig sind, ist im Einzelfall zu beurteilen.",
    },
    {
      type: "callout",
      tone: "caution",
      title: "Keine pauschale Aussage",
      text: "Eine pauschale Aussage, dass jede Airbnb-Wohnung eine neue Brandschutztür benötigt, wäre falsch. Ebenso falsch wäre die Annahme, dass bauliche Maßnahmen in keinem Fall erforderlich sind. Beides lässt sich nur anhand des konkreten Gebäudes beantworten.",
    },
    {
      type: "p",
      text: "Dasselbe gilt für Barrierefreiheit und für die Frage, ob die touristische Nutzung eine Nutzungsänderung darstellt. Beides ist Gegenstand einer Einzelfallprüfung. Wer sich hier auf Erfahrungsberichte aus anderen Häusern verlässt, riskiert, dass der Antrag ergänzt werden muss oder Maßnahmen nachträglich verlangt werden.",
    },
    { type: "h2", text: "Bewilligung ist nicht gleich Bewilligung" },
    {
      type: "p",
      text: "Die Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung regelt die baurechtliche Zulässigkeit der touristischen Nutzung. Sie ersetzt nicht automatisch andere bau- oder gewerberechtliche Genehmigungen. Wer wegen der Bettenzahl weitergehende Nachweise erbringen oder eine baubehördliche Genehmigung einholen muss, erledigt das nicht mit dem Bewilligungsbescheid.",
    },
    {
      type: "p",
      text: "Auch die gewerberechtliche Frage bleibt eigenständig: Ob eine Vermietung als Gewerbe einzustufen ist, hängt vom Gesamtbild der Tätigkeit ab und wird im Ratgeber [Airbnb und Gewerbe in Österreich](/ratgeber/airbnb-gewerbe-oesterreich) behandelt. Prüfen Sie außerdem, ob Ihre Gebäude- und Haushaltsversicherung die tatsächliche touristische Nutzung deckt; plattformseitige Schutzprogramme sind nicht automatisch ein Ersatz für eine Versicherung.",
    },
    { type: "h2", text: "Vorgehen für Eigentümer" },
    {
      type: "steps",
      items: [
        {
          title: "Betten im Gebäude erheben",
          text: "Klären Sie, wie viele touristisch genutzte Betten es im Haus insgesamt gibt, nicht nur in Ihrer Wohnung. Die Hausverwaltung und die Aufstellung der Nutzungseinheiten helfen dabei.",
        },
        {
          title: "Stufe bestimmen",
          text: "Bis zu zehn Betten im Gebäude: Erklärung über unvernetzte Rauchwarnmelder. Mehr als zehn: weitergehende Anforderungen nach OIB-Richtlinie 2, Punkt 7.3, möglich.",
        },
        {
          title: "Melder installieren und dokumentieren",
          text: "Installieren Sie die Rauchwarnmelder nach den Vorgaben des Merkblatts, halten Sie Standorte und Geräte fest und bereiten Sie die Erklärung für die MA 37 vor.",
        },
        {
          title: "Bei Bedarf Fachplanung einbinden",
          text: "Oberhalb der Schwelle oder bei Unsicherheiten zu Fluchtwegen und Türen sollte eine Brandschutzplanung die Anforderungen für Ihr Gebäude klären, bevor Sie den Antrag stellen.",
        },
        {
          title: "Antrag und weitere Genehmigungen abstimmen",
          text: "Reichen Sie die Ausnahmebewilligung über das Onlineverfahren der Stadt ein und klären Sie parallel, ob zusätzliche bau- oder gewerberechtliche Genehmigungen erforderlich sind.",
        },
      ],
    },
    {
      type: "p",
      text: "Brandschutz ist einer von mehreren Punkten, die vor einer Vermietung geklärt sein sollten. Die Übersicht [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien) ordnet ihn in den Gesamtablauf ein. Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten. Wenn Sie Ihre Wohnung einordnen lassen möchten, können Sie Ihre [Immobilie prüfen lassen](/kontakt).",
    },
  ],
  faq: [
    {
      q: "Brauche ich für meine Airbnb-Wohnung in Wien eine Brandschutztür?",
      a: "Das lässt sich nicht pauschal beantworten. Ob Brandschutztüren oder Fluchtweg-Anpassungen nötig sind, ist eine Frage des Einzelfalls. Die Aussage, jede Airbnb-Wohnung benötige eine neue Brandschutztür, wäre falsch.",
    },
    {
      q: "Zählen nur die Betten in meiner Wohnung?",
      a: "Nein. Entscheidend kann die Gesamtzahl der touristisch genutzten Betten im Gebäude sein. Auch wenn Ihre Wohnung nur wenige Betten hat, kann die Schwelle von zehn Betten durch andere touristisch genutzte Einheiten im Haus überschritten werden.",
    },
    {
      q: "Welche Rauchwarnmelder verlangt die MA 37?",
      a: "Bei bis zu zehn touristisch genutzten Betten im Gebäude ist eine Erklärung über die Installation unvernetzter Rauchwarnmelder vorzulegen. Welche Räume auszustatten sind und welche Geräte geeignet sind, sollte anhand des Merkblatts und gegebenenfalls mit einer Fachfirma geklärt werden.",
    },
    {
      q: "Deckt die Ausnahmebewilligung auch den Brandschutz ab?",
      a: "Nicht automatisch. Die Ausnahmebewilligung regelt die baurechtliche Zulässigkeit der touristischen Nutzung und ersetzt nicht andere bau- oder gewerberechtliche Genehmigungen. Bei mehr als zehn Betten im Gebäude können zusätzliche baubehördliche Genehmigungen nachzuweisen sein.",
    },
  ],
  sources: [
    {
      label: "MA 37 – Merkblatt zur Verwendung von Wohnungen für Kurzzeitvermietung",
      href: "https://www.wien.gv.at/pdf/ma37/merkblatt-verwendung-wohnungen-kurzzeitvermietung.pdf",
      date: "April 2025",
    },
    {
      label: "Stadt Wien – Ausnahmebewilligung für Kurzzeitvermietung",
      href: "https://www.wien.gv.at/wohnen/ausnahmebewilligung-kurzzeitvermietung",
      date: "abgerufen 10. Oktober 2026",
    },
  ],
  related: ["ausnahmebewilligung-kurzzeitvermietung-wien", "airbnb-gewerbe-oesterreich", "airbnb-wien-erlaubt"],
  image: "legalFacade",
};
