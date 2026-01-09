import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    // VERANDERD NAAR WWW VOOR SEO CONSISTENTIE
    sitemap: "https://www.budgetontruiming.nl/sitemap.xml",
  };
}
