import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { guides } from "@/content/guides";
import { serviceDetails } from "@/content/services/index";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date(site.contentStandIso);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/airbnb-verwaltung-wien", priority: 0.9, changeFrequency: "monthly" },
    { path: "/leistungen", priority: 0.8, changeFrequency: "monthly" },
    { path: "/kurzzeitvermietung-wien", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ratgeber", priority: 0.8, changeFrequency: "weekly" },
    { path: "/ueber-uns", priority: 0.6, changeFrequency: "yearly" },
    { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/en", priority: 0.6, changeFrequency: "monthly" },
    { path: "/impressum", priority: 0.2, changeFrequency: "yearly" },
    { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...staticPages.map((p) => ({ url: absoluteUrl(p.path), lastModified, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...serviceDetails.map((s) => ({
      url: absoluteUrl(`/leistungen/${s.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...guides.map((g) => ({
      url: absoluteUrl(`/ratgeber/${g.slug}`),
      lastModified: new Date(g.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
