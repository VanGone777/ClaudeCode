import type { Guide } from "@/content/types";

/**
 * Ratgeber: Airbnb Eigentumswohnung Wien.
 * Fakten ausschließlich aus docs/facts.md, Abschnitte 11 (Eigentumswohnung, Mietwohnung) und 5 (Wiener Bauordnung).
 * VERIFY: fachliche Prüfung durch Rechtsberatung ausstehend.
 */
export const eigentumswohnung: Guide = {
  slug: "airbnb-eigentumswohnung-wien",
  title: "Darf ich meine Eigentumswohnung über Airbnb vermieten?",
  seoTitle: "Airbnb Eigentumswohnung Wien: Was Eigentümer prüfen müssen",
  description:
    "Airbnb Eigentumswohnung Wien: Widmung, Wohnungseigentumsvertrag, Zustimmungen und Bauordnung. Was Eigentümer vor der touristischen Vermietung klären sollten.",
  category: "Recht",
  readingMinutes: 7,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  // VERIFY: Gesetzesbezeichnungen und Fundstellen durch Rechtsberatung bestätigen.
  legalBasis: [
    "Wohnungseigentumsrecht (Widmung, Wohnungseigentumsvertrag)",
    "§ 129 Abs. 1a Wiener Bauordnung",
    "Mietrechtsgesetz (MRG) bei Mietwohnungen",
    "OGH 14. April 2026, 5 Ob 45/26t",
  ],
  authority: "Baupolizei der Stadt Wien (MA 37) für die baurechtliche Zulässigkeit; wohnungseigentums- und mietrechtliche Fragen: Rechtsberatung",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Eigentum allein berechtigt nicht zur touristischen Vermietung. Ob Ihre Eigentumswohnung über Airbnb vermietet werden darf, hängt von der Widmung, dem Wohnungseigentumsvertrag, den Rechten der anderen Eigentümer und den öffentlich-rechtlichen Genehmigungen ab. Dieser Ratgeber zeigt, welche Punkte Sie vor dem ersten Inserat klären sollten.",
  keyFacts: [
    "Die touristische Vermietung einer Eigentumswohnung ist nicht allein deshalb zulässig, weil Sie Eigentümer sind.",
    "Entscheidend sind die wohnungseigentumsrechtliche Widmung, der Wohnungseigentumsvertrag, bestehende Zustimmungen und die Rechte der anderen Wohnungseigentümer.",
    "Die OGH-Entscheidung vom 14. April 2026 (5 Ob 45/26t) betraf eine Liegenschaft, deren Wohnungseigentumsvertrag bereits ausdrückliche Zustimmungen enthielt; ein allgemeines Recht lässt sich daraus nicht ableiten.",
    "Neben dem Zivilrecht gilt das öffentliche Recht: Für eine Nutzung über die beschriebene Ausnahme hinaus ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich.",
    "Bei Mietwohnungen entscheiden Mietvertrag, ein allfälliges Untervermietungsverbot und die Anwendbarkeit des MRG; eine Weitervermietung ohne Berechtigung bringt erhebliche Risiken mit sich.",
  ],
  body: [
    {
      type: "lead",
      text: "Die Frage klingt einfach, hat aber zwei Ebenen. Zuerst geht es um das Verhältnis zu den anderen Wohnungseigentümern im Haus, also um Zivilrecht. Dann geht es um die Stadt Wien, die Bauordnung und allfällige Bewilligungen, also um öffentliches Recht. Beide Ebenen müssen für sich geklärt sein. Eine Zustimmung der Miteigentümer ersetzt keine Bewilligung, und eine Bewilligung ersetzt keine Zustimmung.",
    },
    { type: "h2", text: "Zwei Ebenen: Zivilrecht und öffentliches Recht" },
    {
      type: "p",
      text: "Wer eine Eigentumswohnung besitzt, nutzt eine bestimmte Wohnung und ist zugleich Teil einer Gemeinschaft von Eigentümern. Dieses Nutzungsrecht ist nicht grenzenlos. Es wird durch den Wohnungseigentumsvertrag, die Widmung der Wohnung und die Rechte der übrigen Eigentümer begrenzt. Ob eine touristische Kurzzeitvermietung zu diesem Rahmen passt, ist deshalb zunächst eine Frage des Wohnungseigentumsrechts.",
    },
    {
      type: "p",
      text: "Unabhängig davon prüft die Stadt Wien, ob eine Wohnung überhaupt touristisch genutzt werden darf. Seit 1. Juli 2024 gelten strengere Voraussetzungen für die Kurzzeitvermietung von Wohnungen. Welche Regeln dabei gelten, erklärt der Überblick [Airbnb in Wien: Was erlaubt ist](/ratgeber/airbnb-wien-erlaubt). Für die Eigentumswohnung bedeutet das: Selbst wenn alle Miteigentümer einverstanden sind, kann die Nutzung baurechtlich unzulässig sein. Und selbst wenn eine Ausnahmebewilligung vorliegt, kann die Gemeinschaft Rechte dagegen geltend machen.",
    },
    { type: "h2", text: "Widmung und Wohnungseigentumsvertrag" },
    {
      type: "p",
      text: "Der Wohnungseigentumsvertrag ist das zentrale Dokument. Er legt fest, welchem Zweck die einzelnen Objekte im Haus dienen und welche Nutzungen die Eigentümer einander zugestehen. Enthält er bereits ausdrückliche Zustimmungen zur kurzfristigen touristischen Vermietung, ist die zivilrechtliche Ausgangslage eine andere, als wenn er dazu schweigt oder eine Nutzung ausschließlich zu Wohnzwecken vorsieht.",
    },
    {
      type: "definitions",
      items: [
        {
          term: "Widmung",
          text: "Die wohnungseigentumsrechtliche Zweckbestimmung eines Objekts, etwa als Wohnung oder als Geschäftsräumlichkeit. Sie ergibt sich aus dem Wohnungseigentumsvertrag und kann die touristische Nutzung beeinflussen.",
        },
        {
          term: "Wohnungseigentumsvertrag",
          text: "Die Vereinbarung aller Wohnungseigentümer einer Liegenschaft. Sie kann Zustimmungen zu bestimmten Nutzungen enthalten oder solche Nutzungen ausschließen.",
        },
        {
          term: "Bestehende Zustimmungen",
          text: "Einverständniserklärungen der anderen Eigentümer, die bereits im Vertrag oder in späteren Beschlüssen und Vereinbarungen festgehalten sind.",
        },
        {
          term: "Öffentlich-rechtliche Genehmigungen",
          text: "Bewilligungen der Behörden, in Wien insbesondere die Ausnahmebewilligung der Baupolizei (MA 37) nach § 129 Abs. 1a Wiener Bauordnung.",
        },
      ],
    },
    {
      type: "p",
      text: "Lesen Sie den Vertrag deshalb vollständig, bevor Sie ein Inserat vorbereiten. Prüfen Sie auch spätere Beschlüsse der Eigentümergemeinschaft und die Hausordnung. Wenn Formulierungen unklar sind, ist das kein Detail, sondern der Punkt, an dem eine Rechtsberatung ansetzen sollte.",
    },
    { type: "h2", text: "Die Rechte der anderen Wohnungseigentümer" },
    {
      type: "p",
      text: "Eine touristische Nutzung betrifft das ganze Haus: wechselnde Gäste im Stiegenhaus, Schlüsselübergaben, Reinigungsintervalle, Lärm. Die übrigen Eigentümer haben Rechte, die sie gegen eine Nutzung geltend machen können, die der Widmung oder dem Vertrag widerspricht. Welche Zustimmungen im Einzelfall notwendig sind, hängt vom konkreten Vertrag und von der Widmung ab.",
    },
    {
      type: "callout",
      tone: "caution",
      title: "Nicht pauschal annehmen",
      text: "Dass eine Mehrheit der Eigentümer nichts gegen die Vermietung hat, bedeutet nicht automatisch, dass die Nutzung zulässig ist. Für die Ausnahmebewilligung verlangt die Stadt Wien überdies die Zustimmung sämtlicher Grundeigentümer beziehungsweise Miteigentümer. Beide Fragen, die zivilrechtliche und die baurechtliche, sollten getrennt beantwortet werden.",
    },
    { type: "h2", text: "Was die OGH-Entscheidung vom 14. April 2026 bedeutet" },
    {
      type: "p",
      text: "Die Entscheidung des Obersten Gerichtshofs vom 14. April 2026 zu 5 Ob 45/26t wird in Eigentümerkreisen häufig als Freibrief gelesen. Das ist sie nicht. Der Fall betrifft eine Liegenschaft, in deren Wohnungseigentumsvertrag bereits ausdrückliche Zustimmungen zur kurzfristigen touristischen Vermietung enthalten waren. Die Ausgangslage war also eine besondere: Die Eigentümer hatten sich im Vertrag auf diese Nutzung verständigt.",
    },
    {
      type: "p",
      text: "Daraus lässt sich **kein allgemeines Recht** ableiten, jede Eigentumswohnung touristisch zu vermieten. Wer in seinem eigenen Vertrag keine vergleichbare Zustimmung findet, steht in einer anderen Situation. Ob die Entscheidung auf einen konkreten Fall übertragbar ist, kann nur anhand des jeweiligen Wohnungseigentumsvertrags beurteilt werden, und auch dann bleibt die baurechtliche Seite unberührt.",
    },
    { type: "h2", text: "Die öffentlich-rechtliche Seite: Bauordnung und Bewilligung" },
    {
      type: "p",
      text: "Die Stadt Wien unterscheidet zwischen gelegentlichem Home Sharing und der dauerhaften touristischen Nutzung einer Investmentwohnung. Die Ausnahme für eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr beschreibt die Stadt ausdrücklich im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes. Juristische Personen können sich darauf nicht berufen, da sie keinen Wohnsitz haben. Die Details finden Sie im Ratgeber zur [90-Tage-Regel in Wien](/ratgeber/90-tage-regel-wien).",
    },
    {
      type: "p",
      text: "Für eine darüber hinausgehende Nutzung ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich. Sie kann für maximal fünf Jahre erteilt werden, ist nicht automatisch erhältlich und setzt unter anderem voraus, dass die Wohnung nicht in einer [Wohnzone](/ratgeber/wohnzonen-wien) liegt, keine Wohnbaufördermittel für die Errichtung verwendet wurden und die Mehrheit der Wohnungen im Gebäude Wohnzwecken gewidmet bleibt. Zusätzlich sind die Zustimmung sämtlicher Grundeigentümer beziehungsweise Miteigentümer, eine eindeutige Beschreibung der Wohnung, eine Aufstellung der Nutzungseinheiten und Angaben zu den touristisch genutzten Betten erforderlich. Den gesamten Ablauf beschreibt der Ratgeber zur [Ausnahmebewilligung für Kurzzeitvermietung](/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien).",
    },
    {
      type: "p",
      text: "Gerade die Zustimmung aller Miteigentümer verbindet beide Ebenen: Ohne sie fehlt sowohl die zivilrechtliche Grundlage als auch eine Antragsvoraussetzung gegenüber der MA 37.",
    },
    { type: "h2", text: "Mietwohnung: Untervermietung über Airbnb" },
    {
      type: "p",
      text: "Für Mieterinnen und Mieter gelten andere Maßstäbe. Entscheidend sind der Mietvertrag, ein allfälliges Untervermietungsverbot und die Frage, ob das Mietrechtsgesetz anwendbar ist. Eine touristische Weitervermietung ohne entsprechende Berechtigung bringt erhebliche Risiken mit sich. Welche Konsequenzen im Einzelfall drohen, hängt vom Mietvertrag und der Rechtslage ab und sollte vorab mit einer Rechtsberatung geklärt werden.",
    },
    {
      type: "callout",
      tone: "caution",
      title: "Zustimmung des Vermieters genügt nicht in jedem Fall",
      text: "Es wäre falsch zu behaupten, eine Airbnb-Untervermietung sei mit Zustimmung des Vermieters immer zulässig. Auch mit dieser Zustimmung bleiben Bauordnung und Gewerberecht zu beachten. Die Zustimmung regelt nur das Verhältnis zwischen Mieter und Vermieter, nicht die Zulässigkeit der Nutzung gegenüber der Stadt.",
    },
    { type: "h2", text: "Checkliste für Eigentümer" },
    {
      type: "steps",
      items: [
        {
          title: "Wohnungseigentumsvertrag und Widmung prüfen",
          text: "Welche Nutzung sieht der Vertrag vor, und enthält er bereits Zustimmungen zur kurzfristigen touristischen Vermietung? Berücksichtigen Sie auch spätere Beschlüsse und die Hausordnung.",
        },
        {
          title: "Rechte der anderen Eigentümer klären",
          text: "Welche Zustimmungen sind nach dem Vertrag nötig, und liegen sie vor? Für die Ausnahmebewilligung ist zusätzlich die Zustimmung sämtlicher Miteigentümer erforderlich.",
        },
        {
          title: "Lage und Gebäude prüfen",
          text: "Liegt die Wohnung in einer Wohnzone? Wurden Wohnbaufördermittel verwendet? Wie viele Einheiten im Haus dienen bereits der kurzfristigen Beherbergung?",
        },
        {
          title: "Nutzungsumfang festlegen",
          text: "Geht es um vorübergehendes Home Sharing bei eigenem Wohnsitz oder um eine dauerhafte touristische Nutzung, für die eine Ausnahmebewilligung erforderlich ist?",
        },
        {
          title: "Weitere Pflichten einplanen",
          text: "Brandschutz, Ortstaxe und VIETour, Gästeverzeichnis, Gewerbe- und Steuerfragen sowie die Versicherung der tatsächlichen Nutzung gehören ebenfalls auf die Liste. Einen Überblick gibt die Seite [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien).",
        },
        {
          title: "Vermietungsmodell wählen",
          text: "Erst wenn die rechtliche Ausgangslage klar ist, lohnt sich die wirtschaftliche Frage: Kurzzeitvermietung, mittelfristige Vermietung oder eine andere Nutzung.",
        },
      ],
    },
    {
      type: "p",
      text: "Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten. Wenn Sie wissen möchten, welches Modell für Ihre Eigentumswohnung in Frage kommt, können Sie Ihre [Immobilie prüfen lassen](/kontakt).",
    },
  ],
  faq: [
    {
      q: "Reicht es, wenn die Hausverwaltung keine Einwände hat?",
      a: "Nein. Die Hausverwaltung ist nicht die Eigentümergemeinschaft. Maßgeblich sind der Wohnungseigentumsvertrag, die Widmung und die Rechte der anderen Wohnungseigentümer, dazu die baurechtliche Zulässigkeit gegenüber der Stadt Wien.",
    },
    {
      q: "Gilt die OGH-Entscheidung vom April 2026 auch für meine Wohnung?",
      a: "Das lässt sich nur anhand Ihres Wohnungseigentumsvertrags beurteilen. Der entschiedene Fall betraf eine Liegenschaft, deren Vertrag bereits ausdrückliche Zustimmungen zur kurzfristigen touristischen Vermietung enthielt. Ein allgemeines Recht für jede Eigentumswohnung folgt daraus nicht.",
    },
    {
      q: "Brauche ich trotz Zustimmung der Miteigentümer eine Ausnahmebewilligung?",
      a: "Für eine Nutzung über die beschriebene Ausnahme hinaus grundsätzlich ja. Die Zustimmung der Miteigentümer ist eine Voraussetzung für den Antrag bei der MA 37, ersetzt die Bewilligung aber nicht.",
    },
    {
      q: "Darf ich meine Mietwohnung mit Zustimmung des Vermieters über Airbnb untervermieten?",
      a: "Nicht automatisch. Die Zustimmung des Vermieters betrifft nur das Mietverhältnis. Bauordnung und Gewerberecht gelten unabhängig davon, und ohne entsprechende Berechtigung bringt eine touristische Weitervermietung erhebliche Risiken mit sich.",
    },
  ],
  sources: [
    {
      label: "RIS – OGH 14. April 2026, 5 Ob 45/26t (Dokumentnummer JJT_20260414_OGH0002_0050OB00045_26T0000_000)",
      // VERIFY: RIS-Link anhand der Dokumentnummer prüfen; in docs/facts.md ist nur die Dokumentnummer genannt.
      href: "https://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Justiz&Dokumentnummer=JJT_20260414_OGH0002_0050OB00045_26T0000_000",
      date: "14. April 2026",
    },
    {
      label: "Stadt Wien – Ausnahmebewilligung für Kurzzeitvermietung",
      href: "https://www.wien.gv.at/wohnen/ausnahmebewilligung-kurzzeitvermietung",
      date: "abgerufen 10. Oktober 2026",
    },
  ],
  related: ["airbnb-wien-erlaubt", "ausnahmebewilligung-kurzzeitvermietung-wien", "wohnzonen-wien"],
  image: "entrance",
};
