import Link from "next/link";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type Props = {
  post: BlogPost;
};

/** ブログカードコンポーネント */
export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full group cursor-pointer">
        <Badge className="mb-3">{post.frontmatter.category}</Badge>
        <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-gold transition-colors duration-200 mb-2">
          {post.frontmatter.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {post.frontmatter.description}
        </p>
        <div className="flex items-center gap-4 text-text-dark text-xs">
          <time>{formatDate(post.frontmatter.date)}</time>
          <div className="flex gap-2">
            {post.frontmatter.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="hover:text-accent-gold transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
