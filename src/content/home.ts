import type { ImageKey } from "@/content/images";

export const pillars = [
  {
    index: "01",
    title: "Rechtlich durchdacht",
    text: "Bevor wir ein Apartment übernehmen, sehen wir uns an, welches Vermietungsmodell für die Immobilie überhaupt zulässig ist. Das schützt Eigentümer vor Entscheidungen, die sich später nicht halten lassen.",
  },
  {
    index: "02",
    title: "Wirtschaftlich transparent",
    text: "Einnahmen, Kosten und Kennzahlen werden nachvollziehbar dokumentiert. Sie wissen jederzeit, was Ihr Apartment leistet und was es kostet.",
  },
  {
    index: "03",
    title: "Professionell betreut",
    text: "Gäste, Reinigung, Preise, Instandhaltung und Abrechnung laufen über feste Abläufe und persönliche Ansprechpartner. Nicht über eine anonyme Hotline.",
  },
];

export const legalProcess = [
  { step: "01", title: "Immobilie", text: "Lage, Gebäude, Wohnungstyp, Zustand." },
  { step: "02", title: "Nutzung & Eigentumssituation", text: "Eigentum, Miete, Widmung, bestehende Zustimmungen." },
  { step: "03", title: "Rechtliche Ausgangslage", text: "Wohnzone, Bauordnung, Wohnungseigentum, Hausordnung." },
  { step: "04", title: "Mögliches Vermietungsmodell", text: "Kurzzeit, mittelfristig oder eine Kombination." },
  { step: "05", title: "Wirtschaftliche Einschätzung", text: "Szenario mit Kosten, Abgaben und Aufwand." },
  { step: "06", title: "Umsetzung", text: "Vorbereitung, Inserate, Betrieb, Reporting." },
];

export const legalTopics = [
  { label: "90-Tage-Regel in Wien", href: "/ratgeber/90-tage-regel-wien" },
  { label: "Ausnahmebewilligung", href: "/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien" },
  { label: "Wohnzonen", href: "/ratgeber/wohnzonen-wien" },
  { label: "Ortstaxe", href: "/ratgeber/ortstaxe-wien" },
  { label: "VIETour", href: "/ratgeber/vietour" },
  { label: "Gästeverzeichnis", href: "/ratgeber/gaesteverzeichnis-meldepflicht" },
  { label: "Wohnungseigentum", href: "/ratgeber/airbnb-eigentumswohnung-wien" },
  { label: "Brandschutz", href: "/ratgeber/brandschutz-kurzzeitvermietung-wien" },
  { label: "Gewerbe & Steuern", href: "/ratgeber/airbnb-steuern-oesterreich" },
  { label: "EU-Regeln für Kurzzeitvermietung", href: "/ratgeber/eu-verordnung-kurzzeitvermietung" },
];

export const concerns: Array<{ concern: string; answer: string }> = [
  {
    concern: "Was kostet die Verwaltung wirklich?",
    answer: "Vergütung, enthaltene Leistungen und Nebenkosten werden vor Beginn schriftlich festgelegt. Keine Position, die Sie nicht kennen.",
  },
  {
    concern: "Wer kommuniziert mit den Gästen?",
    answer: "Ein festes Team mit klaren Verantwortlichkeiten, vor, während und nach dem Aufenthalt. Sie entscheiden, wie viel Sie davon mitlesen möchten.",
  },
  {
    concern: "Wie werden Reinigungskosten kontrolliert?",
    answer: "Reinigung wird koordiniert, dokumentiert und kontrolliert. Kosten erscheinen nachvollziehbar in der Abrechnung.",
  },
  {
    concern: "Wer kümmert sich bei Schäden?",
    answer: "Wir dokumentieren den Zustand, melden Schäden und begleiten die Abwicklung mit Gästen, Plattformen und Versicherung.",
  },
  {
    concern: "Wie werden Einnahmen abgerechnet?",
    answer: "Mit einer transparenten Eigentümerabrechnung: Einnahmen, Kosten und Kennzahlen in einem Bericht, den Sie auch ohne Rückfragen verstehen.",
  },
  {
    concern: "Was passiert bei Problemen?",
    answer: "Es gibt eine persönliche Ansprechperson und feste Abläufe für Störungen, Ausfälle und dringende Fälle.",
  },
  {
    concern: "Wer optimiert die Preise?",
    answer: "Preise werden laufend nach Nachfrage, Saison und Objekt gesteuert, mit dem Ziel einer wirtschaftlich sinnvollen Auslastung.",
  },
  {
    concern: "Kann ich meine Wohnung weiterhin selbst nutzen?",
    answer: "Eigennutzung lässt sich grundsätzlich im Belegungskalender berücksichtigen. Wie flexibel, klären wir je nach Modell im Erstgespräch.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Erstgespräch",
    text: "Wir lernen Immobilie, Ziele und Ausgangssituation kennen.",
  },
  {
    step: "02",
    title: "Objektprüfung",
    text: "Wir betrachten Lage, Ausstattung, Nutzungsmöglichkeiten und operative Anforderungen.",
  },
  {
    step: "03",
    title: "Vermietungsstrategie",
    text: "Kurzzeitvermietung, mittelfristige Vermietung oder eine Kombination werden wirtschaftlich eingeordnet.",
  },
  {
    step: "04",
    title: "Vorbereitung",
    text: "Einrichtung, Präsentation, Inserate, Pricing, Check-in und operative Prozesse.",
  },
  {
    step: "05",
    title: "Laufende Betreuung",
    text: "Buchungen, Gäste, Reinigung, Qualität, Preise und Eigentümerreporting.",
  },
];

/** Market indicators – see docs/facts.md. Values are indicators, not forecasts. */
export const marketVienna2025 = {
  source: {
    label: "WienTourismus, Jahresbilanz 2025",
    href: "https://b2b.wien.info/en/newsroom/pressservice/vienna-2025-performance-report-1095370",
    date: "28. Jänner 2026",
  },
  stats: [
    { value: "20,065 Mio.", label: "Gästenächtigungen", note: "+6 % gegenüber 2024" },
    { value: "rund 8,6 Mio.", label: "Gästeankünfte" },
    { value: "rund 1,5 Mrd. €", label: "Beherbergungsumsatz" },
  ],
  caveat: "Die Zahlen betreffen den Wiener Beherbergungsmarkt insgesamt, nicht ausschließlich Apartments auf Buchungsplattformen.",
};

export const marketAirdna = {
  source: {
    label: "AirDNA, Vienna Market Overview, September 2026",
    href: "https://www.airdna.co/vacation-rental-data/app/at/default/vienna/overview",
    date: "aktualisiert 6. Oktober 2026",
  },
  stats: [
    { value: "10.365", label: "aktive Inserate" },
    { value: "66 %", label: "durchschnittliche Auslastung" },
    { value: "141 USD", label: "durchschnittlicher Tagespreis" },
    { value: "30.600 USD", label: "durchschnittlicher Jahresumsatz" },
    { value: "92 USD", label: "RevPAR" },
  ],
};

export const propertyTypes: Array<{ title: string; audience: string; text: string; image: ImageKey }> = [
  {
    title: "City Apartments",
    audience: "für klassische Städtereisende",
    text: "Zentrale Lage, unkomplizierter Check-in, klare Ausstattung. Das klassische Modell der Kurzzeitvermietung.",
    image: "cityApartment",
  },
  {
    title: "Business Apartments",
    audience: "für Geschäftsreisende und längere Aufenthalte",
    text: "Arbeitsplatz, verlässliches WLAN, Rechnungen und ruhige Lage. Hochwertige Apartments mit höherem Anspruch an Verlässlichkeit.",
    image: "businessApartment",
  },
  {
    title: "Familienapartments",
    audience: "für größere Gruppen und Familien",
    text: "Küche, Waschmaschine, mehrere Schlafplätze. Größere Wohnungen, die mit längeren Aufenthalten wirtschaftlich arbeiten.",
    image: "familyApartment",
  },
  {
    title: "Serviced Apartments",
    audience: "für internationale Fachkräfte und Relocation",
    text: "Sofort bezugsfertig, vollständig ausgestattet, mit Service. Für Gäste, die ankommen und wohnen möchten.",
    image: "servicedApartment",
  },
  {
    title: "Mid-Term Rentals",
    audience: "für Wochen- und Monatsaufenthalte",
    text: "Möblierte Vermietung für Projektmitarbeiter, Studierende auf Zeit und Menschen im Umzug. Eine Alternative, wenn touristische Kurzzeitvermietung nicht passt.",
    image: "midTermApartment",
  },
];

/**
 * Case study scaffolding. No invented results.
 * VERIFY: replace with real, owner-approved data before go-live.
 */
export const caseStudies = [
  {
    title: "Altbauwohnung, Wien 7",
    type: "Beispielstruktur",
    image: "caseStudy" as ImageKey,
    sections: [
      { label: "Ausgangslage", text: "Fallstudie wird mit verifizierten Eigentümerdaten ergänzt." },
      { label: "Herausforderung", text: "Fallstudie wird mit verifizierten Eigentümerdaten ergänzt." },
      { label: "Goldnest-Ansatz", text: "Fallstudie wird mit verifizierten Eigentümerdaten ergänzt." },
      { label: "Umsetzung", text: "Fallstudie wird mit verifizierten Eigentümerdaten ergänzt." },
      { label: "Ergebnis", text: "Fallstudie wird mit verifizierten Eigentümerdaten ergänzt." },
    ],
  },
];

/**
 * Testimonial scaffolding. No invented quotes or names.
 * VERIFY: replace with real, written owner consent for each quote.
 */
export const testimonials = [
  { quote: "[Eigentümerreferenz]", name: "[Name des Eigentümers]", context: "[Wohnungstyp, Bezirk]" },
  { quote: "[Eigentümerreferenz]", name: "[Name des Eigentümers]", context: "[Wohnungstyp, Bezirk]" },
  { quote: "[Eigentümerreferenz]", name: "[Name des Eigentümers]", context: "[Wohnungstyp, Bezirk]" },
];
