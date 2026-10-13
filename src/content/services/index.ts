import type { ServiceDetail } from "@/content/types";
import { coHosting } from "./co-hosting-wien";
import { apartmentEinrichtung } from "./apartment-einrichtung";
import { reinigungGaestebetreuung } from "./reinigung-gaestebetreuung";
import { pricing } from "./pricing";
import { mittelfristigeVermietung } from "./mittelfristige-vermietung";

export const serviceDetails: ServiceDetail[] = [coHosting, apartmentEinrichtung, reinigungGaestebetreuung, pricing, mittelfristigeVermietung];

export function getService(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
