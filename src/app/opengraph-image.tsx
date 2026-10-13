import { ImageResponse } from "next/og";

export const alt = "Goldnest – Airbnb Verwaltung Wien";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Static, generated OpenGraph image in the brand palette (no external assets needed). */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f7f3ec",
          color: "#23211d",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 8, textTransform: "uppercase" }}>
          <div style={{ width: 14, height: 14, border: "2px solid #9a7943", transform: "rotate(45deg)", display: "flex" }} />
          Goldnest
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -1, maxWidth: 980 }}>
            Apartments, Zinshäuser, Pensionen und Hotels in Wien. Professionell, persönlich, vollständig betreut.
          </div>
          <div style={{ display: "flex", gap: 36, fontSize: 24, color: "#7f776a", fontFamily: "Helvetica, Arial, sans-serif" }}>
            <span>Rechtlich durchdacht</span>
            <span style={{ color: "#9a7943" }}>·</span>
            <span>Wirtschaftlich transparent</span>
            <span style={{ color: "#9a7943" }}>·</span>
            <span>Professionell betreut</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
