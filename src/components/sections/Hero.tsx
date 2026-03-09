"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GlowEffect from "@/components/animation/GlowEffect";

/** ヒーローセクション — 信念宣言 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GlowEffect />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* サブテキスト */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent-gold text-sm sm:text-base font-medium tracking-widest uppercase mb-6"
        >
          D&apos;Light Inc.
        </motion.p>

        {/* メインキャッチコピー — MVVタグライン */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          <span className="block text-gradient-gold">
            歴史を照らし、道を創る。
          </span>
        </motion.h1>

        {/* サブキャッチ */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          中小企業の可能性を照らし、成長の道を創る。
          <br className="hidden sm:block" />
          それがD&apos;Lightの仕事です。
        </motion.p>

        {/* CTAボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/contact" size="lg">
            無料相談はこちら
          </Button>
          <Button href="#belief" variant="outline" size="lg">
            私たちについて
          </Button>
        </motion.div>
      </div>

      {/* 下向き矢印 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
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
