import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

/** サイトのベースURL */
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dlight-inc.jp";

/** サイト公開日（固定ページの基準日） */
const SITE_LAUNCH_DATE = "2025-02-19";

/** サイトマップを自動生成 */
export default function sitemap(): MetadataRoute.Sitemap {
  /* ブログ記事を取得（日付情報含む） */
  const posts = getAllPosts();

  /* 最新ブログ記事の日付（ブログ一覧の更新日として使用） */
  const latestPostDate = posts.length > 0
    ? new Date(posts[0].frontmatter.date)
    : new Date(SITE_LAUNCH_DATE);

  /* 固定ページ */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date("2025-03-04"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/works`,
      lastModified: new Date(SITE_LAUNCH_DATE),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(SITE_LAUNCH_DATE),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(SITE_LAUNCH_DATE),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  /* ブログ記事ページ（実際の公開日を使用） */
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
