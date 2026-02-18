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
  className?: string;
};

/** セクションタイトルコンポーネント */
export default function SectionTitle({
  label,
  title,
  subtitle,
  center = true,
  className,
}: Props) {
  return (
    <div className={cn(center && "text-center", "mb-12 lg:mb-16", className)}>
      {label && (
        <span className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-3 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-muted text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
