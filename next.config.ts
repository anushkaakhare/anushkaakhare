import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "10.128.144.203",
    "10.*.*.*",
    "192.168.*.*",
    "172.*.*.*",
    "*.*.*.*",
    "*.local",
    "*.trycloudflare.com",
    "trycloudflare.com",
  ],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
