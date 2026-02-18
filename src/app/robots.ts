import type { MetadataRoute } from "next";

/** サイトのベースURL */
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dlight-marketing.com";

/** robots.txt を自動生成 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
