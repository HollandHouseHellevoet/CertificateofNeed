import { MetadataRoute } from "next";
import { getAllStates } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const states = getAllStates();
  const baseUrl = "https://con.rojasreport.com";

  const statePages = states.map((state) => ({
    url: `${baseUrl}/states/${state.slug}`,
    lastModified: new Date(state.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...statePages,
  ];
}
