"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** 遅延時間（秒） */
  delay?: number;
  /** アニメーションの方向 */
  direction?: "up" | "down" | "left" | "right";
  /** カスタムクラス名 */
  className?: string;
};

/** スクロール時にフェードインするラッパーコンポーネント */
export default function FadeInOnScroll({
  children,
  delay = 0,
  direction = "up",
  className,
}: Props) {
  /* 方向に応じた初期位置 */
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
