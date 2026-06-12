"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Button from "@/components/ui/Button";
import GlowEffect from "@/components/animation/GlowEffect";
import Particles from "@/components/animation/Particles";
import RevealText from "@/components/animation/RevealText";
import Magnetic from "@/components/animation/Magnetic";

/** ヒーローセクション — 信念宣言 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  /* スクロールで退場する際のパララックス */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GlowEffect />
      <Particles count={40} />

      <motion.div
        style={
          reduced
            ? undefined
            : { opacity: contentOpacity, scale: contentScale, y: contentY }
        }
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      >
        {/* サブテキスト */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent-gold text-sm sm:text-base font-medium tracking-widest uppercase mb-6"
        >
          D&apos;Light Inc.
        </motion.p>

        {/* メインキャッチコピー — 縦書き習字スタイル・1文字ずつ光の中から現れる */}
        <div className="flex justify-center mb-8">
          <h1
            className="font-brush text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.8] tracking-[0.15em]"
            style={{ writingMode: "vertical-rl" }}
          >
            <RevealText
              text="歴史を照らし、"
              immediate
              delay={0.4}
              stagger={0.09}
              className="block"
            />
            <RevealText
              text="道を創る。"
              immediate
              delay={1.1}
              stagger={0.09}
              className="block"
            />
          </h1>
        </div>

        {/* サブキャッチ */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          戦略設計から実行まで、一人の担当者が最後まで伴走。
          <br className="hidden sm:block" />
          御社が自走できる集客の仕組みを、一緒に創ります。
        </motion.p>

        {/* CTAボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Magnetic>
            <Button href="/contact" size="lg">
              無料相談はこちら
            </Button>
          </Magnetic>
          <Magnetic>
            <Button href="#belief" variant="outline" size="lg">
              私たちについて
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* 下向き矢印 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2.5 bg-accent-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
