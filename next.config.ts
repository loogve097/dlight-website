import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ウッディーのLINE
      {
        source: "/line",
        destination: "https://line.me/R/ti/p/@329lclia",
        permanent: false,
      },
      // AI副業ナビのLINE（後で destination を差し替える）
      // {
      //   source: "/line/ai-fukugyo",
      //   destination: "https://line.me/R/ti/p/@xxxxxxx",
      //   permanent: false,
      // },
    ];
  },
};

export default nextConfig;
