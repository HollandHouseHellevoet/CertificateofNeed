import { MetadataRoute } from "next";
import { getAllStateSlugs } from "@/data/state-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const statePages = getAllStateSlugs().map((slug) => ({
    url: `https://con.rojasreport.com/states/${slug}`,
    lastModified: new Date("2026-04-03"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://con.rojasreport.com",
      lastModified: new Date("2026-04-03"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...statePages,
  ];
}
