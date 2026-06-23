export const OG_IMAGE_PATH = "/og.png";

export function getSiteUrl() {
  const configured = import.meta.env.VITE_SITE_URL;
  if (typeof configured === "string" && configured.trim()) {
    return configured.trim().replace(/\/$/, "");
  }
  return "";
}

export function getOgImageUrl() {
  const base = getSiteUrl();
  return base ? `${base}${OG_IMAGE_PATH}` : OG_IMAGE_PATH;
}

export const ogImageMeta = [
  { property: "og:image", content: getOgImageUrl() },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:type", content: "image/png" },
  { property: "og:image:alt", content: "Priyan Rajarajan — CS portfolio" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:image", content: getOgImageUrl() },
  { name: "twitter:image:alt", content: "Priyan Rajarajan — CS portfolio" },
] as const;
