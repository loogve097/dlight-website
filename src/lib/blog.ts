import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogFrontmatter } from "@/types";

/** ブログ記事の格納ディレクトリ */
const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

/** すべてのブログ記事を取得（公開済みのみ） */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        frontmatter: data as BlogFrontmatter,
        content,
      };
    })
    .filter((post) => post.frontmatter.published)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );

  return posts;
}

/** スラッグからブログ記事を取得 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
  };
}

/** すべてのスラッグを取得（generateStaticParams用） */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/** 関連記事を取得（同カテゴリ or 共通タグで3件） */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllPosts().filter((p) => p.slug !== slug);

  /* スコアリング: カテゴリ一致+2, タグ一致+1（タグごと） */
  const scored = allPosts.map((post) => {
    let score = 0;
    if (post.frontmatter.category === currentPost.frontmatter.category) {
      score += 2;
    }
    const commonTags = post.frontmatter.tags.filter((tag) =>
      currentPost.frontmatter.tags.includes(tag)
    );
    score += commonTags.length;
    return { post, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

/** すべてのタグとその記事数を取得 */
export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const tagMap = new Map<string, number>();

  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/** 特定タグの記事を取得 */
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.frontmatter.tags.includes(tag)
  );
}

/** 全ブログ記事を取得（getMarketingPostsの後方互換） */
export function getMarketingPosts(): BlogPost[] {
  return getAllPosts();
}
