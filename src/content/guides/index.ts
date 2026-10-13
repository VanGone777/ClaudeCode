import type { Guide } from "@/content/types";
import { airbnbWienErlaubt } from "./airbnb-wien-erlaubt";
import { neunzigTageRegelWien } from "./90-tage-regel-wien";
import { ausnahmebewilligung } from "./ausnahmebewilligung-kurzzeitvermietung-wien";
import { wohnzonenWien } from "./wohnzonen-wien";
import { eigentumswohnung } from "./airbnb-eigentumswohnung-wien";
import { ortstaxeWien } from "./ortstaxe-wien";
import { vietour } from "./vietour";
import { brandschutz } from "./brandschutz-kurzzeitvermietung-wien";
import { steuernOesterreich } from "./airbnb-steuern-oesterreich";
import { gewerbeOesterreich } from "./airbnb-gewerbe-oesterreich";
import { gaesteverzeichnis } from "./gaesteverzeichnis-meldepflicht";
import { euVerordnung } from "./eu-verordnung-kurzzeitvermietung";
import { zinshausNutzung } from "./zinshaus-touristische-nutzung-wien";

/** Editorial order (also used for the magazine listing). */
export const guides: Guide[] = [
  airbnbWienErlaubt,
  neunzigTageRegelWien,
  ausnahmebewilligung,
  wohnzonenWien,
  eigentumswohnung,
  zinshausNutzung,
  ortstaxeWien,
  vietour,
  brandschutz,
  steuernOesterreich,
  gewerbeOesterreich,
  gaesteverzeichnis,
  euVerordnung,
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getRelatedGuides(guide: Guide, limit = 3): Guide[] {
  const related = guide.related.map(getGuide).filter((g): g is Guide => Boolean(g));
  const filler = guides.filter((g) => g.slug !== guide.slug && !related.includes(g));
  return [...related, ...filler].slice(0, limit);
}
