"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** ホバーエフェクトを有効にするか */
  hover?: boolean;
  /** カスタムクラス名 */
  className?: string;
};

/** カードコンポーネント */
export default function Card({
  children,
  hover = true,
  className,
}: Props) {
  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "bg-bg-card border border-border rounded-2xl p-6 lg:p-8",
          "hover:border-accent-gold/30 hover:shadow-[0_0_20px_rgba(212,168,67,0.1)]",
          "transition-colors duration-300",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        "bg-bg-card border border-border rounded-2xl p-6 lg:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
