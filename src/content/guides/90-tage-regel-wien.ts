import type { Guide } from "@/content/types";

/**
 * Ratgeber: 90-Tage-Regel in Wien.
 * Fakten ausschließlich aus docs/facts.md (§5, §6, §7, §8, §9), Stand Oktober 2026.
 * VERIFY: fachliche Prüfung durch Rechtsberatung ausstehend (siehe `reviewed`).
 */
export const neunzigTageRegelWien: Guide = {
  slug: "90-tage-regel-wien",
  title: "Die 90-Tage-Regel in Wien verständlich erklärt",
  seoTitle: "Airbnb 90-Tage-Regel Wien: Was die Ausnahme bedeutet",
  description:
    "Airbnb 90 Tage Regel Wien: Die Ausnahme gilt bei Beibehaltung des eigenen Wohnsitzes, nicht für jede Wohnung. Wer sich darauf berufen kann und was sonst gilt.",
  category: "Recht",
  readingMinutes: 7,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  legalBasis: ["Wiener Bauordnung (Fassung seit 1. Juli 2024)", "§ 129 Abs. 1a Wiener Bauordnung"],
  authority: "Baupolizei der Stadt Wien (MA 37)",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Kaum eine Regel wird in Wien so oft zitiert und so oft missverstanden wie die 90-Tage-Regel. Sie ist keine allgemeine Erlaubnis, jede Wohnung 90 Tage im Jahr touristisch zu vermieten, sondern eine eng gefasste Ausnahme. Dieser Ratgeber erklärt, worauf sie sich bezieht, wer sich darauf berufen kann und was darüber hinaus gilt.",
  keyFacts: [
    "Die Stadt Wien beschreibt die Ausnahme für eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr ausdrücklich im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes.",
    "Juristische Personen können sich nicht auf diese Ausnahme berufen, da sie keinen Wohnsitz haben.",
    "Die Aussage „Jede Wohnung darf 90 Tage vermietet werden“ ist in dieser Pauschalität nicht richtig.",
    "Für eine darüber hinausgehende Nutzung ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich, die für maximal fünf Jahre erteilt werden kann und nicht automatisch erhältlich ist.",
    "Ortstaxe, VIETour-Registrierung und Gästeverzeichnis gelten unabhängig von der Anzahl der Vermietungstage.",
  ],
  body: [
    { type: "h2", text: "Worauf sich die 90-Tage-Regel tatsächlich bezieht" },
    {
      type: "p",
      text: "Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für die touristische Kurzzeitvermietung von Wohnungen. In diesem Rahmen beschreibt die Stadt Wien eine Ausnahme: Eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr wird ausdrücklich im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes genannt. Der Kern der Regel ist also nicht die Zahl 90, sondern der eigene Wohnsitz.",
    },
    {
      type: "p",
      text: "Gemeint ist die Situation, in der jemand in der Wohnung lebt und sie zeitweise an Gäste überlässt, etwa während eines Urlaubs, einer Dienstreise oder eines längeren Auslandsaufenthalts, und anschließend wieder selbst dort wohnt. Die Stadt bezeichnet diesen Fall als gelegentliches Home Sharing und grenzt ihn ausdrücklich von der dauerhaften touristischen Nutzung einer Investmentwohnung ab.",
    },
    {
      type: "p",
      text: "Die Zahl 90 beschreibt die Obergrenze dieser Ausnahme je Kalenderjahr. Sie begründet keinen eigenständigen Anspruch für Wohnungen, die gar nicht als Wohnsitz genutzt werden.",
    },

    { type: "h2", text: "Was die Regel nicht bedeutet" },
    {
      type: "callout",
      tone: "caution",
      title: "Nicht pauschal: „Jede Wohnung darf 90 Tage vermietet werden“",
      text: "Diese verbreitete Formulierung verkürzt die Regel in einer Weise, die zu falschen Entscheidungen führt. Die Ausnahme setzt die Beibehaltung des eigenen Wohnsitzes voraus. Eine leerstehende Zweitwohnung, eine Anlegerwohnung oder eine Wohnung, die ausschließlich für Gäste eingerichtet wurde, fällt nicht schon deshalb unter die Ausnahme, weil sie an weniger als 90 Tagen im Jahr belegt ist.",
    },
    {
      type: "p",
      text: "Drei Missverständnisse begegnen uns in Gesprächen mit Eigentümern besonders häufig:",
    },
    {
      type: "ul",
      items: [
        "**Die Wohnung als Zählwerk.** Die Ausnahme knüpft nicht an die Wohnung als solche, sondern an die Beibehaltung des eigenen Wohnsitzes an. Ob das bei einer Zweit- oder Anlegerwohnung erfüllt ist, lässt sich nicht pauschal bejahen und ist im Einzelfall zu prüfen.",
        "**Die GmbH als Vermieterin.** Juristische Personen können sich nicht auf die Ausnahme berufen, da sie keinen Wohnsitz haben. Ist eine Gesellschaft Eigentümerin, kommt für eine touristische Nutzung baurechtlich grundsätzlich nur die Ausnahmebewilligung in Betracht.",
        "**Die 90 Tage als Freibrief.** Auch innerhalb der Ausnahme bleiben Ortstaxe, VIETour-Registrierung, Gästeverzeichnis sowie die Rechte anderer Wohnungseigentümer beziehungsweise des Vermieters zu beachten.",
      ],
    },

    { type: "h2", text: "Wer sich auf die Ausnahme berufen kann" },
    {
      type: "p",
      text: "Die Stadt Wien beschreibt die Ausnahme im Zusammenhang mit dem eigenen Wohnsitz. Daraus ergeben sich zwei Gruppen: natürliche Personen, die in der Wohnung ihren Wohnsitz haben und diesen beibehalten, auf der einen Seite; juristische Personen auf der anderen Seite, die keinen Wohnsitz haben und sich daher nicht auf die Ausnahme berufen können. Dazwischen liegen Konstellationen, die nur im Einzelfall beurteilt werden können.",
    },
    {
      type: "table",
      caption: "Vereinfachte Übersicht auf Basis der Beschreibung der Stadt Wien; keine Rechtsberatung.",
      head: ["Konstellation", "Ausnahme laut Stadt Wien", "Was sonst gilt"],
      rows: [
        [
          "Eigene Wohnung, Wohnsitz bleibt bestehen, vorübergehende Vermietung bis 90 Tage pro Kalenderjahr",
          "Grundsätzlich von der Ausnahme erfasst",
          "Ortstaxe, VIETour, Gästeverzeichnis; zivilrechtliche Zustimmungen",
        ],
        [
          "Wohnung ohne eigenen Wohnsitz, etwa Anleger- oder Zweitwohnung",
          "Nicht pauschal erfasst; Einzelfall",
          "Für eine touristische Nutzung grundsätzlich Ausnahmebewilligung erforderlich",
        ],
        [
          "Eigentümerin ist eine juristische Person, etwa eine GmbH",
          "Nicht erfasst, da kein Wohnsitz",
          "Grundsätzlich Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung",
        ],
        [
          "Mehr als 90 Tage pro Kalenderjahr",
          "Nicht erfasst",
          "Grundsätzlich Ausnahmebewilligung erforderlich",
        ],
      ],
    },

    { type: "h2", text: "Was über 90 Tage hinaus gilt" },
    {
      type: "p",
      text: "Für eine über die Ausnahme hinausgehende Nutzung ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich. Sie wird von der Baupolizei der Stadt Wien (MA 37) über das Onlineverfahren der Stadt beantragt, kann für maximal fünf Jahre erteilt werden und ist nicht automatisch erhältlich. Die Bewilligung setzt unter anderem voraus, dass die Wohnung nicht in einer Wohnzone liegt, keine Wohnbaufördermittel für die Errichtung verwendet wurden, die Mehrheit der Wohnungen im Gebäude Wohnzwecken gewidmet bleibt und höchstens 50 % der Nutzungseinheiten der gewerblichen kurzfristigen Beherbergung dienen.",
    },
    {
      type: "p",
      text: "Besonders wichtig: In Wohnzonen wird keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt. Wer dort eine Wohnung dauerhaft touristisch nutzen möchte, hat baurechtlich keinen Weg über die Bewilligung. Wie Wohnzonen funktionieren, erläutert der Ratgeber [Kurzzeitvermietung in Wiener Wohnzonen](/ratgeber/wohnzonen-wien); den Antrag selbst beschreibt der Ratgeber zur [Ausnahmebewilligung für Kurzzeitvermietung](/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien).",
    },
    {
      type: "p",
      text: "Mit dem Nutzungsumfang wächst auch die Bedeutung des Brandschutzes. Nach dem Merkblatt der MA 37 ist bei bis zu zehn touristisch genutzten Betten im Gebäude eine Erklärung über die Installation unvernetzter Rauchwarnmelder vorzulegen; bei mehr als zehn Betten im Gebäude können weitergehende Anforderungen nach OIB-Richtlinie 2, Punkt 7.3, erforderlich sein. Entscheidend kann die Gesamtzahl der touristischen Betten im Gebäude sein, nicht nur in der eigenen Wohnung.",
    },

    { type: "h2", text: "Was innerhalb der 90 Tage trotzdem zu beachten ist" },
    {
      type: "p",
      text: "Die Ausnahme betrifft die baurechtliche Zulässigkeit. Sie befreit nicht von den übrigen Pflichten, die für entgeltliche Beherbergung in Wien gelten:",
    },
    {
      type: "ul",
      items: [
        "**Ortstaxe:** Vom 1. Juli 2026 bis 30. Juni 2027 beträgt sie 5 % der gesetzlichen Bemessungsgrundlage, ab 1. Juli 2027 8 %. Berechnung und Zahlung erfolgen monatlich bis zum 15. des Folgemonats. Mehr dazu im Ratgeber [Ortstaxe in Wien](/ratgeber/ortstaxe-wien).",
        "**VIETour:** Unterkunftgeber registrieren sich in der Webanwendung der Stadt Wien, beantragen ein Ortstaxe-Abgabenkonto und melden die Tourismusstatistik. Siehe [VIETour](/ratgeber/vietour).",
        "**Gästeverzeichnis:** Gäste sind unverzüglich, jedenfalls innerhalb von 24 Stunden nach Ankunft, anzumelden. Siehe [Gästeverzeichnis und Meldepflicht](/ratgeber/gaesteverzeichnis-meldepflicht).",
        "**Eigentum und Miete:** Die wohnungseigentumsrechtliche Widmung, der Wohnungseigentumsvertrag und die Rechte anderer Eigentümer beziehungsweise der Mietvertrag und ein allfälliges Untervermietungsverbot bleiben unberührt.",
      ],
    },
    {
      type: "p",
      text: "Dazu kommt die Frage, ob eine Tätigkeit nach ihrem Gesamtbild bereits als Gewerbe einzuordnen ist und wie Einnahmen steuerlich zu behandeln sind. Beides ist eine Frage des Einzelfalls und gehört zur Steuerberatung.",
    },

    { type: "h2", text: "Einordnung für Eigentümer" },
    {
      type: "p",
      text: "Für Eigentümer, die in ihrer Wohnung leben und sie gelegentlich an Gäste überlassen möchten, ist die Ausnahme ein praktikabler Rahmen. Für Eigentümer einer Investmentwohnung ist sie es in der Regel nicht. Wer eine Wohnung dauerhaft touristisch nutzen möchte, sollte daher nicht mit 90 Tagen kalkulieren, sondern zuerst klären, ob eine Ausnahmebewilligung überhaupt in Betracht kommt. Ist das nicht der Fall, kann die [mittelfristige Vermietung](/leistungen/mittelfristige-vermietung) ein Modell sein, dessen rechtliche Zulässigkeit im Einzelfall gesondert zu prüfen ist.",
    },
    {
      type: "p",
      text: "Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten. Einen Überblick aller Themen bietet die Seite [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien); für ein Gespräch über Ihre konkrete Wohnung erreichen Sie uns über das [Kontaktformular](/kontakt).",
    },
  ],
  faq: [
    {
      q: "Darf ich meine Wohnung in Wien 90 Tage im Jahr auf Airbnb vermieten?",
      a: "Nicht pauschal. Die Stadt Wien beschreibt die Ausnahme für höchstens 90 Tage pro Kalenderjahr im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes. Ob Ihre Situation darunter fällt, hängt davon ab, ob Sie in der Wohnung wohnen und diesen Wohnsitz beibehalten.",
    },
    {
      q: "Gilt die 90-Tage-Regel auch für eine GmbH?",
      a: "Nein. Juristische Personen können sich nicht auf die Ausnahme berufen, da sie keinen Wohnsitz haben. Für eine touristische Nutzung kommt baurechtlich grundsätzlich nur eine Ausnahmebewilligung in Betracht.",
    },
    {
      q: "Was gilt, wenn ich mehr als 90 Tage vermieten möchte?",
      a: "Dann ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich. Sie wird von der MA 37 für maximal fünf Jahre erteilt, ist an Voraussetzungen gebunden und in Wohnzonen nicht erhältlich.",
    },
    {
      q: "Muss ich innerhalb der 90 Tage Ortstaxe zahlen?",
      a: "Ja, soweit keine gesetzliche Ausnahme greift. Die Ortstaxe betrifft entgeltliche Aufenthalte unabhängig von der Anzahl der Vermietungstage; Unterkunftgeber sind für die Abwicklung verantwortlich.",
    },
    {
      q: "Gilt die 90-Tage-Regel auch in Wohnzonen?",
      a: "Ob die von der Stadt Wien beschriebene Ausnahme für vorübergehendes Home Sharing in einer Wohnzone greift, hängt vom konkreten Fall ab. Sicher ist, dass in Wohnzonen keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt wird; eine Nutzung über die Ausnahme hinaus scheidet dort baurechtlich aus.",
    },
  ],
  sources: [
    {
      label: "Stadt Wien: Ausnahmebewilligung für Kurzzeitvermietung",
      href: "https://www.wien.gv.at/wohnen/ausnahmebewilligung-kurzzeitvermietung",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "MA 37: Merkblatt zur Verwendung von Wohnungen für Kurzzeitvermietung (PDF)",
      href: "https://www.wien.gv.at/pdf/ma37/merkblatt-verwendung-wohnungen-kurzzeitvermietung.pdf",
      date: "April 2025",
    },
    {
      label: "Stadt Wien: Ortstaxe",
      href: "https://www.wien.gv.at/amtswege/ortstaxe",
      date: "abgerufen 10. Oktober 2026",
    },
  ],
  related: ["ausnahmebewilligung-kurzzeitvermietung-wien", "wohnzonen-wien", "airbnb-wien-erlaubt"],
  image: "legalFacade",
};
