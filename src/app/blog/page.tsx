import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import BlogCard from "@/components/blog/BlogCard";
import { getMarketingPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "WEBマーケティング ブログ | 中小企業の集客・SNS運用ノウハウ",
  description:
    "中小企業の経営者・マーケティング担当者向けのWEBマーケティングコラム。代理店選びの失敗を防ぐ方法、SNS運用の自走化、伴走型支援の考え方など、現場で使える実践的なノウハウを発信しています。",
  alternates: {
    canonical: "/blog",
  },
};

/** WEBマーケティング ブログ一覧ページ */
export default function BlogPage() {
  const posts = getMarketingPosts();

  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-dark">
        <Container>
          <FadeInOnScroll>
            <SectionTitle
              label="Blog"
              title="ブログ / コラム"
              subtitle="WEBマーケティングに関するノウハウや知見を発信しています。"
            />
          </FadeInOnScroll>
        </Container>
      </section>

      {/* 記事一覧 */}
      <section className="py-16 lg:py-24 bg-bg-secondary">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post, index) => (
                <FadeInOnScroll key={post.slug} delay={index * 0.1}>
                  <BlogCard post={post} />
                </FadeInOnScroll>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                記事を準備中です。お楽しみに。
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
