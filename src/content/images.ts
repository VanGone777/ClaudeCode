/**
 * Image manifest.
 *
 * Until final photography exists, every image renders as a designed placeholder
 * (see components/ui/Figure.tsx). To swap in a real photo, add `src` (and width/height)
 * to the entry below – no component changes needed.
 *
 * VERIFY: all entries need final photography. The `motif` text describes the shot
 * that should be produced or licensed.
 */
export type PlaceholderVariant = "door" | "parquet" | "window" | "plan" | "facade" | "arch" | "material" | "stairs";
export type PlaceholderTone = "light" | "sand" | "deep";

export interface ImageAsset {
  /** Alt text for the final photo (also used as accessible label for placeholders). */
  alt: string;
  /** Brief for the photographer. Shown in the placeholder caption. */
  motif: string;
  variant: PlaceholderVariant;
  tone: PlaceholderTone;
  /** Optional real photo. Place files under /public/images and set the path here. */
  src?: string;
  width?: number;
  height?: number;
}

export const images = {
  heroLiving: {
    alt: "Wohnraum einer stilvoll eingerichteten Wiener Altbauwohnung mit Flügeltür und Parkett",
    motif: "Heller Altbau-Wohnraum, Flügeltür, Fischgrätparkett, Morgenlicht – ohne Personen",
    variant: "door",
    tone: "sand",
  },
  introDetail: {
    alt: "Materialdetail: Eichenparkett trifft auf Naturstein",
    motif: "Nahaufnahme Material – Eichenparkett, Stein, Messing",
    variant: "parquet",
    tone: "light",
  },
  legalFacade: {
    alt: "Fassade eines Wiener Gründerzeithauses mit Kastenfenstern",
    motif: "Gründerzeitfassade im Streiflicht, Fensterrhythmus, ruhige Perspektive",
    variant: "facade",
    tone: "deep",
  },
  processPlan: {
    alt: "Grundriss einer Wiener Wohnung auf Papier mit Maßstab",
    motif: "Grundriss, Notizen, Maßband auf einem Holztisch – Vorbereitung eines Apartments",
    variant: "plan",
    tone: "light",
  },
  bedroom: {
    alt: "Ruhiges Schlafzimmer eines Apartments mit Leinenbettwäsche",
    motif: "Schlafzimmer, gemachtes Bett, Leinen, Wandleuchte, warmes Licht",
    variant: "window",
    tone: "sand",
  },
  kitchen: {
    alt: "Moderne Küche eines Apartments mit Steinarbeitsplatte",
    motif: "Küchenzeile, Steinplatte, Holzfronten, Tageslicht",
    variant: "material",
    tone: "light",
  },
  entrance: {
    alt: "Eingangsbereich eines Wiener Altbaus mit Stiegenhaus",
    motif: "Stiegenhaus, Terrazzoboden, schmiedeeisernes Geländer",
    variant: "stairs",
    tone: "deep",
  },
  cityApartment: {
    alt: "City Apartment mit Blick auf eine Wiener Innenstadtgasse",
    motif: "Wohnraum mit hohem Fenster, Blick auf Gründerzeitfassaden",
    variant: "window",
    tone: "light",
  },
  businessApartment: {
    alt: "Business Apartment mit Arbeitsplatz am Fenster",
    motif: "Schreibtisch am Fenster, Leuchte, ruhige Farben",
    variant: "door",
    tone: "sand",
  },
  familyApartment: {
    alt: "Großzügiges Familienapartment mit Esstisch und Küche",
    motif: "Großer Esstisch, offene Küche, mehrere Räume sichtbar",
    variant: "plan",
    tone: "light",
  },
  servicedApartment: {
    alt: "Serviced Apartment, bezugsfertig eingerichtet",
    motif: "Vollständig eingerichtetes Apartment, Handtücher, Willkommensdetail",
    variant: "material",
    tone: "sand",
  },
  midTermApartment: {
    alt: "Möblierte Wohnung für mittelfristige Aufenthalte",
    motif: "Wohnzimmer mit Bücherregal, Arbeitsplatz, Pflanzen – Wohnlichkeit",
    variant: "arch",
    tone: "light",
  },
  caseStudy: {
    alt: "Altbauwohnung in Wien-Neubau vor der Vorbereitung",
    motif: "Leere Altbauwohnung, Stuck, Parkett, Fensterlicht",
    variant: "arch",
    tone: "sand",
  },
  aboutTeam: {
    alt: "Arbeitsplatz des Goldnest-Teams mit Grundrissen und Schlüsseln",
    motif: "Stilleben: Schlüsselbund, Grundriss, Notizbuch – keine Personen mit Headsets",
    variant: "plan",
    tone: "light",
  },
  aboutVienna: {
    alt: "Wiener Innenhof mit Pawlatschen und Bäumen",
    motif: "Begrünter Innenhof, Pawlatschengang, Nachmittagslicht",
    variant: "facade",
    tone: "sand",
  },
  guideDefault: {
    alt: "Detail einer Wiener Altbautür",
    motif: "Türdetail mit Messingbeschlag",
    variant: "door",
    tone: "light",
  },
  guideLaw: {
    alt: "Wiener Amtsgebäude, Fassadendetail",
    motif: "Fassadendetail, strenge Linien, Stein",
    variant: "facade",
    tone: "deep",
  },
  guideTax: {
    alt: "Schreibtisch mit Unterlagen und Taschenrechner",
    motif: "Aufgeräumter Schreibtisch, Unterlagen, Stift",
    variant: "material",
    tone: "sand",
  },
  guidePractice: {
    alt: "Smart Lock an einer Altbautür",
    motif: "Türdetail mit elektronischem Schloss",
    variant: "door",
    tone: "sand",
  },
  contact: {
    alt: "Blick aus einem Wiener Apartment auf die Dächer der Stadt",
    motif: "Fensterblick auf Dächer, Abendlicht",
    variant: "window",
    tone: "deep",
  },
  cleaning: {
    alt: "Frisch vorbereitetes Bad mit gefalteten Handtüchern",
    motif: "Bad, gefaltete Handtücher, Naturstein",
    variant: "material",
    tone: "light",
  },
  pricing: {
    alt: "Kalender und Notizen zur Preisplanung",
    motif: "Kalenderblatt, Stift, Notizen – Planung",
    variant: "plan",
    tone: "sand",
  },
  furnishing: {
    alt: "Materialmuster für die Apartment-Einrichtung",
    motif: "Stoff-, Holz- und Steinmuster auf einem Tisch",
    variant: "material",
    tone: "light",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
