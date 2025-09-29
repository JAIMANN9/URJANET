import type { NextConfig } from "next";
import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "@heroicons/react",
    ],
  },
};

export default withPWA(nextConfig);
