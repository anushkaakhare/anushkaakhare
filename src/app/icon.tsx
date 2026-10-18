import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "50%",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "-1px",
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
