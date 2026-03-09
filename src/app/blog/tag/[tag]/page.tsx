import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import BlogCard from "@/components/blog/BlogCard";
import Button from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getPostsByTag, getAllTags } from "@/lib/blog";

type Props = {
  params: Promise<{ tag: string }>;
};

/** 静的パラメータ生成（全タグページを事前生成） */
export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(({ tag }) => ({ tag: encodeURIComponent(tag) }));
}

/** メタデータ生成 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `「${decodedTag}」の記事一覧`,
    description: `D'Lightの「${decodedTag}」に関するブログ記事一覧です。WEBマーケティングのノウハウや知見を発信しています。`,
  };
}

/** タグ別記事一覧ページ */
export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);

  return (
    <>
      {/* パンくずリスト構造化データ */}
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "ブログ", href: "/blog" },
          { name: `#${decodedTag}`, href: `/blog/tag/${tag}` },
        ]}
      />

      {/* ヘッダー */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-dark">
        <Container>
          <FadeInOnScroll>
            <SectionTitle
              label="Tag"
              title={`#${decodedTag}`}
              subtitle={`「${decodedTag}」に関する記事（${posts.length}件）`}
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
                該当する記事がありません。
              </p>
            </div>
          )}

          {/* ブログ一覧へ戻る */}
          <FadeInOnScroll delay={0.2}>
            <div className="mt-12 text-center">
              <Button href="/blog" variant="outline">
                ブログ一覧に戻る
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
