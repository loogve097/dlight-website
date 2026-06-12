"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * スクロールビーム — 「道を創る」の視覚化
 * 画面左端にスクロール進捗で伸びる光の縦線。先端が光る。
 * デスクトップのみ表示。
 */
export default function ScrollBeam() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const tipTop = useTransform(progress, (v) => `${v * 100}%`);

  if (reduced) return null;

  return (
    <div
      className="fixed left-5 top-0 bottom-0 w-px z-40 pointer-events-none hidden lg:block"
      aria-hidden="true"
    >
      {/* 道筋（うっすら） */}
      <div className="absolute inset-0 bg-accent-gold/10" />
      {/* 描かれていく光の道 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full origin-top"
        style={{
          scaleY: progress,
          background:
            "linear-gradient(to bottom, rgba(201,168,76,0.15), rgba(201,168,76,0.9))",
        }}
      />
      {/* 先端の光 */}
      <motion.div
        className="absolute -left-[3px] w-[7px] h-[7px] rounded-full"
        style={{
          top: tipTop,
          background: "rgba(224,201,110,0.95)",
          boxShadow:
            "0 0 8px 2px rgba(201,168,76,0.7), 0 0 24px 8px rgba(201,168,76,0.25)",
        }}
      />
    </div>
  );
}
