import type { Guide } from "@/content/types";

/**
 * Ratgeber: Gewerbe oder private Vermietung?
 * Fakten ausschließlich aus docs/facts.md, Abschnitte 10 (Gewerbe, Steuern, Sozialversicherung), 8 (Pflichten im Vergleich)
 * und 6 (Ausnahmebewilligung ersetzt keine gewerberechtlichen Genehmigungen).
 * VERIFY: fachliche Prüfung durch Gewerbebehörde bzw. WKO ausstehend. Es werden keine Bettenzahlen, Schwellenwerte oder
 * Gebühren genannt, die nicht in docs/facts.md belegt sind.
 */
export const gewerbeOesterreich: Guide = {
  slug: "airbnb-gewerbe-oesterreich",
  title: "Gewerbe oder private Vermietung?",
  seoTitle: "Airbnb Gewerbe Österreich: Wann Vermietung gewerblich ist",
  description:
    "Airbnb Gewerbe Österreich: Wann kurzfristige Vermietung als Gewerbe gilt, was die Zehn-Betten-Grenze bedeutet und welche Folgen eine Gewerbeanmeldung hat.",
  category: "Abgaben & Steuern",
  readingMinutes: 7,
  published: "2026-10-13",
  updated: "2026-10-13",
  stand: "Oktober 2026",
  // VERIFY: genaue Bestimmungen der Gewerbeordnung zur Abgrenzung sowie zu Privatzimmervermietung und häuslicher Nebenbeschäftigung bestätigen.
  legalBasis: [
    "Gewerbeordnung: Abgrenzung gewerblicher Tätigkeit nach dem Gesamtbild",
    "Tätigkeiten außerhalb der Gewerbeordnung: Privatzimmervermietung, häusliche Nebenbeschäftigung",
    "§ 129 Abs. 1a Wiener Bauordnung (getrenntes baurechtliches Verfahren)",
  ],
  // VERIFY: Bezeichnung der Gewerbebehörde in Wien bestätigen.
  authority: "Gewerbebehörde (Magistrat der Stadt Wien); Information: WKO",
  reviewed: "Fachliche Prüfung ausstehend",
  intro:
    "Ob eine kurzfristige Vermietung als Gewerbe gilt, lässt sich weder an der Plattform noch an einer einzelnen Zahl ablesen. Entscheidend ist das Gesamtbild der Tätigkeit: wie viele Einheiten und Betten, welche Leistungen rund um den Aufenthalt, wie organisiert der Auftritt nach außen. Dieser Ratgeber erklärt die Abgrenzung und was eine Gewerbeanmeldung mit sich bringt.",
  keyFacts: [
    "Nicht jede kurzfristige Vermietung ist automatisch ein Gewerbebetrieb; die Abgrenzung erfolgt nach dem Gesamtbild der Tätigkeit.",
    "Zum Gesamtbild zählen die Anzahl der Einheiten und Betten, Reinigungsleistungen, Wäscheservice, Verpflegung sowie Organisation und Außenauftritt.",
    "Die Zehn-Betten-Grenze ist bei bestimmten Formen der Privatzimmervermietung relevant; sie bedeutet nicht, dass jede Vermietung unter zehn Betten automatisch gewerbefrei ist.",
    "Die häusliche Nebenbeschäftigung ist an zusätzliche Voraussetzungen gebunden, die im Einzelfall erfüllt sein müssen.",
    "Eine Gewerbeanmeldung ersetzt keine baurechtliche Ausnahmebewilligung der MA 37; beides sind getrennte Verfahren.",
  ],
  body: [
    {
      type: "lead",
      text: "Die Frage, ob eine Vermietung gewerblich ist, wird von Eigentümern meist zu früh beantwortet, und zwar in beide Richtungen. Die einen melden ein Gewerbe an, weil sie es für die sichere Variante halten; die anderen gehen davon aus, dass eine einzelne Wohnung niemals ein Betrieb sein kann. Beides greift zu kurz. Maßgeblich ist das Gesamtbild der Tätigkeit, und das verdient einen genauen Blick, bevor der erste Gast einzieht.",
    },
    { type: "h2", text: "Warum die Einordnung Folgen hat" },
    {
      type: "p",
      text: "Ob eine kurzfristige Vermietung als Gewerbe gilt, wirkt auf mehrere Ebenen gleichzeitig. Gewerberechtlich geht es um die Frage, ob eine Gewerbeanmeldung erforderlich ist. Steuerlich hängt an derselben Beschreibung der Tätigkeit die Einordnung der Einkünfte. Und bei der Sozialversicherung entscheidet sich daran, ob eine gewerbliche oder sonst versicherungspflichtige selbstständige Tätigkeit vorliegt und damit eine Pflichtversicherung bei der SVS entsteht.",
    },
    {
      type: "p",
      text: "Nicht jede kurzfristige Vermietung ist automatisch ein Gewerbebetrieb. Diese Feststellung der Wirtschaftskammer ist der Ausgangspunkt, aber sie ist kein Freibrief. Sie bedeutet lediglich, dass die Antwort von den Umständen abhängt und nicht davon, dass Gäste über eine Plattform buchen oder dass nur eine Wohnung angeboten wird.",
    },
    { type: "h2", text: "Das Gesamtbild: Woran sich die Abgrenzung orientiert" },
    {
      type: "p",
      text: "Die Abgrenzung zwischen privater Vermietung und Gewerbe erfolgt nach dem Gesamtbild der Tätigkeit. Kein einzelnes Merkmal entscheidet für sich; betrachtet wird, wie die Vermietung insgesamt organisiert ist und was den Gästen über die reine Nutzungsüberlassung hinaus geboten wird.",
    },
    {
      type: "table",
      caption: "Merkmale des Gesamtbilds nach den Informationen der WKO",
      head: ["Merkmal", "Worauf es ankommt"],
      rows: [
        ["Anzahl der Einheiten", "Wie viele Wohnungen oder Zimmer werden angeboten?"],
        ["Anzahl der Betten", "Wie viele Gäste können gleichzeitig beherbergt werden?"],
        ["Reinigungsleistungen", "Wird zwischen oder während der Aufenthalte gereinigt, und in welchem Umfang?"],
        ["Wäscheservice", "Werden Bettwäsche und Handtücher gestellt und gewechselt?"],
        ["Verpflegung", "Werden Frühstück oder andere Verpflegungsleistungen angeboten?"],
        ["Organisation und Außenauftritt", "Wie ist der Betrieb organisiert, und wie tritt er nach außen auf?"],
      ],
    },
    {
      type: "p",
      text: "In der Praxis schlagen sich diese Merkmale selten eindeutig auf eine Seite. Eine einzelne Wohnung, die zwischen den Aufenthalten gereinigt wird, zeigt ein anderes Bild als mehrere Apartments mit Wäschewechsel, Frühstücksangebot und eigenem Markenauftritt. Wo genau die Grenze verläuft, ist eine Frage des Einzelfalls und sollte mit der Wirtschaftskammer, der Gewerbebehörde oder einer fachkundigen Beratung geklärt werden, bevor Sie Gäste empfangen.",
    },
    { type: "h2", text: "Die Zehn-Betten-Grenze und die häusliche Nebenbeschäftigung" },
    {
      type: "p",
      text: "In Gesprächen über Airbnb fällt regelmäßig die Zahl zehn: Wer weniger als zehn Betten anbiete, brauche kein Gewerbe. So pauschal stimmt das nicht. Die Zehn-Betten-Grenze ist bei bestimmten Formen der Privatzimmervermietung relevant. Sie bedeutet nicht, dass jede Vermietung mit weniger als zehn Betten automatisch außerhalb der Gewerbeordnung steht.",
    },
    {
      type: "callout",
      tone: "caution",
      title: "Nicht pauschal: Unter zehn Betten ist nicht automatisch gewerbefrei",
      text: "Die Bettenzahl ist ein Merkmal unter mehreren. Wer sich allein auf sie verlässt, übersieht Reinigung, Wäsche, Verpflegung und Außenauftritt, die das Gesamtbild ebenso prägen. Eine Vermietung mit wenigen Betten kann je nach Ausgestaltung gewerblich sein.",
    },
    {
      type: "p",
      text: "Ähnliches gilt für die häusliche Nebenbeschäftigung. Sie ist an zusätzliche Voraussetzungen gebunden, die im Einzelfall erfüllt sein müssen. Ob Ihre Vermietung darunter fällt, lässt sich nicht aus dem Begriff ableiten, sondern nur aus einer Prüfung der tatsächlichen Verhältnisse. Die Informationen der Wirtschaftskammer zu Tätigkeiten außerhalb der Gewerbeordnung sind ein Einstieg; sie ersetzen die Einzelfallprüfung nicht.",
    },
    {
      type: "p",
      text: "Die Zahl zehn begegnet Ihnen in Wien übrigens noch an anderer Stelle: Beim Brandschutz unterscheidet die Baupolizei zwischen bis zu zehn und mehr als zehn touristisch genutzten Betten im Gebäude. Diese Grenze hat mit der gewerberechtlichen Frage nichts zu tun; sie betrifft die bauliche Sicherheit und zählt im Gebäude, nicht in der einzelnen Wohnung. Mehr dazu im Ratgeber [Brandschutz bei Kurzzeitvermietung](/ratgeber/brandschutz-kurzzeitvermietung-wien).",
    },
    { type: "h2", text: "Was eine Gewerbeanmeldung mit sich bringt" },
    {
      type: "p",
      text: "Ergibt die Prüfung, dass eine gewerbliche Tätigkeit vorliegt, ist das Gewerbe bei der Gewerbebehörde anzumelden; in Wien ist das der Magistrat der Stadt Wien. Mit der Anmeldung ist die Tätigkeit nicht nur gewerberechtlich erfasst, sie verändert auch die Einordnung in anderen Bereichen.",
    },
    // VERIFY: Zusammenhang zwischen Gewerbeanmeldung und Kammerzugehörigkeit bei der WKO bestätigen; hier bewusst als offene Frage formuliert.
    {
      type: "ul",
      items: [
        "**Gewerbeanmeldung:** Die Anmeldung bei der Gewerbebehörde, falls nach dem Gesamtbild erforderlich. Welche Unterlagen verlangt werden, sollte vorab bei der Behörde oder der Wirtschaftskammer erfragt werden.",
        "**Wirtschaftskammer:** Ob und in welcher Form mit der Gewerbeanmeldung eine Zugehörigkeit zur Wirtschaftskammer verbunden ist, klären Sie am besten direkt bei der WKO.",
        "**Sozialversicherung:** Eine Pflichtversicherung bei der SVS hängt davon ab, ob eine gewerbliche oder versicherungspflichtige selbstständige Tätigkeit vorliegt. Eine pauschale Beitragsberechnung ist nicht möglich.",
        "**Steuern:** Die Beschreibung der Tätigkeit, die gewerberechtlich zählt, ist auch für die Einkommensteuer maßgeblich. Ob Einkünfte aus Vermietung und Verpachtung oder betriebliche Einkünfte vorliegen, behandelt der Ratgeber [Airbnb-Steuern in Österreich](/ratgeber/airbnb-steuern-oesterreich).",
      ],
    },
    {
      type: "p",
      text: "Umgekehrt gilt: Wer kein Gewerbe anmelden muss, ist damit nicht von allen Pflichten befreit. Ortstaxe, Gästeverzeichnis und die baurechtlichen Voraussetzungen bestehen unabhängig von der gewerberechtlichen Einordnung.",
    },
    { type: "h2", text: "Gewerbe und Baurecht: Zwei getrennte Verfahren" },
    {
      type: "p",
      text: "Ein verbreitetes Missverständnis lautet, eine Gewerbeanmeldung mache die touristische Nutzung einer Wohnung zulässig. Das ist nicht der Fall. Ob eine Wohnung in Wien kurzfristig vermietet werden darf, richtet sich nach der Wiener Bauordnung. Für eine Nutzung über die dort beschriebene Ausnahme hinaus ist grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich, die von der Baupolizei (MA 37) erteilt wird und nicht automatisch erhältlich ist.",
    },
    {
      type: "p",
      text: "Beide Verfahren laufen nebeneinander und ersetzen einander nicht. Nach dem Merkblatt der MA 37 ersetzt die Ausnahmebewilligung nicht automatisch andere bau- oder gewerberechtliche Genehmigungen, und eine Gewerbeanmeldung sagt nichts darüber aus, ob die Wohnung baurechtlich für die kurzfristige Beherbergung genutzt werden darf. Die Stadt Wien führt die Gewerbeanmeldung ausdrücklich als eigene Pflicht neben VIETour-Registrierung, Ausnahmebewilligung und Gästeverzeichnis.",
    },
    {
      type: "table",
      caption: "Was die einzelnen Verfahren klären und was nicht",
      head: ["Verfahren", "Klärt", "Klärt nicht"],
      rows: [
        ["Gewerbeanmeldung (falls erforderlich)", "Gewerberechtliche Erfassung der Tätigkeit", "Baurechtliche Zulässigkeit der touristischen Nutzung"],
        ["[Ausnahmebewilligung der MA 37](/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien)", "Baurechtliche Zulässigkeit, befristet auf höchstens fünf Jahre", "Gewerberechtliche Einordnung, Ortstaxe, Meldepflichten"],
        ["[VIETour-Registrierung](/ratgeber/vietour)", "Ortstaxe und Tourismusstatistik", "Ob die Vermietung überhaupt zulässig ist"],
        ["Gästeverzeichnis", "Meldepflicht für beherbergte Gäste", "Gewerbe- oder baurechtliche Fragen"],
      ],
    },
    { type: "h2", text: "So gehen Sie vor" },
    {
      type: "steps",
      items: [
        {
          title: "Tätigkeit ehrlich beschreiben",
          text: "Einheiten, Betten, Reinigung, Wäsche, Verpflegung, Organisation und Außenauftritt, so wie sie tatsächlich geplant sind, nicht wie sie im Inserat klingen.",
        },
        {
          title: "Gesamtbild einordnen lassen",
          text: "Mit der Wirtschaftskammer, der Gewerbebehörde oder einer fachkundigen Beratung klären, ob eine gewerbliche Tätigkeit vorliegt oder eine Form außerhalb der Gewerbeordnung in Betracht kommt.",
        },
        {
          title: "Folgen mitdenken",
          text: "Steuerliche Einordnung und Sozialversicherung gemeinsam mit der Steuerberatung besprechen, bevor eine Anmeldung erfolgt.",
        },
        {
          title: "Baurecht getrennt prüfen",
          text: "Unabhängig vom Ergebnis klären, ob die Wohnung nach der Wiener Bauordnung touristisch genutzt werden darf und ob eine Ausnahmebewilligung erforderlich ist.",
        },
        {
          title: "Entscheidung dokumentieren",
          text: "Festhalten, auf welcher Grundlage die Einordnung getroffen wurde, und sie überprüfen, sobald sich der Umfang der Vermietung ändert.",
        },
      ],
    },
    {
      type: "p",
      text: "Welche Pflichten insgesamt zur touristischen Vermietung in Wien gehören, fasst die Seite [Kurzzeitvermietung in Wien](/kurzzeitvermietung-wien) zusammen. Goldnest ersetzt keine Rechts- oder Steuerberatung; wir zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten, und besprechen im [Erstgespräch](/kontakt), wie sich die Einordnung auf das Vermietungsmodell Ihrer Immobilie auswirkt.",
    },
  ],
  faq: [
    {
      q: "Brauche ich für eine Airbnb-Wohnung in Wien eine Gewerbeberechtigung?",
      a: "Nicht automatisch. Ob eine kurzfristige Vermietung gewerblich ist, hängt vom Gesamtbild ab: Anzahl der Einheiten und Betten, Reinigung, Wäscheservice, Verpflegung sowie Organisation und Außenauftritt. Die Einordnung sollte im Einzelfall geklärt werden.",
    },
    {
      q: "Gilt die Zehn-Betten-Grenze für jede Vermietung?",
      a: "Nein. Die Zehn-Betten-Grenze ist bei bestimmten Formen der Privatzimmervermietung relevant. Sie bedeutet nicht, dass jede Vermietung mit weniger als zehn Betten automatisch gewerbefrei ist.",
    },
    {
      q: "Was ist mit der häuslichen Nebenbeschäftigung gemeint?",
      a: "Ein Begriff aus dem Bereich der Tätigkeiten außerhalb der Gewerbeordnung. Sie ist an zusätzliche Voraussetzungen gebunden, die im Einzelfall erfüllt sein müssen; aus dem Begriff allein lässt sich keine Gewerbefreiheit ableiten.",
    },
    {
      q: "Ersetzt eine Gewerbeanmeldung die Ausnahmebewilligung der MA 37?",
      a: "Nein. Die Gewerbeanmeldung betrifft die gewerberechtliche Einordnung, die Ausnahmebewilligung die baurechtliche Zulässigkeit nach der Wiener Bauordnung. Beide Verfahren sind getrennt und ersetzen einander nicht.",
    },
    {
      q: "Muss ich mit einer Gewerbeanmeldung automatisch SVS-Beiträge zahlen?",
      a: "Eine SVS-Pflicht hängt davon ab, ob eine gewerbliche oder versicherungspflichtige selbstständige Tätigkeit vorliegt. Nicht jede private Vermietung löst sie aus. Eine pauschale Beitragsberechnung ist ohne Kenntnis der konkreten Tätigkeit nicht möglich.",
    },
  ],
  sources: [
    {
      label: "WKO – Kurzzeitvermietung und Gewerbeanmeldung",
      href: "https://www.wko.at/steuern/kurzzeitvermietung-gewerbeanmeldung",
      date: "September 2026",
    },
    {
      label: "WKO – Tätigkeiten außerhalb der Gewerbeordnung",
      href: "https://www.wko.at/gewerberecht/taetigkeiten-ausserhalb-gewerbeordnung",
    },
    {
      label: "Stadt Wien – Tourismusdaten melden (Pflichten im Vergleich)",
      href: "https://www.wien.gv.at/statistik/tourismus-daten-melden",
      date: "abgerufen 10. Oktober 2026",
    },
    {
      label: "MA 37 – Merkblatt zur Verwendung von Wohnungen für Kurzzeitvermietung",
      href: "https://www.wien.gv.at/pdf/ma37/merkblatt-verwendung-wohnungen-kurzzeitvermietung.pdf",
      date: "April 2025",
    },
  ],
  related: ["airbnb-steuern-oesterreich", "ausnahmebewilligung-kurzzeitvermietung-wien", "brandschutz-kurzzeitvermietung-wien"],
  image: "aboutTeam",
};
