import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  /** アクティブ状態 */
  active?: boolean;
  /** クリックハンドラー */
  onClick?: () => void;
  className?: string;
};

/** バッジコンポーネント */
export default function Badge({
  children,
  active = false,
  onClick,
  className,
}: Props) {
  const Component = onClick ? "button" : "span";

  return (
    <Component
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200",
        active
          ? "bg-accent-gold text-text-on-gold"
          : "bg-bg-card text-text-muted border border-border hover:border-accent-gold/30",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </Component>
  );
}
