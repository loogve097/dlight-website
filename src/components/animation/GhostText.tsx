"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  /** 背景に表示する英字テキスト */
  text: string;
  className?: string;
};

/**
 * セクション背景の巨大ゴーストタイポグラフィ。
 * スクロールに対してゆっくり逆方向に動き、奥行きを生む。
 */
export default function GhostText({ text, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <motion.span
      ref={ref}
      style={reduced ? undefined : { y }}
      className={cn(
        "ghost-text absolute font-bold uppercase tracking-tight leading-none",
        "pointer-events-none select-none whitespace-nowrap",
        className
      )}
      aria-hidden="true"
    >
      {text}
    </motion.span>
  );
}
