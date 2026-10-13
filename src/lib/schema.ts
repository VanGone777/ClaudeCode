import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

type JsonLdObject = Record<string, unknown>;

export const ORGANIZATION_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

export function organizationSchema(): JsonLdObject {
  const sameAs = [site.social.instagram, site.social.linkedin].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORGANIZATION_ID,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/opengraph-image"),
    description: site.description,
    email: site.contact.email || undefined,
    telephone: site.contact.phone || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.streetAddress || undefined,
      postalCode: site.contact.postalCode || undefined,
      addressLocality: site.contact.city,
      addressCountry: site.contact.country,
    },
    areaServed: { "@type": "City", name: "Wien" },
    knowsLanguage: ["de", "en"],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.legalName,
    inLanguage: "de-AT",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType ?? input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "City", name: "Wien" },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  published: string;
  modified: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    inLanguage: "de-AT",
    url: absoluteUrl(input.path),
    mainEntityOfPage: absoluteUrl(input.path),
    datePublished: input.published,
    dateModified: input.modified,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    image: absoluteUrl("/opengraph-image"),
  };
}

export function webPageSchema(input: { name: string; description: string; path: string }): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "de-AT",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
  };
}
