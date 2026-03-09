import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import BlogCard from "@/components/blog/BlogCard";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: Promise<{ slug: string }>;
};

/** 静的パラメータ生成 */
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

/** メタデータ生成 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "記事が見つかりません" };

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

/** MDXコンポーネントのカスタムスタイル */
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-bold text-text-primary mt-10 mb-4 pb-2 border-b border-border"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold text-text-primary mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-text-muted leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 text-text-muted mb-4 ml-4" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 text-text-muted mb-4 ml-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-text-muted leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-text-primary font-semibold" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent-gold hover:underline" {...props} />
  ),
};

/** ブログ記事ページ */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* SEO構造化データ */}
      <ArticleJsonLd
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        slug={slug}
        category={post.frontmatter.category}
        tags={post.frontmatter.tags}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "ブログ", href: "/blog" },
          { name: post.frontmatter.title, href: `/blog/${slug}` },
        ]}
      />

      {/* 記事ヘッダー */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-gradient-dark">
        <Container>
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto">
              <Badge className="mb-4">{post.frontmatter.category}</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-4">
                {post.frontmatter.title}
              </h1>
              <div className="flex items-center gap-4 text-text-dark text-sm">
                <time>{formatDate(post.frontmatter.date)}</time>
                <div className="flex gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <a
                      key={tag}
                      href={`/blog/tag/${encodeURIComponent(tag)}`}
                      className="hover:text-accent-gold transition-colors"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* 記事本文 */}
      <section className="py-12 lg:py-16 bg-bg-secondary">
        <Container>
          <article className="max-w-3xl mx-auto">
            <FadeInOnScroll>
              <div className="bg-bg-card border border-border rounded-2xl p-6 lg:p-10">
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                />
              </div>
            </FadeInOnScroll>

            {/* 記事下CTA */}
            <FadeInOnScroll delay={0.2}>
              <div className="mt-12 text-center">
                <p className="text-text-muted mb-4">
                  マーケティングに関するご相談はお気軽にどうぞ。
                </p>
                <div className="flex gap-4 justify-center">
                  <Button href="/contact">無料相談はこちら</Button>
                  <Button href="/blog" variant="outline">
                    記事一覧に戻る
                  </Button>
                </div>
              </div>
            </FadeInOnScroll>

            {/* 関連記事 */}
            {(() => {
              const related = getRelatedPosts(slug, 3);
              if (related.length === 0) return null;
              return (
                <FadeInOnScroll delay={0.3}>
                  <div className="mt-16">
                    <h2 className="text-xl font-bold text-text-primary mb-6 text-center">
                      関連記事
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {related.map((relatedPost) => (
                        <BlogCard key={relatedPost.slug} post={relatedPost} />
                      ))}
                    </div>
                  </div>
                </FadeInOnScroll>
              );
            })()}
          </article>
        </Container>
      </section>
    </>
  );
}
