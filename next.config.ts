import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/szolgaltatasok/aramkor-bovites-elosztoszekreny",
        destination: "/szolgaltatasok/villanyszereles-felujitas",
        permanent: true,
      },
      {
        source: "/szolgaltatasok/hibaelharitas",
        destination: "/szolgaltatasok/villanyszerelesi-hibaelharitas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
