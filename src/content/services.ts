/**
 * Service overview used on the homepage, /leistungen and the footer.
 * Detailed sub-pages live in content/services/*.ts.
 */
export interface ServiceSummary {
  slug: string;
  title: string;
  short: string;
  href: string;
  /** Index for the editorial numbering 01–10 */
  index: string;
}

export const services: ServiceSummary[] = [
  {
    index: "01",
    slug: "airbnb-verwaltung",
    title: "Airbnb & Kurzzeitvermietungs-Verwaltung",
    short: "Komplette operative Betreuung – von der Buchung bis zur Abrechnung.",
    href: "/airbnb-verwaltung-wien",
  },
  {
    index: "02",
    slug: "co-hosting-wien",
    title: "Co-Hosting",
    short: "Für Eigentümer, die Teile der Verwaltung selbst übernehmen möchten.",
    href: "/leistungen/co-hosting-wien",
  },
  {
    index: "03",
    slug: "inserat-positionierung",
    title: "Inserat & Positionierung",
    short: "Professionelle Präsentation auf den relevanten Plattformen.",
    href: "/airbnb-verwaltung-wien#inserat",
  },
  {
    index: "04",
    slug: "pricing",
    title: "Pricing & Umsatzsteuerung",
    short: "Wirtschaftlich sinnvolle Preisgestaltung nach Nachfrage, Saison und Objekt.",
    href: "/leistungen/pricing",
  },
  {
    index: "05",
    slug: "gaestekommunikation",
    title: "Gästekommunikation",
    short: "Kommunikation vor, während und nach dem Aufenthalt.",
    href: "/leistungen/reinigung-gaestebetreuung#gaeste",
  },
  {
    index: "06",
    slug: "check-in",
    title: "Check-in & Zutritt",
    short: "Professionelle und möglichst automatisierte Prozesse.",
    href: "/leistungen/reinigung-gaestebetreuung#check-in",
  },
  {
    index: "07",
    slug: "reinigung",
    title: "Reinigung & Qualitätskontrolle",
    short: "Koordination, Kontrolle und Vorbereitung zwischen den Aufenthalten.",
    href: "/leistungen/reinigung-gaestebetreuung",
  },
  {
    index: "08",
    slug: "apartment-einrichtung",
    title: "Apartment-Einrichtung",
    short: "Vermietungsoptimierte Ausstattung und Positionierung.",
    href: "/leistungen/apartment-einrichtung",
  },
  {
    index: "09",
    slug: "reporting",
    title: "Eigentümer-Reporting",
    short: "Nachvollziehbare Einnahmen, Kosten und Performance.",
    href: "/airbnb-verwaltung-wien#reporting",
  },
  {
    index: "10",
    slug: "mittelfristige-vermietung",
    title: "Mittelfristige Vermietung",
    short: "Alternative, wenn touristische Kurzzeitvermietung nicht sinnvoll oder möglich ist.",
    href: "/leistungen/mittelfristige-vermietung",
  },
];
