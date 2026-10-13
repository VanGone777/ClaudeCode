import type { FaqItem } from "@/content/types";

export interface FaqGroup {
  id: string;
  title: string;
  items: FaqItem[];
}

/**
 * FAQ content. Legal answers are deliberately short and cautious; where necessary
 * they point to the individual assessment. Facts: see docs/facts.md (Stand Oktober 2026).
 */
export const faqGroups: FaqGroup[] = [
  {
    id: "recht",
    title: "Rechtliche Grundlagen in Wien",
    items: [
      {
        q: "Ist Airbnb in Wien 2026 noch erlaubt?",
        a: "Ja, aber nicht in jeder Wohnung und nicht in jedem Umfang. Seit 1. Juli 2024 gelten in Wien strengere Voraussetzungen für die touristische Kurzzeitvermietung. Ob und wie eine Wohnung kurzfristig vermietet werden darf, hängt von Lage, Widmung, Eigentumssituation und Nutzung ab. Eine Einzelfallprüfung ist deshalb der erste Schritt.",
      },
      {
        q: "Wie funktioniert die 90-Tage-Regel in Wien?",
        a: "Die Stadt Wien beschreibt eine Ausnahme für eine vorübergehende kurzfristige Vermietung von höchstens 90 Tagen pro Kalenderjahr im Zusammenhang mit der Beibehaltung des eigenen Wohnsitzes. Sie ist nicht mit der dauerhaften touristischen Nutzung einer Investmentwohnung gleichzusetzen. Juristische Personen können sich nicht darauf berufen. Für eine darüber hinausgehende Nutzung kann grundsätzlich eine Ausnahmebewilligung nach § 129 Abs. 1a Wiener Bauordnung erforderlich sein.",
      },
      {
        q: "Darf ich meine Eigentumswohnung auf Airbnb vermieten?",
        a: "Nicht allein deshalb, weil Sie Eigentümer sind. Relevant sind die wohnungseigentumsrechtliche Widmung, der Wohnungseigentumsvertrag, bestehende Zustimmungen, die Rechte der anderen Wohnungseigentümer und die öffentlich-rechtlichen Genehmigungen. Diese Punkte sollten vor dem ersten Inserat geklärt werden.",
      },
      {
        q: "Wann benötigt man eine Ausnahmebewilligung?",
        a: "Grundsätzlich dann, wenn eine Wohnung über die beschriebene Ausnahme hinaus touristisch genutzt werden soll. Die Bewilligung nach § 129 Abs. 1a Wiener Bauordnung wird von der Baupolizei (MA 37) für maximal fünf Jahre erteilt, ist an Voraussetzungen gebunden und nicht automatisch erhältlich. Wohnungen in Wohnzonen sind davon ausgenommen.",
      },
      {
        q: "Muss ich die Zustimmung anderer Eigentümer einholen?",
        a: "Für die Ausnahmebewilligung verlangt die Stadt Wien die Zustimmung sämtlicher Grundeigentümer beziehungsweise Miteigentümer. Unabhängig davon kann auch das Wohnungseigentumsrecht Zustimmungen erfordern. Welche genau, hängt vom Wohnungseigentumsvertrag und der Widmung ab.",
      },
      {
        q: "Darf ich eine Wohnung in einer Wiener Wohnzone touristisch vermieten?",
        a: "Für Wohnungen in Wohnzonen wird keine Ausnahmebewilligung für die gewerbliche kurzfristige Beherbergung erteilt. Ob die Ausnahme für vorübergehendes Home Sharing greift, hängt vom konkreten Fall ab. Ob eine Adresse in einer Wohnzone liegt, lässt sich über den Flächenwidmungsplan der Stadt Wien prüfen.",
      },
      {
        q: "Darf ich eine Mietwohnung auf Airbnb untervermieten?",
        a: "Das hängt vom Mietvertrag, einem allfälligen Untervermietungsverbot und der Anwendbarkeit des Mietrechtsgesetzes ab. Eine touristische Weitervermietung ohne entsprechende Berechtigung kann erhebliche rechtliche Risiken auslösen. Auch mit Zustimmung des Vermieters bleiben Bau- und Gewerberecht zu beachten.",
      },
      {
        q: "Welche Brandschutzvorschriften gelten für Airbnb-Wohnungen?",
        a: "Laut Merkblatt der Wiener Baupolizei ist bei bis zu zehn touristisch genutzten Betten im Gebäude eine Erklärung über die Installation unvernetzter Rauchwarnmelder vorzulegen. Bei mehr als zehn Betten im Gebäude können weitergehende Anforderungen nach OIB-Richtlinie 2 erforderlich sein. Entscheidend kann also die Gesamtzahl im Gebäude sein, nicht nur die eigene Wohnung.",
      },
    ],
  },
  {
    id: "abgaben",
    title: "Ortstaxe, Meldungen und Steuern",
    items: [
      {
        q: "Wie hoch ist die Ortstaxe in Wien 2026?",
        a: "Vom 1. Juli 2026 bis 30. Juni 2027 beträgt die Wiener Ortstaxe 5 Prozent, ab 1. Juli 2027 8 Prozent. Die Prozentwerte beziehen sich auf die gesetzliche Bemessungsgrundlage und dürfen nicht einfach mit dem gesamten Buchungsbetrag multipliziert werden. Die Stadt Wien stellt dafür einen Ortstaxerechner bereit.",
      },
      {
        q: "Führt Airbnb die Ortstaxe automatisch ab?",
        a: "Davon sollten Sie nicht automatisch ausgehen. Die Stadt Wien veröffentlicht eine Liste von Plattformen mit Vereinbarungen zur Einhebung der Ortstaxe. Airbnb und Booking.com erscheinen dort derzeit nicht als Vertragspartner. Die tatsächliche Abwicklung sollte für jede Plattform geprüft werden.",
      },
      {
        q: "Was ist VIETour und wie registriere ich mich?",
        a: "VIETour ist die Webanwendung der Stadt Wien für Tourismusstatistik und Ortstaxe. Nach der Benutzerregistrierung bei der Stadt Wien erfolgen Erstregistrierung, Beantragung eines Ortstaxe-Abgabenkontos, Erfassung der Unterkunft, laufende Statistikmeldungen, Berechnung und Abfuhr der Ortstaxe sowie die Jahressteuererklärung. Eine VIETour-Registrierung ersetzt keine baurechtliche Bewilligung.",
      },
      {
        q: "Welche Meldepflichten bestehen für Airbnb-Gäste?",
        a: "Beherbergungsbetriebe müssen ein Gästeverzeichnis führen. Die Anmeldung muss unverzüglich, jedenfalls aber innerhalb von 24 Stunden nach Ankunft erfolgen. Das Gästeverzeichnis darf elektronisch geführt werden.",
      },
      {
        q: "Brauche ich für Airbnb in Wien ein Gewerbe?",
        a: "Nicht jede kurzfristige Vermietung ist automatisch ein Gewerbebetrieb. Die Abgrenzung erfolgt anhand des Gesamtbilds: Anzahl der Einheiten und Betten, Reinigungs- und Wäscheleistungen, Verpflegung, Organisation und Außenauftritt. Die Zehn-Betten-Grenze bedeutet nicht, dass jede Vermietung darunter automatisch gewerbefrei ist. Diese Frage sollte im Einzelfall geklärt werden.",
      },
      {
        q: "Welche Steuern fallen bei Airbnb-Einnahmen an?",
        a: "Einnahmen aus der Vermietung können einkommensteuerpflichtig sein. Bei der Umsatzsteuer gilt seit 2025 eine Kleinunternehmergrenze von 55.000 Euro; bei steuerpflichtigen Beherbergungsleistungen kommt grundsätzlich der ermäßigte Satz von 10 Prozent in Betracht. Auch Kleinunternehmer können durch grenzüberschreitende Plattformgebühren umsatzsteuerliche Pflichten haben. Die konkrete Einordnung gehört zu Ihrer Steuerberatung.",
      },
      {
        q: "Muss ich für Airbnb-Einnahmen Sozialversicherung bezahlen?",
        a: "Ob eine Pflichtversicherung bei der SVS entsteht, hängt davon ab, ob eine gewerbliche oder andere versicherungspflichtige selbstständige Tätigkeit vorliegt. Nicht jede private Vermietung löst automatisch eine SVS-Pflicht aus. Eine pauschale Beitragsberechnung ist ohne Kenntnis der konkreten Tätigkeit nicht seriös.",
      },
      {
        q: "Welche Daten übermittelt Airbnb an die Stadt Wien?",
        a: "Online-Vermittlungsplattformen müssen aufgrund landesrechtlicher Vorschriften bestimmte Identifikations- und Kontaktdaten von Unterkunftgebern sowie Unterkunftsadressen an die Stadt Wien melden. Die Annahme, die Stadt wisse nichts von einer Vermietung über eine Plattform, ist nicht belastbar.",
      },
    ],
  },
  {
    id: "zusammenarbeit",
    title: "Zusammenarbeit mit Goldnest",
    items: [
      {
        q: "Was übernimmt Goldnest?",
        a: "Goldnest prüft zunächst, welches Vermietungsmodell für Ihre Immobilie rechtlich möglich und wirtschaftlich sinnvoll ist. Anschließend übernehmen wir die Umsetzung: Positionierung und Inserate, Pricing, Gästekommunikation, Check-in, Reinigungskoordination, Qualitätskontrolle, laufende Betreuung und ein nachvollziehbares Eigentümer-Reporting.",
      },
      {
        q: "Was kostet eine Airbnb-Verwaltung in Wien?",
        a: "Die Vergütung hängt von Objekt, Leistungsumfang und Vermietungsmodell ab. International genannte Provisionsspannen sind kein Wiener Preisvergleich. Wir legen im Erstgespräch offen, worauf sich unsere Vergütung bezieht, welche Leistungen enthalten sind und welche Kosten daneben entstehen, etwa Reinigung oder Plattformgebühren.",
      },
      {
        q: "Lohnt sich eine Airbnb-Agentur für eine einzelne Wohnung?",
        a: "Das hängt von Lage, Wohnungstyp, Ihrem eigenen Zeitaufwand und dem rechtlich zulässigen Vermietungsumfang ab. Wir sehen uns die Ausgangslage an und sagen auch, wenn eine mittelfristige Vermietung oder eine andere Lösung für Sie sinnvoller ist.",
      },
      {
        q: "Kann ich meine Wohnung weiterhin selbst nutzen?",
        a: "Eigennutzungszeiten lassen sich grundsätzlich im Belegungskalender berücksichtigen. Wie flexibel das möglich ist, hängt vom Vermietungsmodell und der Planung ab und wird im Erstgespräch abgestimmt.",
      },
      {
        q: "Ist mittelfristige Vermietung eine Alternative zu Airbnb?",
        a: "Ja. Möblierte Vermietung für Wochen- oder Monatsaufenthalte, etwa an Projektmitarbeiter oder Relocation-Gäste, kann eine Alternative sein, wenn touristische Kurzzeitvermietung rechtlich nicht möglich oder wirtschaftlich nicht sinnvoll ist. Auch hier sind Mietrecht und Steuern zu beachten.",
      },
      {
        q: "Was unterscheidet Co-Hosting von vollständiger Verwaltung?",
        a: "Beim Co-Hosting übernimmt Goldnest definierte Teilbereiche, etwa Gästekommunikation, Pricing oder die Koordination der Reinigung, während Sie andere Aufgaben selbst behalten. Bei der vollständigen Verwaltung verantworten wir den gesamten Betrieb.",
      },
      {
        q: "Wie starte ich mit Goldnest?",
        a: "Mit einem Erstgespräch. Sie beschreiben uns Ihre Immobilie und Ihre Ziele, wir sehen uns Lage, Ausstattung, Nutzungsmöglichkeiten und operative Anforderungen an. Danach besprechen wir, welches Modell sinnvoll sein könnte und wie die Zusammenarbeit konkret aussieht.",
      },
      {
        q: "Wie funktioniert die monatliche Eigentümerabrechnung?",
        a: "Sie erhalten eine nachvollziehbare Aufstellung von Einnahmen, Kosten und Kennzahlen Ihres Apartments. Welche Positionen enthalten sind und in welchem Rhythmus abgerechnet wird, legen wir vor Beginn der Zusammenarbeit fest.",
      },
    ],
  },
  {
    id: "objekte",
    title: "Zinshäuser, Pensionen und Hotels",
    items: [
      {
        q: "Kann ich ein ganzes Zinshaus touristisch vermieten?",
        a: "Nicht automatisch. Die Voraussetzungen der Stadt Wien sehen unter anderem vor, dass die Mehrheit der Wohnungen im Gebäude Wohnzwecken gewidmet bleibt und höchstens 50 % der Nutzungseinheiten der gewerblichen kurzfristigen Beherbergung dienen. Ob und in welchem Umfang das bei Ihrem Haus möglich ist, wird im Einzelfall geprüft.",
      },
      {
        q: "Betreut Goldnest auch ganze Zinshäuser?",
        a: "Ja. Wir erarbeiten ein Nutzungskonzept für das Gebäude, ordnen Einheiten kurzfristiger, mittelfristiger oder dauerhafter Vermietung zu und übernehmen den Betrieb der vermieteten Einheiten. Die rechtliche Prüfung steht am Anfang.",
      },
      {
        q: "Betreut Goldnest Pensionen und Hotels?",
        a: "Wir unterstützen Eigentümer und Betreiber bei Bereichen wie Gästekommunikation, Pricing, Vertrieb, Housekeeping-Organisation, Meldewesen und Reporting. Welchen Umfang wir übernehmen, hängt vom Betrieb und den rechtlichen Voraussetzungen ab und wird vor Beginn schriftlich festgelegt.",
      },
      {
        q: "Zählt bei der Zahl der Betten das ganze Haus?",
        a: "Für den Brandschutz kann die Gesamtzahl der touristisch genutzten Betten im Gebäude entscheidend sein. Bis zu zehn Betten erfordern laut Merkblatt der Baupolizei eine Erklärung über unvernetzte Rauchwarnmelder, bei mehr als zehn können weitergehende Anforderungen gelten.",
      },
      {
        q: "Brauche ich für eine Pension oder ein Hotel ein Gewerbe?",
        a: "Der Betrieb von Pensionen und Hotels wird in der Regel gewerblich geführt. Welche Berechtigung erforderlich ist, sollten Sie im Einzelfall mit der Wirtschaftskammer oder Ihrer Beratung klären.",
      },
    ],
  },
  {
    id: "praxis",
    title: "Praktische Fragen",
    items: [
      {
        q: "Wie viel kann ich mit meiner Wohnung in Wien verdienen?",
        a: "Das lässt sich seriös nur für die konkrete Wohnung beantworten. Marktdaten, etwa eine durchschnittliche Auslastung von 66 Prozent in Wien laut AirDNA im September 2026, sind Indikatoren und keine Prognose für ein einzelnes Objekt. Lage, Größe, Ausstattung, Bewertungen, Saisonalität und der rechtlich zulässige Vermietungsumfang entscheiden.",
      },
      {
        q: "Welche Auslastung ist in Wien realistisch?",
        a: "AirDNA weist für Wien im September 2026 eine durchschnittliche Auslastung von 66 Prozent aus. Für ein einzelnes Apartment kann der Wert deutlich darüber oder darunter liegen. Wir arbeiten deshalb mit Szenarien statt mit Versprechen.",
      },
      {
        q: "Wie funktioniert ein automatisierter Check-in?",
        a: "In der Regel über ein elektronisches Schloss oder eine kontrollierte Schlüsselübergabe mit zeitlich begrenzten Zugangscodes. Im Wiener Altbau sind Hauseingang und Wohnungstür getrennt zu betrachten. Welche Lösung passt, hängt von Tür, Haus und Hausordnung ab.",
      },
      {
        q: "Wie werden die Übernachtungspreise festgelegt?",
        a: "Anhand von Nachfrage, Saison, Veranstaltungen, Buchungsvorlauf und den Eigenschaften des Objekts. Ziel ist eine wirtschaftlich sinnvolle Preisgestaltung, nicht der höchstmögliche Preis um jeden Preis.",
      },
      {
        q: "Wie vermeide ich Doppelbuchungen auf Airbnb und Booking.com?",
        a: "Durch eine zentrale Kalendersynchronisierung über ein Verwaltungssystem, das alle Plattformen in Echtzeit abgleicht. Das gehört zur Grundausstattung einer professionellen Verwaltung.",
      },
      {
        q: "Wer bezahlt Schäden durch Gäste?",
        a: "Das hängt vom Einzelfall, den Plattformbedingungen und Ihrem Versicherungsschutz ab. Plattformseitige Schutzprogramme sollten nicht als Ersatz für eine geeignete Versicherung betrachtet werden. Wir dokumentieren den Zustand des Apartments und begleiten die Abwicklung.",
      },
      {
        q: "Welche Versicherung brauche ich als Airbnb-Vermieter?",
        a: "Prüfen Sie mit Ihrer Versicherung, ob Gebäude-, Haushalts- beziehungsweise Inventar- und Haftpflichtversicherung die tatsächliche touristische Nutzung decken. Pauschale Aussagen über garantierte Deckungen sind nicht seriös.",
      },
      {
        q: "Wie erkenne ich eine seriöse Airbnb-Agentur in Wien?",
        a: "An klaren Antworten zur Rechtslage, transparenter Abrechnung, dokumentierten Kosten, persönlichen Ansprechpartnern und daran, dass sie keine Ertragsgarantien ausspricht.",
      },
    ],
  },
];

/** Central questions shown on the homepage. */
export const homeFaqQuestions = [
  "Ist Airbnb in Wien 2026 noch erlaubt?",
  "Wie funktioniert die 90-Tage-Regel in Wien?",
  "Darf ich meine Eigentumswohnung auf Airbnb vermieten?",
  "Wann benötigt man eine Ausnahmebewilligung?",
  "Muss ich die Zustimmung anderer Eigentümer einholen?",
  "Wie hoch ist die Ortstaxe in Wien 2026?",
  "Brauche ich für Airbnb in Wien ein Gewerbe?",
  "Was kostet eine Airbnb-Verwaltung in Wien?",
  "Was übernimmt Goldnest?",
  "Kann ich ein ganzes Zinshaus touristisch vermieten?",
  "Ist mittelfristige Vermietung eine Alternative zu Airbnb?",
  "Wie starte ich mit Goldnest?",
];

export const allFaq: FaqItem[] = faqGroups.flatMap((g) => g.items);

export const homeFaq: FaqItem[] = homeFaqQuestions
  .map((q) => allFaq.find((item) => item.q === q))
  .filter((item): item is FaqItem => Boolean(item));
