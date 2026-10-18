import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FD853A",
          borderRadius: "44px",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: "-4px",
        }}
      >
        AA
      </div>
    ),
    {
      ...size,
    }
  );
}
