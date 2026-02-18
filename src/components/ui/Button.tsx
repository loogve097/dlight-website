import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  /** リンク先URL */
  href?: string;
  /** ボタンバリアント */
  variant?: "primary" | "outline" | "ghost";
  /** サイズ */
  size?: "sm" | "md" | "lg";
  /** クリックハンドラー */
  onClick?: () => void;
  /** フォーム送信タイプ */
  type?: "button" | "submit";
  /** 無効状態 */
  disabled?: boolean;
  className?: string;
};

/** ボタンコンポーネント */
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  className,
}: Props) {
  /* バリアントスタイル */
  const variantStyles = {
    primary:
      "bg-accent-gold text-bg-primary hover:bg-accent-gold-light glow-gold hover:glow-gold-strong",
    outline:
      "border border-accent-gold text-accent-gold hover:bg-accent-gold/10",
    ghost: "text-text-muted hover:text-accent-gold",
  };

  /* サイズスタイル */
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseStyles = cn(
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  /* リンクの場合 */
  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {children}
    </button>
  );
}
