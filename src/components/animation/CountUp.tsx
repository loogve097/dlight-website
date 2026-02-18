"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  /** 目標値 */
  target: number;
  /** 値の後に付与するテキスト */
  suffix?: string;
  /** アニメーション時間（ミリ秒） */
  duration?: number;
  /** カスタムクラス名 */
  className?: string;
};

/** カウントアップアニメーションコンポーネント */
export default function CountUp({
  target,
  suffix = "",
  duration = 2000,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      /* イージング関数（easeOutExpo） */
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
