import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://koncoweb.id";
  const routes = ["", "/layanan", "/pelatihan-ai", "/konsultan-ai", "/blog"].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.7,
    })
  );
  return routes;
}


