import type { ServiceDetail } from "@/content/types";

/**
 * Object-type pages: whole apartment buildings (Zinshäuser), Pensionen, Hotels.
 * Facts: see docs/facts.md (Stand Oktober 2026). No Goldnest references, prices or results are claimed.
 *
 * VERIFY: Goldnest must confirm which services it actually offers for Pensionen and Hotels
 * (Betriebsführung, Pacht, Management-Vertrag, nur Revenue/Distribution?) and which Gewerbeberechtigung
 * for Beherbergungsbetriebe is held or provided by partners, before these pages go live.
 */

export const zinshaus: ServiceDetail = {
  slug: "zinshaus-verwaltung-wien",
  title: "Ganze Zinshäuser professionell betreiben",
  seoTitle: "Zinshaus Kurzzeitvermietung Wien: ganze Häuser betreuen",
  description:
    "Goldnest prüft für ganze Wiener Zinshäuser, welche Einheiten touristisch, mittelfristig oder dauerhaft vermietet werden können, und übernimmt den Betrieb.",
  eyebrow: "Zinshäuser",
  intro:
    "Ein Zinshaus ist kein großes Apartment. Rechtlich zählt das Gebäude, wirtschaftlich zählt jede Einheit. Goldnest erarbeitet ein Nutzungskonzept für das ganze Haus und übernimmt anschließend den laufenden Betrieb.",
  includes: [
    {
      title: "Rechtliche Prüfung auf Gebäudeebene",
      text: "Wohnzone, Widmung, Anteil der Nutzungseinheiten, Eigentümer- und Mietverhältnisse und die Bettenzahl im Gebäude werden vor jeder Entscheidung zusammengetragen.",
    },
    {
      title: "Nutzungskonzept je Einheit",
      text: "Welche Wohnungen kurzfristig, mittelfristig oder dauerhaft vermietet werden, wird wirtschaftlich und rechtlich eingeordnet und mit Ihnen abgestimmt.",
    },
    {
      title: "Brandschutz und Bettenzahl",
      text: "Wir stellen die Gesamtzahl der touristisch genutzten Betten im Gebäude zusammen, denn sie entscheidet über die brandschutztechnischen Anforderungen.",
    },
    {
      title: "Einheitliche Positionierung",
      text: "Inserate, Ausstattung und Preise werden für das ganze Haus abgestimmt, damit Einheiten einander nicht Konkurrenz machen.",
    },
    {
      title: "Zentraler Betrieb",
      text: "Gästekommunikation, Check-in, Reinigung, Wäsche und Qualitätskontrolle laufen für alle Einheiten über feste Abläufe und ein Team.",
    },
    {
      title: "Reporting je Einheit und je Haus",
      text: "Einnahmen, Kosten und Kennzahlen werden pro Wohnung und für das Gebäude insgesamt nachvollziehbar dargestellt.",
    },
    {
      title: "Abstimmung mit Hausverwaltung und Miteigentümern",
      text: "Wir bereiten Unterlagen und Gespräche vor, die für Zustimmungen, Hausordnung und Zutritt erforderlich sind.",
    },
  ],
  forWhom: [
    "Eigentümer ganzer Zinshäuser in Wien",
    "Investoren vor dem Ankauf eines Zinshauses",
    "Erbengemeinschaften und Familien mit Bestandsobjekten",
    "Bauträger mit Einheiten, die nicht verkauft wurden",
  ],
  body: [
    { type: "lead", text: "Bei einer einzelnen Wohnung genügt es, die Wohnung zu prüfen. Bei einem Zinshaus muss das Gebäude als Ganzes betrachtet werden." },
    { type: "h2", text: "Warum das Gebäude die Prüfeinheit ist" },
    {
      type: "p",
      text: "Die Stadt Wien knüpft die Ausnahmebewilligung für Kurzzeitvermietung unter anderem daran, dass die Mehrheit der Wohnungen im Gebäude Wohnzwecken gewidmet bleibt und höchstens 50 % der Nutzungseinheiten der gewerblichen kurzfristigen Beherbergung dienen. Zusätzlich werden eine Aufstellung der Nutzungseinheiten im Gebäude und Angaben zu den touristisch genutzten Betten verlangt.",
    },
    {
      type: "callout",
      tone: "caution",
      title: "Nicht jedes Zinshaus lässt sich vollständig touristisch nutzen",
      text: "Aus diesen Voraussetzungen kann folgen, dass sich ein Zinshaus nur anteilig touristisch betreiben lässt. Ob und in welchem Umfang das möglich ist, hängt von Widmung, Lage, Förderungen und bestehenden Nutzungen ab und muss im Einzelfall geprüft werden.",
    },
    { type: "h2", text: "Mischmodelle statt Alles-oder-nichts" },
    {
      type: "p",
      text: "Wirtschaftlich sinnvoll ist oft eine Kombination. Welche Modelle für einzelne Einheiten in Frage kommen, ordnen wir gemeinsam mit Ihnen ein.",
    },
    {
      type: "table",
      head: ["Modell", "Typische Eignung", "Zu klären"],
      rows: [
        ["Touristische Kurzzeitvermietung (anteilig)", "Einheiten, für die Voraussetzungen und Bewilligung vorliegen", "Ausnahmebewilligung, Anteil der Nutzungseinheiten, Bettenzahl im Gebäude"],
        ["Mittelfristige Vermietung", "Möblierte Einheiten für Aufenthalte über Wochen und Monate", "Mietrecht und Steuern im Einzelfall, siehe [mittelfristige Vermietung](/leistungen/mittelfristige-vermietung)"],
        ["Dauerhafte Vermietung", "Einheiten ohne touristische Nutzung", "Bestehende Mietverträge, Zustand, Erhaltungsaufwand"],
        ["Beherbergungsbetrieb", "Häuser mit passender Widmung und Betriebsform", "Baurechtliche Zulässigkeit, Gewerbeberechtigung, Brandschutz, siehe [Hotels](/objekte/hotel-management-wien) und [Pensionen](/objekte/pension-betrieb-wien)"],
      ],
    },
    { type: "h2", text: "Brandschutz hängt an der Gesamtzahl der Betten" },
    {
      type: "p",
      text: "Laut Merkblatt der Wiener Baupolizei ist bei bis zu zehn touristisch genutzten Betten im Gebäude eine Erklärung über die Installation unvernetzter Rauchwarnmelder vorzulegen. Bei mehr als zehn Betten im Gebäude können weitergehende Anforderungen nach OIB-Richtlinie 2 erforderlich sein. In einem Zinshaus mit mehreren Einheiten ist die Schwelle deshalb schnell erreicht. Mehr dazu im [Ratgeber zum Brandschutz](/ratgeber/brandschutz-kurzzeitvermietung-wien).",
    },
    { type: "h2", text: "Vor dem Ankauf prüfen" },
    {
      type: "p",
      text: "Wer ein Zinshaus für eine touristische Nutzung kaufen möchte, sollte vor der Entscheidung klären, ob das Gebäude in einer Wohnzone liegt, ob Wohnbaufördermittel in Anspruch genommen wurden, wie viele Einheiten bereits vermietet sind und welche Zustimmungen erforderlich wären. Goldnest unterstützt diese Einschätzung mit einer strukturierten Objektprüfung. Sie ersetzt keine Rechts- oder Steuerberatung.",
    },
    {
      type: "p",
      text: "Der erste Schritt ist ein Gespräch über Ihr Haus. Über das [Kontaktformular](/kontakt) können Sie Adresse, Zahl der Einheiten und aktuelle Nutzung angeben.",
    },
  ],
  faq: [
    {
      q: "Kann ich ein ganzes Zinshaus touristisch vermieten?",
      a: "Nicht automatisch. Die Voraussetzungen der Stadt Wien beziehen sich auch auf das Gebäude, etwa auf den Anteil der Nutzungseinheiten, die der gewerblichen kurzfristigen Beherbergung dienen dürfen. Ob und in welchem Umfang das bei Ihrem Haus möglich ist, wird im Einzelfall geprüft.",
    },
    {
      q: "Was passiert mit bestehenden Mietverhältnissen?",
      a: "Bestehende Mietverhältnisse bleiben zu beachten. Welche Möglichkeiten und Pflichten sich daraus ergeben, hängt vom Mietvertrag und vom Mietrecht ab und sollte rechtlich geklärt werden, bevor Konzepte umgesetzt werden.",
    },
    {
      q: "Welche Rolle spielt die Zahl der Betten im Haus?",
      a: "Bis zu zehn touristisch genutzte Betten im Gebäude erfordern laut Merkblatt der Baupolizei eine Erklärung über unvernetzte Rauchwarnmelder. Bei mehr als zehn Betten im Gebäude können weitergehende Anforderungen gelten.",
    },
    {
      q: "Übernimmt Goldnest auch die Hausverwaltung?",
      a: "Goldnest betreut den Betrieb der vermieteten Einheiten. Die klassische Hausverwaltung im Sinn des Wohnrechts ist davon getrennt. Wie wir mit Ihrer Hausverwaltung zusammenarbeiten, klären wir im Erstgespräch.",
    },
  ],
  image: "zinshaus",
  related: ["airbnb-verwaltung", "mittelfristige-vermietung", "reporting"],
};

export const pension: ServiceDetail = {
  slug: "pension-betrieb-wien",
  title: "Pensionen verlässlich betreiben",
  seoTitle: "Pension Betrieb und Verwaltung in Wien: Goldnest",
  description:
    "Goldnest unterstützt Eigentümer und Betreiber kleiner Wiener Pensionen bei Gästekommunikation, Pricing, Housekeeping-Koordination, Qualität und Reporting.",
  eyebrow: "Pensionen",
  intro:
    "Eine Pension lebt von verlässlichen Abläufen und persönlichem Auftritt. Goldnest übernimmt die Bereiche, die Inhaber im Alltag am meisten binden, und hält Kosten und Kennzahlen nachvollziehbar fest.",
  includes: [
    { title: "Gästekommunikation", text: "Anfragen, Buchungsbestätigungen, Anreiseinformationen und Fragen während des Aufenthalts über feste Abläufe, auch außerhalb der Rezeptionszeiten." },
    { title: "Vertrieb und Pricing", text: "Preise und Verfügbarkeit werden über die relevanten Plattformen und den eigenen Kanal abgestimmt, mit Blick auf Saison, Nachfrage und Zimmerkategorien." },
    { title: "Housekeeping-Koordination", text: "Reinigungspläne, Wäsche, Zimmerkontrolle und Dokumentation, damit der Standard zwischen den Aufenthalten gleich bleibt." },
    { title: "Check-in und Zutritt", text: "Persönlicher oder kontaktloser Check-in, je nach Haus und Hausordnung, inklusive Gästeverzeichnis." },
    { title: "Meldungen und Abgaben", text: "Vorbereitung von Gästeverzeichnis, Ortstaxe-Abrechnung und Tourismusstatistik über VIETour, mit klar verteilten Zuständigkeiten." },
    { title: "Qualität und Bewertungen", text: "Gästefeedback wird ausgewertet, Mängel werden dokumentiert und beauftragt." },
    { title: "Reporting", text: "Auslastung, Durchschnittspreis, Kosten und offene Punkte in einem Bericht, den Sie ohne Rückfragen verstehen." },
  ],
  forWhom: [
    "Eigentümer von Pensionen, die den Betrieb nicht mehr selbst führen möchten",
    "Betreiber, die Teilaufgaben wie Gästekommunikation und Pricing abgeben wollen",
    "Erben und Familien, die einen Betrieb weiterführen möchten",
    "Käufer, die eine Pension übernehmen und strukturiert starten wollen",
  ],
  body: [
    { type: "lead", text: "Pensionen sind Beherbergungsbetriebe. Das bringt eigene Pflichten mit sich, die über die einer einzelnen Ferienwohnung hinausgehen." },
    { type: "h2", text: "Pflichten, die wir mitdenken" },
    {
      type: "ul",
      items: [
        "**Gästeverzeichnis:** Beherbergungsbetriebe müssen ein Gästeverzeichnis führen. Die Anmeldung muss unverzüglich, jedenfalls innerhalb von 24 Stunden nach Ankunft erfolgen. Mehr im [Ratgeber zum Gästeverzeichnis](/ratgeber/gaesteverzeichnis-meldepflicht).",
        "**Ortstaxe und VIETour:** Berechnung und Abfuhr der Wiener Ortstaxe sowie die Tourismusstatistik laufen über VIETour. Mehr im [Ratgeber zu VIETour](/ratgeber/vietour) und zur [Ortstaxe](/ratgeber/ortstaxe-wien).",
        "**Gewerbe:** Der Betrieb einer Pension wird in der Regel gewerblich geführt. Welche Berechtigung erforderlich ist und wer sie innehat, wird vor einer Zusammenarbeit geklärt. Mehr im [Ratgeber zu Gewerbe und Vermietung](/ratgeber/airbnb-gewerbe-oesterreich).",
        "**Baurecht und Brandschutz:** Die baurechtliche Zulässigkeit und die brandschutztechnischen Anforderungen hängen vom Gebäude ab und werden im Einzelfall beurteilt. Mehr im [Ratgeber zum Brandschutz](/ratgeber/brandschutz-kurzzeitvermietung-wien).",
      ],
    },
    { type: "h2", text: "Welche Rolle Goldnest übernimmt" },
    {
      type: "p",
      text: "Ob Goldnest einzelne Bereiche unterstützt oder den laufenden Betrieb verantwortet, hängt von Ihrem Betrieb, Ihrem Team und den rechtlichen Voraussetzungen ab. Wir legen den Umfang vor Beginn schriftlich fest, ebenso die Aufgaben, die bei Ihnen bleiben.",
    },
    { type: "callout", title: "Hinweis", text: "Goldnest ersetzt keine Rechts- oder Steuerberatung. Fragen zu Gewerbeberechtigung, Steuern und Sozialversicherung gehören zu Ihrer fachlichen Beratung." },
    {
      type: "p",
      text: "Wenn Sie Ihre Pension besprechen möchten, beschreiben Sie uns den Betrieb über das [Kontaktformular](/kontakt).",
    },
  ],
  faq: [
    {
      q: "Übernimmt Goldnest den gesamten Betrieb meiner Pension?",
      a: "Das hängt von Ihrem Betrieb und den rechtlichen Voraussetzungen ab. Möglich sind einzelne Bereiche wie Gästekommunikation und Pricing oder ein umfassender Betrieb. Der Umfang wird vor Beginn schriftlich festgelegt.",
    },
    {
      q: "Wer führt das Gästeverzeichnis und rechnet die Ortstaxe ab?",
      a: "Die Zuständigkeit wird vertraglich festgelegt. Verantwortlich gegenüber der Stadt bleibt der Unterkunftgeber. Wir bereiten die Meldungen vor und halten die Abläufe ein, die dafür nötig sind.",
    },
    {
      q: "Brauche ich für eine Pension ein Gewerbe?",
      a: "Der Betrieb einer Pension wird in der Regel gewerblich geführt. Die Abgrenzung und die erforderliche Berechtigung sollten Sie im Einzelfall mit der Wirtschaftskammer oder Ihrer Beratung klären.",
    },
  ],
  image: "pension",
  related: ["reinigung", "pricing", "reporting"],
};

export const hotel: ServiceDetail = {
  slug: "hotel-management-wien",
  title: "Hotels strukturiert betreuen",
  seoTitle: "Hotel Management Wien: Betrieb, Pricing und Reporting",
  description:
    "Goldnest unterstützt Wiener Hotels bei Revenue-Steuerung, Vertrieb über Plattformen, Gästekommunikation, Housekeeping-Organisation und nachvollziehbarem Reporting.",
  eyebrow: "Hotels",
  intro:
    "Ein Hotel braucht klare Zuständigkeiten, belastbare Zahlen und verlässliche Abläufe. Goldnest ergänzt Ihr Team oder übernimmt definierte Bereiche, vom Vertrieb bis zum Reporting.",
  includes: [
    { title: "Revenue-Steuerung", text: "Preise und Restriktionen nach Nachfrage, Saison, Veranstaltungen und Zimmerkategorien. Ziel ist eine wirtschaftlich sinnvolle Auslastung." },
    { title: "Distribution", text: "Abgleich der Verfügbarkeiten über Buchungsplattformen und den eigenen Kanal, damit Doppelbuchungen vermieden werden." },
    { title: "Gästekommunikation", text: "Vor, während und nach dem Aufenthalt. Antworten werden zentral gesteuert und dokumentiert." },
    { title: "Housekeeping-Organisation", text: "Einsatzplanung, Qualitätskontrolle, Wäsche und Zimmerfreigabe, abgestimmt mit Ihrem bestehenden Team oder Dienstleistern." },
    { title: "Meldewesen", text: "Gästeverzeichnis, Ortstaxe und Tourismusstatistik über VIETour, mit klaren Zuständigkeiten und Prüfschritten." },
    { title: "Qualität und Bewertungen", text: "Auswertung von Gästefeedback und Bewertungen, Maßnahmenliste für Mängel." },
    { title: "Reporting", text: "Auslastung, Durchschnittspreis (ADR), Umsatz je verfügbarem Zimmer (RevPAR), Kosten und Abweichungen in einem regelmäßigen Bericht." },
  ],
  forWhom: [
    "Eigentümer und Investoren von Stadthotels und kleinen Hotels",
    "Betreiber, die einzelne Bereiche professionalisieren möchten",
    "Eigentümer, die einen Betreiber suchen und die Betriebsführung strukturiert übergeben wollen",
    "Käufer, die ein Hotel übernehmen und einen geordneten Start brauchen",
  ],
  body: [
    { type: "lead", text: "Wien hat 2025 mit rund 20,065 Millionen Gästenächtigungen ein Rekordjahr verzeichnet. Für den einzelnen Betrieb sagt diese Zahl wenig. Entscheidend sind Lage, Zimmerprodukt, Preisstrategie und Betriebsqualität." },
    {
      type: "p",
      text: "Die Zahlen von WienTourismus betreffen den Wiener Beherbergungsmarkt insgesamt und sind keine Prognose für einen einzelnen Betrieb.",
    },
    { type: "h2", text: "Was für Hotels zusätzlich gilt" },
    {
      type: "ul",
      items: [
        "**Beherbergungsbetrieb:** Hotels sind gewerbliche Beherbergungsbetriebe. Berechtigung, Betriebsanlage und baurechtliche Zulässigkeit werden vor einer Zusammenarbeit geklärt.",
        "**Brandschutz:** Bei mehr als zehn touristisch genutzten Betten im Gebäude können weitergehende Anforderungen nach OIB-Richtlinie 2 erforderlich sein. Ob und welche Maßnahmen bei Ihrem Haus erforderlich sind, wird im Einzelfall beurteilt.",
        "**Meldungen und Abgaben:** Gästeverzeichnis innerhalb von 24 Stunden nach Ankunft, Ortstaxe und Tourismusstatistik über VIETour.",
        "**EU-Verordnung 2024/1028:** Sie gilt seit 20. Mai 2026 und harmonisiert Registrierung und Datenaustausch bei kurzfristigen Beherbergungsdienstleistungen. Auswirkungen auf Ihren Betrieb hängen von der nationalen Umsetzung ab, siehe [Ratgeber zur EU-Verordnung](/ratgeber/eu-verordnung-kurzzeitvermietung).",
      ],
    },
    { type: "h2", text: "Zusammenarbeit" },
    {
      type: "p",
      text: "Wir arbeiten mit Ihrem Team, nicht an ihm vorbei. Zu Beginn klären wir, welche Bereiche wir verantworten, welche bei Ihnen bleiben und welche Kennzahlen Sie regelmäßig sehen möchten. Der Umfang wird schriftlich festgehalten.",
    },
    { type: "callout", title: "Hinweis", text: "Goldnest ersetzt keine Rechts- oder Steuerberatung. Fragen zu Gewerbe, Betriebsanlage und Steuern gehören zu Ihrer fachlichen Beratung." },
    {
      type: "p",
      text: "Beschreiben Sie uns Ihr Hotel über das [Kontaktformular](/kontakt). Wir melden uns mit einer ersten Einordnung.",
    },
  ],
  faq: [
    {
      q: "Kann Goldnest ein Hotel vollständig betreiben?",
      a: "Der Umfang hängt von Betrieb, Team und rechtlichen Voraussetzungen ab. Wir übernehmen definierte Bereiche oder ergänzen Ihr Team. Den Umfang legen wir vor Beginn schriftlich fest.",
    },
    {
      q: "Welche Kennzahlen bekomme ich?",
      a: "Auslastung, durchschnittlicher Zimmerpreis (ADR), Umsatz je verfügbarem Zimmer (RevPAR), Kosten und Abweichungen. Welche Positionen im Einzelnen enthalten sind, legen wir gemeinsam fest.",
    },
    {
      q: "Wie viel kostet die Betreuung eines Hotels?",
      a: "Die Vergütung hängt von Betrieb und Leistungsumfang ab. Wir legen im Erstgespräch offen, worauf sie sich bezieht und welche Leistungen enthalten sind.",
    },
  ],
  image: "hotel",
  related: ["pricing", "gaestekommunikation", "reporting"],
};

export const objectDetails: ServiceDetail[] = [zinshaus, pension, hotel];

export function getObject(slug: string): ServiceDetail | undefined {
  return objectDetails.find((o) => o.slug === slug);
}

/** Overview of segments, from single flat to whole operation. */
export const objectSegments = [
  {
    index: "01",
    title: "Einzelne Apartments",
    text: "Eine oder mehrere Wohnungen, kurzfristig oder mittelfristig vermietet. Geprüft wird die einzelne Wohnung: Lage, Widmung, Zustimmungen, Nutzung.",
    href: "/airbnb-verwaltung-wien",
    cta: "Airbnb Verwaltung Wien",
  },
  {
    index: "02",
    title: "Ganze Zinshäuser",
    text: "Mehrere Einheiten unter einem Dach. Geprüft wird das Gebäude: Anteil der Nutzungseinheiten, Bettenzahl, Wohnzone, Mietverhältnisse, Zustimmungen.",
    href: "/objekte/zinshaus-verwaltung-wien",
    cta: "Zinshäuser",
  },
  {
    index: "03",
    title: "Pensionen",
    text: "Kleine Beherbergungsbetriebe mit persönlichem Auftritt. Geprüft wird der Betrieb: Gewerbe, Meldewesen, Brandschutz, Abläufe.",
    href: "/objekte/pension-betrieb-wien",
    cta: "Pensionen",
  },
  {
    index: "04",
    title: "Hotels",
    text: "Größere Betriebe mit Team, Zimmerkategorien und Vertrieb. Geprüft werden Betriebsform, Zuständigkeiten und Kennzahlen.",
    href: "/objekte/hotel-management-wien",
    cta: "Hotels",
  },
] as const;
