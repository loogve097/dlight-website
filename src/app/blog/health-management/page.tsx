import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import BlogCard from "@/components/blog/BlogCard";
import { getHealthManagementPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "健康経営コラム",
  description:
    "D'Lightが発信する健康経営に関するコラム・ノウハウ記事です。健康経営優良法人の認定取得や助成金活用など、実践的な情報をお届けします。",
};

/** 健康経営ブログ一覧ページ */
export default function HealthManagementBlogPage() {
  const posts = getHealthManagementPosts();

  return (
    <>
      {/* ヘッダー */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-dark">
        <Container>
          <FadeInOnScroll>
            <SectionTitle
              label="Health Management"
              title="健康経営コラム"
              subtitle="健康経営優良法人の認定取得や助成金活用など、実践的な情報を発信しています。"
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
