/**
 * Central site configuration.
 * Every value marked VERIFY must be confirmed by Goldnest before go-live.
 */
export const site = {
  name: "Goldnest",
  legalName: "Goldnest GmbH",
  tagline: "Airbnb Verwaltung Wien",
  // VERIFY: production domain. Used for canonical URLs, sitemap, OpenGraph and JSON-LD.
  url: "https://www.goldnest.at",
  locale: "de_AT",
  language: "de",
  description:
    "Goldnest übernimmt die professionelle Vermietung und Betreuung von Apartments, ganzen Zinshäusern, Pensionen und Hotels in Wien – von der rechtlichen Prüfung über Positionierung, Pricing und Gästebetreuung bis zur laufenden Verwaltung.",
  contact: {
    // VERIFY: official contact details of Goldnest GmbH.
    email: "office@goldnest.at",
    phone: "", // VERIFY: e.g. "+43 1 000 00 00" – empty string hides the phone line in the UI.
    phoneDisplay: "", // VERIFY
    streetAddress: "", // VERIFY: e.g. "Musterstraße 1/2"
    postalCode: "", // VERIFY: e.g. "1010"
    city: "Wien",
    country: "AT",
  },
  legal: {
    // VERIFY: Firmenbuchnummer, Firmenbuchgericht, UID, Geschäftsführung, Kammerzugehörigkeit, Gewerbe.
    companyRegister: "",
    companyRegisterCourt: "Handelsgericht Wien",
    vatId: "",
    managingDirectors: "",
    chamber: "Wirtschaftskammer Wien",
    tradeAuthority: "Magistrat der Stadt Wien",
  },
  social: {
    // VERIFY: leave empty to hide the icon in the footer.
    instagram: "",
    linkedin: "",
  },
  /**
   * Company claim used in trust bar and about page.
   * VERIFY: "50+ betreute Apartments" is a company statement that must be confirmed
   * before go-live. Set `verified` to true once confirmed; until then the UI uses
   * the neutral wording.
   */
  portfolioClaim: {
    verified: false,
    label: "50+ betreute Apartments",
    neutralLabel: "Portfolio betreuter Apartments in Wien",
  },
  /** Date stamp shown on legal content. */
  contentStand: "Oktober 2026",
  contentStandIso: "2026-10-13",
  foundingYear: "", // VERIFY
} as const;

export type NavItem = { label: string; href: string; description?: string };

export const primaryNav: NavItem[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Objekte", href: "/objekte" },
  { label: "Kurzzeitvermietung Wien", href: "/kurzzeitvermietung-wien" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "Über Goldnest", href: "/ueber-uns" },
];

export const footerNav = {
  leistungen: [
    { label: "Airbnb Verwaltung", href: "/airbnb-verwaltung-wien" },
    { label: "Zinshäuser", href: "/objekte/zinshaus-verwaltung-wien" },
    { label: "Pensionen", href: "/objekte/pension-betrieb-wien" },
    { label: "Hotels", href: "/objekte/hotel-management-wien" },
    { label: "Co-Hosting", href: "/leistungen/co-hosting-wien" },
    { label: "Pricing", href: "/leistungen/pricing" },
    { label: "Reinigung", href: "/leistungen/reinigung-gaestebetreuung" },
    { label: "Mittelfristige Vermietung", href: "/leistungen/mittelfristige-vermietung" },
  ],
  wissen: [
    { label: "Kurzzeitvermietung Wien", href: "/kurzzeitvermietung-wien" },
    { label: "90-Tage-Regel", href: "/ratgeber/90-tage-regel-wien" },
    { label: "Ausnahmebewilligung", href: "/ratgeber/ausnahmebewilligung-kurzzeitvermietung-wien" },
    { label: "Ortstaxe", href: "/ratgeber/ortstaxe-wien" },
    { label: "VIETour", href: "/ratgeber/vietour" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "FAQ", href: "/faq" },
  ],
  unternehmen: [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;

export const cta = {
  primary: { label: "Immobilie prüfen lassen", href: "/kontakt" },
  secondary: { label: "So arbeiten wir", href: "/#ablauf" },
  talk: { label: "Erstgespräch vereinbaren", href: "/kontakt" },
  discuss: { label: "Immobilie besprechen", href: "/kontakt" },
  assess: { label: "Individuelle Einschätzung anfragen", href: "/kontakt" },
} as const;

export const disclaimer = {
  legal:
    "Die dargestellten Informationen dienen der allgemeinen Orientierung und ersetzen keine individuelle Rechts-, Steuer- oder Fachberatung.",
  goldnest:
    "Goldnest ersetzt keine Rechts- oder Steuerberatung. Wir berücksichtigen die wesentlichen operativen Rahmenbedingungen und zeigen auf, welche Punkte vor einer Vermietung geklärt werden sollten.",
  market:
    "Marktdaten sind keine Ertragsprognose für eine einzelne Immobilie. Ergebnisse hängen unter anderem von Lage, Wohnungstyp, Ausstattung, Verfügbarkeit, Bewertungen, Saisonalität und rechtlicher Nutzbarkeit ab.",
  calculator: "Die Berechnung ist eine Orientierung und keine Ertragsgarantie.",
} as const;
