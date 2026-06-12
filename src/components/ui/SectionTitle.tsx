import { cn } from "@/lib/utils";

type Props = {
  /** 英語のラベル（セクション上部に小さく表示） */
  label?: string;
  /** メインタイトル */
  title: string;
  /** サブタイトル */
  subtitle?: string;
  /** 中央寄せにするか */
  center?: boolean;
  /** 見出しタグ（ページ先頭の見出しは h1 を指定） */
  as?: "h1" | "h2";
  className?: string;
};

/** セクションタイトルコンポーネント */
export default function SectionTitle({
  label,
  title,
  subtitle,
  center = true,
  as: Tag = "h2",
  className,
}: Props) {
  return (
    <div className={cn(center && "text-center", "mb-12 lg:mb-16", className)}>
      {label && (
        <span className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3 block">
          {label}
        </span>
      )}
      <Tag className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-text-muted text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
