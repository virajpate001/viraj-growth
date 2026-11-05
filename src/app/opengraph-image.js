import { ImageResponse } from "next/og";

export const alt = "Viraj Pate: Shopify & WooCommerce Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #312e81, #4338ca)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 30, color: "#f97316", fontWeight: 700 }}>
          Viraj Pate · E-commerce Growth Partner
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 24, lineHeight: 1.1 }}>
          Is your website helping your business grow?
        </div>
        <div style={{ fontSize: 32, marginTop: 32, opacity: 0.85 }}>
          Free 3-minute Business Growth Analyzer
        </div>
      </div>
    ),
    { ...size }
  );
}