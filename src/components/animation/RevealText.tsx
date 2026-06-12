"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  /** 表示するテキスト */
  text: string;
  /** 1文字あたりの遅延（秒） */
  stagger?: number;
  /** 全体の開始遅延（秒） */
  delay?: number;
  /** ビューポート進入を待たず即座に再生する（ヒーロー用） */
  immediate?: boolean;
  className?: string;
};

/**
 * 文字が光の中から滲み出るように1文字ずつ現れるテキスト。
 * スクリーンリーダーには全文を1つのラベルとして読み上げる。
 */
export default function RevealText({
  text,
  stagger = 0.04,
  delay = 0,
  immediate = false,
  className,
}: Props) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{text}</span>;

  const chars = Array.from(text);
  const target = { opacity: 1, y: "0em", filter: "blur(0px)" };

  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden="true"
          className="inline-block will-change-transform"
          initial={{ opacity: 0, y: "0.45em", filter: "blur(8px)" }}
          {...(immediate
            ? { animate: target }
            : {
                whileInView: target,
                /* マージンは縦方向のみ — 横に効かせると画面端の文字が永久に非表示になる */
                viewport: { once: true, margin: "0px 0px -60px 0px" },
              })}
          transition={{
            duration: 0.6,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}
