import { ImageResponse } from "next/og";
import { allGuides, getGuide } from "@/lib/guides";

export const alt = "Guide by Viraj Pate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return allGuides().map((g) => ({ slug: g.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  const title = g?.h1 || "Guides for e-commerce store owners";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#090A0F",
          color: "#FFFFFF",
          borderTop: "8px solid #FFC107",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#FFC107", fontWeight: 700 }}>
          {g?.topic || "Guide"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 70 ? 54 : 66,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#A5A7B0" }}>
          Viraj Pate · Shopify and WooCommerce developer
        </div>
      </div>
    ),
    { ...size }
  );
}
