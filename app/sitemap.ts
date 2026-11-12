
import type { MetadataRoute } from "next";
import { scientificHighlights } from "./data/scientificHighlights";

export const dynamic = "force-static";

const BASE_URL = "https://chengene.com";

const productionSlugs = [
  "ferticyclinpro",
  "pvp-media",
  "vitrification-media",
  "thawing-media",
  "pbs",
  "pbs-bsa",
];

const researchSlugs = [
  "fsh",
  "hcg",
  "pembrolizumab",
  "trastuzumab",
  "daratumumab",
  "pertuzumab",
];

const scientificHighlightCategories = [
  "events",
  "meetings",
  "conferences",
  "workshops",
  "certifications",
  "presentations",
];

const waterSystemSlugs = [
  "type-1-water",
  "type-2-water",
  "distilled-water",
  "ro-water-plant",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const productionPages: MetadataRoute.Sitemap =
    productionSlugs.map((slug) => ({
      url: `${BASE_URL}/production/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const researchPages: MetadataRoute.Sitemap =
    researchSlugs.map((slug) => ({
      url: `${BASE_URL}/research/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const scientificCategoryPages: MetadataRoute.Sitemap =
    scientificHighlightCategories.map((category) => ({
      url: `${BASE_URL}/scientific-highlights/${category}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const scientificDetailPages: MetadataRoute.Sitemap =
    scientificHighlights.map((item) => ({
      url: `${BASE_URL}/scientific-highlights/${item.type}/${item.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const waterSystemPages: MetadataRoute.Sitemap =
    waterSystemSlugs.map((slug) => ({
      url: `${BASE_URL}/water-systems/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    ...staticPages,
    ...productionPages,
    ...researchPages,
    ...scientificCategoryPages,
    ...scientificDetailPages,
    ...waterSystemPages,
  ];
}
